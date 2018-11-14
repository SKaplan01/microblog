import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import './PostList.css';

class PostList extends Component {
  render() {
    let postCards = this.props.posts.map(post => {
      return (
        <Card className="postCard">
          <CardBody>
            <Link to={`/${post.id}`}>
              {' '}
              <CardTitle>{post.postTitle}</CardTitle>
            </Link>
            <CardSubtitle>{post.postDescription}</CardSubtitle>
          </CardBody>
        </Card>
      );
    });

    return <CardGroup className="cardGroup">{postCards}</CardGroup>;
  }
}

export default PostList;
