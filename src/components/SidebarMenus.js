import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import get from 'lodash/get'
import { pages } from '../docs.json'

class SidebarMenu extends Component {
  render() {
    const currentPathname = get(this.props.location, 'pathname')
    return (
      <Sidebar>
        {pages.map(({ pathname, sections }) => (
          <React.Fragment key={pathname}>
            <SidebarItem>
              <StyledLink to={`/docs/${pathname}`}>{pathname}</StyledLink>
            </SidebarItem>
            {`/docs/${pathname}` === currentPathname &&
              sections.map(({ anchor }) => (
                <SubSidebarItem key={anchor}>
                  <StyledA href={`/docs/${pathname}#${anchor}`}>
                    {anchor}
                  </StyledA>
                </SubSidebarItem>
              ))}
          </React.Fragment>
        ))}
      </Sidebar>
    )
  }
}

export default withRouter(SidebarMenu)

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #556272;
  display: inline-block;
  padding: 0 8px;
  font-size: 20px;
  text-transform: capitalize;
  border-radius: 4px;

  :hover {
    background: rgba(20, 20, 20, 0.1);
  }
`

const StyledA = styled.a`
  text-decoration: none;
  color: #556272;
  display: inline-block;
  padding: 0 8px;
  font-size: 20px;
  border-radius: 4px;

  :hover {
    background: rgba(20, 20, 20, 0.1);
  }
`

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 56px;
  bottom: 0;
  width: 300px;
  background: rgb(239, 239, 239);
  font-size: 22px;
  padding: 10px 0 40px 40px;
  overflow: auto;
  box-shadow: 10px 0 20px -5px rgba(0, 0, 0, 0.3);

  @media (max-width: 62em) {
    transform: translateX(-18.6667rem);
  }
`

const SidebarItem = styled.div`
  height: 48px;
  line-height: 48px;
`

const SubSidebarItem = styled.div`
  height: 36px;
  line-height: 36px;
  margin-left: 16px;
`
