import React from 'react'
import { registerUser } from '../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  }

  handleChange = event => {
    const newFormData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData: newFormData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      await registerUser(this.state.formData)
    } catch (err){
      console.log(err.response.data)
    }
  }
  
  render() {
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
              <label htmlFor="user_name">Username</label>
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