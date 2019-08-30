import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log('[Counter component] - constructor');
    }

    componentDidMount() {
        console.log('[Counter component] - componentDidMount!');
    }

    componentDidUpdate() {
        console.log('[Counter component] - componentDidUpdate!');
    }

    componentWillUnmount() {
        console.log('[Counter component] - componentWillUnmount!');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log('[Counter component] - shouldComponentUpdate!', nextProps);
        return nextProps.count !== this.props.count;
    }

    render() {
        console.log('[Counter component] - render!');
        return (
            <div className='counter'>
                <h3>COUNTER COMPONENT</h3>
                <p>Count: {this.props.count}</p>
            </div>
        );
    }
}

Counter.propTypes = {
    count: PropTypes.number.isRequired
};

export default Counter;
