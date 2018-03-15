import React from 'react';
import {Link} from 'react-router';
const TransactionList = (props) => {


  return (
    <div className="row mt-1">
      <h1>Transaction pool</h1>
      {props.transactionList && props.transactionList.map((tx) => {
        return(
          <div className="jumbotron transactions" key={tx.id}>
            <div className="row">
              <div className="col-sm-2">
                <h5>Transaction ID:</h5>
              </div>
              <div className="col-sm-10">
                <Link to={`/explorer/transaction/${tx.id}`}>{ tx.id }</Link>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-5">
                <h6>From:</h6>
                {tx.txIns && tx.txIns.map((txIn) => {
                  return (
                    <div key={txIn.txOutId}>
                      {txIn.signature === '' ?
                        <span>coinbase</span>
                        :
                        <div className="break-word" >{ txIn.txOutId } - { txIn.txOutIndex }</div>
                      }
                    </div>
                  );
                })}
              </div>

              <div className="col-sm-1">
                ->
              </div>
              <div className="col-sm-6">
                <h6>To:</h6>
                {tx.txOuts && tx.txOuts.map((txOut, i) => {
                  return (
                    <div className="" key={i}>
                      <div className="break-word">
                        <Link to={`/explorer/address/${txOut.address}`}>{ txOut.address }</Link>
                        <br/>
                        amount: { txOut.amount} </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );


};

export default TransactionList;