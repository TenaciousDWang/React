import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <ul className="my-list">
                    <li>{false ? 'HaHa' : 'HeiHei'}</li>
                    <li>I Love React</li>
                </ul>
            </div>

        )
        //var child1 = React.createElement('li',null,'HaHa')
        //var child2 = React.createElement('li',null,'I Love React')
        //var root = React.createElement('ul',{className:'my-list'},child1,child2)
    }
}

export default App