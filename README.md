
![](game-of-thrones-quotes-api_header.png)

# iBookings Online Hotel Bookings API



## Production host

*Yet to Deploy💡*
<!-- 🆕 []() -->


## API USAGE

### `USER REGISTER`


`POST /api/auth/register`



>*Request Body*

```
{
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
    },
    phone: {
        type: String
    },
    photoURL: {
        type: String
    } 
}

```

### `GET USER`
`GET /api/users/{id}`

Returns a user with  _id `{id}`.
`{id}` is optional. If not provided, an array of all users will be returned.
```
{
    "_id": string,
    "username": string,
    "email": string,
    "password": string,
    "name": string, 
    "isAdmin": boolean,
    "createdAt": string,
    "updatedAt": string,
    "address": string,
    "phone": string,
    "photoURL": string
},
    
```


