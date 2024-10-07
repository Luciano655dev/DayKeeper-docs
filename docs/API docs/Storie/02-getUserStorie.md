---
sidebar_position: 2
---

# Get All User's Stories

### <span style={{color: 'green'}}>GET</span> `stories/:name/all`

#### Description:

This function allows you to get every storie that an user has posted.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name   | Type     | Required | Description      |
| ------ | -------- | -------- | ---------------- |
| `name` | `string` | Yes      | The account name |

- <strong>NOTE:</strong> the fields `views` and `reactions` will just be returned if you're the user who posted the storie.

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://daykeeper.life/stories/JohnDoe/all")
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
    "message": "User Stories fetched successfully",
    "data": [
        {
            "_id": "66ddf5ecf0fb631b603dcfa3",
            "user": "66c4ac9f1cfe0795199a733e",
            "file": {
                "name": "Screenshot 2024-09-02 at 5.12.30 PM.png",
                "key": "6b0acf68c8504c7ff6f4a74c7d606d3b-Screenshot 2024-09-02 at 5.12.30 PM.png",
                "mimetype": "image/png",
                "url": "http://s3.amazonaws.com/daykeeper/6b0acf68c8504c7ff6f4a74c7d606d3b-Screenshot%202024-09-02%20at%205.12.30%E2%80%AFPM.png"
            },
            "text": "Storie Teste",
            "created_at": "2024-09-08T19:07:24.666Z",
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
                "__v": 0,
                "banned": "false"
            }
        },
        {
            "_id": "66cf57aecd501387a0b95c41",
            "user": "66c4ac9f1cfe0795199a733e",
            "file": {
                "name": "Screenshot 2024-08-26 at 2.35.12 PM.png",
                "key": "171e1dd17e061c838d7b733b573f39b3-Screenshot 2024-08-26 at 2.35.12 PM.png",
                "mimetype": "image/png",
                "url": "http://s3.amazonaws.com/daykeeper/171e1dd17e061c838d7b733b573f39b3-Screenshot%202024-08-26%20at%202.35.12%E2%80%AFPM.png"
            },
            "text": "My first storie",
            "created_at": "2024-08-28T17:00:30.130Z",
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
                "banned": "false"
            }
        }
    ],
    "page": 1,
    "pageSize": 2,
    "maxPageSize": 2,
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
    "message": "User not found"
}
```

#### Possible errors:

| Code | Description                                                                |
| ---- | -------------------------------------------------------------------------- |
| 404  | User not found (if there's no stories, it will just return an empty array) |
| 409  | Invalid Login                                                              |
| 500  | Server Error                                                               |
