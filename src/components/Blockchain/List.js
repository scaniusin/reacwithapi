import React from 'react';
import {Link} from 'react-router';
import { get_time } from '../../utils';

const List = (props) => {


  return (
    <div>
      <table className="table table-hover table-responsive">
        <thead>
        <tr>
          <th>#</th>
          <th>hash</th>
          <th>Transactions</th>
          <th>Timestamp</th>
        </tr>
        </thead>
          <tbody>
            {props.blocks && props.blocks.map((block) => {
              return (
                <tr key={block.index}>
                  <td>{ block.index }</td>
                  <td><Link to={`/explorer/block/${block.hash}`}>{ block.hash }</Link></td>
                  <td>{ block.data.length }</td>
                  <td>{ get_time(block.timestamp) }</td>
                </tr>);
            })}
          </tbody>
      </table>
    </div>
  );


};

export default List;
