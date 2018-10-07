import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo,
    });
  }

  render() {
    const { errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return (
        <div>
          <h2>Your component has crashed</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {/* {error && error.toString()} */}
            {/* <br /> */}
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
