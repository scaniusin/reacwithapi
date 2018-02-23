import React, { PropTypes } from 'react';

const Form = React.createClass({

  getInitialState() {
    return {
      body: this.props.body || 'some body',
      title: this.props.title || 'some title'
    };
  },

  componentWillReceiveProps(props) {
    this.setState(props);
  },

  handleBodyChange(e) {
    this.setState({
      body: e.target.value
    });
  },

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  },

  render() {
    return (
      <form name="blog_post" className="form-horizontal col-sm-8 offset-sm-2" onSubmit={this.handleSubmit}>
        <div id="blog_post">
          <div className="form-group">
            <label className="col-sm-2 control-label required" htmlFor="blog_post_title">Title</label>
            <div className="col-sm-10">
              <input type="text"
                     id="blog_post_title"
                     required="required"
                     value={this.state.title}
                     onChange={this.handleTitleChange}
                     className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label required" htmlFor="blog_post_body">Body</label>
            <div className="col-sm-10">
              <textarea
                     id="blog_post_body"
                     required="required"
                     value={this.state.body}
                     onChange={this.handleBodyChange}
                     className="form-control"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-2"/>
            <div className="col-sm-10">
              <button type="submit"
                      id="blog_post_submit"
                      className="btn-success btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
});

Form.PropTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Form;