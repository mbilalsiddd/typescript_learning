"use client"
import React, { useEffect, useState } from 'react'

interface User {
    name: string
    department: string
    rollnumber: string
}

const Hook = () => {

    const [value, setValue] = useState<number>(0)
    console.log("value==> ", value);

    const [info, setInfo] = useState<User[]>([
        {
            name: "bilal",
            department: "SE",
            rollnumber: "2021F-bse-139",
        },
        {
            name: "mustafa",
            department: "bio",
            rollnumber: "2021F-bse-176",
        },
        {
            name: "habib",
            department: "civil",
            rollnumber: "2021F-bse-198",
        }
    ])


    console.log("info==>", info);

    const addValue = () => {
        setValue((prev) => prev + 1)
        console.log("setValue==>", setValue)
    }

    const addName = () => {
        setInfo([
            {
                name: "sarfaraz",
                department: "cs",
                rollnumber: "2021f-bscs-122",
            },
            {
                name: "yousuf",
                department: "electronic",
                rollnumber: "2021f-bse-10",
            },
            {
                name: "abdul",
                department: "electrical",
                rollnumber: "2021f-bsel-122",
            }
        ]);
    }
        return (
            <>
                <button onClick={addValue}>Enter and add Value</button>
                <p>{value}</p>
                <button onClick={addName}>Enter and change name</button>
                <h3>Student Information</h3>
                <p>{info[0].name}</p>
                <p>{info[0].department}</p>
                <p>{info[0].rollnumber}</p>
                <br/>
                <p>{info[1].name}</p>
                <p>{info[1].department}</p>
                <p>{info[1].rollnumber}</p>
                <br/>
                <p>{info[2].name}</p>
                <p>{info[2].department}</p>
                <p>{info[2].rollnumber}</p>
                </>
        )
    }

    export default Hook