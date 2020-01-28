import React from 'react'
import Header from './organisms/Header'
import Footer from './organisms/Footer'
import PostPage from './pages/PostPage'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" component={PostPage} />
        <Route path="/posts" component={Blog} />
        <Route path="/about" component={About} />
      </Switch>
    <Footer />
  </Router>
)

export default App;
