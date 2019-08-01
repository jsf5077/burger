# The Burger Joint

Welcome to The Burger Joint! The application that allows you create your own burger and then eat it. Feel free to eat or remake any burger already on the menu! This application focuses on the use of handlebars while utilizing MySQL, Node, Express, and an ORM made from scratch. This application was also developed using the Model-View-Controller Pattern. 

## Deployment

This application is deployed on Heroku.
link: https://guarded-eyrie-78345.herokuapp.com/

## Home Page

As the client, you navigate this application through your browser. You will be taken to the home page where you will have the opportunity to click on the burger buttons and add your own to the list. As there is a live database plugged in, the list of burgers will load in the current state they existed in the db on either the fresh burgers side or the eaten burgers side. Clicking on the burger buttons will move the burger from one list to the other. You also have the privilege of adding your own burger to the list at the bottom. All brand new burgers will always be generated in the fresh burgers list.  

## Server side 

**The Directory Structure consists of:** 

* **config** - handles the connections with the database.
* **controllers** - responds to the user input and performs interactions on the data model objects.
* **db** - contains schema.sql and seeds.sql
* **models** - responsible for managing the data of the application. It receives user input from the controller.
* **node_modules & package.json** - The necessary packages needed from runing "npm install" in the terminal.
* **public** - contains css, assets, and javascript for the html pages.
* **views** - contains all the handlbars that create the htmls in the browser.
* **server.js** - creates the actual server connection when opened with node. 


## Built With

* [Heroku](https://code.visualstudio.com/)
* [Visual Studio Code](https://www.heroku.com/)
* [JawsDB](https://www.jawsdb.com/)

## Authors

* **Jeff Froehlich** - *Initial work* - [Github Repo](https://github.com/jsf5077/burger)
