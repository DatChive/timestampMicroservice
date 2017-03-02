
     ,-----.,--.                  ,--. ,---. 
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \
    |  |    |  || .-. ||  ||  |' .-. |`..'  |
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  / 
     `-----'`--' `---'  `----'  `---'  `--'  
    ----------------------------------------- 

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

* Server can be started via 'node server.js'

## Routes
### GET /:date
### param: Datestring (December%2015,%202015) or Unix timestemp (1450137600)
### Returns
* Valid { Unix: <Unix representation>, Natural: <Natural/Readable representation> }
* Invalid { Unix: null. Natural: null }