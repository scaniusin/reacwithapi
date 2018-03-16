import React from 'react';
import { get_time } from '../../utils';
import TransactionList from "./TransactionList";

const Block = (props) => {

  // let count_transactions = 0;
  // if(props.block.data){
  //   count_transactions = props.block.data.length;
  // }else{
  //   count_transactions = 0;
  // }

  return (
    <div>
      <h3>Block #{ props.block.index }</h3>
      <table>
        <tbody>
        <tr>
          <td>Hash</td>
          <td>{ props.block.hash }</td>
        </tr>
        <tr>
          <td>Previous hash</td>
          <td>{ props.block.previousHash }</td>
        </tr>
        <tr>
          <td>Timestamp</td>
          <td>{ get_time(props.block.timestamp)}</td>
        </tr>
        <tr>
          <td>Difficulty</td>
          <td>{ props.block.difficulty}</td>
        </tr>
        <tr>
          <td>Nonce</td>
          <td>{ props.block.nonce }</td>
        </tr>
        <tr>
          <td>Number of transactions</td>
          <td>{ props.block.data ?  props.block.data.length : 0}</td>
        </tr>

        </tbody>
      </table>
      <h3>Transactions</h3>
      <TransactionList transactionList={props.block.data}/>

    </div>
  );


};

export default Block;
