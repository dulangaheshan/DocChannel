import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { LoginAction } from "../../actions";
import { connect } from "react-redux";

class AdminLogin extends Component {
  renderField(field) {
    const className = `form-group ${
      field.meta.touched && field.meta.error ? "has-danger" : ""
    }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  renderError() {
    if (this.props.error) {
      console.log(this.props.error);
      return <div className="form-group has-danger">{this.props.error}</div>;
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <div>Wait....</div>;
    }
    return (
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    );
  }

  onSubmit(values) {
    //console.log(values);
    this.props.LoginAction(values, () => {
      this.props.history.push("/doctorslist");
    });
    //this.props.createPost(values);
    //this.props.history.push("/");
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>Admin Login</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Email" name="email" component={this.renderField} />
          <Field
            label="Password"
            name="password"
            component={this.renderField}
          />
          <div>{this.renderError()}</div>
          <div>{this.renderButton()}</div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Cannot Be Empty!";
  }

  if (!values.password) {
    errors.password = "Cannot Be Empty!";
  }

  return errors;
}

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default reduxForm({
  validate,
  form: "adminlogin"
})(
  connect(
    mapStateToProps,
    { LoginAction }
  )(AdminLogin)
);
