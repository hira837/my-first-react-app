import React, {Component} from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

class App extends Component {
	render() {
	const props = this.props

	return (
		<React.Fragment>
			<div>counter { props.value }</div>
			<button onClick={this.handlePlusButton}>+1</button>
			<button onClick={this.handleMinusButton}>-1</button>
		</React.Fragment>
		)
	}
}

export default App;
