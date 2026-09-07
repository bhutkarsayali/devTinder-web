# DevTinder

- Create a Vite + React App
- Remove unncessary code and create a Hello world app
_ Install Tailwind css
- Install Daisy UI
- Add NavBar.jsx component to App.js
- Install react router dom
- Create BrowserRouter . Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a Footer

- Create a Login page
- Install axios
- Resolve CORS-
    - Install cors on backend
    - then add middleware to it with configurations: origin, credentials: true
    - and on front end wherever you are making API call, pass axios => {withCredentials: true} (if u dont pass this, your authentication will fail, and it wont send token back in other API calls)


- storing data in Redux store
- install react-redux + @reduxjs/toolkit https://redux-toolkit.js.org/tutorials/quick-start
- then => configureStore => Provider =. createSlice => add reducer to store
- add redux devtools in chrome
- Login and see if your data is coming properly in the store
- Navbar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder
- You should not be able to access other routes without login
- If token is not present, redirect user to login page
- Logout
- Profile page


# componmets design
Body 
    NavBar
    Route=/  => Feed
    Route=/login  => Login
    Route=/connections  => Connections
    Route=/profile  => Profile