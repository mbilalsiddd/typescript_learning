import React from 'react'


interface info {
    name:string
    fatherName:string
    gmail:string
    contact:number
    message:string
}

const Structure = () => {

const information: info = {
    name:"yousuf",
    fatherName:"yousuf",
    gmail:"yousuf@gmail.com",
    contact:98488,
    message:"today is friday and tomoorow is saturday",
}

console.log("information==>" , information);
const {name , gmail , fatherName , contact , message} = information
console.log(name);
console.log(fatherName);
console.log(gmail);
console.log(contact);
console.log(message);


const updateData: (string | number | any)[] =
 [ 
  "Bilal",
  42,
  ["nested", 99],
  ["level1", ["level2", 123]],
  7,
  "hello"
];

console.log("updateData==>" , updateData)

const [first , second , third , fourth , fifth , sixth] = updateData
console.log(first);
console.log(second);
console.log(third[0]);
console.log(third[1]);
console.log(fourth[0])
console.log(fourth[1][0]);
console.log(fourth[1][1]);
console.log(fifth)
console.log(sixth)


  return (
    <>

    </>
  )
}

export default Structure



