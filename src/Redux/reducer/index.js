const initialState = {
  data: [
    {
      name: 'Jonathan',
      lastName: 'Hilling'
    }
  ],
  currentIndex: -1
}

function mainReducer(state = initialState, action){
  switch(action.type){
    case 'CREATE':return {
      ...state,
      data: action.payload
    }
    case 'DELETE': return {
      ...state,
      data: action.payload
    }
    case 'SET_EDIT_INDEX': return {
      ...state,
      currentIndex: action.payload
    }
    case 'UPDATE_CONTACT': return{
      ...state,
      data: action.payload
    }
    default: return state
  }
}
export default mainReducer