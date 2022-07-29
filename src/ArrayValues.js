let mystudents=[
    {
        "stuName":"Manojkumar",
        "stuDob":"12-10-2001",
        "stuAdd":"7/149-ELACHIPALAYAM",
        "stuEmail":"manojgeetha12.10.2001@gmail.com",
        "stuNum":9789355930,
        "stuCourse":"Java FUll Stack",
        "stuPayment":"cash",
        "stuSkills":["Malayalam","Tamil"]
    },
    {
        "stuName":"Manojkumar",
        "stuDob":"12-10-2001",
        "stuAdd":"7/149-ELACHIPALAYAM",
        "stuEmail":"manojgeetha12.10.2001@gmail.com",
        "stuNum":9789355930,
        "stuCourse":"Java FUll Stack",
        "stuPayment":"cash",
        "stuSkills":["Malayalam","Tamil"]
    },
    {
        "stuName":"Manojkumar",
        "stuDob":"12-10-2001",
        "stuAdd":"7/149-ELACHIPALAYAM",
        "stuEmail":"manojgeetha12.10.2001@gmail.com",
        "stuNum":9789355930,
        "stuCourse":"Java FUll Stack",
        "stuPayment":"cash",
        "stuSkills":["Malayalam","Tamil"]
    },
    {
        "stuName":"Manojkumar",
        "stuDob":"12-10-2001",
        "stuAdd":"7/149-ELACHIPALAYAM",
        "stuEmail":"manojgeetha12.10.2001@gmail.com",
        "stuNum":9789355930,
        "stuCourse":"Java FUll Stack",
        "stuPayment":"cash",
        "stuSkills":["Malayalam","Tamil"]
    },
]

export const create=(obj)=>
{
    mystudents.push(obj)
}

export const list=()=>
{
    return mystudents
}

export const fetchExact=(name)=>{
    const tmp=mystudents.filter((element)=>{
        return element.stuName===name
    })
    return tmp[0]
}

export const alter=(place,data)=>{
    mystudents[place]=data
} 
export const wash=(index)=>
{
    mystudents=mystudents.filter((d,p)=>
    {
        return p!==index
    })
    return mystudents
}