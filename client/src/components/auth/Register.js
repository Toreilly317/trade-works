import React, {Component} from 'react';
import axios from 'axios'

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    axios
      .post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}));
    console.log(this.state.errors)

  }

  render() {
    const {errors} = this.state
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your HHB account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={errors.name
                    ? 'form-control form-control-lg is-invalid'
                    : 'form-control form-control-lg'}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                    required/> {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={errors.email
                    ? 'form-control form-control-lg is-invalid'
                    : 'form-control form-control-lg'}
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                    name="email"/> {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={errors.password
                    ? 'form-control form-control-lg is-invalid'
                    : 'form-control form-control-lg'}
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleOnChange}
                    name="password"/> {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={errors.password2
                    ? 'form-control form-control-lg is-invalid'
                    : 'form-control form-control-lg'}
                    placeholder="Confirm Password"
                    value={this.state.password2}
                    onChange={this.handleOnChange}
                    name="password2"/> {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
