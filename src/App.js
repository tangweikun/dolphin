import React, { Component } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Container, Provider as RebassProvider } from 'rebass'
import createComponents from '@rebass/markdown'
import styled from 'styled-components'

import ArrayMD from './docs/array.md'
import FunctionMD from './docs/function.md'
import ObjectMD from './docs/object.md'

export default class App extends Component {
  render() {
    return (
      <MDXProvider components={createComponents()}>
        <RebassProvider>
          <Container>
            <Nav>
              <span>444</span>
              <span>444</span>
            </Nav>
            <Sidebar>
              <div>88</div>
              <div>77</div>
            </Sidebar>
            <Content>
              <ArrayMD />
              <FunctionMD />
              <ObjectMD />
            </Content>
          </Container>
        </RebassProvider>
      </MDXProvider>
    )
  }
}

const Nav = styled.div`
  top: 0;
  left: 0;
  height: 56px;
  line-height: 56px;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: #ce7693;
  padding: 0 40px;
`

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  width: 300px;
  background: rgb(239, 239, 239);
  font-size: 22px;
  padding: 10px 0 0 40px;
`

const Content = styled.div`
  width: 100%;
  padding-left: 300px;
  padding-top: 40px;
  margin: 0 auto;
`
