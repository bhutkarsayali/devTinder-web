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

# componmets design
Body 
    NavBar
    Route=/  => Feed
    Route=/login  => Login
    Route=/connections  => Connections
    Route=/profile  => Profile