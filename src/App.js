import React, { Component } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Provider as RebassProvider } from 'rebass'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import './fontIcon'

import MdxComponents from './mdx-components'
import SidebarMenu from './components/SidebarMenus'
import { GithubIcon } from './fontIcon'
import { Home } from './routes/home'

import ScrollToTop from './ScrollToTop'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChartBar,
  faAddressCard,
  faStar,
  faCodeBranch,
  faBoxes,
  faBox,
  faClock,
  faInfoCircle,
  faAward,
  faCopy,
} from '@fortawesome/free-solid-svg-icons'
import DocSearch from './components/DocSearch'

library.add(faChartBar)
library.add(faStar)
library.add(faAddressCard)
library.add(faCodeBranch)
library.add(faBoxes)
library.add(faBox)
library.add(faClock)
library.add(faInfoCircle)
library.add(faCopy)

const LoadableFeature = Loadable({
  loader: () => import('./routes/feature'),
  loading() {
    return <div>Loading...</div>
  },
})

const LoadableArrayMD = Loadable({
  loader: () => import('./docs/array.md'),
  loading() {
    return <div>Loading...</div>
  },
})

const LoadableObjectMD = Loadable({
  loader: () => import('./docs/object.md'),
  loading() {
    return <div>Loading...</div>
  },
})

const LoadableFunctionMD = Loadable({
  loader: () => import('./docs/function.md'),
  loading() {
    return <div>Loading...</div>
  },
})

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <MDXProvider components={MdxComponents}>
            <RebassProvider>
              <React.Fragment>
                <Nav>
                  <NavStyledLink to="/">Dolphin</NavStyledLink>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <DocSearch />
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
                  <Route path="/feature" exact component={LoadableFeature} />
                  <Route path="/docs" exact component={Home} />
                  <Content className="docSearch-content">
                    <Route
                      path="/docs/array"
                      component={() => <LoadableArrayMD />}
                    />
                    <Route
                      path="/docs/function"
                      component={() => <LoadableFunctionMD />}
                    />
                    <Route
                      path="/docs/object"
                      component={() => <LoadableObjectMD />}
                    />
                  </Content>
                </Switch>
              </React.Fragment>
            </RebassProvider>
          </MDXProvider>
        </ScrollToTop>
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
  background: #202123;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
`

// TODO: max-width需要修改
const Content = styled.div`
  width: 86%;
  padding-left: 300px;
  padding-top: 56px;
  margin: 0 auto;
  /* background: #eeeeee; */

  @media (max-width: 62em) {
    transform: translateX(0px);
    padding: 3.88889rem 1.11111rem 1.66667rem;
  }
`
