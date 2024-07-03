'use client'
import { toggleTheme } from '@/redux/features/themeToggleSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect } from 'react'

const ThemeToggler = () => {
    const dispatch = useAppDispatch();
    const isThemeDark = useAppSelector(state => state.themeToggle.isThemeDark);
    const handleToggle = () => {
      dispatch(toggleTheme())
    }
  // Apply dark mode to the document body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isThemeDark);
  }, [isThemeDark]);
  return (
    <button className={`dark-mode-toggle ${isThemeDark ? 'dark' : 'light'}`} onClick={handleToggle}>
      {isThemeDark ? (
        <i className='fa-regular fa-sun-bright'></i>
      ) : (
        <i className='fa-regular fa-moon'></i>
      )}
    </button>
  )
}

export default ThemeToggler