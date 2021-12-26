![TruthSeekers Logo](https://truthseekers.io/wp-content/uploads/2021/05/ts-logo-dark-horizontal549x181.jpg)

## [Please support our YouTube channel by Subscribing!](https://www.youtube.com/channel/UCa0s8d-23qP7RmIMZ54x7Ug)

## [Support our channel, planet, AND the future. (Click here!)](https://truthseekers.io/support-nuclear/)

### Develop your skills with our high quality tutorials on:

Linux, Docker & Kubernetes, React.js, GraphQL, SQL, Mongo, Emacs & more. Anything tech.

## [Join our community by signing up for our newsletter!](https://truthseekers.io/latest-tutorials-signup/)

## branches in order (I think)

1. master (?)
2. basic-gql-server-done (?)
3. ui-queries-setup
4. step-three-ui-mutations-setup
5. four-start-frontend-auth
6. five-basic-frontend-auth-works
7. six-send-bearertoken-to-server
8. verifyToken (?)
9. require-auth-in-server (?)
10. userinfo-on-server (?)
11. final-redirect-user-on-login ** This is the completed code **

### Instructions

cd server/ && npm install

cd ui/ && npm install

Create a "single page application" in Auth0.
sidebar -> applications -> applications -> create application -> (name and select single page web applications)

Create an API
sidebar -> applications -> apis -> create api -> (give a name, and create an https://somerandomdomain)

Fill in the following .env vars:

ui/.env:

REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=

server/.env:

AUTH0_DOMAIN=
AUDIENCE=
