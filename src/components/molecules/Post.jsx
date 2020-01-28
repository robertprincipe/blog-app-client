import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Post = ({id, title, content}) => (
    <div className="post">
        <div className="post-body">
            <Link to={`posts/${id}`} className="post-link">
                <h1>{title}</h1>
            </Link>
            <p className="post-content">
                {content}
            </p>
        </div>
    </div>
)

Post.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string
}

Post.defaultProps = {
    title: '',
    content: '',
    author: '',
    date: ''
}

export default Post