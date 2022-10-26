import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPlus, faPlay, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, show } from 'react-bootstrap';

const MovieBox = ({title,poster_path
}) => {
    let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <div className='container'>
        <img className="img" src= {img_path+poster_path} alt="" />
        <div className="hover-details">
        <div className="hover-btn">
        <button className='faPlay'><FontAwesomeIcon className='fontIcon'  icon={faPlay} /></button>
        <button ><FontAwesomeIcon className='fontIcon' icon={faPlus} /></button>
       
        <button><FontAwesomeIcon className='fontIcon'  icon={faThumbsUp} /></button>
        <button className="more fontIcon"  ><FontAwesomeIcon icon={faCaretDown} /></button>
        </div>
        <br />
        <div>{title}</div>
        <div className="movie-details">
            <span style={{color:'lightgreen'}}>97% Match</span>
            <button >16+</button>
            <span>1h 29m</span>
            <button>HD</button>
              {/* <Modal  show={show} onHide={handleClose}>
                <Modal.Header className='bg-dark' closeButton>
                    <Modal.Title >
                        
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                <img className='card-img-top' style={{height:"500px", width: "100%"}} src={img_path+movies.info.poster_path} alt="" />
                <h2 className='mt-4'>{movies.info.title}</h2>
                        <br />
                        <br />
                <h6 >OVERVIEW:  <span className='ms-3'> {movies.info.overview}</span></h6>
                        <h5> Release Date: <span className='ms-4 '>{movies.info.release_date} </span></h5>
                        <h6 > VOte_AVERAGE: <span className='ms-4 text-success'>{movies.info.vote_average}</span> </h6>
                </Modal.Body>
              </Modal> */}

        </div> 
        <div className="text">
            Suspenseful.Mystery. Ensemble
            <br />
            
        </div>
        </div>
    </div>
  )
}

export default MovieBox