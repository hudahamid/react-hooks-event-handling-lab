// Code Keypad Component Here

function Keypad (){

 const Changehandling   = () => {
     console.log("Entering password...");
 }

    return (
        <div>
            <input  type="password" onChange={Changehandling}></input>
        </div>
    )
}

export default Keypad;