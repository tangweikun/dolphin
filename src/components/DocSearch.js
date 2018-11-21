import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

class DocSearch extends Component {
  state = {
    enabled: true,
  }

  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        apiKey: 'e99cdeacc9db9ecdc4f1f4ff19962b1b',
        indexName: 'dolphin',
        inputSelector: '#algolia-doc-search',
      })
    } else {
      console.warn('Search has failed to load and now is being disabled')
      this.setState({ enabled: false })
    }
  }

  render() {
    const { enabled } = this.state

    return (
      enabled && (
        <StyledForm>
          <StyledInput
            id="algolia-doc-search"
            type="search"
            placeholder="Search docs"
            aria-label="Search docs"
          />
        </StyledForm>
      )
    )
  }
}

export default DocSearch

const StyledInput = styled.input`
  appearance: none;
  background: transparent;
  vertical-align: middle !important;
  border: 0;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 300;
  font-family: inherit;
  position: relative;
  padding: 5px 5px 5px 29px;
  background-image: url(/search.svg);
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 5px;
  width: 10rem;

  &:focus {
    outline: 0;
    background-color: ${colors.lighter};
    border-radius: 0.25rem;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`
