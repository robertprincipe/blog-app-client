import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, content, date, author}) => (
    <div className="post">
        <div className="post-header">
            <div className="date">{date}</div>
            <span className="author">{author}</span>
        </div>
        <div className="post-body">
            <a href="https://google.com" className="post-link">
                <h1>{title}</h1>
            </a>
            <p className="post-content">
                {content}
            </p>
        </div>
        <div className="post-footer">
            <div className="tags-container">
                <span>Tags: </span> <a href="https://airbnb.com" className="tag"><i>html</i></a>, <a href="https://instagram.com" className="tag"><i>css</i></a>
            </div>
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