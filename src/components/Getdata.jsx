import React from "react";
import Axios from "axios";
import { navigate } from "@reach/router";




import "../css/animate.css";



import "../css/getdata.css";

import { Link } from "@reach/router";


import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";



class GetData extends React.Component {
  constructor(props) {
    super(props);

    // console.log("hello from getData component");

    this.state = { users: [], zoom: false};
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

  handleZoom = e => {

this.setState({zoom: true})
    

  }

  navigateAdduser = e => {
    navigate(`/addusers`);

    
  }

  render() {

    // const DeleteFade = this.state.FadeOut


    return (
      <div className="user_wrapper">
        <p>USERS</p>

       
        
          <IoIosAddCircle onClick={this.handleZoom} className={this.state.zoom ? 'zoom' : null} onTransitionEnd={this.navigateAdduser}
            style={{ color: "lime", fontSize: "3.8em" }}
          />
        

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
    this.state = { visible: true }
    
    console.log(this.state)
  }

  deleteData = event => {
    console.log("deleteData");

    // this.state = {  deleteButtonClicked: false};

    Axios.delete(`http://localhost:4000/api/users/${this.props.id}`).then(
      res => {
        console.table(res.data);

        if (res.data.result === true) {

          this.setState({ visible: false });

         

          
          
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

  test = (e) => {
    if (e.propertyName == "opacity"){
       this.props.getData()
    }
    // e.persist()
    // window.pigg = e
    // console.log("+++++ ", e)
  
  }
  

  render() {
    
   
    return (

      <React.Fragment>

        
      <div className={this.state.visible ? 'user_container' : ' fadeOut' } onTransitionEnd={this.test} >
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
    
      </React.Fragment>

      
    );
  }
}

export default GetData;
