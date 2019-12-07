import React, {Component} from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

class App extends Component {
	render() {
		console.log('render')
	return (
		<React.Fragment>
			<div>counter { this.state.count }</div>
			<button onClick={this.handlePlusButton}>+1</button>
			<button onClick={this.handleMinusButton}>-1</button>
		</React.Fragment>
		)
	}
}

export default App;
