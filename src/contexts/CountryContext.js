// storeContext contains our data from data.json
import React, { useState, createContext, useEffect, useContext } from 'react'
import axios from 'axios'
import { ThemeContext } from './ThemeContext'
import Details from '../components/Details'
import { Link } from 'react-router-dom'

export const CountryContext = createContext()

const CountryContextProvider = ({ children }) => {
  // the array of data to hold the json data provided, data here as an array is empty.

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [click, setClick] = useState([])

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)

  const getAdvice = () => {
    axios.get('https://restcountries.com/v2/all').then((response) => {
      //   console.log(response)
      const myCountries = response.data
      setCountries(myCountries)
      setLoading(false)
    })
  }
  useEffect(() => {
    getAdvice()
  }, [])

  const country = countries.map((item, key) => (
    <div key={key} className='p-5'>
      <div
        key={key}
        className='list mt-n4'
        style={{
          backgroundColor: theme.backgroundColor1,
          border: theme.border,
          color: theme.color,
        }}
      >
        <img src={item.flag} alt='' />
        <div className='p-4'>
          <Link to='/Details'>
            <p
              className='pname'
              onClick={() => setClick(item)}
              style={{
                color: theme.color,
              }}
            >
              {item.name}
            </p>
          </Link>
          <p>Populaton: {item.population}</p>
          <p>Region: {item.region}</p>
          <p>Capital: {item.capital}</p>
        </div>
      </div>
    </div>
  ))

  const Africa = countries
    .filter((item) => {
      if (item.region === 'Africa') {
        return item
      }
    })
    .map((item, key) => {
      return (
        <div key={key} className='p-5'>
          <div
            key={key}
            className='list mt-n4'
            style={{
              backgroundColor: theme.backgroundColor1,
              border: theme.border,
              color: theme.color,
            }}
          >
            <img src={item.flag} alt='' />
            <div className='p-4'>
              <Link to='/Details'>
                <p
                  className='pname'
                  onClick={() => setClick(item)}
                  style={{
                    color: theme.color,
                  }}
                >
                  {item.name}
                </p>
              </Link>
              <p>Populaton: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </div>
        </div>
      )
    })

  const America = countries
    .filter((item) => {
      if (item.region === 'Americas') {
        return item
      }
    })
    .map((item, key) => {
      return (
        <div key={key} className='p-5'>
          <div
            key={key}
            className='list mt-n4'
            style={{
              backgroundColor: theme.backgroundColor1,
              border: theme.border,
              color: theme.color,
            }}
          >
            <img src={item.flag} alt='' />
            <div className='p-4'>
              <Link to='/Details'>
                <p
                  className='pname'
                  onClick={() => setClick(item)}
                  style={{
                    color: theme.color,
                  }}
                >
                  {item.name}
                </p>
              </Link>
              <p>Populaton: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </div>
        </div>
      )
    })

  const Asia = countries
    .filter((item) => {
      if (item.region === 'Asia') {
        return item
      }
    })
    .map((item, key) => {
      return (
        <div key={key} className='p-5'>
          <div
            key={key}
            className='list mt-n4'
            style={{
              backgroundColor: theme.backgroundColor1,
              border: theme.border,
              color: theme.color,
            }}
          >
            <img src={item.flag} alt='' />
            <div className='p-4'>
              <Link to='/Details'>
                <p
                  className='pname'
                  onClick={() => setClick(item)}
                  style={{
                    color: theme.color,
                  }}
                >
                  {item.name}
                </p>
              </Link>
              <p>Populaton: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </div>
        </div>
      )
    })

  const Europe = countries
    .filter((item) => {
      if (item.region === 'Europe') {
        return item
      }
    })
    .map((item, key) => {
      return (
        <div key={key} className='p-5'>
          <div
            key={key}
            className='list mt-n4'
            style={{
              backgroundColor: theme.backgroundColor1,
              border: theme.border,
              color: theme.color,
            }}
          >
            <img src={item.flag} alt='' />
            <div className='p-4'>
              <Link to='/Details'>
                <p
                  className='pname'
                  onClick={() => setClick(item)}
                  style={{
                    color: theme.color,
                  }}
                >
                  {item.name}
                </p>
              </Link>
              <p>Populaton: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </div>
        </div>
      )
    })
  const Oceania = countries
    .filter((item) => {
      if (item.region === 'Oceania') {
        return item
      }
    })
    .map((item, key) => {
      return (
        <div key={key} className='p-5'>
          <div
            key={key}
            className='list mt-n4'
            style={{
              backgroundColor: theme.backgroundColor1,
              border: theme.border,
              color: theme.color,
            }}
          >
            <img src={item.flag} alt='' />
            <div className='p-4'>
              <Link to='/Details'>
                <p
                  className='pname'
                  onClick={() => setClick(item)}
                  style={{
                    color: theme.color,
                  }}
                >
                  {item.name}
                </p>
              </Link>
              <p>Populaton: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </div>
        </div>
      )
    })

  return (
    <CountryContext.Provider
      value={{
        click,
        country,
        loading,
        countries,
        Africa,
        America,
        Asia,
        Europe,
        Oceania,
        setClick,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export default CountryContextProvider
