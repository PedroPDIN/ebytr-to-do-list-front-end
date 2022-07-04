import styled from 'styled-components';

const background = '#B9C8C8';

const SNewTak = styled.div`
@media screen and (max-width: 768px) {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 1em black;
  height: 282px;
  padding: 20px;
  margin: 0px;

  textarea {
    background-color: ${background};
    color: black;
    font-size: 17px;
    border-radius: 10px;
  }

  .radios {
    display: flex;
    justify-content: space-around;
    margin: 8px 0px 8px 0px;
  }

  button {
    background-color: ${background};
    display: flex;
    justify-content: center;
    padding: 4px 0px 4px 0px;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    transform: translateY(5px);
  }
}
`;

export default SNewTak;
