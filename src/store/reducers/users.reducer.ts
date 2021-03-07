const initialState = {
    users: {
        active: null,
        list: [
            'Test 1',
            'Test 2',
            'Test 3',
            'Test 4',
            'Test 5'
        ]
    }
}

const usersReducer = (state = initialState.users, action: any) => {
    if (action.type === 'CHANGE_USER') {
        return {
            ...state,
            active: action.payload
        }
    }
    return state;
}

export default usersReducer;