import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  prism,
  okaidia,
  xonokai,
} from 'react-syntax-highlighter/dist/styles/prism'
import styled from 'styled-components'
import { CopyButton } from './common/CopyButton'

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
`

const CodeWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
`

const MdxComponents = {
  code({ children }) {
    return (
      <CodeWrapper>
        <CopyButton text={children} />
        <StyledSyntaxHighlighter language="javascript" style={okaidia}>
          {children}
        </StyledSyntaxHighlighter>
      </CodeWrapper>
    )
  },
  h1({ children }) {
    return <h1 style={{ color: '#F5BD72' }}>{children}</h1>
  },
  h2({ children }) {
    return (
      <React.Fragment>
        <div
          id={children}
          style={{
            display: 'block',
            paddingTop: '56px',
            marginTop: '-56px',
          }}
        />
        <h2>
          {children}
          <a
            href={`#${children}`}
            style={{ marginLeft: '0.55rem', color: '#88969B' }}
          >
            <AnchorIconWrapper>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
              >
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
            </AnchorIconWrapper>
          </a>
        </h2>
      </React.Fragment>
    )
  },
}

export default MdxComponents

const AnchorIconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 1.11111rem;
  opacity: 0.7;
  margin-top: -0.277778rem;
`
