
import React from 'react'
import { Link } from 'react-router-dom'

function Adminhome() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/Dashboard" >GO TO DASHBOARD</Link>
        </>
    )
}
export default Adminhome;