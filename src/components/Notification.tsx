import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setNotification } from '../store/actions';
import { RootState } from '../store/store';

interface NotificationProps {
  msg:string
}

let timeout: ReturnType<typeof setTimeout>;

const Notification: FC<NotificationProps> = ({ msg }) => {
  const dispatch = useDispatch();
  const type = useSelector((state: RootState) => state.notification.type);

  useEffect(() => {
    if (msg !== '') {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(setNotification(''));
      }, 3000);
    }
  })
  const closeNotification = () => {
    dispatch(setNotification(''));
    clearTimeout(timeout);
  }
  return (
    <div className={msg ? `${type === 'peligro' ? 'notification is-danger': 'notification is-primary'}` : 'notification is-hidden'} >
      <button className="delete" onClick={closeNotification}></button>
      <p>{ msg}</p>
    </div>
  )
}
export default Notification;