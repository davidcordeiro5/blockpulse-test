## Description

Test for Blockpluse

## Installation

Fisrt update the `TypeOrmModule.forRoot` in `app.module.ts` and us your sql data base

## Running the app

```bash
$ npm install

# watch mode
$ npm run start:dev

```

## Graphql plyground

http://localhost:3000/graphql

You can use two getters and two mutation

```js
//GETTERS
getUsers() //which return all users in the bd
getUserByIf(id: string) //which return one user

//MUTATION
createUser(data: UserDto) //which add a new user in the db and return him
updateUser(data: UpdateUserDto)//which update one user selected by his id

```
