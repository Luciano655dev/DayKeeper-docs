---
sidebar_position: 4
---

# Login/Register Google

### <span style={{color: 'darkorange'}}>POST</span> `/auth/google`

#### Description:

This function allows you to log-in/register into an account with a google account.

- <span style={{color: '#8B8000'}}>Note:</span> This login is not ready yet. If you see any unexpected error or know how to improove it, e will be happy to see!

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### Body

| Name     | Type      | Required | Description                 |
| -------- | --------- | -------- | --------------------------- |
| `google` | `account` | Yes      | The google account (no way) |

- If the account related to the google account does not exist, a new one will be created.

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.post("https://api.daykeeper.life/auth/google") // open a web page
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
  "message": "Google Account is not valid"
}
```

#### Possible errors:

| Code | Description               |
| ---- | ------------------------- |
| 400  | Invalid/Wrong information |
