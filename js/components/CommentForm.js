var React = require('react');

var CommentForm = React.createClass({
  getInitialState() {
    return {author: '', text: ''};
  },

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  },

  handleTextChange(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({author: '', text: ''});
  },

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentForm;
