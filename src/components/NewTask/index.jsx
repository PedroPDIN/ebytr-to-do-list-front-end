import React from 'react';

const NewTask = () => {
  return (
    <div>
      <form action="">
        <div>
          <textarea name="text-task" cols="30" rows="10" />
        </div>

        <div>
          <label htmlFor="pending">
            <input type="checkbox" name="pending" />
            Pendente
          </label>

          <label htmlFor="progress">
            <input type="checkbox" name="pending" />
            Andamento
          </label>

          <label htmlFor="ready">
            <input type="checkbox" name="pending" />
            Pronto
          </label>
        </div>

        <div>
          <button type="button">Adicionar</button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
