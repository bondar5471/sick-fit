import React from 'react'
import PaginationStyle from './styles/PaginationStyles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { perPage } from '../config'
import Head from 'next/head'
import Link from 'next/link'


const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({data, loading, error}) => {
      if(loading) return <p>Loading...</p>
      const count = data.itemsConnection.aggregate.count
      const pages = Math.ceil(count /perPage)
      const page = props.page
    return(
    <PaginationStyle>
      <Head>
        <title>Sick First Page {page} of {pages}</title>
      </Head>
      <Link 
        prefetch
        href={{
        pathname: 'items',
        query: { page:  page - 1}
      }}>
        <a className="prev" aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>Page {props.page} of <span className="totalPages">{pages}</span></p>
      <p>{count} Items Total</p>
      <Link 
        prefetch
        href={{
        pathname: 'items',
        query: { page:  page + 1}
      }}>
        <a className="prev" aria-disabled={page >= pages}>Next</a>
      </Link>
    </PaginationStyle>
    )
    }}
  </Query>
)

export default  Pagination
export { PAGINATION_QUERY }