import {createAction}from 'redux-actions'



export class counteraction{

static increment(){
 return {
     type: counteraction.increment_counter,
 };
}
static decrement(){
    return{
        type: counteraction.decrement_counter,
    };
}
}