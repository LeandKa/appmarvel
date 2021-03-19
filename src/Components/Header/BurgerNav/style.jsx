import style from 'styled-components'

export const BurgerNavMenu = style.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    text-align: center;
    list-style: none;
    a {
      text-decoration: none;
      color: white;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    top: 32px;
    right:0px;
    z-index:4;
    background-color: ${(props) => props.theme.colors.background};
    height: 100vh;
    width:100%;
    padding-top: 3.5rem;
    transition: transform 0.6s ease-in-out;
  }
`
export const BurgerItem = style.a`
  text-decoration: none;
  font-size: 1rem;
  margin:2.0rem;
  text-align:left;
  color: ${({ theme }) => theme.colors.third};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.2s ease-out;
    opacity: 0.8;
  }
`

export const BurgerNavLogin = style.div`
    display:flex;
    flex-direction:column;
    border-top:1px solid  ${({ theme }) => theme.colors.third};
    border-bottom:1px solid  ${({ theme }) => theme.colors.third};
    margin:0.3rem;
    h1{
      color:${({ theme }) => theme.colors.third};
      font-size:${({ theme }) => theme.fontSizes.medium};
    }
    a{
      color:${({ theme }) => theme.colors.third};
      margin-left:1.0rem;
      text-decoration:none;
      font-size:${({ theme }) => theme.fontSizes.small};
      &:hover {
        cursor:pointer;
        color:${({ theme }) => theme.colors.secondary};
      }
    }
`

export const BurgerSocial = style.div`
 grid-area:Menu;
  display:grid;
  grid-template-columns: 1.0fr 1.0fr 1.0fr 1.0fr;
  height:33px;
  grid-gap:1.0rem;
  list-style:none;
`
