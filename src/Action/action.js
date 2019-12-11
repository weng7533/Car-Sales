


export const DELETEITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';

export const deleteItem = (id) => {
    return {
        type: DELETEITEM,
        payload: id
    }
}



export const AddItem = (id) => {
    return {
        type: ADD_ITEM,
        payload: id
    }
}