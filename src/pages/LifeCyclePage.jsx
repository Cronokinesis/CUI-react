import React, { Component } from 'react';
import Clock from '../components/common/Clock';

class LifeCyclePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiable: true,
    };
  }

  onToggleVisiable() {
    this.setState({ visiable: !this.state.visiable });
  }

  render() {
    return (
      <>
        <div>Life Cycle</div>
        {this.state.visiable ? <Clock title="Clock" /> : null}
        {/* <div className={this.state.visiable ? 'block' : 'hidden'}>
          <Clock title="Clock 2" />
        </div> */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={this.onToggleVisiable.bind(this)}
        >
          {this.state.visiable ? 'hidden' : 'show'}
        </button>
      </>
    );
  }
}

export default LifeCyclePage;
