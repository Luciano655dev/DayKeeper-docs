---
sidebar_position: 7
---

# Get Logged User

### <span style={{color: 'green'}}>GET</span> `/auth/user`

#### Description:

This function allows you to get information from the logged in user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get("https://api.daykeeper.life/auth/user")
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |
| `user`    | `string` | The logged user data |

#### Example:

```javascript
Status Code: 200
{
    "message": "user fetched successfully",
    "user": {
        "profile_picture": {
            "name": "Doggo.jpg",
            "key": "Doggo.jpg",
            "url": "https://daykeeper.s3.amazonaws.com/Doggo.jpg"
        },
        "_id": "66c4ac9f1cfe0795199a733e",
        "name": "JohnDoe",
        "email": "johndoe@example.com",
        "timeZone": "America/Orlando",
        "bio": "",
        "verified_email": true,
        "private": false,
        "roles": [
            "user"
        ],
        "device_tokens": [],
        "created_at": "2024-08-20T14:47:59.453Z",
        "followers": [],
        "follow_requests": [],
        "blocked_users": [],
        "__v": 0
    }
}
```

- That is the same return from login.

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 409
{
  "message": "Invalid Login"
}
```

#### Possible errors:

| Code | Description   |
| ---- | ------------- |
| 409  | Invalid Login |
