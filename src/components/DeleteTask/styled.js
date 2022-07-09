import styled from 'styled-components';

const SDeleteTask = styled.div`
@media screen and (min-width: 768px) {}

@media screen and (max-width: 768px) {
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    width: 90px;
    border: 0px;
    margin: 5px 0px;
  }
  
  button:nth-child(1) {
    border-radius: 10px 10px 0px 0px;
    transition: all 0.1 ease-in-out
  }

  button:nth-child(1):hover {
    background-color: rgba(220, 224, 222, 0.9);
    border: 1px solid black;
    transform: translateY(-3px);
  }

  button:nth-child(2) {
    border-radius: 0px 0px 10px 10px;
    transition: all 0.1 ease-in-out
  }

  button:nth-child(2):hover {
    background-color: rgba(220, 224, 222, 0.9);
    border: 1px solid black;
    transform: translateY(3px);
  }
}
`;

export default SDeleteTask;
