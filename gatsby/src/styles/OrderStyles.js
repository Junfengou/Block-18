import styled from 'styled-components';

const OrderStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* gap: 20px; */

  fieldset {
    max-height: 600px;
    overflow: auto;
    
  }

  .mapleSyrup {
    display: none;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`


export default OrderStyles;

