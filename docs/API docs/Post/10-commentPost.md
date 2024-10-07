---
sidebar_position: 10
---

# Comment Post

### <span style={{color: 'darkorange'}}>POST</span> `/:name/:title/comment`

#### Description:

This function allows you to make or delete a comment in a post. If you have already commented in a post, your comment will be removed and, if not, it will be added. <strong>You can only do ONE comment per post.</strong>

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name    | Type     | Required | Description                    |
| ------- | -------- | -------- | ------------------------------ |
| `name`  | `string` | Yes      | The username who made the post |
| `title` | `string` | Yes      | The post title (dd-MM-yyyy)    |

#### Body

| Name      | Type     | Required | Description           |
| --------- | -------- | -------- | --------------------- |
| `comment` | `string` | Yes      | The comment text      |
| `gif`     | `string` | No       | The gif ID from GIPHY |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = axios.post(
  "https://daykeeper.life/JohnDoe/25-08-2024/comment",
  {
    comment: "My new comment here",
    gif: "EoVWPQErq3RPo6EZah", // https://giphy.com/gifs/ufc-sports-sport-mma-GgCQw4TGi4GXc3jxV9
  }
)
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |
| `post`    | `object` | The post data        |

#### Example:

```javascript
Status Code: 200
{
    "message": "comment created successfully",
    "post": {
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
    },
    "comment": {
        "userId": "65cbaab84b9d1cce41e98b60",
        "postId": "66cbbea31e854f3d7995c1f0",
        "created_at": "2024-09-21T20:02:12.670Z",
        "comment": "My new comment here",
        "gif": {
            "name": "Still Going Mixed Martial Arts GIF by UFC",
            "id": "EoVWPQErq3RPo6EZah",
            "url": "https://media2.giphy.com/media/EoVWPQErq3RPo6EZah/giphy.gif?cid=57a8262exjosejqfobcgi7c6t5by7861k9xzk4xxn5lkea1u&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
        },
        "_id": "66ef265c8f073b81cb3b3900",
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
| 404  | Post not found |
| 409  | Invalid Login  |
| 500  | Server Error   |
