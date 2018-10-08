import React, { Component } from 'react';

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toogleOpen = () => (this.setState({isOpen:!this.state.isOpen}))
  render() {
    return (
      <div className="menu-button-container" onClick={this.toogleOpen}>
        <div className={this.state.isOpen?"change bar1":"bar1"} />
        <div className={this.state.isOpen?"change bar2":"bar2"} />
        <div className={this.state.isOpen?"change bar3":"bar3"} />
      </div>
    );
  }
}

export default MenuButton;
