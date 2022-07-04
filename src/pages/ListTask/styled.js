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
    width: 500px;
  }

  p {
    margin-left: 10px;
    font-size: 20px;
  }

  .task {
    padding-top: 2px;
  }

  .task p {
    width: 100px;
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
    margin-top: 30px;
    width: 400px;
  }

  p {
    margin-left: 10px;
    font-size: 20px;
  }

  .task {
    padding-top: 2px;
  }

  .task p {
    width: 100px;
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
`;

export default SListTask;
