import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'

const StyledLogin= styled.div`
  background: ${colors.gray};
  height: 50px;
 
`
const Login= () => {
  return(
    <StyledLogin>
      <div className="header"> Login</div>
    </StyledLogin>
  )
}

export default Login