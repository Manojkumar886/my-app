import React from "react";
import {useState} from "react";
import {create,list} from './ArrayValues'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export const Rform=()=>{
    //const[data,setData]=useState(initialization)
    //person.['resName'];
    const[person,setPerson]=useState({
        "stuName":"",
        "stuDob":"",
        "stuAdd":"",
        "stuEmail":"",
        "stuNum":0,
        "stuCourse":"",
        "stuPayment":"",
        "stuSkills":new Array()
    })
    const tracky=(hey)=>
    {
        const{value}=hey.target
        person.stuSkills.push(value)
    }
    const track=(manoj)=>
    {
        const{name,value}=manoj.target
        setPerson(
            (prev)=>
            {
                return{
                    ...prev,
                    [name]:value
                }
            }
        )
    }
    const reg=async()=>{
          //alert("Start a new life-Welcome to Zealous System Corp....!" )
        //alert("Registered"+JSON.stringify(person))
        create(person)
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
                        name="stuName" 
                        value={person.stuName}
                        onChange={track}
                        placeholder="Enter the Studentname" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Date Of Birth</label>
                        <input type="Date"
                        name="stuDob"
                        onChange={track}
                        value={person.stuDob}
                        placeholder="Enter your Date of Birth"
                        className="form-control"
                        />
                    </div>
                    <h5 className="text-start mt-3">CONTACT INFORMATION</h5>
                    <div className="form-group mt-2 ">
                        <label>Address</label>
                        <textarea  
                        name="stuAdd" 
                        onChange={track}
                        value={person.stuAdd}
                        placeholder="Tell us Validate Address/Pincode/Districk/State" 
                        className="form-control"/>
                    </div>
                    <div className="form-group mt-2">
                        <label>Contact number</label>
                        <input type="number"
                        name="stuNum"
                        onChange={track}
                        value={person.stuNum}
                        placeholder="Linked By Aadhar Mobile Number"
                        className="form-control"
                         />
                    </div>
                    <div className="form-group mt-2">
                        <label>Gmail</label>
                        <input type="email"
                        name="stuEmail"
                        onChange={track}
                        value={person.stuEmail}
                        placeholder="durexcement123@gmail.com"
                        className="form-control"
                        />
                    </div>
                    <h5 className="text-start mt-3">COURSE INFORMATION</h5>
                    <div className="form-group mt-2 ">
                        <label>Course name</label>
                        <input type="text"
                        name="stuCourse" 
                        onChange={track}
                        value={person.stuCourse}
                        placeholder="Plese tell us Correct detail of course" 
                        className="form-control"/>
                    </div>
                    <div className="mt-2">
                        <label>Payment Details</label>
                        <input onChange={track} type="radio" name="stuPayment" value="Cash" className="ms-3" />Cash
                        <input onChange={track} type="radio" name="stuPayment" value="Card" className="ms-3" />Card
                        <input onChange={track} type="radio" name="stuPayment" value="Cheque" className="ms-3" />Cheque
                    </div>
                    <div className="form-group mt-2">
                        <label>Languages</label>
                        <input onChange={tracky} type="checkbox" name="stuSkills"  value="Tamil"  className="form-input-check ms-5"/>Tamil
                        <input onChange={tracky} type="checkbox" name="stuSkills" value="Telugu"  className="form-input-check ms-5"/>Telugu
                        <input onChange={tracky} type="checkbox" name="stuSkills" value="Kannada"  className="form-input-check ms-5"/>Kannada
                        <input onChange={tracky} type="checkbox" name="stuSkills" value="Malayalam"  className="form-input-check ms-5"/>Malayalam
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