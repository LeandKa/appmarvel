import React, { Fragment } from 'react'
import style from 'styled-components'
import PropTypes from 'prop-types'
import Loader from '../Loader/index'

const Button = style.button`
   width:auto;
   padding:1.0rem;
   display:${(props) => (props.more ? 'block' : 'none')};
   height:50px;
   align-self:center;
   margin:3.0rem;
   background-color:${({ theme }) => theme.colors.secondary};
   color:${({ theme }) => theme.colors.third};
   border:none;
   transition: all 0.3s ease-out;
   border-top-left-radius:100px;
   border-bottom-right-radius:100px;
   &:focus{
     box-shadow:  6px 10px 4px rgba(0, 0, 0, 0.15);
     outline:none;
   }
   &:hover{
     cursor:pointer;
     box-shadow:  6px 10px 4px rgba(0, 0, 0, 0.15);
   }
   
`

export default function LoadMore({ click, show, classe, more }) {
  return (
    <Fragment>
      {!show ? (
        <Button more={more} onClick={click}>
          Load More
        </Button>
      ) : (
        <Loader classe={classe} />
      )}
    </Fragment>
  )
}

LoadMore.propTypes = {
  click: PropTypes.func,
  show: PropTypes.bool,
  classe: PropTypes.string,
  more: PropTypes.bool,
}
