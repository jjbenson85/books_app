import React from 'react'
import axios from 'axios'

// import WineCard from './WineCard'

class BooksShow extends React.Component{

  constructor(){
    super()

    this.state={}
  }

  componentDidMount(){
    axios.get('/api/books')
      .then((res)=>{
        this.setState({ book: res.data})
      })
  }

  render(){
    if(!this.state.book) return null
    console.log(this.state.book)
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Book Show</h1>
          <hr />
          <div className="columns is-multiline">
            {
              this.state.wines.map((book)=>
                <div  className="column is-one-quarter" key={book._id}>
                  <h1>{book}</h1>
                </div>
              )
            }
          </div>
        </div>
      </section>

    )
  }

}

export default BooksShow
