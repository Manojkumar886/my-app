import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { list } from "./ArrayValues";
import { Rform } from "./RegistrationForm";

export const Main=()=>{   
    const[tempArray,setTempArray]=useState([])
    const[createView,setCreateview]=useState(false)
    
    const add=()=>
        {
            setTempArray(list())
           
        }
        useEffect(()=>
        {
            add()
        })
return(
        <>
            <div className="container-fluid">
                {(createView)?
                <>
                    <Rform/>
                    <button className="btn btn-outline-secondary"onClick={
                        ()=>
                        {
                            setCreateview(false)
                        }
                    }>
                        Back
                    </button>
                </>
                :
                <>
                <button className="btn btn-outline-success mb-3"
                onClick={()=>
                {
                    setCreateview(true)
                }}>
                    Recruite New Student
                </button>
                </>
                }






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
                                        <th>Mail Id</th>
                                        <th>Contact Number</th>
                                        <th>Course Details</th>
                                        <th>Payment Details</th>
                                        <th>LanguagesKnown</th>
                                        <th>ACTIONS</th>
                                   </tr>
                                </thead>
                                <tbody>
                                    {tempArray.map((ele)=>(
                                        <tr>   
                                        <td>{ele.stuName}</td>                                 
                                        <td>{ele.stuDob}</td>
                                        <td>{ele.stuAdd}</td>
                                        <td>{ele.stuEmail}</td>
                                        <td>{ele.stuNum}</td>
                                        <td>{ele.stuCourse}</td>
                                        <td>{ele.stuPayment}</td>
                                        <td>{ele.stuSkills}</td>
                                        </tr>

                                    ))}
                                </tbody>
                        </table>
                        </div>
                    </div>
        </>
    )
}