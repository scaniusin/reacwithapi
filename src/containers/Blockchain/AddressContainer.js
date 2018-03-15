import React, {Component} from 'react';
import { fetchAddress } from '../../connectivity/blockchain/api.blockchain';
import _ from 'lodash';
import {Link} from 'react-router';

class AddressContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: {}
    };
  }

  componentDidMount() {
    fetchAddress(this.props.params.address)
      .then((data) => {
        this.setState(state => {
          state.address = data;
          return state;
        });
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  totalAmount(unspentOutputs){
    if(unspentOutputs)
      return _(unspentOutputs).map(uTxo => uTxo.amount).sum();
    else
      return 0;

  }

  render() {

    let address = this.state.address;
    return (
      <div>
        <h3>Address</h3>
        <h4 className="small">{ this.props.params.address }</h4>
        <h4>Total amount: {  this.totalAmount(address.unspentTxOuts) } </h4>

        <h4>Unspent transaction outputs</h4>
        {address.unspentTxOuts && address.unspentTxOuts.map((uTxo) => {
          return(
            <div className="jumbotron transactions" key={uTxo.txOutId} >
              <div className="row">txOutId:
                <Link to={`/explorer/transaction/${uTxo.txOutId}`}>{ uTxo.txOutId }</Link>
              </div>
              <div className="row">txOutIndex: { uTxo.txOutIndex }</div>
              <div className="row">amount: { uTxo.amount }</div>
              <div className="row small">address: { uTxo.address }</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AddressContainer;