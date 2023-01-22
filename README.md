EPSI_B3_REACT_APP_MAP
=============

**epsi_b3_react_app_map** is an application like Gmap that provides an itinary between two locations for users.

Project group
-------------

Boutillier Paul 
Vandewalle Axel

Description
-----------

The user can provide a destination and a departure from the the region > department > city thanks to the searching inputs that will autocomplete. The application will provide an itinary between both locations and will display the weather for the both locations. A futhermore, the application provides an itinary history for the users. 

How to use
----------

- Clone repository 
- Install dependencies with `npm install`
- Update the dependencies if there is any error with `npm update`
- Start the application with `npm start`

What is missing ?
-----------------

- The application does not provide weather for every city crossed by the itinary. 
- The application does not provide a button for the user localisation from web browser.

What we can add ? 
-----------------

We could add a DockerFile in order to containerize the application and write a CI/CD form deploying it into a Kubernetes cluster or a simple virtual machine (but this is not advised, we are not in the 90's anymore :D)
