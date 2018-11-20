import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SearchIndex from './searchIndex';

const SearchQuery = () => (
    <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <>
    <SearchIndex searchIndex={data.siteSearchIndex.index} />        
      </>
    )}
  />
)

export default SearchQuery
