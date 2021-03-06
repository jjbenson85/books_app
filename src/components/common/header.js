import React from 'react'

import { Link } from 'react-router-dom'


class Header extends React.Component{

  componentDidMount(){
    const el = document.querySelector('.navbar-burger')
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target
      const $target = document.getElementById(target)

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active')
      $target.classList.toggle('is-active')

    })
  }

  render(){
    console.log('loggedIn',this.props.loggedIn)
    return(
      <header>

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/books">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64Z0snGCQR4YalYuOYhVgrwIkX6itS89jKYnO9-ijb1k_h-X4" width="28" height="28"/>
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/books" className="navbar-item">
                Book List
              </Link>

              <Link to="/books/new" className="navbar-item">
                New Book
              </Link>


            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                {!this.props.loggedIn &&
                <div className="buttons">

                  <Link to="/register" className="button is-light">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="/login" className="button is-light">
                    <strong>Log In</strong>
                  </Link>
                </div>
                }
                {this.props.loggedIn &&
                <div className="buttons">
                  <button className="button is-light" onClick={this.props.handleLogout}>
                    <strong>Log Out</strong>
                  </button>
                </div>
                }
              </div>
            </div>
          </div>
        </nav>


      </header>
    )

  }
}

export default Header
