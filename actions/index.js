import { ADD_NEW_TASK, DELETE_TASK,UPDATE_TASK} from './actionType';

export const addNewTask = (inputTaskName) => {
    return{
        type: ADD_NEW_TASK,
        data: inputTaskName,
}
}
export const deleteTask = (index) => {
    return{
        type:DELETE_TASK,
        index
    }
}

export const updateTask = (val,index) => {
    return{
        type:UPDATE_TASK,
        val,
        index
    }
}