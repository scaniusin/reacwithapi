import React, {Component} from 'react';
import { fetchBlock } from '../../connectivity/blockchain/api.blockchain';
import Block from '../../components/Blockchain/Block';

class BlockContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      block: {}
    }
    ;
  }

  componentDidMount() {
    fetchBlock(this.props.params.hash)
      .then((data) => {
        this.setState(state => {
          state.block = data;

          return state;
        });
      })
      .catch((err) => {
        console.error('err', err);
      });

  }

  render() {

    let block = this.state.block;
    return (
      <div>
        <Block block={block}/>
      </div>
    );
  }
}

export default BlockContainer;