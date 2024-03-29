import React, { Component } from 'react'
import Button from './components/Button'

class App extends Component {

    state = {
        username: "",
        password:""
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:3000/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })

    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="username" value={this.state.username} onChange={this.handleChange} />
                <input type="text" id="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Submit"/>
            </form>

            {this.state.username}
            {this.state.password}
            
            <Button onClick={this.handleClick} />
        </div>
        )
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
}

export default App