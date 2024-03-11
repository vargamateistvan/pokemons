# Pokemons

## Run the app locally

```
docker-compose up
```

## Task

Statement of work ( SOW ):

● During your work use the https://pokeapi.co/ REST API.

● Enable the user to register

● Enable the user to log in

● Enable the user to log out

● Enable the user to catch and release a pokemon

● Each user related (list, catch, release) endpoints should be authorized endpoints, only
logged in users are able to reach them

● Show the list of pokemons catched by the user and allow the user to release them

● Filter and sort the catched pokemons

● List the different types of pokemons on the main screen (use a dropdown menu or
picker)

● When a type is selected, list all the pokemon names which are assigned to this type

● Include a search bar, to enable searching in all pokemons by name

● Upon selection of a pokemon, navigate to a profile card where you show some details
about the selected pokemon
The detailed profile card needs to include: a picture of the pokemon, name of
pokemon, weight, height, not hidden abilities

● On the same screen implement a 'catch' button. On click, the pokemon should be
catched. You will need to mark the catched pokemons on the list (for example: green
border around the name). When a pokemon is catched, the button should turn to
'release', so if you want to release them back to the wild you can.

● Implement a checkbox next to the search bar to list only your catched pokemons.

● Add some navigation to go back on the webpage, and do not fetch the data again

● Use a loader / spinner while fetching data.

## Requirements:

● ReactJS with Typescript and the global state management you prefer on the
frontend, and NodeJS (we prefer NestJS framework (if you are not familiar with it,
you can choose another one) and with an ORM you prefer) with TypeScript and the

database you prefer on the backend. The features written in red should be developed

on the backend as well.

● The codebase should be expandable and scalable

● Usage of ES6

● Easy to read, DRY (Do Not Repeat Yourself) and well structured component based
code.

● Documentation with JSDocs, unless the code documents itself

● Backend bonus point: swagger documentation

● You can use any css library of your like, or you can write the whole on your own

● Please use Git as version control, and share the repository with us

## Bonus:

● Dockerize each project

● Deploy the project to a server (can be heroku, firebase etc, your preference)
