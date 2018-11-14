import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postDescription: '',
      postBody: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addPost(this.state);
    this.setState({
      postTitle: '',
      postDescription: '',
      postBody: ''
    });
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
