import { useState, useEffect, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { ThemeContext } from '../contexts/ThemeContext'
import axios from 'axios'
import Searchedcountries from './Searchedcountries'
import Header from './Header'
import { CountryContext } from '../contexts/CountryContext'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  const { country } = useContext(CountryContext)

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
  console.log(countries)
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      <Header />
      <Fragment>
        {loading === false && (
          <div>
            <div className='coun-try'>
              <div className='search p-4 text-center'>
                <BiSearchAlt2 className='react-icon' />
                <input
                  type='text'
                  id='search'
                  className='w-100 p-3 mt-n3 inpuut text-center p-md-2'
                  style={{
                    backgroundColor: theme.backgroundColor1,
                    border: theme.border,
                    color: theme.color,
                  }}
                  placeholder='Search for a country...'
                  onChange={(event) => {
                    setSearch(event.target.value)
                  }}
                />
                {countries
                  .filter((item) => {
                    if (search == '') {
                      return null
                    } else if (
                      item.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item
                    }
                  })
                  .map((item, key) => {
                    return (
                      <div key={key}>
                        <div className='list'>
                          <Searchedcountries key={key} item={item} />
                        </div>
                      </div>
                    )
                  })}
              </div>
              <div className='dropdown p-4 mt-n3'>
                <a
                  className='btn btn-secondary dropdown-toggle p-3 w-75 inpuut1 p-md-2'
                  href='#'
                  role='button'
                  id='dropdownMenuLink'
                  data-toggle='dropdown'
                  aria-expanded='false'
                  style={{
                    backgroundColor: theme.backgroundColor1,
                    border: theme.border,
                    color: theme.color,
                  }}
                >
                  Filter by Region
                </a>

                <div
                  className='dropdown-menu mt-2 inpuut2'
                  aria-labelledby='dropdownMenuLink'
                  style={{
                    backgroundColor: theme.backgroundColor1,
                    border: theme.border,
                    color: theme.color,
                  }}
                >
                  <Link
                    className='dropdown-item'
                    to='/Africa'
                    style={{
                      color: theme.color,
                    }}
                  >
                    Africa
                  </Link>
                  <Link
                    className='dropdown-item'
                    to='/America'
                    style={{
                      color: theme.color,
                    }}
                  >
                    America
                  </Link>
                  <Link
                    className='dropdown-item'
                    to='/Asia'
                    style={{
                      color: theme.color,
                    }}
                  >
                    Asia
                  </Link>
                  <Link
                    className='dropdown-item'
                    to='/Europe'
                    style={{
                      color: theme.color,
                    }}
                  >
                    Europe
                  </Link>
                  <Link
                    className='dropdown-item'
                    to='/Oceania'
                    style={{
                      color: theme.color,
                    }}
                  >
                    Oceania
                  </Link>
                </div>
              </div>
            </div>
            <div className='co-untry'>{country}</div>
          </div>
        )}
      </Fragment>
    </div>
  )
}

export default Countries
