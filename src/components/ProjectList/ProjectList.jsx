import { useState, useEffect } from 'react';
import { getProjects } from '../../api/api';
import Project from '../Project/Project';
import s from './ProjectList.module.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(data => {
      setProjects(data);
    });
  }, []);

  return (
    <div className={s.projectList}>
      {projects.map(project => <Project key={project.projectId} project={project} />)}
    </div>
  );
};

export default ProjectList