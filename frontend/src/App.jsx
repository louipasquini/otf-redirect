import Links from './components/Links'
import React from 'react'
import { useState } from 'react'
import axios from "axios";
import CreateLink from './components/CreateLink';
import Filter from './components/Filter';
import './App.css'

axios.defaults.baseURL = 'http://localhost:3000'

const App = () => {
  const [links,setLinks] = useState([])
  const [clientes,setClientes] = useState(['Todos'])
  const [dbLoaded,setDbLoaded] = useState(false)

  const takeClientes = () => {
    links.map(link => {
      const newClientes = clientes;
      clientes.push(link.clientes)
      setClientes(newClientes)
    })
  }

  const getLinks = async () => {
      try {
          const retorno = await axios.get('/')
          setLinks(retorno.data)
      } catch (err) {
          console.log(err)
      }
    }

    if (!dbLoaded) {
        getLinks()
        takeClientes()
        console.log(clientes)
        setDbLoaded(true)
    }

  return (
    <>
      <CreateLink getLinks={getLinks} />
      <Filter />
      <Links links={links} />
    </>
  )
}

export default App
