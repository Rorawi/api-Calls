import React, { Component } from 'react';

class ApiCallsClass extends Component {
    constructor(props) {
        super(props);
        this.state = {user: [
         {   
            name:"Winifred" 
         }
        ]}
    }

componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> {
        res.json()
        .then((data) => {
            this.setState({user:data})
            console.log(data)
        })
    })
}

    render() {
        return (
            <div>
                {this.state.user.map((item)=> {
                       return(
                        <div key={item.id}>
                        <h1>Name : {item.name}</h1>
                        <br/>
                        <h1>Email : {item.email}</h1>
                        </div>
                       )
                })}
            </div>
        );
    }
}

export default ApiCallsClass;
