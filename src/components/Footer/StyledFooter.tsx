import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: #d4cebe;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #908567;
    box-shadow: 0 -2px 7px rgba(0, 0, 0, 0.25);
    @media only screen and (min-width: 1920px){
        height: 140px;
        font-size: 32px;
    }
    @media only screen and (max-width: 1919px){
        height: 70px;
        font-size: 16px;
    }
`

export default StyledFooter
