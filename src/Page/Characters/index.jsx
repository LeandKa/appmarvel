import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../Components/Header/index'
import Container from '../../Components/Layout/Container/index'
import Title from '../../Components/Layout/Title'
import SectionCards from '../../Components/Layout/SectionCards'
import api from '../../services/service.jsx'
import Card from '../../Components/Card'
import LoaderButton from '../../Components/Layout/LoadComponents/LoaderButton'
import Loader from '../../Components/Layout/LoadComponents/Loader'
import Footer from '../../Components/Footer'
import Message from '../../Components/Layout/Message'
import Search from '../../Components/SearchComponent'

const InitialState = {
  characters: [],
  limit: 0,
  total: 0,
  keySearch: '',
  pageNumber: 1,
  loading: true,
  loadingMore: false,
  notMore: true,
}

export default function Characters() {
  const [characters, setCharacters] = useState(InitialState)
  useEffect(() => {
    setTimeout(() => {
      api('/characters').then((result) => {
        setCharacters({
          ...characters,
          characters: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          pageNumber: 1,
          loading: false,
        })
      })
    }, 400)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    api('/characters', {
      params: {
        nameStartsWith: characters.keySearch,
      },
    }).then((result) => {
      console.log(result.data.data.total)
      if (result.data.data.total <= 20) {
        setCharacters({
          ...characters,
          characters: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          loading: false,
          notMore: false,
        })
      } else {
        setCharacters({
          ...characters,
          characters: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          loading: false,
          notMore: true,
        })
      }
    })
  }

  const onChange = (e) => {
    setCharacters({ ...characters, [e.target.name]: e.target.value })
  }

  const getMoreItems = () => {
    const offset =
      characters.limit * (characters.pageNumber + 1) - characters.limit
    setCharacters({ ...characters, loadingMore: true })
    if (characters.keySearch === InitialState.keySearch) {
      setTimeout(() => {
        api
          .get('/characters', {
            params: {
              limit: characters.limit,
              offset: offset,
            },
          })
          .then((result) => {
            setCharacters({
              ...characters,
              characters: characters.characters.concat(
                result.data.data.results
              ),
              loadingMore: false,
              pageNumber: characters.pageNumber + 1,
            })
          })
      }, 1200)
    } else {
      setTimeout(() => {
        api
          .get('/characters', {
            params: {
              limit: characters.limit,
              offset: offset,
              nameStartsWith: characters.keySearch,
            },
          })
          .then((result) => {
            if (result.data.data.results.length < 20) {
              setCharacters({
                ...characters,
                characters: characters.characters.concat(
                  result.data.data.results
                ),
                loadingMore: false,
                notMore: false,
                pageNumber: characters.pageNumber + 1,
              })
            } else {
              setCharacters({
                ...characters,
                characters: characters.characters.concat(
                  result.data.data.results
                ),
                loadingMore: false,
                pageNumber: characters.pageNumber + 1,
              })
            }
          })
      }, 1200)
    }
  }

  return (
    <Container>
      <Header></Header>
      {!characters.loading ? (
        <Fragment>
          <Title text='Characters' />
          <Search onSubmit={onSubmit} onChange={onChange} type={false} />
          {characters.characters.length > 0 ? (
            <Fragment>
              <SectionCards>
                {characters.characters.map((characters) => (
                  <Card
                    key={characters.id}
                    Id={characters.id}
                    showComics={false}
                    name={characters.name}
                    Thumbnail={characters.thumbnail}
                    Title={characters.name}
                  />
                ))}
              </SectionCards>
              <LoaderButton
                more={characters.notMore}
                show={characters.loadingMore}
                click={getMoreItems}
                classe={'loading-small'}
              />
            </Fragment>
          ) : (
            <Message message={characters.keySearch} />
          )}
          <Footer />
        </Fragment>
      ) : (
        <Loader classe={'loading-big'} />
      )}
    </Container>
  )
}
