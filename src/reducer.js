const initialState = [

];

function reducer(state = initialState, action) {
  console.log({ action });
  switch (action.type) {
    case 'add':
      return [
        ...state,
        action.payload,
      ];
    case 'toogle': {
      const book = state.slice().filter(bk => bk.id === action.id)[0];
      book.isFavourite = !book.isFavourite;
      return [
        ...state.slice().filter(bk => bk.id !== action.id),
        book,

      ];
    }
    default: {
      return state;
    }
  }
}


export default reducer;
