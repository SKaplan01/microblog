import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

//Header appears on all pages - contains link to homepage and a link to add a new post
class Header extends Component {
  render() {
    const style = { fontFamily: 'archivo' };
    return (
      <div>
        <Jumbotron style={style}>
          <h1 className="display-3">MicroBlog</h1>
          <h4 className="lead">Get in the Rithm of blogging.</h4>
          <hr className="my-2" />
          <Link to="/">Blog </Link>
          <br />
          <Link to="/new">Add a new post</Link>
        </Jumbotron>
      </div>
    );
  }
}
export default Header;
