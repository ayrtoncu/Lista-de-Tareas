import React, { FC, FormEvent, useState} from 'react';
import { useDispatch } from 'react-redux';

import { List } from '../store/types';
import {addList, setNotification} from '../store/actions'

const CreateNewList: FC = () => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState('');

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value)
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (listName.trim()=== '') {
      return alert('¡nombre de lista requerido!')
    }

    const newList: List = {
      id: `list-${new Date().getTime()}`,
      name: listName,
      tasks: []
    }
    dispatch(addList(newList));
    dispatch (setNotification(`Nueva Lista ("${newList.name}") creado!`))
    setListName('');
  }
  return (
    <div className='card mb-5'>
      <div className='card-header'>
        <p className="card-header-title">Crear Nueva Lista</p>
      </div>
      <div className="card-content">
        <form onSubmit={submitHandler}>
          <div className="field">
            <label className="label">Nombre de Lista</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder='Nombre de la Lista'
                name='listName'
                value={listName}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="control">
            <button type='submit' className="button is-primary">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateNewList;