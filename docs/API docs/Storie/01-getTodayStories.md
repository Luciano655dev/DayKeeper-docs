---
sidebar_position: 1
---

# Get Today User's Stories

### <span style={{color: 'green'}}>GET</span> `stories/:name/today`

#### Description:

This function allows you to get all the stories an user has posted today.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name   | Type     | Required | Description      |
| ------ | -------- | -------- | ---------------- |
| `name` | `string` | Yes      | The account name |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://daykeeper.life/JohnDoe/today")
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |
| `stories` | `string` | The stories data     |

#### Example:

```javascript
Status Code: 200
{
    "message": "Stories fetched successfully",
    "data": [
        {
            "file": {
                "name": "Screenshot 2024-09-13 at 9.09.07 AM.png",
                "key": "ed931d6552cc936569cfc5e16e1b5808-Screenshot 2024-09-13 at 9.09.07 AM.png",
                "mimetype": "image/png",
                "url": "http://s3.amazonaws.com/daykeeper/ed931d6552cc936569cfc5e16e1b5808-Screenshot%202024-09-13%20at%209.09.07%E2%80%AFAM.png"
            },
            "_id": "66ef9bff80d5e837b9c727d4",
            "title": "21-09-2024",
            "user": "65cbaab84b9d1cce41e98b60",
            "text": "Storie Teste",
            "created_at": "2024-09-22T04:24:31.727Z",
            "hasLiked": false,
            "hasViewed": true,

            // The likes and views will just appear if you are fetching your storie
            "likes": 0,
            "views": 1
        }
    ]
}
```

- In this case, the user have posted one storie today.

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
