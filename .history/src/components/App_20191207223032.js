import React, {Component} from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

//function App() {
//const dom = <div>Improve React Skiil</div> ;
//return = dom;
//}
//class App extends Component {
//	render(){
//		const greeting = "Hi, Tom"	
//		const dom = <h1 className="foo">{ greeting }</h1>;
//		return dom;	
//	}
//}


//class App extends Component {
//	render(){
//		return (
//			<React.Fragment>
//				<label htmlFor="bar">bar</label>
//				<input type="text" onClick={() => {console.log("Hi there") }}/>;
//			</React.Fragment>
//)	
//	}	
//}


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
