import { NotificationState , NotificationAction, SET_NOTIFICATION} from './../types';

const initialState: NotificationState = {
  msg: '',
  type: 'succes'
}

export default (state= initialState, action: NotificationAction): NotificationState => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        msg: action.payload.msg,
        type: action.payload.type
      }
    default:
      return state;
  }
}