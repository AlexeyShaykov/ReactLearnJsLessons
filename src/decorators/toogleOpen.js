import React, {Component} from 'react';

export default (OriginalComponent) => class WrapperComponents extends Component {
  state = {
    isOpen: true
  }
  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} handleOpen = {this.handleOpen}  />
  }
}
