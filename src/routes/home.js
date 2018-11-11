import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const foo = {
  array: ['concat', 'every', 'fill'],
  function: ['apply'],
  object: ['deepFreeze'],
}

const bar = Object.keys(foo)

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Content>
          <StyledH1>Dolphin</StyledH1>
          <p>
            整理javascript的polyfill，通过了解javascript原生方法的实现方式来更好的理解javascript
          </p>

          <Foo>
            {bar.map(x => (
              <Bar key={x}>
                <StyledH2>
                  <StyledLink to={`/docs/${x}`}>{x}</StyledLink>
                </StyledH2>
                {foo[x].map(y => (
                  <StyledH3 key={y}>
                    <StyledA to={`/docs/${x}#${y}`}>{y}</StyledA>
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
  width: 100%;
  padding-left: 340px;
  padding-top: 56px;
`
