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

const App = ()=> {
	const profiles = [	 
		{ name: "Taro", age: 10 },
		{ name: "Hanako", age: 5 },	
		{ name: "Noname", age: 3 }
	]	
		
	return (
	<div>		
		{
			profiles.map((profile, index)=> {
				return <User name={profile.name} age={profile.age} key={index} />
			})
		}	
	</div>			
	)	
}		

const User = (props) => { 
	return <div>Hi I am {props.name}! and {props.age} years old.</div>
}

User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
}

export default App;
