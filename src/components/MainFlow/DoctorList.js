import React, { Component } from "react";
import { DoctorsFetch } from "../../actions/DoctorActions";
import { connect } from "react-redux";

class DoctorList extends Component {
  componentWillMount() {
    this.props.DoctorsFetch();
  }

  renderDoctors() {
    return _.map(this.props.doctors.data, data => {
      return (
        <li className="list-group-item" key={data.id}>
          {data.name}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.doctors.data);

    return (
      <div>
        <div className="text-xs-right" />
        <h3 className="list-group">doctors</h3>
        <ul>{this.renderDoctors()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.doctor);
  return {
    doctors: state.doctor
  };
}

export default connect(
  mapStateToProps,
  { DoctorsFetch }
)(DoctorList);
