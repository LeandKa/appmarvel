import React, { Fragment } from 'react'
import { CardContainer } from './style'
import PropTypes from 'prop-types'

export default function Card({
  Id,
  Creators,
  Thumbnail,
  Title,
  showComics,
  name,
}) {
  return (
    <Fragment>
      {showComics ? (
        <CardContainer href={`/comic/${Id}`}>
          <img src={`${Thumbnail.path}.${Thumbnail.extension}`} alt='' />
          <Fragment>
            <h2>{Title}</h2>
            {Creators.items.length === 0 ? (
              <p>
                <span style={{ fontStyle: 'italic' }}>Writer:</span>
                <span> Not Found</span>
              </p>
            ) : (
              <p>
                <span style={{ fontStyle: 'italic' }}>Writer:</span>
                <span> {Creators.items[0].name}</span>
              </p>
            )}
          </Fragment>
        </CardContainer>
      ) : (
        <CardContainer href={`/character/${Id}`}>
          <img src={`${Thumbnail.path}.${Thumbnail.extension}`} alt='' />
          <Fragment>
            <h2>{Title}</h2>
            <span>{name}</span>
          </Fragment>
        </CardContainer>
      )}
    </Fragment>
  )
}

Card.propTypes = {
  Id: PropTypes.string,
  name: PropTypes.string,
  showComics: PropTypes.bool,
  Creators: PropTypes.object,
  Thumbnail: PropTypes.object,
  Title: PropTypes.string,
}
