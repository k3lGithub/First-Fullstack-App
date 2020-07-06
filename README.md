# Project2 : Express Fullstack Application


### Overview:
Online shopping site for Home Accessories providing user with list with of products and ability to 
This App provides the current status of covid19 cases across the countries. 
Page incldues an input field where user can search for country names which returns the data represented in table and google map.
A short quiz which displays answers on click follows after.

### Getting Started:
- Install latest MongoDB Compass
- Install latest Node
- run the following command in /server directory
```sh
$ npm install
```
- run following command in directory of "index.js"
```sh
$ npx nodemon index.js
```
- Install "Live Server" extension in code
- Open "index.html" with live server

### Technologies used:
- mongoose v5.9.18
- express 4.17.1
- express Session v1.17.1
- jquery-3.5.1.min.js
- bootstrap.min.js 4.5.0
- local storage

### Features:
- Backend API to support product updates between UI
- User login and create
- Manipulating DOM
- Add to Cart functionality and data transfer between pages with support of local storage
- Check out functionality which validates and updates database using backend api


### Challenges and Improvements:
* **Challenges**:
    * Add to Cart functionality - having to update quantity in local storage if cart and item alrady exist 
    * Integration with UI and Backend
* Further **Improvements** can be done to:
    * Refactoring
    * Search Result Page
    * Introduce Catagories and filter options to display
    * Additional dropdown suggestions and field validations for UI and backend
    * Additonal user controlled functionalities
    * User Profile - Login Dropdown with User details