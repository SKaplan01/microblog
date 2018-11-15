import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardTitle, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import { deletePost } from '../actionCreators';
import './PostList.css';

//Render a list of cards which contain post data, link to specific posts.
class PostList extends Component {
  render() {
    let postCards;
    if (this.props.posts) {
      let { posts } = this.props;
      postCards = Object.keys(this.props.posts).map(postId => {
        return (
          <Card key={postId} className="postCard">
            <CardBody>
              <Link to={`/${postId}`}>
                {' '}
                <CardTitle>{posts[postId].postTitle}</CardTitle>
              </Link>
              <CardSubtitle>{posts[postId].postDescription}</CardSubtitle>
            </CardBody>
          </Card>
        );
      });
    }

    return <CardGroup className="cardGroup">{postCards}</CardGroup>;
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}

const connectToReduxStore = connect(mapStateToProps);

export default connectToReduxStore(PostList);
