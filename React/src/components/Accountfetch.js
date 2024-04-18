import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";

export default function Accountfetch()
{
    const {userid}=useContext(MyContext)
    const [data, setData] = useState([]);
    const [id,setId]=useState(0);
    const [editpop,setEditPop]=useState(false);
    useEffect(() => {
        if(userid!==0)
        {
        fetch(`http://localhost:8080/getbyid/${userid}`)
            .then(response => response.json())
            .then(data => setData(data));
        window.localStorage.setItem('id',JSON.stringify(userid))
        }
    }, [userid]);

    function handleEdit()
    {
        setEditPop(true)
    }
    useEffect(() => {
        if (data && Object.keys(data).length !== 0) {
            localStorage.setItem('storedData', JSON.stringify(data));
        }
    }, [data]);

    // Retrieve data from localStorage on component mount
    useEffect(() => {
        const stored = localStorage.getItem('storedData');
        const idval= localStorage.getItem('id');
        if (stored) {
            setData(JSON.parse(stored));
        }
        setId(JSON.parse(idval));
    }, []);

    const[userdetail,setUserdetail]=useState({
        firstname:"",
        lastname:""
    })
    function handleInput(event)
    {
      setUserdetail({...userdetail,[event.target.name]: event.target.value})

    }
    const requestOptions = {
        method: 'PUT',
        
    };
    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(userdetail.firstname);
        
    fetch(`http://localhost:8080/update/${id}/${userdetail.firstname}/${userdetail.lastname}`, requestOptions)
        .then(response => response.json())
        .then(data => setData(data));
        
    }
    return(
        <div className="profile">
        <h2>{id}</h2>
        <h2>Name : {data.firstname}{data.lastname}</h2>
        <h2>Email : {data.email}</h2>
        <button onClick={handleEdit}>Edit details</button>
        {editpop&&
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter your first name:
                <input color="black" onChange={handleInput} name="firstname" type="text" />
            </label>
            <label>Enter your last name:
                <input color="black" onChange={handleInput} name="lastname" type="text" />
            </label>
            <button type="submit">Change</button>
            </form>
        </div>
            }
    </div>

    )
}