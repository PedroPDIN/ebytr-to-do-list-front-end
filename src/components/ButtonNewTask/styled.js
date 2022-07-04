import styled from 'styled-components';

const SButtonNewTask = styled.div`
  button {
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: black;
  font-size: 20px;
  height: 50px;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  width: 200px;
  }

  button:hover {
    box-shadow: inset 200px 0 0 0 #1C954C;
    color: white;
  }
`;

export default SButtonNewTask;
