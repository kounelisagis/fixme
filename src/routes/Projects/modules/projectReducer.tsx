import { Dispatch } from "redux";
import { makeCall } from "../../../helpers/caller";

export interface IProject {
  id: string;
  first_color: string;
  second_color: string;
  setup_duration: string;
  logo: string;
  name: string;
  description: string;
  languages: string[];
  tags: string[];
  issues_count: number;
  is_github: boolean;
}

export interface IProjectsState {
  readonly projectList: IProject[];
  readonly projectLength: number;
}

// ------------------------------------
// Actions
// ------------------------------------
export enum ProjectActions {
  GET_PROJECTS = "GET_PROJECTS"
}

// --------------------------------------------------
// Map actions and their payload to type consts
// --------------------------------------------------

export const getProjects = () => (dispatch: Dispatch) =>
  makeCall({ call: { section: "projects", job: "get" } }).then(
    (projects = []) => {
      dispatch({
        type: ProjectActions.GET_PROJECTS,
        action: { payload: projects }
      });
    }
  );

// --------------------------------------------------
// Action Handlers
// --------------------------------------------------
export const ACTION_HANDLERS = {
  [ProjectActions.GET_PROJECTS]: (state: IProjectsState, { action }: any) => ({
    ...state,
    projectList: action.payload,
    projectLength: action.payload.length
  })
};
// --------------------------------------------------
// Reducer
// --------------------------------------------------
const initialState: Partial<IProjectsState> = {
  projectList: [],
  projectLength: 0
};
export default function projectReducer(
  state = initialState,
  action: any
): IProjectsState {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
