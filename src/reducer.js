let initialState = [
   
]

function reducer(state = initialState, action) {
    console.log({ action });
    switch (action.type) {
        case 'add':
            return [
                ...state,
                action.payload
            ]

    }
    return state;

}


export default reducer;