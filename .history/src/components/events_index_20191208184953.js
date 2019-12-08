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
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Body</th>
				</tr>
			</thead>
		</table>
		)
	}
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
// EventsIndex（＝コンポーネント）は引数

