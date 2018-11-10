import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/styles/prism'

const MdxComponents = {
  code({ children }) {
    return (
      <SyntaxHighlighter language="javascript" style={atomDark} showLineNumbers>
        {children}
      </SyntaxHighlighter>
    )
  },
  h1({ children }) {
    return <h1 style={{ color: '#F5BD72' }}>{children}</h1>
  },
  h2({ children }) {
    return (
      <h2 id={children}>
        <a href={`#${children}`}>{children}</a>
      </h2>
    )
  },
}

export default MdxComponents
