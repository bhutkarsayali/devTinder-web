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
- Edit Profile feature
- Show toast message on save of profile
- New Page - see all my connections
- New Page - see all my connection requests
- Feature ; Accept/Reject Connection Request
- Send/Ignore the user card from Feed

Remaining:
- Signup new user
- E2E Testing



# componmets design
Body 
    NavBar
    Route=/  => Feed
    Route=/login  => Login
    Route=/connections  => Connections
    Route=/profile  => Profile

# Deployment
- signup on AWS
- Launch instance
- chmod 400<secret>.pem
- ssh i "devTinder.secret.pem" ubuntu...........amazonaws.com
- Install Node version same as your project on AWS virtual machine
- Git clone frontend and backend repos on virtual machines
- npm install on virtual machines repos
- npm run build > create build 
- use NGINX to host frontend project
- install nginx 
- sudo app update
- sudo systemctl start nginx
- sudo systemctl enable nginx
- copy code from dist(buiil files) to /var/www/html (nginx httpserver)
- Enable port :80 of your instance
