import React from 'react'

import { loginUser } from '../lib/api'

class Login extends React.Component {
    state = {
      formData: {
        email: '',
        password: '',
      },
    }

    handleChange = event => {
      const newFormData = { ...this.state.formData, [event.target.name]: event.target.value }
      this.setState({ formData: newFormData })
    }

    handleSubmit = async event => {
      event.preventDefault()
      try {
        const res = await loginUser(this.state.formData)
        console.log(res.data.token)
      } catch (err){
        console.log(err.response.data)
      }
    }

    render(){
      console.log(this.state.formData)
      return (
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input 
                  id="email" 
                  type="email" 
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.formData.email}
                  className="validate" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input 
                  id="password" 
                  type="password" 
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.formData.password}
                  className="validate" />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" 
              type="submit" 
              name="action">Register
              <i className="material-icons right"></i>
            </button>
          </form>
        </div>
      )
    }
}



export default Login