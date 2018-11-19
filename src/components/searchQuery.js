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
        <div>
    <SearchIndex searchIndex={data.siteSearchIndex.index} />
        </div>
        
      </>
    )}
  />
)

export default SearchQuery
