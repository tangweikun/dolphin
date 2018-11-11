import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import get from 'lodash/get'

const foo = {
  array: ['concat', 'every', 'fill'],
  function: ['apply'],
  object: ['deepFreeze'],
}

const bar = Object.keys(foo)

class SidebarMenu extends Component {
  render() {
    const pathname = get(this.props.location, 'pathname')
    return (
      <Sidebar>
        {bar.map(x => (
          <React.Fragment key={x}>
            <SidebarItem>
              <StyledLink to={`/docs/${x}`}>{x}</StyledLink>
            </SidebarItem>
            {`/docs/${x}` === pathname &&
              foo[x].map(item => (
                <SubSidebarItem key={item}>
                  <StyledA key={item} href={`/docs/${x}#${item}`}>
                    {item}
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
  padding: 10px 0 0 40px;
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
