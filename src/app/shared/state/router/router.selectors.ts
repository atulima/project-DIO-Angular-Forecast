import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterState } from "./router.reducer";

const selectRouterReducerState = createFeatureSelector<RouterReducerState<RouterState>>('router');

export const selectRouterState = createSelector(
    selectRouterReducerState,
    (routerReducerState: RouterReducerState<RouterState>) => (routerReducerState && routerReducerState.state) || {},

);

export const selectRouterQueryParamas = createSelector(
    selectRouterState,
    (routerState: RouterState) => (routerState && routerState.queryParams) || {},
);