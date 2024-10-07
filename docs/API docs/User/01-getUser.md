---
sidebar_position: 1
---

# Get User

### <span style={{color: 'green'}}>GET</span> `/:name`

#### Description:

This function allows you to get information about a specific user, searching for him by username, email or ID.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name   | Type     | Required | Description                       |
| ------ | -------- | -------- | --------------------------------- |
| `name` | `string` | Yes      | The account username, email or ID |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get("https://api.daykeeper.life/JohnDoe")
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
            "name": "Screenshot 2024-08-21 at 1.19.37 PM.png",
            "key": "d7f71147012e984586f043ab2ddbf74d-Screenshot 2024-08-21 at 1.19.37 PM.png",
            "url": "http://s3.amazonaws.com/daykeeper/d7f71147012e984586f043ab2ddbf74d-Screenshot%202024-08-21%20at%201.19.37%E2%80%AFPM.png"
        },
        "_id": "66c4ac9f1cfe0795199a733e",
        "name": "JohnDoe",
        "email": "johndoe@example.com",
        "timeZone": "America/Recife",
        "bio": "",
        "private": false,
        "followers": 2,
        "created_at": "2024-08-20 11:47:59-03:00",
        "status": "logged"
        "__v": 0,
    }
}
```

- <strong>Note:</strong> The status help you see if the user is logged in (`logged`), if you arte following him (`following`) if he is blocked (`blocked`) or none of them (`default`)
- <strong>Note:</strong> The `created_at` is converted to the Time Zone of your account

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 404
{
"message": "User not found"
}
```

#### Possible errors:

| Code | Description    |
| ---- | -------------- |
| 404  | User not found |
| 409  | Invalid Login  |
| 500  | Server Error   |
