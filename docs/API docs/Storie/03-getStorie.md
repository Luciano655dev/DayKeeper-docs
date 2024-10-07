---
sidebar_position: 3
---

# Get Storie By Id

### <span style={{color: 'green'}}>GET</span> `stories/:name/:storieId`

#### Description:

This function allows you to get a specific storie by it's id or date. <strong>If you're searching by ID, it will return just one storie (if found) and, if searched by date, it will return an array with the stories fetched</strong>

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name       | Type     | Required | Description                                   |
| ---------- | -------- | -------- | --------------------------------------------- |
| `name`     | `string` | Yes      | The account name                              |
| `storieId` | `string` | Yes      | The ID of the storie that you are looking for |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://daykeeper.life/JohnDoe/24-08-2024")
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |
| `stories` | `string` | The stories data     |

#### Example:

```javascript
Status Code 200
{
    "message": "Stories fetched successfully",
    "data": {
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

        // the fields `views` and `likes` will just be returned if you're the user who posted the storie.
        "views": 4,
        "likes": 1
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
    "message": "User not found"
}
```

#### Possible errors:

| Code | Description                                                                |
| ---- | -------------------------------------------------------------------------- |
| 404  | User not found (if there's no stories, it will just return an empty array) |
| 409  | Invalid Login                                                              |
| 500  | Server Error                                                               |
