import React, { Component } from 'react'
import UsersList from './UsersList'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: '',         
      }
    }

    handleUserNameChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    handlePasswordChange = (event) =>{
        this.setState({
            password : event.target.value
        })
    }
    
    handleSubmit = (event) =>{
        `${this.state.password}` === UsersList.user.password
         && `${this.state.username}` === UsersList.user.username ? alert(`${this.state.username}
        ${this.state.password}`) : alert('Incorrect Password')
        
                
        event.preventDefault()
    }
    
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username </label>
                <input type='text' value={this.state.username} onChange={this.handleUserNameChange}></input>
            </div>
            <div>
                <label>Password </label>
                <input type='text' value={this.state.password} onChange={this.handlePasswordChange}></input>
            </div>
            <div className='btn'>
                <button>Submit</button>
            </div>            
            
        </form>
        
    )
  }
}

export default Form