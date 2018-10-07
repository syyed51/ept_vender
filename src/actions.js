const addBook = payload => ({ type: 'add', payload });
const toogleStatusAction = id => ({ type: 'toogle', id });
export { addBook, toogleStatusAction };
