import React, { Component } from 'react'
import Post from '../molecules/Post'

class Blog extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'})
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            })
    }

    render() {
        return (
            <div>
                { this.state.posts.map(p => <Post id={p.id} title={p.title} content={p.body} key={p.id} />) }
            </div>
        )
    }
}

export default Blog