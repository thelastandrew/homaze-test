import { getProjects } from '../api/api';

const SET_PROJECTS = 'SET_PROJECTS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SORT_PROJECTS = 'SORT_PROJECTS';

const initialState = {
  projects: [],
  isFetching: false,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS: {
      return { ...state, projects: action.payload };
    }
    case TOGGLE_FETCHING: {
      return { ...state, isFetching: action.payload };
    }
    case SORT_PROJECTS: {
      return { ...state, projects: state.projects.sort((a, b) => a.updated_timestmp - b.updated_timestmp)};
    }
    default:
      return state;
  }
};

//Action creators
const setProjects = (projects) => ({ type: SET_PROJECTS, payload: projects });
const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, payload: isFetching});
const sortProjects = () => ({ type: SORT_PROJECTS });

export const fetchProjects = () => (dispatch) => {
  dispatch(toggleFetching(true));
  getProjects().then(data => {
    dispatch(setProjects(data));
    dispatch(sortProjects());
    dispatch(toggleFetching(false));
  });
};

export default projectsReducer;
