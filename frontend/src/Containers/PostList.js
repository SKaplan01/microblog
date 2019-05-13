import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardTitle, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import { getTitlesFromApi } from '../actionCreators';
import './PostList.css';

//Render a list of cards which contain post data, link to specific posts.
class PostList extends Component {
  //loads title, description and votes from API
  //(component will then get new props from mapStateToProps)
  componentDidMount() {
    this.props.getTitlesFromApi();
  }

  render() {
    const style = {
      marginLeft: '-25px',
      marginTop: '10px'
    };

    let postCards;
    if (this.props.posts) {
      let { posts } = this.props;
      postCards = posts.map(post => {
        return (
          <Card key={post.id} className="postCard">
            <CardBody>
              <Link to={`/${post.id}`}>
                {' '}
                <CardTitle>{post.title}</CardTitle>
              </Link>
              <CardSubtitle>{post.description}</CardSubtitle>
              <p />
              <CardSubtitle>Votes: {post.votes}</CardSubtitle>
            </CardBody>
          </Card>
        );
      });
    }

    return (
      <CardGroup style={style} className="cardGroup">
        {postCards}
      </CardGroup>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    posts: reduxState.titles
  };
}

const connectToReduxStore = connect(
  mapStateToProps,
  { getTitlesFromApi }
);

export default connectToReduxStore(PostList);
