import React from 'react'
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
  return (
    <figure className='card animate__animated animate__fadeIn'>
      <img className='card__image' src={url} alt={title} />
      <figcaption className='card__caption'>{title}</figcaption>
    </figure>
  )
}

GifGridItem.protoTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem;