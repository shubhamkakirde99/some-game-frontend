import axios from 'axios'
import React, {useState} from 'react'

export default function MainPage() {
    const [userName, setuserName] = useState("");
    const [userNameList, setuserNameList] = useState([]);
    const getUsernames = () => {
        axios.get("/api/get-all-users")
        .then(axiosData => {
            setuserNameList(axiosData.data);
        })
    }
    const setuserNames = () => {
        axios.post("/api/create-user", {"userName": userName});
    }
    const handleChange = (e) => {
        setuserName(e.target.value);
    }
    return (
        <div>
            <h1>This terrible UI is under development</h1>
            <h3>{process.env.REACT_APP_BACKEND_URL}</h3>
            <input type="text" placeholder="enter username" onChange={handleChange}></input>
            <button onClick={getUsernames}>Get usernames</button>
            <button onClick={setuserNames}>Set usernames</button>
            <ol>
                {
                    userNameList.map(data => (
                        <li>{data.name}</li>
                    ))
                }
            </ol>
        </div>
    )
}
