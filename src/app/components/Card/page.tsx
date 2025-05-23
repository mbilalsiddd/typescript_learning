import React from 'react'
import Image from 'next/image';


  type CardProps = {
    image:string
    title:string
    description:string
    button:string
}

  const Card = ({ image , title ,  description ,   button}: CardProps) => {
    return (
    <>
      <Image src={image} alt="user" height={250} width={300} />
      <h3>{title}</h3>
      <p>{ description}</p>
      <button>{button}</button>
    </>
  )
}

export default Card
