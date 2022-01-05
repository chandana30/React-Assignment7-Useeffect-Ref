import React, { useEffect, useState } from 'react'

function MyComponent() {
    const [name,setname] = useState('')
    
    const [isAdmin, setisAdmin] = useState(false)

    useEffect(() => {
        console.log("first  use effect is excecuted when the component is mounted")
        return () => {
           console.log("first is unmouted")
         }
    }, [])

    useEffect(() => {
        console.log("second use effect is excecuted when the component is mounted")
        return () => {
           console.log("second is unmouted")
         }
    }, [])

    useEffect(()=>{
        if(name){
            console.log(`useEffect will get executed when name is changed to ${name}`);
        }
    },[name])

    let updateName=()=>{
       setname('Chandhu')
    }

    let updateIsAdmin = ()=>{
       setisAdmin(true)
    }
    return (
        <div>
          {isAdmin ? 'Admin' :'User'}
            <button onClick={updateIsAdmin}>Change Role</button>
            <p>Name: {name}</p>
            <button onClick={updateName}>Change Name</button>
        </div>
    )
}

export default MyComponent
