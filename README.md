# MicroBlog

MicroBlog is an app where users can view blogs, create blog posts, comment on posts and upvote/downvote blogs. The frontend was built with React/Redux and the backend was built with Node, Express, and PostgreSQL.

To see a live demo: https://reactjs-microblog.herokuapp.com/companies

## Installation

_To run this repository locally:_

1. git clone
2. createdb microblog
3. psql microblog < data.sql

_Set up the backend:_

1. cd "backend"
2. `npm install`
3. `node server.js`

_Set up the frontend:_

1. cd "frontend"
2. `npm install`
3. `npm start`

## Features

- Users can see posts, create posts, comment on blogs and upvote/downvote posts and apply to open positions
- Used Redux/Redux Thunk as a global state management tool
- Postgres database to store posts/comments

## Technologies

- React
- Node/Express
- Redux/Redux Thunk
- PostgreSQL
- Reactstrap/Bootstrap
- Axios
- Jest and Deep Freeze to test Redux reducer

## Sample

**Here's a sample page (home page):**

![alt text](https://github.com/hasierpastor/microblog/blob/master/images/Microblog.jpg 'Home Page')

## Features To Add

- Add auth to backend for signup/login functionality

## Collaborators

https://github.com/SKaplan01/jobly
