import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { newPost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';


class PostsNew extends Component {

	renderField(field){
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger': ''}`

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input 
					className="form-control"
					type="text"
					{...field.input}
				/>
					<div className="text-help">
						{touched ? error: ''}
					</div>
			</div>
		)
	}

	onSubmit(values){
		newPost(values);
	}





	render(){
		const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field 
						label='Title'
						component={this.renderField} 
						name="title"
					/>
					<Field
						label='Categories'
						component={this.renderField} 
						name="categories"
					/>
					<Field
						label='Post Content'
						component={this.renderField} 
						name="content"
					/>
					<button type="submit" className="btn btn-primary">Submit</button>
					<Link to='/' className="btn btn-danger">Cancel</Link>
				</form>
			</div>
		)
	}
}

function validate(values){
	let error = {};
	if(!values.title){
		error.title = "Enter a title"
	}
	if(!values.categories){
		error.categories = "Enter some categories"
	}
	if(!values.content){
		error.content = "Enter some content"
	}
	return error;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(connect(null,{ createPost })(PostsNew);