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
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

const handleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  e.target.checked ? setDark() : setLight();
}

if (defaultDark) {
  setDark();
}

const DarkMode = () => {
  return (
    <div className='toggle-theme-wrapper'>
      <span>☀️</span>
      <label className='toggle-theme' htmlFor='checkbox'>
        <input 
          type="checkbox" 
          id="checkbox" 
          onChange={handleTheme} 
          defaultChecked={defaultDark}
        />
        <div className='slider round'> </div>
      </label>
      <span>🌒</span>
    </div>
  )
}

export default DarkMode
