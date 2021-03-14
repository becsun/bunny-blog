import React from 'react'

import { loginUser } from '../lib/api'
import { Alert } from '@material-ui/lab'
import { setToken } from '../lib/auth'

class Login extends React.Component {
    state = {
      formData: {
        email: '',
        password: '',
      },
      error: false,
    }

    handleChange = event => {
      const newFormData = { ...this.state.formData, [event.target.name]: event.target.value }
      this.setState({ formData: newFormData, error: false })
    }

    handleSubmit = async event => {
      event.preventDefault()
      try {
        const res = await loginUser(this.state.formData)
        setToken(res.data.token)
        this.props.history.push('/')
        console.log(res.data)
      } catch (err){
        console.log(err.response.data)
        this.setState({ error: true })

      }
    }

    render(){
      console.log(this.state.error)

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
              {this.state.error && <Alert severity="error">Sorry —Incorrect Username or Password </Alert>}
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