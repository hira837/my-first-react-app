import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";

import { postEvent } from "../actions";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class EventsNew extends Component {
  // initializeしたときにbindしておく
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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
        >
      {/* <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div> */}
      </TextField>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = {margin: 12}
    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          新規イベントの追加
        </Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(this.onSubmit)}
        >
          {/* FieldはreduxFormでデコレートされていないと使えない */}
          <div>
            <Field
              label="Title"
              name="title"
              tyle="text"
              component={this.renderField}
            />
          </div>
          <div>
            <Field
              label="Body"
              name="body"
              tyle="text"
              component={this.renderField}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            label="Submit"
            type="submit"
            children="Submit"
            style={style}
            disabled={pristine || submitting || invalid}
          >
            {/* <input type="submit"  /> */}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            label="Cancel"
            children="Cancel"
            style={style}
            href="/"
          />
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please. "
  if(!values.body) errors.body = "Enter a body, please. "

  return errors
}

const mapDispatchToProps = { postEvent };

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
// EventsNew（＝コンポーネント）は引数
