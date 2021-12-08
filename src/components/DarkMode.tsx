import { ChangeEventHandler } from 'react';
import '../styles/darkMode.css';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
}

const handleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  e.target.checked ? setDark() : setLight();
}

const DarkMode = () => {
  return (
    <div className='toggle-theme-wrapper'>
      <span>☀️</span>
      <label className='toggle-theme' htmlFor='checkbox'>
        <input type="checkbox" id="checkbox" onChange={handleTheme} />
        <div className='slider round'> </div>
      </label>
      <span>🌒</span>
    </div>
  )
}

export default DarkMode
