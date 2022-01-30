/*
    {
        notes:[],
        active: null,
        active: {
            id: 'firebaseid',
            title: string,
            body: string,
            imageUrl: '',
            date: a date
        }
    }
*/
import { types } from "../components/types/types";

 

const initialSate = {
    notes: [],
    active: null,
}

export const notesReducer = (state= initialSate, action) =>{

    switch(action.type){

        case types.notesActive:
            return{
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return{
                ...state,
                notes: [...action.payload]
            }   
        case types.notesUpdated:
            return{
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                    ? action.payload.note
                    : note
                )
            };

        default:
            return state;
    }

}