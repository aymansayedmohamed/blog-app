import { IUserState, GuesUser } from '../../Service/models'
import { Action } from 'redux-actions';
import {
  USER_LOGIN,
  USER_LOGIN_REJECTED,
  USER_LOGIN_FULFILLED
} from '../constants/ActionTypes';

const initialState: IUserState = {
  user: new GuesUser,
  fetching: false,
  fetched: false,
  error: ''
}

export function reducer(state: IUserState = initialState, action: Action<any>): IUserState {

  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        fetching: true
      }
    }
    case USER_LOGIN_REJECTED: {
      return {
        ...state, fetching: false,
        error: action.payload
      }
    }
    case USER_LOGIN_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }
  }

  return state
}
