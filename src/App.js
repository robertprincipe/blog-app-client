import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Post from './components/Post'
import Footer from './components/shared/Footer'

const posts = [
  {
    'title': 'Los lenguajes que debes aprender este 2020',
    'content': 'This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.',
    'date': 'Mar 11, 2019',
    'author': 'Robert Principe'
  }
]

const App = () => (
  <>
    <Hero cover="https://images.unsplash.com/photo-1533299346856-b1a85808f2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80" />
    <h1 className="title">
      Last publications
    </h1>
    <div className="posts-grid">
      { posts.map(p => <Post title={p.title} content={p.content} date={p.date} author={p.author} />) }
    </div>
    <Footer />
  </>
)

export default App;
