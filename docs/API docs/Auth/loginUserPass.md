---
sidebar_position: 3
---

# Login (username/password)

### <span style={{color: 'darkorange'}}>POST</span> `/auth/login`

#### Description:

This function allows you to log-in into an account with an username ans a password.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### Body

| Name       | Type     | Required | Description                   |
| ---------- | -------- | -------- | ----------------------------- |
| `name`     | `string` | Yes      | The account username or email |
| `password` | `string` | Yes      | The account password          |

- If you have not confirmet your email, a new verification code will be sent to the email so you can confirm it and the loign wont be finished.

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.post("https://api.daykeeper.life/auth/login", {
  name: "JohnDoe",
  password: "MyPassword1234",
})
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

- See that thos response returns "confidential" informations too, like roles, device_tokens, etc...

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 400
{
  "message": "Password is not valid"
}
```

#### Possible errors:

| Code | Description                        |
| ---- | ---------------------------------- |
| 400  | Invalid/Wrong information          |
| 413  | Information `{name}` not filled in |
