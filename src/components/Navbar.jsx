import { Button } from '@chakra-ui/react'
import { ThemeContext } from '../context/ThemeContext'

import React, { useContext } from 'react'
import styles from './App.module.css'

const Navbar = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div className={styles.navbar}>
        <h2 className={styles.margin}>Logo</h2>
        <Button  colorScheme='blue' marginTop="30px" onClick={toggleTheme}>{`Make ${theme==="light"?"dark":"light"}`}</Button>
    </div>
  )
}

export default Navbar