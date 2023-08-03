import Links from './components/Links'
import React from 'react'
import { useState } from 'react'
import axios from "axios";
import CreateLink from './components/CreateLink';
import './App.css'

axios.defaults.baseURL = 'http://localhost:3000'

const App = () => {
  const [links,setLinks] = useState([])
  const [dbLoaded,setDbLoaded] = useState(false)

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
        setDbLoaded(true)
    }

  return (
    <>
      <CreateLink getLinks={getLinks} />
      <Links links={links} />
    </>
  )
}

export default App
