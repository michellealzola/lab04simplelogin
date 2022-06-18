import React, { Component } from 'react'


const users = 
    [
        {
            id: 147852,
            username: 'Mike',
            password: 'M!ke123'
        },
        {
            id: 147853,
            username: 'Mary',
            password: 'm@ry456'
        }        

    ]

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
        event.preventDefault();
        
        const userInList = users.find((user) => user.username === this.state.username);

        if(userInList)
        {
            if(userInList.password !== this.state.password)
            {
                alert('Incorrect Password');
            }
            else
            {
                alert(`${this.state.username}
                ${this.state.password}`);
            }
        }
        else
        {
            alert('Incorrect User Name');
        }
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