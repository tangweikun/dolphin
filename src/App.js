import React, { Component } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Container, Provider as RebassProvider } from 'rebass'
import createComponents from '@rebass/markdown'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import ArrayMD from './docs/array.md'
import FunctionMD from './docs/function.md'
import ObjectMD from './docs/object.md'

class Foo extends React.Component {
  render() {
    const category = this.props.match.params.section

    return (
      <React.Fragment>
        <Content>
          {[0, 1, 2].map(x => (
            <div key={x}>{category}</div>
          ))}
        </Content>
      </React.Fragment>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDXProvider components={createComponents()}>
          <RebassProvider>
            <Container>
              <Nav>Home</Nav>
              <Sidebar>
                {['array', 'function', 'object'].map(x => (
                  <SidebarItem key={x}>
                    <StyledLink to={`/docs/${x}`}>{x}</StyledLink>
                  </SidebarItem>
                ))}
              </Sidebar>

              <Switch>
                <Route path="/" exact component={Foo} />
                <Route path="/docs" exact component={Foo} />
                <Route
                  path="/docs/array"
                  component={() => (
                    <Content>
                      <ArrayMD />
                    </Content>
                  )}
                />
                <Route
                  path="/docs/function"
                  component={() => (
                    <Content>
                      <FunctionMD />
                    </Content>
                  )}
                />
                <Route
                  path="/docs/object"
                  component={() => (
                    <Content>
                      <ObjectMD />
                    </Content>
                  )}
                />
              </Switch>
            </Container>
          </RebassProvider>
        </MDXProvider>
      </BrowserRouter>
    )
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  padding-right: 20px;
  font-size: 20px;
`

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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Name = styled.div`
  color: #77e756;
  font-size: 30px;
`

const Values = styled.div`
  color: #fff;
  font-size: 22px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
`

const Value = styled.span`
  &:not(:first-child) {
    margin-left: 4px;
  }
  &:not(:last-child)::after {
    content: ' | ';
  }
`

const BlockWrapper = styled.div`
  background: ${props => props.bg};
  padding: 10px;
  min-width: 340px;
  color: #fff;
  font-size: 20px;

  height: 100px;
  border-radius: 4px;
  margin: 20px;
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  transition: all 0.25s ease-out;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
    transform: translateY(-1px);
  }
`

const Title = styled.h1`
  color: rgb(243, 182, 97);
  font-weight: bold;
  text-transform: capitalize;
`

const SidebarItem = styled.div`
  height: 48px;
`
