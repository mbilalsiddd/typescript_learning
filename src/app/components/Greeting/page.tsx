import React from 'react'

// const Greeting = () => {
    type GreetingProps = {
        name:string;
        id:number;
        role:string;
        department:string
    }

    const Greeting = ({ name , id , role , department }: GreetingProps) => {
        return (
        <div>
               <h3>{name}</h3>
               <h3>{id}</h3>
               <h3>{role}</h3>
               <h3>{department}</h3>
        </div>
        )
    }
export default Greeting
