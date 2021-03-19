import React from 'react'
import style from 'styled-components'

const FooterContainer = style.div`
  width:100%;
   clear: both;
   position: relative;
   height: 43px;
   margin-top: 10px;
  background:${(props) => props.theme.colors.background};

  h1{
    text-align:center;
    font-size:${({ theme }) => theme.fontSizes.small};
    color:${(props) => props.theme.colors.third};
  }
  a{
    text-decoration:none;
    color:${(props) => props.theme.colors.third};
    &:hover{
      color:${(props) => props.theme.colors.secondary};
    }
  }
`

export default function Footer() {
  return (
    <FooterContainer>
      <h1>
        Made by{' '}
        <a href='https://github.com/LeandKa' target='_blank' rel='noreferrer'>
          Leandro Cavalcanti
        </a>
      </h1>
    </FooterContainer>
  )
}
