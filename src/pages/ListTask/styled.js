import styled from 'styled-components';

const SListTask = styled.div`
@media screen and (min-width: 768px) {
  h1 {
    text-align: center;
  }

  section {
    background-color: white;
    border-radius: 20px;
    margin-top: 30px;
    max-width: 500px;
  }

  p {
    margin-left: 10px;
    font-size: 20px;
  }

  .task {
    padding-top: 2px;
  }

  .task p {
    max-width: 400px !important;
  }

  .task-info {
    display: flex;
  }

  .task-info p:nth-child(1) {
    background-color: #E9F0EB;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 10px;
    padding: 5px;
    text-align: center;
  }

  .task-info p:nth-child(2) {
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 10px;
    padding: 5px;
    text-align: center;
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
    max-width: 95%;;
  }

  .task-info {
    display: flex;
    justify-content: space-around;
  }

  .task-info p:nth-child(1) {
    background-color: #E9F0EB;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 10px;
    padding: 5px;
    text-align: center;
  }


  .task-info p:nth-child(2) {
    background-color: black;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    margin-left: 10px;
    padding: 5px;
    text-align: center;
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
