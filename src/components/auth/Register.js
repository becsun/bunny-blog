import React from 'react'
import { registerUser } from '../lib/api'

import { Alert } from '@material-ui/lab'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    errors: {}, 
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await registerUser(this.state.formData)
      this.props.history.push('./login')
    } catch (err){
      console.log(this.state)
      console.log(err)
      this.setState({ errors: err.response.data.errors })
    }
  }
  
  render() {
    console.log(this.state)
    console.log(this.state.errors)
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <  div className="input-field col s12">
              <input onChange={this.handleChange} 
                placeholder="Username" 
                id="user_name" 
                type="text" 
                name="username"
                value={this.state.formData.username}
                className="validate" />
              <label htmlFor="username">Username</label>
              {this.state.errors.username && <Alert severity="error">Error — Username is Needed</Alert>}

            </div>
            <div className="row">
              <div className="input-field col s12">
                <input onChange={this.handleChange}
                  id="email" 
                  type="email" 
                  name="email"
                  value={this.state.formData.email}
                  className="validate" />
                <label htmlFor="email">Email</label>
                {this.state.errors.email && <Alert severity="error">Error — Email is Needed</Alert>}

              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input onChange={this.handleChange}
                  id="password" 
                  type="password" 
                  name="password"
                  value={this.state.formData.password}
                  className="validate" />
                <label htmlFor="password">Password</label>
                {this.state.errors.password && <Alert severity="error">Error — Password is Needed</Alert>}

              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input onChange={this.handleChange}
                  id="password_confimation" 
                  type="password" 
                  name="passwordConfirmation"
                  value={this.state.formData.passwordConfirmation}
                  className="validate" />
                <label htmlFor="password_confirmation">Password Confirmation</label>
                {this.state.errors.password && <Alert severity="error">Error — Password Needed</Alert>}

              </div>
            </div>
            <button className="btn waves-effect waves-light" 
              type="submit" 
              name="action">Register
              <i className="material-icons right"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register