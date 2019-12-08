import React, {Component} from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions'

class EventsIndex extends Component {
	componentDidMount() {
		this.props.readEvents()
	}

	render() {
	const props = this.props

	return (
		<React.Fragment>
			<div> { console.log('hi') }</div>
		</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({ events: state.events })
// const mapDispatchToProps = dispatch => ({ 
// 	increment: ()=> dispatch(increment()),
// 	decrement: ()=> dispatch(decrement()),
//  })
// ショートハンド
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
// EventsIndex（＝コンポーネント）は引数

