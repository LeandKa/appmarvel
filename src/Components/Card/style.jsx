import style from 'styled-components'

export const CardContainer = style.a`
display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-decoration:none;
  color:black;
  &:hover {
    color:${({ theme }) => theme.colors.secondary};
  }
  img{
    width:250px;
    height:auto;
    max-height:350px;
    min-height:350px;
    position: relative;
    top: 0;
    transition: all 0.3s ease-out;
    box-shadow:  6px 10px 4px rgba(0, 0, 0, 0.15);
    &:hover {
    top: -10px;
  }
  }
  h2{
  font-size:${({ theme }) => theme.fontSizes.small};
  cursor:pointer;
  margin-top:5px;
  font-family: "Roboto Bold", "Trebuchet MS", Helvetica, Arial, sans-serif;
  }
  p{
    margin:0px;
    cursor:pointer;
    color:${({ theme }) => theme.colors.primary};
  }
`
