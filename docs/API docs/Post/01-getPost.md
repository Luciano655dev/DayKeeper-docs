---
sidebar_position: 1
---

# Get Post

### <span style={{color: 'green'}}>GET</span> `/:name/:title`

#### Description:

This function allows you to get a specific post by it's title and user who posted it.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name    | Type     | Required | Description                     |
| ------- | -------- | -------- | ------------------------------- |
| `name`  | `string` | Yes      | The username that made the post |
| `title` | `string` | Yes      | The post title (`dd-MM-yyyy`)   |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://daykeeper.life/JohnDoe/24-08-2024")
```

### Success Response

| Name      | Type     | Description           |
| --------- | -------- | --------------------- |
| `Status`  | `code`   | Response Status Code  |
| `Message` | `string` | Descriptive message   |
| `post`    | `string` | The fetched post data |

#### Example:

```javascript
Status Code: 200
{
    "message": "post fetched successfully",
    "post": {
        "_id": "66cbbea31e854f3d7995c1f0",
        "title": "25-08-2024",
        "data": "My first Post here",
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
            "verified_email": true,
            "password": "$2b$12$gV.2dZmg7ku708qQcTEVpOooLe4WhrqOdIbk5yzdIbgIYqfWbgBkO",
            "private": false,
            "roles": [
                "user"
            ],
            "created_at": "2024-08-20T14:47:59.453Z",
            "__v": 0,
        },
        "created_at": "2024-08-25 20:30:43-03:00",
        "files": [
            {
                "name": "Screenshot 2024-08-22 at 9.03.09 AM.png",
                "key": "d76d775053d021f930ce1fe203f7bebd-Screenshot 2024-08-22 at 9.03.09 AM.png",
                "mimetype": "image/png",
                "url": "http://s3.amazonaws.com/daykeeper/d76d775053d021f930ce1fe203f7bebd-Screenshot%202024-08-22%20at%209.03.09%E2%80%AFAM.png",
                "_id": "66cbbea31e854f3d7995c1f1"
            }
        ],
        "likes": 1,
        "comments": 1,
        "__v": 8,
        "banned": false,
        "hasLiked": true,
        "userComment": { // if the user haven't commented on the post, the value would be 'false'
            "gif": {
                "name": "Still Going Mixed Martial Arts GIF by UFC",
                "id": "EoVWPQErq3RPo6EZah",
                "url": "https://media4.giphy.com/media/EoVWPQErq3RPo6EZah/giphy.gif?cid=57a8262ewows1vqyqpdy18ijh2brp0v9kplaef1lsxi3ioys&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
            },
            "_id": "66d8949f8c96161212c61bf3",
            "userId": "65cbaab84b9d1cce41e98b60",
            "postId": "66cbbea31e854f3d7995c1f0",
            "created_at": "2024-09-04T17:10:07.847Z",
            "comment": "Comentario depois de organizar tudo",
            "__v": 0
        }
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
    "message": "Post not found"
}
```

#### Possible errors:

| Code | Description    |
| ---- | -------------- |
| 404  | Post not Found |
| 409  | Invalid Login  |
| 500  | Server Error   |
