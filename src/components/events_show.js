import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";

import { getEvent, deleteEvent, putEvent } from "../actions";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class EventsShow extends Component {
  // initializeしたときにbindしておく
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <TextField
        label={label}
        placeholder={label}
        type={type}
        {...input}
        fullWidth={true}
        ></TextField>
      // <div>
      //   <input {...input} placeholder={label} type={type} />
      //   {touched && error && <span>{error}</span>}
      // </div>
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push("/");
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }
    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          イベントの編集・更新
        </Typography>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {/* FieldはreduxFormでデコレートされていないと使えない */}
          <div>
            <Field
              label="Title"
              name="title"
              type="text"
              component={this.renderField}
            />
          </div>
          <div>
            <Field
              label="Body"
              name="body"
              type="text"
              component={this.renderField}
            />
          </div>

          <div>
            <Button
              variant="contained"
              color="primary"
              label="Submit"
              type="submit"
              children="Submit"
              style={style}
              disabled={pristine || submitting || invalid}
            />
            <Button
              variant="outlined"
              color="primary"
              label="Cancel"
              children="Cancel"
              style={style}
              href="/"
            />
            <Button
              color="secondary"
              label="Delete"
              children="Delete"
              style={style}
              onClick={this.onDeleteClick}
            />
            {/* <Link to="/" onClick={this.onDeleteClick}>
              Delete
            </Link> */}
          </div>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

// ownProps このコンポーネントがもっているpropss
const mapStateToProps = (state, ownProps) => {
  
  const event = state.events[ownProps.match.params.id]
  // 初期状態の設定
  return { initialValues: event, event }
}

const mapDispatchToProps = { deleteEvent, getEvent, putEvent };

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
// EventsShow（＝コンポーネント）は引数
