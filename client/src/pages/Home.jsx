import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Movies from '../components/Movies';
import SelectedMovie from './SelectedMovie';

import './styles/home.css'

export default function Home() {

  const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    }, [])

  return (
    <div className='Home'>
            <Header />
        <div className='home-main-container'>
            <Movies />
        <Routes>
          <Route path="/movies/:name" element={<SelectedMovie />} /> 
        </Routes>
        </div>

    </div>
  )
}