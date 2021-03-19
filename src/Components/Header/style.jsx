import style from 'styled-components'
import { FaSearch } from 'react-icons/fa'

export const HeaderContainer = style.header`
   display: grid;
  grid-template-columns: 0.5fr 0.4fr 4.0fr 0.5fr;
  grid-template-rows: 0.6fr 0.1fr 1.2fr;
  gap: 0px 0px;
  background-color:${(props) => props.theme.colors.background};
  grid-template-areas:
    "Login Logo Logo Search"
    "Login Logo Logo Search"
    "Menu Menu Menu Menu";
    @media(max-width:940px){
      grid-template-rows: 1fr 0.1fr;
    grid-template-areas:
    "Login Logo Logo Search"
    "Login Logo Logo Search";
  }
`
export const LoginSpan = style.span`
  grid-area:Login;
  height:63%;
  color:${(props) => props.theme.colors.third};
  text-align:center;
  padding:1.0rem;
  border-right:1px solid ${(props) => props.theme.colors.third};
  font-size:1.0rem;
  &:hover{
    cursor:pointer;
    color:${(props) => props.theme.colors.secondary};
  }@media(max-width:940px){
    display:none;
  }
`

export const Logo = style.img`
  grid-area:Logo;
  width:100%;
  height:40px;
`

export const Menu = style.ul`
  grid-area:Menu;
  display:grid;
  border-top:1px solid ${(props) => props.theme.colors.third};
  grid-template-columns: 1.0fr 1.0fr 1.0fr 1.0fr;
  height:33px;
  grid-gap:1.0rem;
  list-style:none;
  @media(max-width:940px){
    display:none;
  }
`

export const MenuItem = style.a`
justify-content:center;
color:${(props) => props.theme.colors.third};
text-decoration:none;
width:30%;
text-align:center;
margin-top:1.0rem;
&:hover{
  color:${(props) => props.theme.colors.secondary};
  cursor:pointer;
  text-decoration:none;
}
`

export const SearchSpan = style.a`
  grid-area:Search;
  height:63%;
  text-align:center;
  justify-content:center;
  text-decoration:none;
  border-left:1px solid ${(props) => props.theme.colors.third};
  color:${(props) => props.theme.colors.third};
  padding:1.0rem;
  font-size:1.0rem;
  &:hover{
    color:${(props) => props.theme.colors.secondary};
  }
`

export const IconSpan = style(FaSearch)`
 color:${(props) => props.theme.colors.third};
 &:hover{
   color:${(props) => props.theme.colors.secondary};
 }
`
