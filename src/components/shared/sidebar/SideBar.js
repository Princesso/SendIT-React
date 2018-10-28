import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'

const StyledSideBar= styled.div`
  background: ${colors.gray};
  height: 50px;
 
`
const SideBar = () => {
  return(
    <StyledSideBar>
      <div className="header"> sidebar</div>
    </StyledSideBar>
  )
}

export default SideBar