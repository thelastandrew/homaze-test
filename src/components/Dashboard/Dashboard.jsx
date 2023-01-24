import SearchInput from '../SearchInput/SearchInput';
import ProjectList from '../ProjectList/ProjectList';
import s from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={s.dashboard}>
      <SearchInput />
      <ProjectList />
    </div>
  );
};

export default Dashboard