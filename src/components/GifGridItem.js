import React from 'react'

const GifGridItem = ({title,url}) => {
  return (
    <figure className='card animate__animated animate__fadeIn'>
        <img className='card__image' src={url} alt={title}/>
        <figcaption className='card__caption'>{title}</figcaption>
    </figure>
  )
}

export default GifGridItem;