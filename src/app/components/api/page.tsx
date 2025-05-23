"use client"
import React, { useEffect, useState } from 'react'

const Api = () => {
  const [data , setdata] = useState<any[]>([]); ;

  useEffect(() => {
    const apiHandling = async () => {
        try {
            let res = await fetch("https://fakestoreapi.com/products");
            let showData = await res.json();
            console.log("showdata==> ", showData)
            setdata(showData);
            } catch (error) {
            console.log("error==> ", error)
            }
            }
            apiHandling()
    }, [])



  return (
    <>
    {
      data.length > 0 ? (
        data.map((item) => (
      <ul key={item.id} >
        <li>{<img src={item.image} alt={item.title} width={200} height={200} />}</li>
        <li>{item.category}</li>
        <li>{item.id}</li>
        <li>{item.title}</li>
        <li>{item.description}</li>
        <li>{item.price}</li>
      </ul> 
      ))
    ) : (
      <p>Loading</p>
    )
    } 
    </>
  )
}

export default Api



