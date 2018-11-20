import React, { Component } from "react"
import PropTypes from "prop-types"
import { Index } from "elasticlunr"
import { Link } from "gatsby"

// Search component
export default class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
        <header className="search-enabled">
          <h1>Articles</h1>

        <form
          id="search-form"
          role="search"
          className="search-form"
          >
            <div className="search-wrapper">
              <input
                id="filter"
                type="search"
                placeholder="Filter"
                value={this.state.query}
                onChange={this.search}
                />
                <i className="search-icon icon-search"></i>
         <ul>
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={`/` + page.path}>{page.title}</Link>
              {`: ` + page.tags.join(`,`)}
            </li>
          ))}
        </ul>
        </div>
          </form>
        </header>

    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

SearchIndex.propTypes = {
  searchIndex: PropTypes.object,
}