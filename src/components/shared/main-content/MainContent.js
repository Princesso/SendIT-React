import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'

const StyledMainContent = styled.div`
  background: ${colors.gray};
  height: 50px;
 
`
const MainContent = () => {
  return(
    <StyledMainContent>
      <div className="header"> main content</div>
    </StyledMainContent>
  )
}

export default MainContent