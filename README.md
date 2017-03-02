
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

* [ ] create node server/be able to run server.js
* [ ] Route allowing user to pass in URL parameter
* [ ] add function checkForUnixTimestamp()
* [ ] add function checkForNaturalDate()
* [ ] format and return JSON to user