// Code EyesOnMe Component Here
function EyesOnMe(){

     const focusHandling = ()=>{
        console.log('Good!');
     }
   
     const blourHandling = ()=>{
        console.log('Hey! Eyes on me!');
     }
       return (
           <div>
              <button onFocus={ focusHandling} onBlur={blourHandling }> Eyes on me</button>
           </div>
       )
   }
   
   export default EyesOnMe;