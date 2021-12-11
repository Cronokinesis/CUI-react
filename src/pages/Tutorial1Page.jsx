import React, { Component } from 'react';
import Modal from '../components/common/Modal';
import Table from '../components/common/Table';

class Tutorial1Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isModalVisiable: false,
    };
  }

  componentDidMount() {
    // do something
  }

  render() {
    return (
      <>
        <Modal
          visiable={this.state.isModalVisiable}
          onClose={() => {
            this.setState({ isModalVisiable: false });
          }}
        />
        <Table
          items={this.state.items}
          onCreate={() => {
            console.log('onCreate');
            this.setState({ isModalVisiable: true });
            // do something
            this.setState({
              items: [
                ...this.state.items,
                {
                  no: this.state.items.length + 1,
                  name: 'hello',
                  surname: 'world',
                  email: 'g@mail.com',
                  gender: 'male',
                  phoneNumber: '0800000000',
                },
              ],
            });
          }}
          onDelete={(item) => {
            console.log('onDelete => ', item);
            // do something
          }}
          onEdit={(item) => {
            console.log('onEdit =>', item);
            this.setState({ isModalVisiable: true });
            // do something
          }}
        />
      </>
    );
  }
}

export default Tutorial1Page;
