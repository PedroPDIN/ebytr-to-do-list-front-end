import styled from 'styled-components';

const SListTask = styled.div`
@media screen and (min-width: 768px) {
  h1 {
    text-align: center;
  }

  section {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em black;
    margin-top: 30px;
    width: 50em;
  }

  p {
    margin-left: 10px;
    font-size: 20px;
    text-align: center;
  }

  .task {
    padding-top: 2px;
  }

  .task p {
    border-bottom: solid 2px black;
    font-size: 24px;
    padding-bottom: 15px;
    width: 97.4%;
    word-break: break-all;
  }

  .task-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 99%;
  }

  .task-info p:nth-child(1) {
    background-color: #E9F0EB;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 0px;
    padding: 5px;
    text-align: center;
    width: 200px;
  }

  .task-info p:nth-child(2) {
    background-color: black;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    margin-top: -10px;
    padding: 5px;
    text-align: center;
    width: 200px;
  }

  // ======================
  .task-buttons {
    align-items: flex-end;
    display: flex;
    justify-content: center;
  }
  
  .task-buttons button {
    margin: 0px 5px 20px 5px;
    border-radius: 8px;
    width: 50px;
    transition: all 0.2s ease-in-out;
  }

  .task-buttons button:hover {
    transform: translateY(6px);
  }

  .task-buttons button:nth-child(1):hover {
    color: #FA9E26;
  }

  .task-buttons button:nth-child(2):hover {
    background-color: #F0260E;
    color: black;
  }

  .task-icon {
    font-size: 30px;
  }
}

@media screen and (max-width: 768px) { 
  h1 {
    text-align: center;
  }

  section {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em black;
    margin-top: 30px;
    width: 400px;
  }

  p {
    margin-left: 10px;
    font-size: 20px;
    text-align: center;
  }

  .task {
    padding-top: 2px;
  }
  
  .task p {
    border-bottom: solid 2px black;
    font-size: 24px;
    padding-bottom: 15px;
    width: 94.5%;
    word-break: break-all;
  }

  .task-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 99%;
  }

  .task-info p:nth-child(1) {
    background-color: #E9F0EB;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 0px;
    padding: 5px;
    text-align: center;
    width: 200px;
  }

  .task-info p:nth-child(2) {
    background-color: black;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    margin-top: -10px;
    padding: 5px;
    text-align: center;
    width: 200px;
  }
  
  .task-buttons {
    align-items: flex-end;
    display: flex;
    justify-content: center;
  }
  
  .task-buttons button {
    margin: 0px 5px 20px 5px;
    border-radius: 8px;
    width: 50px;
    transition: all 0.2s ease-in-out;
  }

  .task-buttons button:hover {
    transform: translateY(6px);
  }

  .task-buttons button:nth-child(1):hover {
    color: #FA9E26;
  }

  .task-buttons button:nth-child(2):hover {
    background-color: #F0260E;
    color: black;
  }

  .task-icon {
    font-size: 30px;
  }
}
`;

export default SListTask;
