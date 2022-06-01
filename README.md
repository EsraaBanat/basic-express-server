# basic-express-server

## **Bulid the server :**

1. Initialize your app ` npm init -y `
2. Install your dependencies  `npm install dotenv express jest`
3. Create the files and folders required for the application [index.js , server.js , server.test.js , middlewares , handlers ]
4. Create the correct content in the files
5. Test your server  `npm test`
You should see 100% of tests passing (TDD )
6. Start your server `nodemon`

## **Server Content** :

### **1- Person Route**

- Method: GET
- Path: /person
- Expects a query string from the user with a “name” property
- When present, output JSON to the client with this shape: { name: "name provided" }
Without a name in the query string, force a “500” error

### **2- middleware modules :**

**1. logger.js**

- Performs a console.log with the request method and path
- Import this into your server and set it up to run at the application level for all routes

**2. validator.js**

- Checks the query string for a name property

- Sends the request through when valid, forces an error when not

### **3- error-handlers :**

<br>

**1. 404.js**
- Sends a 404/Not-Found message as the response
- Import this into your server and set it up to be “used” after your other routes

**2. 500.js**
- Sends a 500/Server Error message as the response
- Import this into your server and set it up to be “used” as the last route

### **Testing :**

- 404 on a bad route
- 404 on a bad method
- 500 if no name in the query string
- 200 if the name is in the query string
- given an name in the query string, the output object is corre

## **Dployment the server to Heroku app:**

1. Login to your Heroku account
2. Create a new Heroku app
3. Go to the deployment tab
    - Choose “GitHub”
    - Connect to your repository
    - Choose the  branch
    - Choose the “Wait for CI to pass before deploy” option
    - Choose the “enable automatic deploys” option
    - Deploy the app and open the server in the browser, you should see the same results as you saw locally

## **Links :**

Heroku apps:



Github :


