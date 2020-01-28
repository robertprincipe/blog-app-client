import React, { Component } from 'react'


class PostPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			post: {},
			id: props.match.params.id
		}
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`, {method: 'get'})
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				post: data
			})
		})
	}

	render() {
		return (
			<div className="post">
	        {
	        	this.state.post ?
		        	<>
				        <div className="post-body">
				            <h1>{ this.state.post.title }</h1>
				            <p className="post-content">
				                { this.state.post.body }
				            </p>
				        </div>
		        	</>
	        	:
	        	<h1>Publicación no encontrada</h1>
	        }
	    </div>
		)
	}
}

export default PostPage