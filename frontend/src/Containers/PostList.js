import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardTitle, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import { getTitlesFromApi, addVote } from '../actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';

//Render a list of cards which contain post data, link to specific posts.
class PostList extends Component {
  constructor(props) {
    super(props);
    this.vote = this.vote.bind(this);
    this.state = {
      loading: true
    };
  }
  //loads title, description and votes from API
  //(component will then get new props from mapStateToProps)
  async componentDidMount() {
    await this.props.getTitlesFromApi();
    this.setState({
      loading: false
    });
  }

  vote(id, direction) {
    this.props.addVote(id, direction);
  }

  render() {
    const upVoteStyle = {
      margin: '5px',
      color: 'green',
      cursor: 'pointer'
    };

    const downVoteStyle = {
      margin: '5px',
      color: 'red',
      cursor: 'pointer'
    };

    const cardGroup = {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      padding: '5px',
      marginLeft: '-10px',
      marginTop: '10px'
    };

    const postCard = {
      maxWidth: '250px',
      minWidth: '250px',
      maxHeight: '400px',
      margin: '10px',
      border: '1px solid',
      borderColor: '#7FDBFF'
    };

    const cardBody = {
      margin: '5px'
    };

    if (this.state.loading) {
      return (
        <div className="title-list-container">
          <Loader type="Triangle" color="#7FDBFF" height="100" width="100" />
        </div>
      );
    }

    let postCards;
    if (this.props.posts) {
      let { posts } = this.props;
      postCards = posts.map(post => {
        return (
          <Card key={post.id} style={postCard}>
            <CardBody style={cardBody}>
              <Link to={`/${post.id}`}>
                {' '}
                <CardTitle>{post.title}</CardTitle>
              </Link>
              <CardSubtitle>{post.description}</CardSubtitle>
              <p />
              <CardSubtitle>Votes: {post.votes}</CardSubtitle>
              <FontAwesomeIcon
                style={upVoteStyle}
                onClick={() => this.vote(post.id, 'up')}
                icon={faThumbsUp}
              />
              <FontAwesomeIcon
                style={downVoteStyle}
                onClick={() => this.vote(post.id, 'down')}
                icon={faThumbsDown}
              />
            </CardBody>
          </Card>
        );
      });
    }

    return <CardGroup style={cardGroup}>{postCards}</CardGroup>;
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
