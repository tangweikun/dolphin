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
    return (
      <React.Fragment>
        <Content>HomeTODO:</Content>
      </React.Fragment>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDXProvider components={MdxComponents}>
          <RebassProvider>
            <React.Fragment>
              <Nav>
                <NavStyledLink to="/">Home</NavStyledLink>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <a
                    style={{
                      display: 'flex',
                      marginRight: '1.11111rem',
                      lineHeight: '2.77778rem',
                      cursor: 'pointer',
                      color: '#fff',
                    }}
                    href="https://github.com/tangweikun/dolphin"
                    target="_blank"
                  >
                    <svg
                      viewBox="0 0 496 512"
                      height="18"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                      class="Social__StyledIcon-sc-4j9mhd-3 isQvWb sc-bwzfXH dsFEmQ"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </a>
                </div>
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
  background: #ce7693;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
`

// TODO: max-width需要修改
const Content = styled.div`
  width: 100%;
  padding-left: 340px;
  padding-top: 56px;
  max-width: 1024px;
`
