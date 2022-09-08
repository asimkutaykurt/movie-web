import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviedata from '../movielist.json';
import './styles/selectedMovie.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export default function SelectedMovie() {
  const [eachMovie, setEachMovie] = useState([]);
  const { name } = useParams();
  
  useEffect(() => {
    /* const showEachMovie = () => {
      setEachMovie(moviedata);
    };
    showEachMovie(); */
    const findMovie = () => {
      const showMovie = moviedata.find((product) => product.name === name)
      setEachMovie(showMovie)
      console.log(showMovie);
    }
    findMovie()


  }, [name]);

  return (
    <div className='Selected-Movie'>
        <div className='selected-movie-info-box'>
            <h2>{name}</h2>
          <div className='picture-box'>
            <img src={eachMovie.bild} alt="" />
          </div>
            <h4>{eachMovie.beschreibung}</h4>
            <h3 className='spielzeit-title'>Oktober: Tägliche Uhrzeiten</h3>
            <div className='spielzeit-box'>
              <div className='spielzeit'>
                <div>
                  <p><WatchLaterIcon /></p>
                </div>

                <div>
                  <p>14:15</p>
                </div>
              </div>

              <div className='spielzeit'>
                  <p><WatchLaterIcon /></p>

                  <p>18:30</p>
              </div>

              <div className='spielzeit'>
                  <p><WatchLaterIcon /></p>

                  <p>20:30</p>
              </div>

              <div className='spielzeit'>
                  <p><WatchLaterIcon /></p>

                  <p>22:30</p>
              </div>

              <div className='spielzeit'>
                  <p><WatchLaterIcon /></p>
                  <p>23:30</p>
              </div>
            </div>
        </div>

    </div>
  );
}
