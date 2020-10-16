import React from 'react';

export const initialState = {
    avatar: '',
    favorites: [],
    appointments: [],
};

export const UserReducer = (state, action) => {
    switch(aciton.type) {
        case 'setAvatar':
            return {... state, avatar: action.payload.avatar};
        break;
        default:
            return state;
    }

}