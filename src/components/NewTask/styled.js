import styled from 'styled-components';

const background = '#B9C8C8';

const SNewTak = styled.div`
@media screen and (min-width: 768px) {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 1em black;
  padding: 20px;
  margin: 0px;

  form {
    display: flex;
  }

  textarea {
    background-color: ${background};
    border-radius: 10px;
    color: black;
    font-size: 17px;
    padding: 5px 0px 0px 5px;
  }

  .radios {
    display: flex;
    flex-direction: column;
    margin: 30px 0px 8px 10px;
  }

  button {
    background-color: ${background};
    border-radius: 10px;
    padding: 10px;
    position: fixed;
    right: 480px;
    top: 230px;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    transform: translateY(5px);
  }
}

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
    padding: 5px 0px 0px 5px;
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
