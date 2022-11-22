import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import "./Mabu.css"
function Mabu() {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then(res => res.json()
      ).then(json => setdata(json))

  }, [])
  
  function time(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    var hm = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mm = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sm = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hm + mm + sm; 
}
 
 

 

  return (
 <>
    <div >
     <h1>WELCOME TO CODING CONTEST</h1>
      <button className='plt'>platforms</button>
      {data.map((x, i) =><div  className='card' key={i}> <div className='inside' > <a className='url' href={x.url}><button> click here start the test</button></a> <h5 className='name'>{x.name}</h5>  <div> <h5>site:{x.site}</h5> </div>    
                <div className='new'>  <div> status:{x.status}</div> <div> duration:{time(parseInt(x.duration))}</div><div>start_date:{new Date(x.start_time).toLocaleString()}</div> <div className='jani'>end_time: {new Date(x.end_time).toLocaleString()}</div> </div></div>
                </div>
                
          )} 
      
     

    </div>
</>
  );




}

export default Mabu;




