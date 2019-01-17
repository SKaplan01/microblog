import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class BlogForm extends Component {
  static defaultProps = {
    post: { postTitle: '', postDescription: '', postBody: '', id: '' }
  };
  constructor(props) {
    super(props);
    this.state = {
      postTitle: this.props.post.postTitle,
      postDescription: this.props.post.postDescription,
      postBody: this.props.post.postBody,
      id: this.props.post.id
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
    const buttonStyle = {
      margin: '3px',
      padding: '7px',
      width: '100px'
    };

    const formStyle = {
      margin: '25px',
      fontFamily: 'archivo'
    };

    return (
      <Form style={formStyle} onSubmit={this.handleSubmit}>
        <h3>Blog away!</h3>
        <FormGroup>
          <Label for="postTitle">Title</Label>
          <Input
            onChange={this.handleChange}
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
            name="postDescription"
            id="postDescription"
            placeholder=""
            value={this.state.postDescription}
          />
        </FormGroup>

        <FormGroup>
          <Label for="postBody">Body</Label>
          <Input
            type="textarea"
            onChange={this.handleChange}
            name="postBody"
            id="postBody"
            placeholder=""
            value={this.state.postBody}
          />
        </FormGroup>

        <Button style={buttonStyle} outline color="success" type="submit">
          Submit
        </Button>
        <Button
          style={buttonStyle}
          outline
          color="danger"
          onClick={this.props.cancel}
        >
          Cancel
        </Button>
      </Form>
    );
  }
}

export default BlogForm;
