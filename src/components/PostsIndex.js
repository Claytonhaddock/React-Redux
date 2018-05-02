import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		const post = this.props.posts;
		return Object.keys(this.props.posts).map(prop=> {
			return (
				<li key={post[prop].id} className='list-group-item'>
					<p>{post[prop].title}</p>
				</li>
			)
		})
	}

	render(){
		return (
			<div>
				<div className='text-xs-right'>
					<Link className='btn btn-primary' to='/new'>
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className='list-group'>
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {posts: state.posts};
}


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);