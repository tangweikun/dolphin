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
}

export default MdxComponents
