import styled from 'styled-components';

const SFormNewTask = styled.form`
@media screen and (min-width: 768px){
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20em;

  textarea {
    border-radius: 20px;
    height: 140px;
    font-size: 17px;
    padding: 5px 8px 0px 8px;
  }

  .radios {
    display: flex;
    font-size: 20px;
    flex-direction: column;
    margin: 8px 0px
  }

  .radios input {
    margin: 8px 8px;
  }

  .newTask-buttons {
    display: flex;
    flex-direction: column;
    width: 150px;
  }

  .newTask-buttons button {
    font-size: 21px;
  }

  .newTask-buttons button:nth-child(1) {
    border: 0px;
    border-radius: 10px 10px 0px 0px;
    transition: all 0.1 ease-in-out, color .5s ease-in-out;
  }

  .newTask-buttons button:nth-child(1):hover {
    background-color: #28F551;
    transform: translateY(-6px);
  }

  .newTask-buttons button:nth-child(2) {
    border: 0px;
    border-radius: 0px 0px 10px 10px;
    margin-top: 2px;
    transition: all 0.1 ease-in-out,;
  }

  .newTask-buttons button:nth-child(2):hover {
    transform: translateY(6px);
    background-color: #FD512A;
  }
};

@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20em;

  textarea {
    border-radius: 20px;
    height: 140px;
    font-size: 17px;
    padding: 5px 8px 0px 8px;
  }

  .radios {
    display: flex;
    font-size: 20px;
    flex-direction: column;
    margin: 8px 0px
  }

  .radios input {
    margin: 8px 8px;
  }

  .newTask-buttons {
    display: flex;
    flex-direction: column;
    width: 150px;
  }

  .newTask-buttons button {
    font-size: 21px;
  }

  .newTask-buttons button:nth-child(1) {
    border: 0px;
    border-radius: 10px 10px 0px 0px;
    transition: all 0.1 ease-in-out, color .5s ease-in-out;
  }

  .newTask-buttons button:nth-child(1):hover {
    background-color: #28F551;
    transform: translateY(-3px);
  }

  .newTask-buttons button:nth-child(2) {
    border: 0px;
    border-radius: 0px 0px 10px 10px;
    margin-top: 5px;
    transition: all 0.1 ease-in-out,;
  }

  .newTask-buttons button:nth-child(2):hover {
    transform: translateY(3px);
    background-color: #FD512A;
  }
}
`;

export default SFormNewTask;
