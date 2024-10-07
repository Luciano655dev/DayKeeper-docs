---
sidebar_position: 7
---

# Get Post Comments

### <span style={{color: 'darkgreen'}}>GET</span> `/:name/:title/comments`

#### Description:

This function allows you to get the information about the users who commented in a post.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name    | Type     | Required | Description           |
| ------- | -------- | -------- | --------------------- |
| `name`  | `string` | Yes      | The account username  |
| `title` | `string` | Yes      | The title of the post |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get(
  "https://daykeeper.life/JohnDoe/25-08-2024/comments"
)
```

### Success Response

| Name          | Type     | Description                                                       |
| ------------- | -------- | ----------------------------------------------------------------- |
| `Status`      | `code`   | Response Status Code                                              |
| `Message`     | `string` | Descriptive message                                               |
| `data`        | `array`  | Array of objects containing the data of the fectehd users         |
| `page`        | `number` | The current page                                                  |
| `pageSize`    | `number` | The quantity of objects returned in thois page                    |
| `maxPageSize` | `number` | The maximun number of objects that a page can return (max: `100`) |
| `totalPages`  | `number` | The total number of pages                                         |

#### Example:

```javascript
Status Code: 200
{
    "message": "Post Comments fetched successfully",
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
            "private": false,
            "created_at": "2024-08-20T14:47:59.453Z",
            "banned": "false"
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
        "banned": false
    },
    "data": [
        {
            "user": {
                "_id": "65cbaab84b9d1cce41e98b60",
                "name": "Luciano",
                "email": "lucianomenezes655@gmail.com",
                "profile_picture": {
                    "name": "imagem_2024-04-06_185517723.png",
                    "key": "c5d4d49f80d4e9ee7ef551dfb019fe1b-imagem_2024-04-06_185517723.png",
                    "url": "https://daykeeper.s3.amazonaws.com/c5d4d49f80d4e9ee7ef551dfb019fe1b-imagem_2024-04-06_185517723.png"
                },
                "private": false,
                "bio": "Essa é a minha bio, a bio do Luciano",
                "created_at": "2024-02-13T17:45:28.803Z",
                "timeZone": "America/Recife"
            },
            "comment": "Comentario depois de organizar tudo",
            "gif": {
                "name": "Still Going Mixed Martial Arts GIF by UFC",
                "id": "EoVWPQErq3RPo6EZah",
                "url": "https://media4.giphy.com/media/EoVWPQErq3RPo6EZah/giphy.gif?cid=57a8262ewows1vqyqpdy18ijh2brp0v9kplaef1lsxi3ioys&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
            },
            "created_at": "2024-09-04T17:10:07.847Z"
        }
    ],
    "page": 1,
    "pageSize": 1,
    "maxPageSize": 1,
    "totalPages": 1
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
    "message": "Post not Found"
}
```

#### Possible errors:

| Code | Description            |
| ---- | ---------------------- |
| 404  | User OR Post not Found |
| 409  | Invalid Login          |
| 500  | Server Error           |
