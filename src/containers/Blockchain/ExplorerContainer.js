import React, {Component} from 'react';
import { fetchBlocks } from '../../connectivity/blockchain/api.blockchain';
import List from '../../components/Blockchain/List';

class Explorer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    };
  }

  componentDidMount() {
    fetchBlocks()
      .then((data) => {
        this.setState(state => {
          state.blocks = data;
          return state;
        });
      })
      .catch((err) => {
        console.error('err', err);
      });

  }

  render() {

    let blocks = this.state.blocks.reverse();

    return (
      <div>
        <h3>Blockchain Explorer: </h3>
        <List blocks={blocks}/>
      </div>
    );
  }
}

export default Explorer;