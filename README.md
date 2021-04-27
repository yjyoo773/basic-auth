# LAB - Basic Auth


### Author: Ellis Yoo

### Links and Resources

- [ci/cd](https://github.com/yjyoo773/basic-auth/actions)
- [back-end server url](https://ellis-basic-auth.herokuapp.com/)

### Setup
#### How to initialize/run your application (where applicable)
- Dependencies
  - dotenv
  - bcrypt
  - cors
  - mongoose
  - express
  - jest
  - supergoose
- Application is initialized by `npm start`
- Application can run using nodemon by `npm run watch`


#### Tests

- How do you run tests?   
The tests can be run by entering `npm test` or `npm run test-watch` on the command line.  
- Any tests of note?  
There are 5 tests in total.   
1.Creates a user and making sure the added user is properly saved and returns a 201 status code.    
2. Makes sure that there cannot be users with the same username.    
3. Allows the user to sign in with the user's correct username and password.   
4. Tests to return an error with an incorrect password.    
5. Tests to return an error for a non existing username.    
- Describe any tests that you did not complete, skipped, etc    
I was unable to complete testing the middleware.
