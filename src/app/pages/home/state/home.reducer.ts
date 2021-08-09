import { state } from "@angular/animations"
import { createReducer, Action, on } from "@ngrx/store"
// import { Action } from "rxjs/internal/scheduler/Action";

import * as fromHomeActions from './home.actions'

export interface HomeState{
    text: string;
}

export const homeInitialState: HomeState = {
    text: 'Porto Alegre'
}

const reducer = createReducer(
    homeInitialState,
    on(fromHomeActions.changeText, (state,{text}) => ({
        ...state,
        text,
    })),
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState{
    return reducer(state, action);
}