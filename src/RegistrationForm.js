import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export const Rform=()=>{
    const reg=async()=>{
          alert("Start a new life-Welcome to Zealous System Corp....!" )
        
    }
    const can=()=>{
        alert("Better luck next time")
    }
    const Imgsrc=
    {
        width:'190px',
        height:'80px',
        backgroundImage:'Images/Matrimony images.jpg'
    }
    const ff={
        fontFamily:'Viner Hand ITC'
        
    }
    const cards={
        backgroundColor:'navy'
    }
    
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-10 col-sm-12 p-4 mt-4 text-light card  "style={cards} >
                <div className="card-body bg-secondary">
                      <img src="Images/Zealous logo.png" className="card-img bg-dark " style={Imgsrc} ></img>
                      <h1 style={ff} className="card-title text-center text-dark bg-secondary">Zealous System Corp</h1>
                      <hr/>
                      <hr/>
                </div>
                </div>
            </div>
            <div className="row justify-content-around">
            <div className="col-lg-9 col-md-10 col-sm-12 p-4 mt-1 mb-4shadow bg-light">
            <h5 className="text-start">PERSONAL INFORMATION</h5>
                    <div className="form-group mt-2 ">
                        <label>Name</label>
                        <input type="text" 
                        name="Sname" 
                        placeholder="Enter the Studentname" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Date Of Birth</label>
                        <input type="Date"
                        name="DOB"
                        placeholder="Enter your Date of Birth"
                        className="form-control"
                        />
                    </div>
                    <h5 className="text-start mt-3">CONTACT INFORMATION</h5>
                    <div className="form-group mt-2 ">
                        <label>Address</label>
                        <textarea  
                        name="Tarea" 
                        placeholder="Tell us Validate Address/Pincode/Districk/State" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Contact number</label>
                        <input type="number"
                        name="num"
                        placeholder="Linked By Aadhar Mobile Number"
                        className="form-control"
                         />
                    </div>
                    <div className="form-group mt-2">
                        <label>Gmail</label>
                        <input type="email"
                        name="email"
                        placeholder="durexcement123@gmail.com"
                        className="form-control"
                        />
                    </div>
                    <h5 className="text-start mt-3">COURSE INFORMATION</h5>
                    <div className="form-group mt-2 ">
                        <label>Course name</label>
                        <input type="text"
                        name="Course" 
                        placeholder="Plese tell us Correct detail of course" 
                        className="form-control"/>
                    </div>
                    <div className="mt-2">
                        <label>Payment Details</label>
                        <input type="radio" name="Payment" value="Cash" className="ms-3" />Cash
                        <input type="radio" name="Payment" value="Card" className="ms-3" />Card
                        <input type="radio" name="Payment" value="Chrque" className="ms-3" />Cheque
                    </div>
                    <div className="form-group mt-2">
                        <label>Languages</label>
                        <input type="checkbox" name="tamil"  value="Tamil"  className="form-input-check ms-5"/>Tamil
                        <input type="checkbox" name="telugu" value="Telugu"  className="form-input-check ms-5"/>Telugu
                        <input type="checkbox" name="kannada" value="Kannada"  className="form-input-check ms-5"/>Kannada
                        <input type="checkbox" name="malayalam" value="Malayalam"  className="form-input-check ms-5"/>Malayalam
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button onClick={reg} className="btn btn-outline-success col-4" type="submit">Register</button>
                        <button onClick={can} className="btn btn-outline-danger col-4" type="cancel">Cancel</button>
                    </div>
                    </div>

            </div>

        </div>
    )
}