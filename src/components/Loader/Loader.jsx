import loader from './loader.gif';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <img src={loader} alt='loader'/>
    </div>
  );
};

export default Loader;