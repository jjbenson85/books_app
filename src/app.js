import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/common/header'
import BooksNew from './components/books/BooksNew'
import BooksIndex from './components/books/BooksIndex'
import Home from './components/Home'

import axios from 'axios'

import './style.scss'

class App extends React.Component {
  constructor(){
    super()

    this.state = {

    }

  }
  componentDidMount(){
    console.log('Component Mounted')
    axios
      .get('/api/books')
      .then( response => console.log(response))
  }

  render(){
    return(
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Route path="/books/new" component={BooksNew} />
            <Route path="/books" component={BooksIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
