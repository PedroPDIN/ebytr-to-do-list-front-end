import styled from 'styled-components';

const SListTask = styled.div`
@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }

  article {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em black;
    margin-top: 30px;
    width: 35em;
  }

  p {
    font-size: 16px;
    margin-left: 10px;
    text-align: center;
  }

  .task {
    padding-top: 2px;
  }

  .task p {
    border-bottom: solid 2px black;
    font-size: 20px;
    padding-bottom: 15px;
    width: 97.4%;
    word-break: break-all;
  }

  .task-info {
    cursor: pointer;
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
    border-radius: 8px;
    cursor: pointer;
    margin: 0px 5px 20px 5px;
    transition: all 0.2s ease-in-out;
    width: 50px;
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

  .list-tasks-loading {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 56px;
  }

  .lds-ellipsis {
    display: inline-block;
    margin-top: -30px;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: black;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
}

@media screen and (max-width: 768px) { 
  h1 {
    text-align: center;
  }

  article {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em black;
    margin-top: 30px;
    width: 400px;
  }

  p {
    margin-left: 10px;
    font-size: 18px;
    text-align: center;
  }

  .task {
    padding-top: 2px;
  }
  
  .task p {
    border-bottom: solid 2px black;
    font-size: 20px;
    padding-bottom: 15px;
    width: 94.5%;
    word-break: break-all;
  }

  .task-info {
    cursor: pointer;
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
    cursor: pointer;
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

  .list-tasks-loading {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 56px;
  }

  .lds-ellipsis {
    display: inline-block;
    margin-top: -30px;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: black;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
}
`;

export default SListTask;
