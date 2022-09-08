import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moviedata from '../movielist.json';
import './styles/movies.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [like, setLike] = useState();
    const [isLiked, setIsLiked] = useState(false);

    const showAllKategories = moviedata.map((item) => {
        return item.kategorie;
    })

    console.log(showAllKategories);

    const handleLike = () => {
        if(isLiked) {
            setLike(<FavoriteIcon />)
        } else {
            setLike(<FavoriteBorderIcon />)
        }
        setIsLiked(!isLiked);
    }

    const token = localStorage.getItem('TOKEN')

    useEffect(() => {
        const fetchMovies = async () => {
            setMovies(moviedata);
        }
        fetchMovies()
    }, [])

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter kategories

  const filterComedy = movies.filter((comedy) => {
    return comedy.kategorie === "Komödie"
  });

  const filterHorror = movies.filter((horror) => {
    return horror.kategorie === "Horror"
  });

  const filterDokumentation = movies.filter((dokumentation) => {
    return dokumentation.kategorie === "Dokumentation"
  });

  const filterDrama = movies.filter((drama) => {
    return drama.kategorie === "Drama"
  });

  return (
    <div className='Movies'>
        <div className='movies-main-container'>
            <Box sx={{ minWidth: { xs: 400, sm: 1300 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    >
                        <h2>Comedy</h2>
            {filterComedy.map(({ name, beschreibung, start, fsk, kategorie, laenge, produktionsland, bild}) => {
                return(
                    
                    <div key={name}className='movie-box'>
                        <div className='movie-cover-container'>
                            <Link to={`movies/${name}`}><img title={name} className='movie-cover-picture' src={bild} alt="" /></Link>

                        </div>

                        <div className='movie-description-container'>
                            <ul>
                                <Link className='link' to={`/movies/${name}`} ><li className='movie-short-info movie-short-info-name' title={name} ><span className='movie-short-info-first-word '>Name:</span>{name}</li></Link>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>Start:</span>{start}</li>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>Kategorie:</span>{kategorie}</li>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>FSK:</span>{fsk}</li>
                                <FavoriteBorderIcon onClick={handleLike} />
                            </ul>
                        </div>
                    </div>

                    
                )
            })}

                    </Tabs>
            </Box>
        </div>
        <div className='movies-main-container'>
            <Box sx={{ minWidth: { xs: 400, sm: 1300 }, bgcolor: 'background.paper' }}>
        <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                >
                    <h2>Horror</h2>
        {filterHorror.map(({ name, beschreibung, start, fsk, kategorie, laenge, produktionsland, bild}) => {
            return(
                
                <div key={name}className='movie-box'>
                    <div className='movie-cover-container'>
                        <Link to={`movies/${name}`}><img title={name} className='movie-cover-picture' src={bild} alt="" /></Link>

                    </div>

                    <div className='movie-description-container'>
                        <ul>
                            <Link className='link' to={`/movies/${name}`} ><li className='movie-short-info movie-short-info-name' title={name} ><span className='movie-short-info-first-word '>Name:</span>{name}</li></Link>
                            <li className='movie-short-info'><span className='movie-short-info-first-word'>Start:</span>{start}</li>
                            <li className='movie-short-info'><span className='movie-short-info-first-word'>Kategorie:</span>{kategorie}</li>
                            <li className='movie-short-info'><span className='movie-short-info-first-word'>FSK:</span>{fsk}</li>
                            <FavoriteBorderIcon onClick={handleLike} />
                        </ul>
                    </div>
                </div>

                
            )
        })}

        
        </Tabs>

            </Box>
        </div>

        <div className='movies-main-container'>
            <Box sx={{ minWidth: { xs: 400, sm: 1300 }, bgcolor: 'background.paper' }}>
            <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    >
                        <h2>Dokumentation</h2>
            {filterDokumentation.map(({ name, beschreibung, start, fsk, kategorie, laenge, produktionsland, bild}) => {
                return(
                    
                    <div key={name}className='movie-box'>
                        <div className='movie-cover-container'>
                            <Link to={`movies/${name}`}><img title={name} className='movie-cover-picture' src={bild} alt="" /></Link>

                        </div>

                        <div className='movie-description-container'>
                            <ul>
                                <Link className='link' to={`/movies/${name}`} ><li className='movie-short-info movie-short-info-name' title={name} ><span className='movie-short-info-first-word '>Name:</span>{name}</li></Link>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>Start:</span>{start}</li>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>Kategorie:</span>{kategorie}</li>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>FSK:</span>{fsk}</li>
                                <FavoriteBorderIcon onClick={handleLike} />
                            </ul>
                        </div>
                    </div>

                    
                )
            })}

            
            </Tabs>
            </Box>
        </div>
            
        <div className='movies-main-container'>
            <Box sx={{ minWidth: { xs: 400, sm: 1300 }, bgcolor: 'background.paper' }}>
            <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    className='tab'
                    >
                        <h2>Drama</h2>
            {filterDrama.map(({ name, beschreibung, start, fsk, kategorie, laenge, produktionsland, bild}) => {
                return(
                    
                    <div key={name}className='movie-box'>
                        <div className='movie-cover-container'>
                            <Link to={`movies/${name}`}><img title={name} className='movie-cover-picture' src={bild} alt="" /></Link>

                        </div>

                        <div className='movie-description-container'>
                            <ul>
                                <Link className='link' to={`/movies/${name}`} ><li className='movie-short-info movie-short-info-name' title={name} ><span className='movie-short-info-first-word '>Name:</span>{name}</li></Link>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>Start:</span>{start}</li>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>Kategorie:</span>{kategorie}</li>
                                <li className='movie-short-info'><span className='movie-short-info-first-word'>FSK:</span>{fsk}</li>
                                <FavoriteBorderIcon onClick={handleLike} />
                            </ul>
                        </div>
                    </div>

                    
                )
            })}

            
            </Tabs>
            </Box>
        </div>
        </div>
  )
}
