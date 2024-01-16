import { useState } from 'react'
import { useEffect } from 'react'
import Logo from '../assets/logo.svg'

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium")
  

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  }, [theme])

//   import { useState, useEffect } from 'react';
// import Logo from '../assets/logo.svg';

// export const Header = () => {
//   // Retrieve the theme from local storage
//   const storedTheme = localStorage.getItem("theme");

//   // Use a try-catch block to handle potential JSON parsing errors
//   let initialTheme;
//   try {
//     initialTheme = storedTheme ? JSON.parse(storedTheme) : "medium";
//   } catch (error) {
//     console.error("Error parsing theme from local storage:", error);
//     // Handle the error by falling back to a default theme or any other appropriate action
//     initialTheme = "medium";
//   }

//   const [theme, setTheme] = useState(initialTheme);

//   useEffect(() => {
//     // Save the theme to local storage as a JSON string
//     try {
//       localStorage.setItem("theme", JSON.stringify(theme));
//     } catch (error) {
//       console.error("Error storing theme in local storage:", error);
//       // Handle the error by taking appropriate action
//     }

//     // Update the document class to reflect the selected theme
//     document.documentElement.removeAttribute("class");
//     document.documentElement.classList.add(theme);
//   }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Task-Manage logo" />
        <span>Task-Manager</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'light activeTheme' : 'light'}
        ></span>
        <span
          onClick={() => setTheme('medium')}
          className={theme === 'medium' ? 'medium activeTheme' : 'medium'}
        ></span>
        <span
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'dark activeTheme' : 'dark'}
        ></span>
        <span
          onClick={() => setTheme('gradientOne')}
          className={
            theme === 'gradientOne' ? 'gradientOne activeTheme' : 'gradientOne'
          }
        ></span>
        <span
          onClick={() => setTheme('gradientTwo')}
          className={
            theme === 'gradientTwo' ? 'gradientTwo activeTheme' : 'gradientTwo'
          }
        ></span>
        <span
          onClick={() => setTheme('gradientThree')}
          className={
            theme === 'gradientThree'
              ? 'gradientThree activeTheme'
              : 'gradientThree'
          }
        ></span>
      </div>
    </header>
  )
}
