import React, { Fragment, useEffect, useState } from 'react'
import Card from '../../Components/Card'
import Header from '../../Components/Header/index'
import Container from '../../Components/Layout/Container/index'
import Title from '../../Components/Layout/Title'
import SectionCards from '../../Components/Layout/SectionCards'
import api from '../../services/service.jsx'
import LoaderButton from '../../Components/Layout/LoadComponents/LoaderButton'
import Loader from '../../Components/Layout/LoadComponents/Loader'
import Footer from '../../Components/Footer'

const InitialState = {
  comics: [],
  limit: 0,
  total: 0,
  pageNumber: 1,
  loading: true,
  loadingMore: false,
}

export default function Home() {
  const [comic, setComics] = useState(InitialState)

  useEffect(() => {
    setTimeout(() => {
      api('/comics', {
        params: {
          startYear: 2018,
        },
      }).then((result) => {
        console.log(result)
        console.log(result.data.data.results)
        setComics({
          ...comic,
          comics: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          loading: false,
        })
      })
    }, 400)
  }, [])

  const getMore = () => {
    const offset = comic.limit * (comic.pageNumber + 1) - comic.limit
    setComics({ ...comic, loadingMore: true })
    setTimeout(() => {
      api
        .get('/comics', {
          params: {
            startYear: 2018,
            limit: comic.limit,
            offset: offset,
          },
        })
        .then((result) => {
          setComics({
            ...comic,
            comics: comic.comics.concat(result.data.data.results),
            loadingMore: false,
            pageNumber: comic.pageNumber + 1,
          })
        })
    }, 1200)
  }

  return (
    <Container>
      <Header></Header>
      {!comic.loading ? (
        <Fragment>
          <Title text='Comics' />
          <SectionCards>
            {comic.comics.map((comic) => (
              <Card
                key={comic.id}
                Id={comic.id}
                showComics={true}
                Creators={comic.creators}
                Thumbnail={comic.thumbnail}
                Title={comic.title}
              />
            ))}
          </SectionCards>
          <LoaderButton
            more={true}
            show={comic.loadingMore}
            click={getMore}
            classe={'loading-small'}
          />
          <Footer />
        </Fragment>
      ) : (
        <Loader classe={'loading-big'} />
      )}
    </Container>
  )
}
