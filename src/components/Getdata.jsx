import React from "react";
import Axios from "axios";


import { animations } from 'react-animation'


import "../css/animate.css";



import "../css/getdata.css";

import { Link } from "@reach/router";


import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const mystyle = {color: "red"}

class GetData extends React.Component {
  constructor(props) {
    super(props);

    // console.log("hello from getData component");

    this.state = { users: [] };
    // this.state = { FadeOut: false }
  }

  componentDidMount() {
    this.getData();
  }

  getData = event => {
    console.log("getData");

    Axios.get("http://localhost:4000/api/users").then(res => {
      console.table(res.data);
      this.setState({ users: res.data, deleted: false });
    });
  };



  render() {

    // const DeleteFade = this.state.FadeOut


    return (
      <div className="user_wrapper">
        <p>USERS</p>

        <Link to="/addusers">
          <IoIosAddCircle
            style={{ color: "lime", fontSize: "3.8em" }}
          />
        </Link>

        {this.state.users.map((person, i) => {
          return (
            <ShowData
              key={i}
              name={person.first_name}
              lastname={person.last_name}
              id={person._id}
              getData = {this.getData}
            />
          );
        })}
      </div>
    );
  }
}

export class ShowData extends React.Component {
  //deleting user
  constructor(props) {
    super(props);

    // console.log("hello from getData component");


    // this.state = { FadeOut: false }
    this.state = ({ deleted: false });
  }

  deleteData = event => {
    console.log("deleteData");

    // this.state = {  deleteButtonClicked: false};

    Axios.delete(`http://localhost:4000/api/users/${this.props.id}`).then(
      res => {
        console.table(res.data);

        if (res.data.result === true) {

          this.setState({deleted: true})
          
        }
        
      }
    )
  };

  // updateData = event => {
  //   console.log("edit Data");

  //   Axios.put(`http://localhost:4000/api/users/${this.props.id}`).then(res => {
  //     console.table(this.props.id);
  //   });
  // };

  render() {
    
    
     
   
    return (
      <div   className={this.state.deleted === true ? "animates fadeOut": "user_container"} style={{animation: animations.popIn}}>
        <img src="https://placekitten.com/100/100" alt=""/>
        <h1>
          {this.props.name} {this.props.lastname}


        </h1>

       
        <MdDelete
          onClick={this.deleteData}
          style={{ color: "rgb(232, 61, 23)", fontSize: "1.8em" }}
        />

        <Link to={`/editusers/${this.props.id}`}>
          <FaUserEdit
            onClick={this.updateData}
            style={{ color: "rgb(255, 200, 28)", fontSize: "1.8em" }}
            
          />
        </Link>
        

        
      </div>

      
    );
  }
}

export default GetData;
