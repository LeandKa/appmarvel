import style from 'styled-components'
import RadioGroup from '@material-ui/core/RadioGroup'

export const SearchContainer = style.form`
 display: flex;
 flex-direction: row;
 text-align: center;
 justify-content: center;
 margin: 20px;

 input{
   font-family:roboto;
   text-transform:capitalize;
   font-size:1.5rem;
   border-top:none;
   border-left:none;
   border-right:none;

   &:focus{
   border-top:none;
   outline:none;
   border-left:none;
   border-right:none;
   }
   &:hover{
    border-top:none;
   border-left:none;
   border-right:none;
   }
 }
`

export const SearchIcon = style.button`
     border:none;
     background:transparent;
     position:relative;
     top:0px;
     right:30px;
     &:focus{
       outline:none;
     }
   
`

export const Check = style(RadioGroup)`
 display:flex;
 gap:1.0rem;
 flex-direction:row;
 margin-top:10px;
 label{
   margin-left:1.0rem;
   color:black;
 }
 input{
 }
`
