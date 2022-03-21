import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { CountryContext } from '../contexts/CountryContext'

const Searchedcountries = ({ item }) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  const { setClick } = useContext(CountryContext)

  return (
    <div className='p-4 mt-5 co-untry-one'>
      <div
        className='list mt-n4'
        style={{
          backgroundColor: theme.backgroundColor1,
          border: theme.border,
          color: theme.color,
        }}
      >
        <img src={item.flag} alt='' />
        <div className='p-4 textstart'>
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
}

export default Searchedcountries
