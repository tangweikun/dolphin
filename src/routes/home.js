import React from 'react'
import styled from 'styled-components'

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Content>HomeTODO:</Content>
      </React.Fragment>
    )
  }
}

// TODO: max-width需要修改
const Content = styled.div`
  width: 100%;
  padding-left: 340px;
  padding-top: 56px;
  max-width: 1024px;
`
