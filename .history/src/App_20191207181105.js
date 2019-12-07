import React from 'react';

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

const User = (props) => { 
	return <div>Hi I am {props.name}! and {props.age} years old.</div>
}

User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
}

export default App;
