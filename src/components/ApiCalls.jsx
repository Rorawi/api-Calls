import axios from 'axios';
import React, { useState, useEffect } from 'react';


const ApiCalls = () => {
    const [user, setUser] = useState([]);
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) =>
    setUser( response.data)
    ).catch((err)=> {
        console.log(err);
    })
  })
// setTimeout(() => {
//     console.log("first");
// }, 1000);

// console.log("second");
    

// let promiseForChocomilo = new Promise((reject, reject) => {
//     let giveMilo =  false;
//     if (giveMilo) {
//         resolve("chocomilo")
//     } else {
//         reject("no chocomilo for you haha... go home!")
//     }
// })



// promiseForChocomilo.then(res=>{
//     console.log('Wini says' + res);
// }).catch(err=> {
//     console.log("Wini says" + err );
// })
    return (
        <div>
            {user.map((item)=> {
                return(
                    <div key={item.id}>
                    <h1>Name: {item.name}</h1>
                    <h1>Name: {item.id}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default ApiCalls;
