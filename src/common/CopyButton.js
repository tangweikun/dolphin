import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import copy from 'copy-to-clipboard'
import styled from 'styled-components'

import { Portal } from './Portal'
import { Message } from './Message'

export class CopyButton extends React.Component {
  constructor(props) {
    super(props)
    this.queue = []
    this.count = 0
  }

  render() {
    return (
      <React.Fragment>
        {this.queue.map(x => (
          <Portal>
            <Message key={x.key} bg={x.color}>
              Snippet copied to clipboard! 🎉
            </Message>
          </Portal>
        ))}

        <IconWrapper
          onClick={async () => {
            copy(this.props.text)
            this.queue.unshift({ key: this.count++ })
            this.forceUpdate()
            await sleep(1500)
            this.queue.pop()
            this.forceUpdate()
          }}
        >
          <FontAwesomeIcon icon={'copy'} size="lg" />
        </IconWrapper>
      </React.Fragment>
    )
  }
}

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))

const IconWrapper = styled.div`
  position: absolute;
  top: -15px;
  right: 15px;
  width: 48px;
  height: 48px;
  background: #1e88e5;
  border-radius: 24px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 4px solid #fff;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #2196f3;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
`
