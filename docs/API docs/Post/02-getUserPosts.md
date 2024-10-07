---
sidebar_position: 2
---

# Get User's Posts

### <span style={{color: 'green'}}>GET</span> `/:name/posts`

#### Description:

This function allows you to get all posts made by a user on pages.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name   | Type     | Required | Description                       |
| ------ | -------- | -------- | --------------------------------- |
| `name` | `string` | Yes      | The account username, email or ID |

#### Query Params

| Name   | Type     | Required | Description             |
| ------ | -------- | -------- | ----------------------- |
| `page` | `number` | No       | The page (default: `1`) |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get("https://api.daykeeper.life/JohnDoe/posts")
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
    "data": [
        {
            "_id": "66cbbea31e854f3d7995c1f0",
            "title": "25-08-2024",
            "data": "My first Post here",
            "user": "66c4ac9f1cfe0795199a733e",
            "created_at": "2024-08-25T23:30:43.463Z",
            "files": [
                {
                    "name": "Screenshot 2024-08-22 at 9.03.09 AM.png",
                    "key": "d76d775053d021f930ce1fe203f7bebd-Screenshot 2024-08-22 at 9.03.09 AM.png",
                    "mimetype": "image/png",
                    "url": "http://s3.amazonaws.com/daykeeper/d76d775053d021f930ce1fe203f7bebd-Screenshot%202024-08-22%20at%209.03.09%E2%80%AFAM.png",
                    "_id": "66cbbea31e854f3d7995c1f1"
                }
            ],
            "user_info": {
                "_id": "66c4ac9f1cfe0795199a733e",
                "name": "JohnDoe",
                "email": "johndoe@example.com",
                "profile_picture": {
                    "name": "Doggo.jpg",
                    "key": "Doggo.jpg",
                    "url": "https://daykeeper.s3.amazonaws.com/Doggo.jpg"
                },
                "timeZone": "America/Sao_Paulo",
                "bio": "That is my new Bio",
                "private": false,
                "roles": [
                    "user"
                ],
                "created_at": "2024-08-20T14:47:59.453Z",
                "followers": [
                    "65cbaab84b9d1cce41e98b60",
                    "65cd809dc6f6529359c790ed"
                ],
                "blocked_users": [],
                "__v": 0,
                "banned": "false"
            },
            "likes": 1,
            "userLiked": true,
            "comments": 1,
            "userCommented": [
                {
                    "comment": "Comentario depois de organizar tudo",
                    "gif": {
                        "name": "Still Going Mixed Martial Arts GIF by UFC",
                        "id": "EoVWPQErq3RPo6EZah",
                        "url": "https://media4.giphy.com/media/EoVWPQErq3RPo6EZah/giphy.gif?cid=57a8262ewows1vqyqpdy18ijh2brp0v9kplaef1lsxi3ioys&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
                    },
                    "created_at": "2024-09-04T17:10:07.847Z"
                }
            ]
        }
    ],
    "page": 1,
    "pageSize": 1,
    "maxPageSize": 1,
    "totalPages": 3
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

| Code | Description    |
| ---- | -------------- |
| 404  | User not found |
| 409  | Invalid Login  |
| 500  | Server Error   |
