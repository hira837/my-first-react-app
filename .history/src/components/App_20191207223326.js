import React, {Component} from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

class App extends Component {
	constructor(props) {
		super(props)
		console.log(this.state)
		this.state = { count: 0 }
	}

	handlePlusButton = ()=> {
		console.log("handlePlusButton")
		console.log(this.state.count)
		const currentCount = this.state.count
		this.setState({ count: currentCount + 1 })
		// this.state = { count: this.state.count + 1 }
	}

	handleMinusButton = ()=> {
		const currentCount = this.state.count
		this.setState({ count: currentCount - 1 })
	}

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
