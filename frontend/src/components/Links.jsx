import React from "react";
import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'

const Link = () => {
    const [data,setData] = useState('')
    const getLinks = async () => {
        try {
            const retorno = await axios.get('/')
            setData(JSON.stringify(retorno.data))
        } catch (err) {
            console.log(err)
        }
    }
    getLinks()

    console.log(data)
    
    return <p>Hello world!</p>

}

export default Link;