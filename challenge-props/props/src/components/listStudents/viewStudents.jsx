import "./listStudent.css"
const ItemStudents = props =>{
    const {id,name,group} =props.data
    console.log(props.data)
    return(
        <>
        <div className="cards">
        <p>ID: {id}</p>
        <p>Nombre: {name}</p>
        <p>Grupo: {group}</p>
        </div>
        </>
    )
}

export default ItemStudents