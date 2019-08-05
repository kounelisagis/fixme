import { createAction } from "typesafe-actions";

export interface IHomeState {
  readonly technology: string;
  readonly experienceNeeded: string;
  readonly hoster: string;
}

// ------------------------------------
// Actions
// ------------------------------------
export enum HomeActions {
  UPDATE_TECHNOLOGY = "UPDATE_TECHNOLOGY",
  UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE",
  UPDATE_HOSTER = "UPDATE_HOSTER"
}

// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------
export const updateTechnology = createAction(
  HomeActions.UPDATE_TECHNOLOGY,
  resolve => (technology: string) => resolve(technology)
);
export const updateExperience = createAction(
  HomeActions.UPDATE_EXPERIENCE,
  resolve => (experienceNeeded?: string) => resolve(experienceNeeded)
);
export const updateHoster = createAction(
  HomeActions.UPDATE_HOSTER,
  resolve => (hoster?: string) => resolve(hoster)
);

export const actions = {
  updateTechnology
};
// --------------------------------------------------
// Action Handlers
// --------------------------------------------------
export const ACTION_HANDLERS = {
  [HomeActions.UPDATE_TECHNOLOGY]: (state: IHomeState, { payload }: any) => ({
    ...state,
    technology: payload
  }),
  [HomeActions.UPDATE_EXPERIENCE]: (state: IHomeState, { payload }: any) => ({
    ...state,
    experienceNeeded: payload ? [payload] : undefined
  }),
  [HomeActions.UPDATE_HOSTER]: (state: IHomeState, { payload }: any) => ({
    ...state,
    hoster: payload ? [payload] : undefined
  })
};
// --------------------------------------------------
// Reducer
// --------------------------------------------------
const initialState: Partial<IHomeState> = {};
export default function homeReducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.technology];
  return handler ? handler(state, action) : state;
}
