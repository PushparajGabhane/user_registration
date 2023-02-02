import { useEffect } from "react";
import { useState } from "react"

export default function Users() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/user-form")
            .then(res => res.json())
            .then(data => setData(data))
            .catch((e) => console.log(e));
    }, [])

    return (
        <>
            {data.map((user) => {
return(
    <>
    j
    </>
)
            })}
        </>
    )
}