import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export const Recruite=()=>
{
const ok=()=>
{
    alert('nice')
}
    return(
        <>
        <div className="container-fluid mt-5">
            <h1 className="text-center text-info display-6 text-uppercase">new student</h1>
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-10 col-sm-12">
                    <div className="form group">
                        <label>FirstName</label>
                        <input type="text" name="resname" placeholder="Enter the name" className="form-control"/>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-7 col-md-10 col-sm-12">
                        <label>LastName</label>
                        <input type="text" name="lname" placeholder="Enter thelastname" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-12">
                        <label>Resource Location</label>
                        <select className="form-select" name="resArea">
                            <option selected hidden>Select Location</option>

                            <option>Salem</option>
                            <option>Namakkal</option>
                            <option>Trichengode</option>
                            <option>Chennai</option>
                        </select>
                    </div>
                    <div className="col-lg-8 col-md-10 col-sm-12 ">
                            <label>Skills</label>
                            <input
                            type="checkbox"
                            name="java"
                            value="java"
                            className="form-check-input ms-5"
                            />java
                            <input
                            type="checkbox"
                            name="python"
                            value="python"
                            className="form-check-input ms-5"
                            />python
                    </div>
                    <div>
                        <button onClick="" btn btn-outline-info className="ms-5">Sumbit</button>
                        <button btn btn-outline-danger className="ms-5">Cancel</button>
                    </div>


                </div>

            </div>
        </div>
        
        </>
    )
}