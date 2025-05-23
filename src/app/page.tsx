import React from 'react'
import Greeting from './components/Greeting/page'
import Card from './components/Card/page'
import Hook from './components/Hook/page'
import Api from './components/api/page'
import Structure from './components/Structure/page'


const page = () => {
  return (
    <>
    <Greeting 
      name="bilal"
      id={4132}
      role="Doctor"
      department="Heart diseases"
    />
    <br/>
     <Greeting 
      name="bilal"
      id={4132}
      role="Doctor"
      department="Heart diseases"
    />
    <br/>
     <Greeting 
      name="bilal"
      id={4132}
      role="Doctor"
      department="Heart diseases"
    />
   <br/>
    <Card
     image="/images/Operational Excellence.png"
     title="Banner"
     description="Banner define the advantage of working in different building" 
     button="View Detail"
     />

   <br/>
    <Card
     image="/images/Operational Excellence.png"
     title="Banner"
     description="Banner define the advantage of working in different building" 
     button="View Detail"
    />
  <br/>
    <Card
     image="/images/Operational Excellence.png"
     title="Banner"
     description="Banner define the advantage of working in different building" 
     button="View Detail"
    />
  <br/>
   <Hook/>
  
  <br/>
   <Api/>
  <br/> 
  <Structure/>
  </>
  )
}

export default page