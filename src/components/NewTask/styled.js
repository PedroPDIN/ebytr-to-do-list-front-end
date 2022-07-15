import styled from 'styled-components';

const SNewTak = styled.div`
@media screen and (min-width: 768px) {
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 1em black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0px;

  textarea {
    background-color: #B9C8C8;
    border-radius: 10px;
    color: black;
    font-size: 17px;
    padding: 5px 0px 0px 5px;
    width: 40em;
  }

  .radios {
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    margin: 20px 0px 8px 10px;
  }

  .container-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    background-color: #B9C8C8;
    border-radius: 10px;
    font-size: 20px;
    margin-top: 10px;
    padding: 4px 0px 4px 0px;
    transition: all 0.2s ease-in-out;
    width: 70%;
  }

  button:hover {
    transform: translateY(5px);
  }
}

@media screen and (max-width: 768px) {
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 1em black;
  display: flex;
  flex-direction: column;
  height: 330px;
  padding: 20px;
  margin: 0px;

  textarea {
    background-color: #B9C8C8;
    color: black;
    font-size: 17px;
    border-radius: 10px;
    padding: 5px 0px 0px 5px;
  }

  .radios {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    margin: 8px 0px;
  }

  .container-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    background-color: #B9C8C8;
    border-radius: 10px;
    font-size: 20px;
    padding: 4px 0px 4px 0px;
    transition: all 0.2s ease-in-out;
    width: 70%;
  }

  button:hover {
    transform: translateY(5px);
  }
}
`;

export default SNewTak;
