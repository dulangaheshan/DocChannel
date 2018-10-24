import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DoctorList from "./DoctorList";
import { Link } from "react-router-dom";

class AdminPannel extends Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <h1>Admin pannel</h1>
        <Link to="/adminpannel/doctorslist">Doctors List</Link>

        <Route path="/adminpannel/doctorslist" component={DoctorList} />
      </div>
    );
  }
}

export default AdminPannel;
