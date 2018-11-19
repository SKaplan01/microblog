import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class BlogForm extends Component {
  static defaultProps = {
    title: '',
    description: '',
    body: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      body: this.props.body
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //calls submit with updated form values from form's state
  //submit will either call AddPost or editPost (depending on url) --> determined in FormContainer
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>New Post</h3>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            onChange={this.handleChange}
            type="title"
            name="title"
            id="title"
            placeholder=""
            value={this.state.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            onChange={this.handleChange}
            type="description"
            name="description"
            id="description"
            placeholder=""
            value={this.state.description}
          />
        </FormGroup>

        <FormGroup>
          <Label for="body">Body</Label>
          <Input
            onChange={this.handleChange}
            type="body"
            name="body"
            id="body"
            placeholder=""
            value={this.state.body}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
        <Button onClick={this.props.cancel}>Cancel</Button>
      </Form>
    );
  }
}

export default BlogForm;
