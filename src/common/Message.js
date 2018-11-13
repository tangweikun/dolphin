import styled, { keyframes } from 'styled-components'

export const Message = styled.div`
  position: fixed;
  left: 30px;
  top: 30px;
  padding: 20px 24px;
  background: ${props => props.bg || '#ff5a79'};
  color: #fff;
  z-index: 10000;
  user-select: none;
  border-radius: 4px;
  cursor: default;
  font-size: 18px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  box-shadow: 0 25px 10px -15px rgba(0, 0, 0, 0.05);
  animation: 0.25s ${animScale} ease;
`

const animScale = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0) scale3d(0.1, 0.6, 1);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  }
`
