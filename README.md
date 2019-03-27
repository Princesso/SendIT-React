## Send-IT
[![Build Status](https://travis-ci.org/Princesso/SendIT-React.svg?branch=master)](https://travis-ci.org/Princesso/SendIT-React)
[![Coverage Status](https://coveralls.io/repos/github/Princesso/SendIT-React/badge.svg?branch=master)](https://coveralls.io/github/Princesso/SendIT-React?branch=master)


SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.

## Features

There are two types of users admin and regular user
Users can Register if they have no account or login otherwise
Users can create a new parcel delivery order by adding required fields
Users can change the destination of their parcels
Users can cancel a parcel delivery order
Users can see a list of delivery orders they have made if they have made any
Admin can change the status of a delivery order
Admin can change the location a parcel delivery order

## Technologies Used

Nodejs: an open source server framework that allows you to run JavaScript on the server.
Postgresql: open source object-relational database system.
React: An open source library for building user interfaces.

## Link to API endpoints
https://sendit-it.herokuapp.com/

View all parcel delivery ordes: /api/v1/parcels
View one parcel delivery order: /api/v1/parcels/
Cancel a parcel delivery order: /api/v1/parcels//cancel
View all users: /api/v1/users
View a single user: /api/v1/users/
View parcels belonging to user: /api/v1/users//parcels

## How to clone the project:

To clone this repository:

Ensure you have git installed

git clone https://github.com/Princesso/Send-IT.git

Run npm install

Run npm start to start the server

Follow the src directory to view UI components

## Author

Princess Egbuna - https://github.com/princesso