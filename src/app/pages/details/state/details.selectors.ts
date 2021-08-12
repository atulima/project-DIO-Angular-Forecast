import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DetailsState } from "./details.reducer";

export const selectDetailsState = createFeatureSelector<DetailsState>('details');

export const selectDetailsEntity = createSelector(
    selectDetailsState,
    (detalsState: DetailsState) => detalsState.entity,
);

export const selectDetailsLoading = createSelector(
    selectDetailsState,
    (detalsState: DetailsState) => detalsState.loading,
);

export const selectDetailsError = createSelector(
    selectDetailsState,
    (detalsState: DetailsState) => detalsState.error,
);