import s from './SearchInput.module.css';
import lens from './lens.png';

const SearchInput = () => {
  return (
    <form className={s.searchForm} onSubmit={e => e.preventDefault()}>
      <input className={s.searchInput} type='text' placeholder='Search Customer' />
      <button className={s.searchBtn} title='search' >
        <img src={lens} alt='search button' />
      </button>
    </form>
  );
};

export default SearchInput