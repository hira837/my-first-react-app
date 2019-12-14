import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";

import { getEvent, deleteEvent, putEvent } from "../actions";

class EventsShow extends Component {
  // initializeしたときにbindしておく
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  // componentDidMount() {
  //   const { id } = this.props.match.params
  //   if (id) this.props.getEvent(id)
  // }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push("/");
  }

  async onSubmit(values) {
    // await this.props.postEvents(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {/* FieldはreduxFormでデコレートされていないと使えない */}
        <div><Field label="Title" name="title" tyle="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" tyle="text" component={this.renderField} /></div>
        
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/" >Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please. "
  if(!values.body) errors.body = "Enter a body, please. "

  return errors
}

// const mapStateToProps = (state, ownProps) => {
//   const event = state.events[ownProps.match.paramas.id]
//   return { initialValues: event, event } 
// }
const mapDispatchToProps = { deleteEvent };

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)
// EventsShow（＝コンポーネント）は引数
