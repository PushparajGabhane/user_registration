import { useState } from "react";


function UserForm() {

    const [userdata, setUserdata] = useState({
        name: "",
        dob: "",
        email: "",
        phone: ""
    });

    return (
        <>

            <form >

                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={(e) => { setUserdata({ ...userdata, name: e.target.value }) }} /><br />
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" onChange={(e) => { setUserdata({ ...userdata, dob: e.target.value }) }} /><br />
                <label htmlFor="mail">Email</label>
                <input type="email" id="mail" onChange={(e) => { setUserdata({ ...userdata, email: e.target.value }) }} /><br />
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" onChange={(e) => { setUserdata({ ...userdata, phone: e.target.value }) }} /><br />
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    fetch("http://localhost:5000/user-form", {
                        method: "post",
                        body: userdata
                    }).then((res) => {
                        res.json();
                    }).catch((e) => console.log(e));
                    
                }} >Submit</button>

            </form>
        </>
    )
};

export default UserForm;