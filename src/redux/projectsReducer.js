import { getProjects } from '../api/api';

const SET_PROJECTS = 'SET_PROJECTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SORT_PROJECTS = 'SORT_PROJECTS';
const FILTER_PROJECTS = 'FILTER_PROJECTS';

const initialState = {
  projects: [],
  isFetching: false,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS: {
      return { ...state, projects: action.payload };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.payload };
    }
    case SORT_PROJECTS: {
      return { ...state, projects: state.projects.sort( (a, b) => a.updated_timestmp - b.updated_timestmp ) };
    }
    case FILTER_PROJECTS: {
      return { ...state, projects: action.payload };
    }
    default:
      return state;
  }
};

//Action creators
const setProjects = (projects) => ({ type: SET_PROJECTS, payload: projects });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: isFetching });
const sortProjects = () => ({ type: SORT_PROJECTS });
const filterProjects = (filteredProjects) => ({ type: FILTER_PROJECTS, payload: filteredProjects });

export const fetchProjects = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  getProjects().then(data => {
    dispatch(setProjects(data));
    dispatch(sortProjects());
    dispatch(toggleIsFetching(false));
  });
};

export const findProjects = (queryString) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  getProjects().then(data => {
    const filteredProjects = data.filter(p => {
      const keyword = queryString.toLowerCase();
      const { customerName, address } = p;
      return customerName.toLowerCase().includes(keyword) | address.toLowerCase().includes(keyword);
    });
    dispatch(filterProjects(filteredProjects));
  });
  dispatch(toggleIsFetching(false));
};

export default projectsReducer;

