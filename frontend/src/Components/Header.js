import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

//Header appears on all pages - contains link to homepage and a link to add a new post
class Header extends Component {
  render() {
    const style = {
      fontFamily: 'archivo',
      background: 'background: linear-gradient(to right, #CFDEF3, #E0EAFC'
    };

    const linkStyle = {
      fontSize: '18px'
    };
    return (
      <div>
        <Jumbotron style={style}>
          <h1 className="display-3">
            MicroBlog{' '}
            {/* <FontAwesomeIcon
              style={{ width: '50px', height: '120px' }}
              icon={faBlog}
            /> */}
          </h1>
          <h3 className="lead">Get in the rhythm of blogging.</h3>
          <hr className="my-2" />
          <Link style={linkStyle} to="/">
            Blog{' '}
          </Link>
          <br />
          <Link style={linkStyle} to="/new">
            Add a new post
          </Link>
        </Jumbotron>
      </div>
    );
  }
}
export default Header;
