import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Container from '../../Components/Layout/Container'
import Title from '../../Components/Layout/Title'
import Api from '../../services/service'
import style from 'styled-components'
import Details from '../../Components/Layout/Details/index'
import Loading from '../../Components/Layout/LoadComponents/Loader/'

const InitialState = {
  character: {},
  loading: true,
}

const Img = style.img`
    width:50%;
    max-height:500px;
    min-height:500px;
    @media(max-width:600px){
   width:100%
  }
`

const Body = style.div`
display: flex;
  flex-direction: column;
  text-align:center;
  justify-content:center;
  width: 100%;
   h1{
      font-size:${({ theme }) => theme.fontSizes.medium};
    }
`

export default function CharacterDetails() {
  const { id } = useParams()
  const [item, setItem] = useState(InitialState)

  useEffect(() => {
    Api.get('characters', {
      params: {
        id: id,
      },
    }).then((result) => {
      console.log(result.data.data.results)
      setItem({ character: result.data.data.results[0], loading: false })
    })
  }, [])

  return (
    <Container>
      <Header></Header>
      <Title text='Character' />
      {item.loading ? (
        <Loading classe={'loading-big'} />
      ) : (
        <>
          <Details>
            <Img
              src={`${item.character.thumbnail.path}.${item.character.thumbnail.extension}`}
              alt=''
            />
            <Body>
              <Title text={item.character.name} />
              {item.character.description === '' ? (
                <p>Description Not Found Sorry</p>
              ) : (
                <p>{item.character.description}</p>
              )}
            </Body>
          </Details>
          <Footer />
        </>
      )}
    </Container>
  )
}
