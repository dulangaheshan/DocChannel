import React, { Component } from "react";
import { DoctorsFetch } from "../../actions/DoctorActions";
import { connect } from "react-redux";

class DoctorList extends Component {
  componentWillMount() {
    this.props.DoctorsFetch();
  }

  render() {
    return <div>Doctor List</div>;
  }
}

export default connect(
  null,
  { DoctorsFetch }
)(DoctorList);
