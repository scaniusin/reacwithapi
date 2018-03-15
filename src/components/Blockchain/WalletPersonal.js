import React from 'react';
import WalletPersonalModal from './WalletPersonalModal';

const WalletPersonal = (props) => {

  return (
    <div className="row">

      <WalletPersonalModal modal={props.modal}
                           toggle={props.toggle.bind()}
                           publicKey={props.publicKey}
                           privateKey={props.privateKey}
      />

      <button onClick={props.mineBlock.bind()} className="btn btn-md btn-primary">
        <i className="fa fa-th"/> Click to mine block
      </button>
      <button onClick={props.getKeyPair.bind()}  className="btn btn-md btn-danger ml-1">
        <i className="fa fa-exclamation-triangle"/> Get Key PAir
      </button>

      <div className="break-word mt-1">
        <h3>Your public address:</h3>
        <h5 className="break-word small">{ props.myAddress }</h5>
      </div>
      <div className="">
        <h3>Your balance:</h3>
        <h5>{ props.balance }</h5>
      </div>
    </div>
  );


};

export default WalletPersonal;

