import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lifecycles from './Counter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCounter: true,
            string: 'aslxf',
            count: 0
        };
        // console.log('[App Component] - constructor')
    }

    componentDidMount() {
        // console.log('[App component] - componentDidMount')
    }

    render() {
        // console.log('[App Component] - render');
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2>React Lifecycle Methods Workshop</h2>
                    <hr/>
                    <h2>Random string: {this.state.string}</h2>
                    <button className="myButton"
                        onClick={() =>
                            this.setState(state => ({
                                string: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
                            }))
                        }
                    >
                        Change String
                    </button>
                    <button
                        onClick={() =>
                            this.setState(state => ({
                                showCounter: !state.showCounter
                            }))
                        }
                    >
                        {this.state.showCounter ? 'Hide' : 'Show'} Counter Component
                    </button>
                    <button
                        onClick={() =>
                            this.setState(state => ({
                                count: state.count + 1
                            }))
                        }
                    >
                        Increase
                    </button>
                    <button
                        onClick={() =>
                            this.setState(state => ({
                                count: state.count - 1
                            }))
                        }
                    >
                        Decrease
                    </button>
                    {this.state.showCounter ? <Lifecycles count={this.state.count}/> : null}
                    <a className="link" href="https://reactjs.org/docs/react-component.html">React Official docs</a>
                </header>

            </div>
        );
    }
}

export default App;
