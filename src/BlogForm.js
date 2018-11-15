import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class BlogForm extends Component {
  static defaultProps = {
    post: { postTitle: '', postDescription: '', postBody: '' }
  };
  constructor(props) {
    super(props);

    this.state = {
      postTitle: this.props.post.postTitle,
      postDescription: this.props.post.postDescription,
      postBody: this.props.post.postBody
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
        <Button onClick={this.props.cancel}>Cancel</Button>
      </Form>
    );
  }
}

export default BlogForm;
