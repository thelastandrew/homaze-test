import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../redux/projectsReducer';
import Project from '../Project/Project';
import Loader from '../Loader/Loader';
import s from './ProjectList.module.css';

const ProjectList = (props) => {
  const listStyles = props.isFetching
    ? s.fetching
    : s.projectList;

  useEffect(() => {
    props.fetchProjects();
  }, []);

  const renderedCards = props.projects.length
    ? props.projects.map(project => <Project key={project.projectId} project={project} />)
    : <p>No projects found</p>;

  return (
    <div className={listStyles}>
      { props.isFetching
        ? <Loader />
        : renderedCards
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  isFetching: state.projects.isFetching,
});

export default connect(mapStateToProps, { fetchProjects })(ProjectList);
