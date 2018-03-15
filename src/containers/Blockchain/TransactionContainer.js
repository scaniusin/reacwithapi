import React, {Component} from 'react';
import { fetchTransaction } from '../../connectivity/blockchain/api.blockchain';
import _ from 'lodash';
import {Link} from 'react-router';

class TransactionContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transaction: {}
    }
    ;
  }

  componentDidMount() {
    fetchTransaction(this.props.params.transaction)
      .then((data) => {
        this.setState(state => {
          state.transaction = data;

          return state;
        });
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  totalValue(transaction){
    if(transaction)
      return _(transaction.txOuts)
        .map(txOut => txOut.amount)
        .sum();
    else
      return 0;

  }

  render() {

    let transaction = this.state.transaction;
    return (
      <div>
        <h3>Transaction</h3>
        <h4>{ transaction.id }</h4>
        <h4>Total amount: { this.totalValue(transaction) }</h4>
        <h5>TxIns</h5>
        {transaction.txIns && transaction.txIns.map((txIn) => {
          return(
            <div className="jumbotron transactions" key={txIn.txOutId}>
              {txIn.signature === '' ? <div className="row bold">Coinbase transaction</div> : <div/>}
              <div className="row">
                TxOutId: <Link to={`/explorer/transaction/${txIn.txOutId}`}>{ txIn.txOutId }</Link>
              </div>
              <div className="row">TxOutIndex:  { txIn.txOutIndex }</div>
              <div className="row">Signature: <span className="small">{ txIn.signature }</span></div>
            </div>
          );
        })}

        <h5>TxOuts</h5>
        {transaction.txOuts && transaction.txOuts.map((txOut, i) => {
          return(
            <div className="jumbotron transactions" key={i}>
              <div className="row">
                Address: <Link to={`/explorer/address/${txOut.address}`} className="small">{ txOut.address }</Link>
              </div>
              <div className="row">Amount: { txOut.amount}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TransactionContainer;