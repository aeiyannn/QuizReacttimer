import React,{useState,useEffect} from "react";


function Timer(){
    const[second,Setsecond]=useState(59)
    const[minutes,Setminutes]=useState(5)
    var timer;
    useEffect(() => {
        timer=setInterval(()=>{
            Setsecond(second-1)
            if (second==0){
                Setminutes(minutes-1)
                Setsecond(59)
            }
             if( minutes==0 && second==0){

                alert("stop")
             }
        },1000)
        return ()=>clearInterval(timer)

        
    
    } )
   
    return(
       <div className="m-5 text-white fs-2 text-end">{minutes<10?"0"+minutes:minutes}:{second<10?"0"+second:second}</div>
    )
}
export default Timer