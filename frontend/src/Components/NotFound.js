import React, { Component } from 'react';

//Component which acts as a Page Not Found
class NotFound extends Component {
  render() {
    const style = {
      margin: '25px',
      fontFamily: 'archivo'
    };
    return (
      <h2 style={style} className="Not Found">
        This blog post was not found
      </h2>
    );
  }
}

export default NotFound;
