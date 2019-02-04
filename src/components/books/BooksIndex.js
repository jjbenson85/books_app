import React from 'react'
import axios from 'axios'

// import WineCard from './WineCard'

class BooksIndex extends React.Component{

  constructor(){
    super()

    this.state={}
  }

  componentDidMount(){
    axios.get('/api/books')
      .then((res)=>{
        this.setState({ books: res.data})
      })
  }

  render(){
    if(!this.state.books) return null
    console.log(this.state.books)
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Book List</h1>
          <hr />
          <div className="columns is-multiline">
            {
              this.state.books.map((book)=>
                <div  className="column is-one-quarter" key={book._id}>
                  <h1>{book.title}</h1>
                </div>
              )
            }
          </div>
        </div>
      </section>

    )
  }

}

export default BooksIndex
