import React, { Component } from 'react'
import "../css/home.css"
import { IoMdListBox } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa"
import { Link } from "@reach/router";

import { navigate } from "@reach/router";

export default class Home extends Component {


    naviageToUsers = e => {
        navigate(`/getdata`);
    }


    render() {
        return (
            <div className="home_wrapper">
                
                <div onClick={this.naviageToUsers}  className="users_button">

       
            
                    <FaUserCircle style={{ color:'white', fontSize: "4.8em" }}/>
                        <h1>Users</h1>
                       

                </div>
                

                <div className="products_button">
            <IoMdListBox style={{ color: "white", fontSize: "4.8em" }}/>
                            <h1>Products</h1>
                </div>


            </div>
        )
    }
}
