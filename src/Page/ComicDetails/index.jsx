import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Container from '../../Components/Layout/Container'
import Title from '../../Components/Layout/Title'
import api from '../../services/service'
import style from 'styled-components'
import Details from '../../Components/Layout/Details/index'
import Loading from '../../Components/Layout/LoadComponents/Loader/'

const InitialState = {
  comic: {},
  creators: [],
  loading: true,
}

const Img = style.img`
width:50%;
    height:100%;
    max-height:500px;
    min-height:500px;
    @media(max-width:600px){
   width:100%;`

const Creators = style.div`
display: flex;
  flex-direction: column;
  min-height:500px;
  max-height:500px;
  width: 100%;
   h1{
      font-size:${({ theme }) => theme.fontSizes.medium};
      text-align:center;
      margin-top:5.0rem;
    }
    span{
      text-align:center;
    }
  }
`

const CreatorsBody = style.div`
   display:grid;
   grid-template-columns:repeat(3,auto);
   justify-content:center;
   gap:1.0rem;
   margin-top:${({ theme }) => theme.fontSizes.medium};
    h2{
      text-align:center;
      font-size:${({ theme }) => theme.fontSizes.small};
    }

`

export default function ComicDetails() {
  const { id } = useParams()
  const [item, setComic] = useState(InitialState)

  useEffect(() => {
    api
      .get('comics', {
        params: {
          id: id,
        },
      })
      .then((result) => {
        setComic({
          comic: result.data.data.results[0],
          creators: result.data.data.results[0].creators.items,
          loading: false,
        })
      })
  }, [])

  return (
    <Container>
      <Header></Header>
      {item.loading ? (
        <Loading classe={'loading-big'} />
      ) : (
        <>
          <Title text={item.comic.diamondCode} />
          <Details>
            <Img
              src={`${item.comic.thumbnail.path}.${item.comic.thumbnail.extension}`}
              alt=''
            />
            <Creators>
              <h1>{item.comic.title}</h1>
              <CreatorsBody>
                {item.creators.map((creator) => (
                  <h2 key={creator.name}>
                    {creator.name}-{creator.role}
                  </h2>
                ))}
              </CreatorsBody>
            </Creators>
          </Details>
          <Footer />
        </>
      )}
    </Container>
  )
}
