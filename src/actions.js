const addBook = payload => ({ type: 'add', payload });
const toogleStatusAction = id => ({ type: 'toogle', id });
const loadBooks = books => ({ type: 'loadBoks', books });
export { addBook, toogleStatusAction, loadBooks };
