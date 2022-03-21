import React, { useContext } from 'react'
import { CountryContext } from '../contexts/CountryContext'
import { ThemeContext } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import Header from './Header'

const Africa = () => {
  const { loading, Africa } = useContext(CountryContext)
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)

  return (
    <div
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
          <div className='mt-3 co-untry'>{Africa}</div>
        </div>
      )}
    </div>
  )
}

export default Africa
