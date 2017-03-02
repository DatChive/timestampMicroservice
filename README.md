
     _____ _                     _                        
    |_   _(_)_ __ ___   ___  ___| |_ __ _ _ __ ___  _ __   
      | | | | '_ ` _ \ / _ \/ __| __/ _` | '_ ` _ \| '_ \ 
      | | | | | | | | |  __/\__ \ || (_| | | | | | | |_) |
      |_| |_|_| |_| |_|\___||___/\__\__,_|_| |_| |_| .__/ 
                                                   |_|    
    ------------------------------------------------------ 

# Timestamp Microservive

## Requirements

1. User can pass a string as a URL parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
    * If it does, it returns both the Unix timestamp and the natural language form of that date.
    * If it does not contain a date or Unix timestamp, it returns null for those properties.

## Tasks

* [X] create node server/be able to run server.js
* [X] create route allowing user to pass in URL parameter
* [X] add function checkForUnixTimestamp()
* [X] add function checkForNaturalDate()
* [X] format and return JSON to user


## Using this application

* Run 'npm install' in the timestamp dir
* Server can be started via 'node server.js' in the timestamp dir

## Routes
### GET '/:date'
### param: Datestring (December%2015,%202015) or Unix timestemp (1450137600)
### Returns
* Valid { Unix: 'Unix timestamp representation', Natural: 'Natural/Readable date representation' }
* Invalid { Unix: null. Natural: null }