import React, { useContext } from 'react'
import { CountryContext } from '../contexts/CountryContext'
import { BiArrowBack } from 'react-icons/bi'
import { ThemeContext } from '../contexts/ThemeContext'
import Header from './Header'
import { Link } from 'react-router-dom'

const Details = () => {
  const { click, loading } = useContext(CountryContext)
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = click
  return (
    <div
      className='Detail'
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      {loading === false && (
        <div>
          <Header />
          <Link to='/'>
            <div
              className='arrow d-flex mt-5 ml-4 p-2 text-center back'
              style={{
                backgroundColor: theme.backgroundColor1,
                border: theme.border,
                color: theme.color,
              }}
            >
              <div className='ml-4 ml-md-3'>
                <BiArrowBack />
              </div>
              <div className='ml-2'>Back</div>
            </div>
          </Link>
          <div className='p-4 mt-4 newdiv'>
            <div className='flagimg p-md-2 ml-md-4 mt-md-n4'>
              <img src={flag} alt='flag' />
            </div>
            <div className='mt-5 det-ail'>
              <div className='det-ails'>
                <div>
                  <p className='pname1'>{name}</p>
                  <p>Native Name: {nativeName}</p>
                  <p>Population: {population}</p>
                  <p>Region: {region}</p>
                  <p>Subregion: {subregion}</p>
                  <p>Capital: {capital}</p>
                </div>
                <div className='mt-5'>
                  <p>Top Level Domain: {topLevelDomain}</p>
                  <div>
                    {currencies.map((item, key) => (
                      <div key={key}>
                        <p>Currencies: {item.name}</p>
                      </div>
                    ))}
                  </div>
                  <div className='d-flex'>
                    <p>Languages: </p>
                    {languages.map((item, key) => (
                      <div key={key}>
                        <p> {item.name},</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div>
                <p className='pname2'>Border Countries:</p>
                <div className='flex'>
                  {borders.map((item, key) => (
                    <div key={key}>
                      <small className='border'>{item}</small>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Details
