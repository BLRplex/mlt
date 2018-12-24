import { createAction } from 'redux-actions';

export const SET_HAIR_COLORS_LIST = '@/SET_HAIR_COLORS_LIST';
export const RESET_HAIR_COLORS_LIST = '@/RESET_HAIR_COLORS_LIST';

export const setHairColorsListAction = createAction(SET_HAIR_COLORS_LIST);
export const resetHairColorsListAction = createAction(RESET_HAIR_COLORS_LIST);
