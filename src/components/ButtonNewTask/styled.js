import styled from 'styled-components';

const SButtonNewTask = styled.div`
  display: flex;
  justify-content: center;
  
  button {
  border-radius: 10px;
  color: black;
  font-size: 20px;
  height: 50px;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  width: 200px;
  }

  button:hover {
    box-shadow: inset 200px 0 0 0 #AEC5C2;
    color: white;
  }
`;

export default SButtonNewTask;
