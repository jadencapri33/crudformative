import React, { Component } from 'react'
import { navigate } from "@reach/router";

import "../css/adduser.css"
import { IoIosAddCircle } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import Axios from 'axios'


export default class Adduser extends Component {

    
  constructor(props) {
    super(props)
  
    this.state = { firstname: "", lastname: ""};
  }
  
  handleChange = event => {
    this.setState({ firstname: event.target.value });
   
    console.table(this.state.firstname)
    
  };

  lasthandleChange = event => {

    this.setState({ lastname: event.target.value });
   
    
    console.table(this.state.lastname)

  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitting users");
    console.table(this.state);
  };
  
  home = e => {
        navigate(`/`);
      };

     

      saveUser = (event) => {
    
        console.log("user");


        let data = {first_name: this.state.firstname, last_name: this.state.lastname }
    
        Axios.post("http://localhost:4000/api/users", data)
        .then( res=> {
            console.table(res.data)
            this.setState( {users: res.data})
        }
    
        )
      }


    render() {
        return (
            <div className="form_wrapper">
            <form onSubmit={this.handleSubmit}>

              <div className="input_container"  >
              <label htmlFor="fname">First Name</label>
              <input type="text"
              name="first-name"
              value={this.state.name}
              onChange={this.handleChange} required />
    
              <label htmlFor="lname">Last Name</label>
              <input type="text"
              name="first-name"
              value={this.state.lastname}
              placeholder={this.state.lastname}
              onChange={this.lasthandleChange} required />
              <br />

              </div>


              <div className="add_button_wrapper">
              <IoIosAddCircle onClick={this.saveUser} style={{color:'rgb(102, 235, 112)', fontSize:'3.8em'}}/>
                {/* <button type="submit" className="add-button">
                  Add User
                </button> */}
                {/* <button type="button" className="add-button" onClick={this.home}>
                  Back to users
                </button> */}

<             IoMdArrowRoundBack onClick={this.home} style={{color:"pink", fontSize:'3.8em'}}/>

              </div>
            </form>
          </div>
        )
    }
}


