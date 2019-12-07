import React, {Component} from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

class App extends Component {
	render() {
	const props = this.props

	return (
		<React.Fragment>
			<div>value { props.value }</div>
			<button onClick={props.increment}>+1</button>
			<button onClick={props.decrement}>-1</button>
		</React.Fragment>
		)
	}
}

const mapStateToPros = state => ({ value: state.count.value })
const mapStateToPros = dispatch => ({ 
	increment: ()=> dispatch(increment()),
	decrement: ()=> dispatch(decrement()),
 })

export default connect(mapStateToPros, mapDispatchToProps)(App)
// App（＝コンポーネント）は引数

export default App;
