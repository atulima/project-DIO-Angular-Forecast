import { createAction, props } from "@ngrx/store";

export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{ query:string }>(),
    );

export const loadCurrentWeatherSuccess = createAction(
    '[Home] Load Current Weather Success',
    props<{ entity:any }>(),
);
    
    export const loadCurrentWeatherFailed = createAction(
    '[Home] Load Current Weather Failed',
    );
