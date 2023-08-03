import React from "react";
import Link from "./Link";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = 'http://localhost:3000'

const Links = () => {
    const [dbLoaded,setDbLoaded] = useState(false)
    const [data,setData] = useState('')
    const getLinks = async () => {
        try {
            const retorno = await axios.get('/')
            setData(retorno.data)
        } catch (err) {
            console.log(err)
        }
    }
    if (!dbLoaded) {
        getLinks()
        setDbLoaded(true)
    }


    console.log(data)

    return (
    <>
        <Link />
        <Link />
    </>
    )
}

export default Links;