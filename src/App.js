import React, { Component } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Provider as RebassProvider } from 'rebass'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import ArrayMD from './docs/array.md'
import FunctionMD from './docs/function.md'
import ObjectMD from './docs/object.md'
import MdxComponents from './mdx-components'
import SidebarMenu from './components/SidebarMenus'
import { GithubIcon } from './fontIcon'
import { Home } from './routes/home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDXProvider components={MdxComponents}>
          <RebassProvider>
            <React.Fragment>
              <Nav>
                <NavStyledLink to="/">Polyfill</NavStyledLink>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <a
                    style={{
                      display: 'flex',
                      cursor: 'pointer',
                      color: '#fff',
                    }}
                    href="https://github.com/tangweikun/dolphin"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </Nav>
              <SidebarMenu />

              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/docs" exact component={Home} />
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

const NavStyledLink = styled(Link)`
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
  background: rgb(219, 112, 147);
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
`

// TODO: max-width需要修改
const Content = styled.div`
  width: 94%;
  padding-left: 300px;
  padding-top: 56px;
  margin: 0 auto;

  @media (max-width: 62em) {
    transform: translateX(0px);
    padding: 3.88889rem 1.11111rem 1.66667rem;
  }
`
