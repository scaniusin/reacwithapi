import React, {Component, PropTypes} from 'react';
import {
  fetchMyBalance,
  fetchTransactionPool,
  fetchMineBlock,
  fetchsendTransaction,
  fetchKeyPair
} from '../../connectivity/blockchain/api.blockchain';
import {createUpdateWallet, fetchMyWalletAddress} from '../../connectivity/blockchain/api.wallet';
import WalletPersonal from '../../components/Blockchain/WalletPersonal';
import TransactionList from "../../components/Blockchain/TransactionList";
import WalletSend from "../../components/Blockchain/WalletSend";
import {connect} from "react-redux";

class Wallet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      privateKey: '',
      publicKey: '',
      myAddress: '',
      balance: 0,
      signature: '',
      transactionPool: [],
      receiverAddress: '',
      receiverAmount : '',
      modal: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSignatureChange = this.handleSignatureChange.bind(this);
    this.init = this.init.bind(this);
    this.mineBlock = this.mineBlock.bind(this);
    this.getKeyPair = this.getKeyPair.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAmountChange(e) {
    this.setState({
      receiverAmount: e.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      receiverAddress: e.target.value
    });
  }

  handleSignatureChange(e) {
    this.setState({
      signature: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let data ={
      'toAddress' : this.state.receiverAddress,
      'amount' : parseInt(this.state.receiverAmount),
      'privateKey': this.state.signature
    };
    fetchsendTransaction(data)
      .then(() => {
        this.init();
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  mineBlock(){
    fetchMineBlock()
      .then(() => {
        this.init();
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  getKeyPair(){
    fetchKeyPair()
      .then((data) => {
        this.setState(state => {
          state.privateKey = data.privateKey;
          state.publicKey = data.publicKey;
          return state;
        });

        this.assignWalletAddress(this.state.publicKey);
        this.init();
        this.toggle();
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  assignWalletAddress($publicAddress){
    createUpdateWallet(this.props.pageState.auth.id, $publicAddress)
      .then()
      .catch((err) => {
        console.error('err', err);
      });
  }


  init(){
    fetchMyWalletAddress(this.props.pageState.auth.id)
    .then((data) => {
      this.setState(state => {
      state.myAddress = data;
      return state;
      });

      this.getBalance(this.state.myAddress);
    })
    .catch((err) => {
      console.error('err', err);
    });

    fetchTransactionPool()
      .then((data) => {
        this.setState(state => {
          state.transactionPool = data;
          return state;
        });
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  getBalance(address){
    fetchMyBalance(address)
      .then((data) => {
        this.setState(state => {
          state.balance = data.balance;
          return state;
        });
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  render() {

    let privateKey = this.state.privateKey;
    let publicKey = this.state.publicKey;

    let myAddress = this.state.myAddress;
    let balance = this.state.balance;

    let transactionPool = this.state.transactionPool;

    let modal = this.state.modal;

    return (
      <div>
        <WalletPersonal
          privateKey={privateKey}
          publicKey={publicKey}
          myAddress={myAddress}
          balance={balance}
          getKeyPair={this.getKeyPair}
          mineBlock={this.mineBlock}
          toggle={this.toggle}
          modal={modal}
        />

        <WalletSend
          handleSubmit={this.handleSubmit}
          receiverAddress={this.state.receiverAddress}
          handleAddressChange={this.handleAddressChange}
          receiverAmount={this.state.receiverAmount}
          handleAmountChange={this.handleAmountChange}
          signature={this.state.signature}
          handleSignatureChange={this.handleSignatureChange}
        />

        <TransactionList transactionList={transactionPool}/>
        {transactionPool.length === 0 ?
          <div><span>No transactions in transaction pool</span></div>
          : ''
        }

      </div>
    );
  }
}

Wallet.propTypes = {
  pageState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    pageState: state
  };
}

export default connect(mapStateToProps)(Wallet);