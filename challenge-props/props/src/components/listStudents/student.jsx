import React from "react"
import "./listStudent.css"
import ItemStudents from "./viewStudents"

const ListStudent = (props) =>{
    const student = props.data
    console.log(student)
    return (
       <>
       <div className="container">
            <h1>Lista de estudiantes</h1>
            <div className="container__cards">
                {
                    student.map((item)=>{
                        return(
                            <ItemStudents data={item}/>
                        )
                    })
                }
            </div>
       </div>
       </> 
    )

}

export default ListStudent