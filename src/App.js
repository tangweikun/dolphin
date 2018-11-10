import React, { Component } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Provider as RebassProvider } from 'rebass'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import ArrayMD from './docs/array.md'
import FunctionMD from './docs/function.md'
import ObjectMD from './docs/object.md'
import MdxComponents from './mdx-components'
import SidebarMenu from './SidebarMenus'

class Foo extends React.Component {
  render() {
    const category = this.props.match.params.section

    return (
      <React.Fragment>
        <Content>HomeTODO:</Content>
      </React.Fragment>
    )
  }
}

const foo = {
  array: ['concat', 'every', 'fill'],
  function: ['apply'],
  object: ['deepFreeze'],
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDXProvider components={MdxComponents}>
          <RebassProvider>
            <React.Fragment>
              <Nav>
                <StyledLink to="/">Home</StyledLink>
              </Nav>
              <SidebarMenu />

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
            </React.Fragment>
          </RebassProvider>
        </MDXProvider>
      </BrowserRouter>
    )
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #556272;
  display: inline-block;
  padding: 4px 8px;
  font-size: 20px;
  text-transform: capitalize;
  border-radius: 4px;

  :hover {
    background: rgba(20, 20, 20, 0.1);
  }
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

// TODO: max-width需要修改
const Content = styled.div`
  width: 100%;
  padding-left: 340px;
  padding-top: 40px;
  max-width: 1024px;
`

const SidebarItem = styled.div`
  height: 48px;
`

const SubSidebarItem = styled.div`
  height: 42px;
  margin-left: 20px;
`
