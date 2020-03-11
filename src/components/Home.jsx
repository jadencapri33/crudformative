import React, { Component } from 'react'
import "../css/home.css"
import { IoMdListBox } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa"
import { Link } from "@reach/router";

export default class Home extends Component {
    render() {
        return (
            <div className="home_wrapper">
                
                <div className="users_button">

       
            {/* <Link to="/getdata"></Link> */}
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
