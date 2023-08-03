import React from "react";
import axios from "axios";
import "./CreateLink.css";
import { useState } from "react";

axios.defaults.baseURL = 'http://localhost:3000'

const CreateLink = ({ getLinks }) => {
    const [linkText,setLinkText] = useState('')
    const [shortText,setShortText] = useState('')
    const [clienteText,setClienteText] = useState('')
    const [projetoText,setProjetoText] = useState('')

    const handleLink = (e) => {
        setLinkText(e.target.value)
    }

    const handleShort = (e) => {
        setShortText(e.target.value)
    }

    const handleCliente = (e) => {
        setClienteText(e.target.value)
    }

    const handleProjeto = (e) => {
        setProjetoText(e.target.value)
    }

    const createLink = async () => {
        await axios.post('/add', {
            "linkOriginal": linkText,
            "short": shortText,
            "cliente": clienteText,
            "projeto": projetoText
        })

    }

    const clickCreate = async (e) => {
        await createLink()
        getLinks()
        setLinkText('')
        setShortText('')
        setClienteText('')
        setProjetoText('')
    }

    return (
        <div className="createLink">
            <input value={linkText} onChange={handleLink} type="text" placeholder="Link" />
            <input value={shortText} onChange={handleShort} type="text" placeholder="Short" />
            <input value={clienteText} onChange={handleCliente} type="text" placeholder="Cliente" />
            <input value={projetoText} onChange={handleProjeto} type="text" placeholder="Projeto" />
            <button onClick={clickCreate}>Criar</button>
        </div>
    )
}

export default CreateLink;