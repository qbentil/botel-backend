
![](game-of-thrones-quotes-api_header.png)

# iBookings Online Hotel Bookings API



## Production host

*Yet to Deploy💡*
<!-- 🆕 []() -->


## API USAGE

### `USER REGISTER`


`POST /api/auth/register`



>[Request Body](RequestBody)
{
	"name": "John Doe"
	"username": "jdoe",
	"email": "doe@test.com",
	"password":"123456",
}

### `GET /v1/random/{number}`

Returns `{number}` quotes.  
`number` parameter is optional. By default, one quote is returned.

