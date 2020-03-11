import React, { Component } from "react";
import { navigate } from "@reach/router";
import "../css/adduser.css";

import { IoIosAddCircle } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import Axios from "axios";

export default class Edituser extends Component {
  constructor(props) {
    super(props);

    this.state = { user: {} };

    

    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitting users");
    console.table(this.state);
  };

  home = e => {
    navigate(`/`);
  };

  getData = event => {
    console.log("getData");

    Axios.get(`http://localhost:4000/api/users/${this.props.id}`).then(res => {
      console.table(res.data);
      this.setState({ user: res.data });
    });
  };

  // updateData = (event) => {

  //     console.log("edit Data");

  //     Axios.put(`http://localhost:4000/api/users/${this.props.id}`)
  //     .then( res=> {
  //         console.table(this.props.id)

  //     }

  //     )
  //   }

  editPerson = e => {
    e.preventDefault();
    // grab reference to the form data
    
    var formData = new FormData(this.myRef.current);
    // transfer into temp obj, ready to send
    var dataToSend = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name")

    };

    console.table(dataToSend)

    Axios.put(
      `http://localhost:4000/api/users/${this.props.id}`,
      dataToSend
    ).then(res => {
      console.log(res);
    });
  };

  render() {

    var {first_name, last_name} = this.state.user
    return (
      <div className="form_wrapper">
        <form onSubmit={this.editPerson} ref={this.myRef}>
          <div className="input_container">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder={first_name}
               
              defaultValue={first_name}
              required
            />

            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              
              placeholder={last_name}
              defaultValue={last_name}
              required
            />
            <br />
          </div>

          <div className="add_button_wrapper">
            <IoIosAddCircle
              onClick={this.editPerson}
              style={{ color: "rgb(102, 235, 112)", fontSize: "3.8em" }}
            />
            {/* <button type="submit" className="add-button">
                      Add User
                    </button> */}
            {/* <button type="button" className="add-button" onClick={this.home}>
                      Back to users
                    </button> */}

            <IoMdArrowRoundBack
              onClick={this.home}
              style={{ color: "pink", fontSize: "3.8em" }}
            />
          </div>
        </form>
      </div>
    );
  }
}
