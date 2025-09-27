import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({errorMsg:'Error retreiving data'})
      });
  }

  render() {
    const { posts ,errorMsg } = this.state;
    return (
      <div>
        <h2>List of Posts</h2>
        {posts.length ? (
          posts.map(post => <div key={post.id}>{post.title}</div>)
        ) : null}
        { errorMsg ? <div> {errorMsg}</div> :null}
      </div>
    );
  }
}

export default PostList;




