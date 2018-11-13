import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { pages } from '../docs.json'

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Content>
          <StyledH1>Dolphin</StyledH1>
          <StyledP>Polyfill of Javascript native method</StyledP>

          <Foo>
            {pages.map(({ sections, pathname }) => (
              <Bar key={pathname}>
                <StyledH2>
                  <StyledLink to={`/docs/${pathname}`}>{pathname}</StyledLink>
                </StyledH2>
                {sections.map(({ anchor }) => (
                  <StyledH3 key={anchor}>
                    <StyledA to={`/docs/${pathname}#${anchor}`}>
                      {anchor}
                    </StyledA>
                  </StyledH3>
                ))}
              </Bar>
            ))}
          </Foo>
        </Content>
      </React.Fragment>
    )
  }
}

const StyledP = styled.p`
  font-size: 20px;
`

const StyledH3 = styled.h3`
  margin: 0.5em 0;
  font-weight: 400;
`

const StyledH2 = styled.h2`
  font-size: 1.77778rem;
  font-weight: 600;
  margin: 2em 0 0.75em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2d444e;
  display: inline-block;
  text-transform: capitalize;
  padding: 4px 8px;
  border-radius: 4px;

  :hover {
    background: rgba(20, 20, 20, 0.1);
  }
`

const StyledA = styled(Link)`
  text-decoration: none;
  color: #2d444e;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;

  :hover {
    background: rgba(20, 20, 20, 0.1);
  }
`

const Bar = styled.div`
  min-width: 300px;
  padding-right: 0.833333rem;
`

const Foo = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledH1 = styled.h1`
  color: #f5bd72;
`

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
