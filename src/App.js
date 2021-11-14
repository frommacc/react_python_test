import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [domains, setDomains] = useState([])
  const [urls, setUrls] = useState([])

  const getDomains = async () => {
    const { data } = await axios.get('http://localhost:5000/domains')
    setDomains(data)
  }

  const getUrls = async () => {
    const { data } = await axios.get('http://localhost:5000/urls')
    setUrls(data)
  }
  useEffect(() => {
    getDomains()
    getUrls()
  }, [])

  return (
    <div className='app'>
      <h1>React frontend for Python backend</h1>

      {/* Domains */}
      <div className='container'>
        <h2>Domains</h2>
        <ul className='data'>
          {domains.map((domain) => (
            <li>
              <a href={domain} target='_blank' rel='noreferrer'>
                {domain}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Urls */}
      <div className='container'>
        <h2>Urls</h2>
        <ul className='data'>
          {urls.map((url) => (
            <li>
              <a href={url} target='_blank' rel='noreferrer'>
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
