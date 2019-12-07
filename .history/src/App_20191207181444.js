import React, {Component} from 'react';

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

const App = ()=> (<Counter></Counter>	)			

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state
		console.log(this.state)
		this.state = { count: 0 }
	}
	render() {
	return (<div>counter { this.state.count }</div>)
	}
}

export default App;
