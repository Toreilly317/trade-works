import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Hip Hop Battlegrounds
                </h1>
                <p className="lead">
                  Organize your samples and use them in battles with other producers
                </p>
                <hr/>
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="login.html" className="btn btn-lg btn-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing