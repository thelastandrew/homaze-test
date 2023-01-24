import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchProjects, findProjects } from '../../redux/projectsReducer';
import { debounce } from '../../utils/utils';
import s from './SearchInput.module.css';
import lens from './lens.png';

const SearchInput = (props) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    const queryString = e.target.value;
    if (queryString.length > 1) {
      props.findProjects(queryString);
      setIsTouched(true);
    } else {
      if (isTouched) {
        props.fetchProjects();
        setIsTouched(false);
      }
    }
  };

  return (
    <div className={s.searchBlock} onSubmit={e => e.preventDefault()}>
      <input
        className={s.searchInput}
        type='text'
        value={props.queryString}
        onChange={debounce(handleChange, 500)}
        placeholder='Search Customer'
      />
        <img className={s.searchImg} src={lens} alt='search div' />
    </div>
  );
};

export default connect(null, { fetchProjects, findProjects })(SearchInput);
