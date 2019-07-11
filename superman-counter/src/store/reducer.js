const  initialState = {
    counter:0,
    results: []
}

const reducer = (state = initialState,action) => {

    if(action.type==='increment') {

        return {
            counter: state.counter + 1
        }
    }
    if(action.type==='decrement') {

        return {
            counter: state.counter - 1
        }
    }
    return state;
}

export default reducer;