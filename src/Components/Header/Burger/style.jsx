import style from 'styled-components'

export const BurgerContainer = style.div`
width:2rem;
  height:2.2rem;
  position:relative;
  top:10px;
  right:20px;
  z-index:20;
  display:none;
  @media(max-width:940px){
    grid-area:Logo;
    display:flex;
    justify-content:space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2.0rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    margin:0.2rem;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
