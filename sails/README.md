learning about sails.js
===

- create a login page
```
sails new myApp
```

# myApp

a [Passport authentication](http://passportjs.org/)

- change into the directory
```
cd myApp
```

- create a controller called user with the methods "index, show, edit, delete"
- new file : api/controllers/UserController.js
```
sails generate controller user index show edit delete
```

- create a model called user with the fields "name, email, password"
- new file : api/models/User.js
```
sails generate model user name:string email:string password:string
```

- generating a Blueprint API that allows you to visit /user and view the raw json representation of the data stored
```
sails generate user
```

- http://localhost/user/create?name=John+Smith will create a new user with the name of "John Smith" and print out a JSON array of all of the records created in that model


./runme
```
