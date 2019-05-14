import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardTitle, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import { getTitlesFromApi, addVote } from '../actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './PostList.css';

//Render a list of cards which contain post data, link to specific posts.
class PostList extends Component {
  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
  }
  //loads title, description and votes from API
  //(component will then get new props from mapStateToProps)
  componentDidMount() {
    this.props.getTitlesFromApi();
  }

  vote(id, direction) {
    this.props.addVote(id, direction);
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
              <FontAwesomeIcon
                onClick={() => this.vote(post.id, 'up')}
                icon={faThumbsUp}
              />
              <FontAwesomeIcon
                onClick={() => this.vote(post.id, 'down')}
                icon={faThumbsDown}
              />
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
  { getTitlesFromApi, addVote }
);

export default connectToReduxStore(PostList);
