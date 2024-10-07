---
sidebar_position: 9
---

# Like Post

### <span style={{color: 'darkorange'}}>POST</span> `/:name/:title/like`

#### Description:

This function allows you to like a post (no way, wow!).

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name    | Type     | Required | Description                    |
| ------- | -------- | -------- | ------------------------------ |
| `name`  | `string` | Yes      | The username who made the post |
| `title` | `string` | Yes      | The post title (dd-MM-yyyy)    |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = axios.post("https://daykeeper.life/JohnDoe/25-08-2024/like")
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 200
{
    "message": "The like was added or removed from the post",
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
            "private": true,
            "created_at": "2024-08-20T14:47:59.453Z",
            "__v": 0
        },
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

| Code | Description            |
| ---- | ---------------------- |
| 404  | Post OR User not found |
| 409  | Invalid Login          |
| 500  | Server Error           |
