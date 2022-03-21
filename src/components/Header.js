import React, { useContext } from 'react'
import { HiMoon } from 'react-icons/hi'
import { FaCloudSun } from 'react-icons/fa'
import { ThemeContext } from '../contexts/ThemeContext'

const Header = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  return (
    <div>
      <section
        className='row p-4'
        style={{ backgroundColor: theme.backgroundColor1 }}
      >
        <div className='col-6 mt-3 flex-one'>
          <p>Where in the world?</p>
        </div>
        <div className='col-6 d-flex mt-3'>
          <div className='mosun flex-two'>
            <p onClick={toggleTheme}>{isDark ? <HiMoon /> : <FaCloudSun />}</p>
          </div>
          <div className='ml-5 flex-three'>
            <p>{isDark ? 'Dark Mode' : 'Light Mode'}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
