---
sidebar_position: 6
---

# Like Storie

### <span style={{color: 'darkorange'}}>POST</span> `stories/:name/:storieId/like`

#### Description:

This function allows you to like or unlike a storie.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name       | Type     | Required | Description                                      |
| ---------- | -------- | -------- | ------------------------------------------------ |
| `name`     | `string` | Yes      | The username of the account that made the storie |
| `storieId` | `string` | Yes      | The storie's ID                                  |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get(
  "https://daykeeper.life/stories/JohnDoe/1234/like"
)
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code 200
{
    "message": "Storie Like created successfully",
    "storie": {
        "file": {
            "name": "Screenshot 2024-08-26 at 2.35.12 PM.png",
            "key": "171e1dd17e061c838d7b733b573f39b3-Screenshot 2024-08-26 at 2.35.12 PM.png",
            "mimetype": "image/png",
            "url": "http://s3.amazonaws.com/daykeeper/171e1dd17e061c838d7b733b573f39b3-Screenshot%202024-08-26%20at%202.35.12%E2%80%AFPM.png"
        },
        "_id": "66cf57aecd501387a0b95c41",
        "title": "28-08-2024",
        "user": {
            "profile_picture": {
                "name": "Doggo.jpg",
                "key": "Doggo.jpg",
                "url": "https://daykeeper.s3.amazonaws.com/Doggo.jpg"
            },
            "_id": "66c4ac9f1cfe0795199a733e",
            "name": "JohnDoe",
            "email": "johndoe@example.com",
            "timeZone": "America/Sao_Paulo",
            "bio": "That is my new Bio",
            "private": false,
            "roles": [
                "user"
            ],
            "created_at": "2024-08-20T14:47:59.453Z",
            "banned": "false"
        },
        "text": "My first storie",
        "created_at": "2024-08-28T17:00:30.130Z",
        "hasLiked": false,
        "hasViewed": true,

        // the likes and views will just be returned if you are viewing a storie made by your account
        "views": 5,
        "likes": 1,
    }
}
```

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 404
{
    "message": "Storie not found"
}
```

#### Possible errors:

| Code | Description      |
| ---- | ---------------- |
| 404  | Storie not found |
| 409  | Invalid Login    |
| 500  | Server Error     |
