import {ListsAction, ListState , Lists, ADD_LIST, GET_LISTS, GET_LISTS_BY_ID, SET_LISTID_TO_DELETE,SET_LIST_TO_EDIT,DELETE_LIST, UPDATE_LIST} from "../types";

const initialState: ListState = {
  lists: {},
  listIdToDelete: 'string',
  listToEdit: null,
  listById: null,
  selectedList: null,
  taskToDelete: null,
  taskToEdit: null,
}

//Ayuda de Funciones
const getListsFromLS = (): Lists => {
  if (localStorage.getItem('task_list')) {
    return JSON.parse(localStorage.getItem('task_list') || '{}');
  }

  return {};
}

const saveListsToLS = (lists: Lists) => {
  localStorage.setItem('task_list', JSON.stringify(lists));
}

export default (state = initialState, action: ListsAction): ListState => {
  const listsFromLS = getListsFromLS();
  switch (action.type) {
    case ADD_LIST:
      const cloneListsFromLS = { ...listsFromLS };
      cloneListsFromLS[action.payload.id] = action.payload;
      saveListsToLS(cloneListsFromLS);
      return {
        ...state,
        lists: cloneListsFromLS
      }
    case GET_LISTS:
      return {
        ...state,
        lists: listsFromLS
      }
    case GET_LISTS_BY_ID:
      const list = listsFromLS[action.payload];
      return {
        ...state,
        listById: list
      }
    case SET_LISTID_TO_DELETE:
      return {
        ...state,
        listIdToDelete: action.payload
      }
    case SET_LIST_TO_EDIT:
      const listToEdit = listsFromLS[action.payload];
      return {
        ...state,
        listToEdit
      }
    case DELETE_LIST:
      const cloneListsFromLS2 = { ...listsFromLS };
      const listId = cloneListsFromLS2[action.payload].id;
      delete cloneListsFromLS2[action.payload];
      saveListsToLS(cloneListsFromLS2);
      return {
        ...state,
        lists: cloneListsFromLS2,
        listIdToDelete: '',
        listById: null,
        selectedList: state.selectedList && listId === state.selectedList.id ? null : state.selectedList
      }
    case UPDATE_LIST:
      const cloneListsFromLS3 = { ...listsFromLS };
      cloneListsFromLS3[action.payload.id].name = action.payload.name;
      saveListsToLS(cloneListsFromLS3);
      return {
        ...state,
        lists: cloneListsFromLS3,
        listToEdit: null
      }
    default:
      return state;
  }
}