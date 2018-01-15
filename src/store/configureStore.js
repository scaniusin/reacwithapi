import {createStore, compose, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware, {END} from 'redux-saga';
import sagas from '../sagas';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(initialState) {
    const middlewares = [
        // Add other middleware on this line...

        sagaMiddleware
    ];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
        )
    );

    sagaMiddleware.run(sagas);
    store.close = () => store.dispatch(END);

    return store;
}

function configureStoreDev(initialState) {
    const middlewares = [
        // Add other middleware on this line...

        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        reduxImmutableStateInvariant(),

        sagaMiddleware,
        loggerMiddleware
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    sagaMiddleware.run(sagas);
    store.close = () => store.dispatch(END);

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;