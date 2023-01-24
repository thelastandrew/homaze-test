import Dashboard from './components/Dashboard/Dashboard';
import s from './App.module.css';

const App = () => {
  return (
    <main className={s.main}>
      <h1 className={s.title}>Contracts</h1>
      <Dashboard />
    </main>
  );
}

export default App;
