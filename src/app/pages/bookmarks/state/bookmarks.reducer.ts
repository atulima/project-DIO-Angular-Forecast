import { createReducer, Action, on } from "@ngrx/store";
// import { Action } from "rxjs/internal/scheduler/Action";
import { Bookmark } from "src/app/shared/models/bookmark.models";
import * as fromHomeActions from "../../home/state/home.actions";
import * as fromBookmarkActions from "./bookmarks.actions";

export interface BookmarksState{
    list: Bookmark[];
}

export const bookmarkInitialState: BookmarksState = {
    list:[],
};

const reducer = createReducer(
    bookmarkInitialState,
    on(fromHomeActions.toggleBookmark, (state, {entity}) => ({
        ...state,
        list: toggleBookmark(state.list, entity),
    })),
    on(fromBookmarkActions.removeBookmark, (state, {id}) => ({
        ...state,
        list: state.list.filter(b => b.id !== id),
    })),
    on(fromBookmarkActions.updateBookmarksList, (state, { list }) => ({
        ...state,
        list,
      })),
);

export function bookmarkReducer(state: BookmarksState | undefined, action: Action){
    return reducer(state, action);
}

function toggleBookmark(list: Bookmark[], entity: Bookmark): Bookmark[]{
    if(!!list.find(bookmark => bookmark.id === entity.id)) {
        return list.filter(bookmark => bookmark.id !== entity.id);
    }
    return [...list, entity];
}
