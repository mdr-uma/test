import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
        <div>
            <form>
                <input type="text" id="username" value={this.state.username} onChange={this.handleChange} />
                <input type="text" id="password" value={this.state.password} onChange={this.handleChange} />
                <input type="submit" value="Submit"/>
            </form>
        </div>
        )
    }
}

export default App