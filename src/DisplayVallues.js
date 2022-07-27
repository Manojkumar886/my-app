import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Rform } from "./RegistrationForm";

export const Main=()=>{   
    const add=()=>
        {
           <Rform/>
        }
        const remove=()=>
        {
            alert("currently Unavailable in login page")
        }
return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-around ">
                <button className="btn btn-outline-success mb-3 mt-5 col-4 " onClick={add()}  >
                New Student Register
                </button>
                    <button onClick={remove} className="btn btn-outline-danger mb-3 mt-5  col-4" >Login
                </button>
                <h1 className="text-light text-center bg-info"><i><b>Zealous new Subcriber</b></i></h1>
                </div>
                <div className="row justify-content-center bg-light text-light">
                        <div className="table-responsive-md">
                            <table className="col-lg-8 col-md-10 col-sm-12 table table-striped p-3 shadow rounded">
                                <thead>
                                    <tr className="text-dark">
                                        <th>Name</th>
                                        <th>Date Of Birth</th>
                                        <th>Address</th>
                                        <th>Contact Number</th>
                                        <th>Mail Id</th>
                                        <th>Course Details</th>
                                        <th>Payment Details</th>
                                        <th>ACTIONS</th>
                                   </tr>
                                </thead>
                        </table>
                        </div>
                    </div>
            </div>
        </>
    )
}