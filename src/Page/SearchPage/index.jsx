import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../Components/Header/index'
import Container from '../../Components/Layout/Container/index'
import Title from '../../Components/Layout/Title'
import Search from '../../Components/SearchComponent'
import api from '../../services/service.jsx'
import Card from '../../Components/Card'
import SectionCards from '../../Components/Layout/SectionCards'
import Footer from '../../Components/Footer'
import Loader from '../../Components/Layout/LoadComponents/Loader'
import LoaderButton from '../../Components/Layout/LoadComponents/LoaderButton'

const InitialState = {
  item: [],
  limit: 0,
  total: 0,
  showComics: true,
  itemType: '',
  keySearch: '',
  pageNumber: 1,
  loading: true,
  loadingMore: false,
  notMore: false,
}

export default function SearchPage() {
  const [item, setItem] = useState(InitialState)

  useEffect(() => {
    setTimeout(() => {
      api('/comics', {
        params: {
          startYear: 2018,
        },
      }).then((result) => {
        console.log(result)
        console.log(result.data.data.results)
        setItem({
          ...item,
          item: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          loading: false,
        })
      })
    }, 400)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(item.keySearch)

    if (item.itemType === 'characters') {
      getCharacters()
    } else if (item.itemType === 'comics') {
      getComics()
    }
  }
  const getComics = () => {
    api(`${item.itemType}`, {
      params: {
        titleStartsWith: item.keySearch,
      },
    }).then((result) => {
      if (result.data.data.total <= 20) {
        setItem({
          ...item,
          item: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          loadingMore: false,
          loading: false,
          notMore: false,
        })
      } else {
        setItem({
          ...item,
          item: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          loadingMore: false,
          loading: false,
          notMore: true,
        })
      }
    })
  }

  const getCharacters = () => {
    api(`${item.itemType}`, {
      params: {
        nameStartsWith: item.keySearch,
      },
    }).then((result) => {
      console.log(result)
      if (result.data.data.total <= 20) {
        setItem({
          ...item,
          item: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          loading: false,
          showComics: false,
          loadingMore: false,
          notMore: false,
        })
      } else {
        setItem({
          ...item,
          item: result.data.data.results,
          limit: result.data.data.limit,
          total: result.data.data.total,
          loading: false,
          showComics: false,
          loadingMore: false,
          notMore: true,
        })
      }
    })
  }

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const getMore = () => {
    const offset = item.limit * (item.pageNumber + 1) - item.limit
    setItem({ ...item, loadingMore: true })
    setTimeout(() => {
      if (item.itemType === 'characters') {
        api
          .get(`${item.itemType}`, {
            params: {
              nameStartsWith: item.keySearch,
              limit: item.limit,
              offset: offset,
            },
          })
          .then((result) => {
            setItem({
              ...item,
              item: item.item.concat(result.data.data.results),
              loadingMore: false,
              pageNumber: item.pageNumber + 1,
            })
          })
      } else if (item.itemType === 'comics') {
        api
          .get(`${item.itemType}`, {
            params: {
              titleStartsWith: item.keySearch,
              limit: item.limit,
              offset: offset,
            },
          })
          .then((result) => {
            setItem({
              ...item,
              item: item.item.concat(result.data.data.results),
              loadingMore: false,
              pageNumber: item.pageNumber + 1,
            })
          })
      }
    }, 1200)
  }

  return (
    <Container>
      <Header></Header>
      <Title text='Search for any item'></Title>
      <Search onSubmit={onSubmit} onChange={onChange} type={true} />
      {!item.loading ? (
        <Fragment>
          <SectionCards>
            {item.item.map((item) => (
              <Card
                key={item.id}
                Id={item.id}
                showComics={item.showComics}
                Creators={item.creators}
                name={item.name}
                Thumbnail={item.thumbnail}
                Title={item.title}
              />
            ))}
          </SectionCards>
          <LoaderButton
            more={item.notMore}
            show={item.loadingMore}
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
