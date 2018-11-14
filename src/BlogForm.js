import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap';

class BlogForm extends Component {
  constructor(props) {
    super(props);

    //declare variables that will be added to state
    //initially are empty strings, if form is an edit form then change these variables to the props passed in location.state
    let postTitle = '';
    let postDescription = '';
    let postBody = '';

    try {
      postTitle = this.props.location.state.postToEdit.postTitle;
      postDescription = this.props.location.state.postToEdit.postDescription;
      postBody = this.props.location.state.postToEdit.postBody;
    } catch (err) {}

    this.state = {
      postTitle,
      postDescription,
      postBody
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //if prop isEdit is true then invoke function that edit posts that is passed down from app
  //if isEdit is falsy then invoke function that add posts that is passed down from app
  handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.isEdit) {
      let postToEdit = {
        ...this.state,
        id: this.props.location.state.postToEdit.id
      };
      this.props.editPost(postToEdit);
    } else {
      this.props.addPost(this.state);
    }

    //reset state and redirect to home when form is submitted
    this.setState({
      postTitle: '',
      postDescription: '',
      postBody: ''
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>New Post</h3>
        <FormGroup>
          <Label for="postTitle">Title</Label>
          <Input
            onChange={this.handleChange}
            type="postTitle"
            name="postTitle"
            id="postTitle"
            placeholder=""
            value={this.state.postTitle}
          />
        </FormGroup>
        <FormGroup>
          <Label for="postDescription">Description</Label>
          <Input
            onChange={this.handleChange}
            type="postDescription"
            name="postDescription"
            id="postDescription"
            placeholder=""
            value={this.state.postDescription}
          />
        </FormGroup>

        <FormGroup>
          <Label for="postBody">Body</Label>
          <Input
            onChange={this.handleChange}
            type="postBody"
            name="postBody"
            id="postBody"
            placeholder=""
            value={this.state.postBody}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
        <Button onClick={() => this.props.history.push('/')}>Cancel</Button>
      </Form>
    );
  }
}

export default BlogForm;
