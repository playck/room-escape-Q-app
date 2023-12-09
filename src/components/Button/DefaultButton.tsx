import React from 'react'
import styled from '@emotion/styled'
import { colors } from '@/chakra/colors'

interface DefaultButtonProps {
  children: React.ReactNode
  style?: React.CSSProperties
  onClick?: any
}

function DefaultButton({ children, style, onClick }: DefaultButtonProps) {
  return (
    <StyledButton type="button" style={style} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  min-width: 150px;
  height: 60px;
  padding: 10px;
  color: ${colors.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  word-break: keep-all;
`

export default DefaultButton
