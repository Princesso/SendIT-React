import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'

const StyledFooter = styled.div`
  background: ${colors.gray};
  height: 50px;
 
`
const Footer = () => {
  return(
    <StyledFooter>
      Footer
    </StyledFooter>
  )
}

export default Footer