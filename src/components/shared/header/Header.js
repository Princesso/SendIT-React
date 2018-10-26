import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'

const StyledHeader = styled.div`
  background: ${colors.gray};
  height: 50px;
 
`
const Header = () => {
  return(
    <StyledHeader>
      <div className="header"> header</div>
    </StyledHeader>
  )
}

export default Header