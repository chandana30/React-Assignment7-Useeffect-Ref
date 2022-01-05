import React, { useRef } from 'react'

function Useref() {

    let inputRef=useRef('demo')

    let focusInput=()=>{
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={focusInput}>Click</button>
            
        </div>
    )
}

export default Useref
