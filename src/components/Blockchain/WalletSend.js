import React from 'react';


const WalletSend = (props) => {

  return (
    <div className="row mt-1">
      <h1>Send coins</h1>
      <form className="form-horizontal col-md-12 col-lg-6" onSubmit={props.handleSubmit.bind()}>
        <div className="form-group">
          <label htmlFor="receiverAddress"
                 className="control-label required">
            Receiver address</label>
          <input type="text"
                 id="receiverAddress"
                 required="required"
                 value={props.receiverAddress}
                 onChange={props.handleAddressChange.bind()}
                 className="form-control"
                 placeholder="04f72a4541275aeb4344a8b04..."  />
        </div>
        <div className="form-group">
          <label htmlFor="signature"
                 className="control-label required">
            Private Key(Signature)</label>
          <input type="text"
                 id="signature"
                 value={props.signature}
                 onChange={props.handleSignatureChange.bind()}
                 className="form-control"
                 placeholder="asd23ekj12kjn3k1..." />
        </div>
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="receiverAmount"
                   className="control-label required mr-1">
              Amount</label>
            <input type="number"
                   id="receiverAmount"
                   value={props.receiverAmount}
                   onChange={props.handleAmountChange.bind()}
                   className="form-control mr-1"
                   placeholder="0" />

          </div>
          <button type="submit"
                  id="sendTransaction"
                  className="btn-success btn ">
            Send  <i className="fa fa-fighter-jet"/>
          </button>
        </div>
      </form>
    </div>
  );


};

export default WalletSend;