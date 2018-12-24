import { createAction } from 'redux-actions';

export const SET_PROFESSIONS_LIST = '@/SET_PROFESSIONS_LIST';
export const RESET_PROFESSIONS_LIST = '@/RESET_PROFESSIONS_LIST';

export const setProfessionsListAction = createAction(SET_PROFESSIONS_LIST);
export const resetProfessionsListAction = createAction(RESET_PROFESSIONS_LIST);
