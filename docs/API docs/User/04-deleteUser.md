---
sidebar_position: 4
---

# Delete Account

### <span style={{color: 'darkred'}}>DELETE</span> `/user`

#### Description:

This feature allows you to completely delete your account and interactions made through it.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = axios.delete("https://daykeeper.life/user")
```

### Success Response

| Name            | Type     | Description                                                      |
| --------------- | -------- | ---------------------------------------------------------------- |
| `Status`        | `code`   | Response Status Code                                             |
| `message`       | `string` | Descriptive message                                              |
| `user`          | `number` | The quantity od deleted user                                     |
| `posts`         | `number` | The quantity of deleted posts                                    |
| `post_likes`    | `number` | The quantity of likes the account made                           |
| `post_comments` | `number` | The quantity of comments the account made                        |
| `comment_likes` | `number` | The quantity of likes in comments that the account made          |
| `followers`     | `number` | The quantity of followers and following the account had          |
| `stories`       | `number` | The quantity of deleted stories                                  |
| `storie_views`  | `number` | The quantity of views in stories that the usar made and received |
| `storie_likes`  | `number` | The quantity of likes in stories that the user made and received |

#### Example:

```javascript
Status Code: 200
{
    "message": "User deleted successfully",
    "user": 1,
    "posts": 3,
    "post_likes": 5,
    "post_comments": 4,
    "comment_likes": 6,
    "followers": 3,
    "stories": 2,
    "storie_views": 6,
    "storie_likes": 4
}
```

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 409
{
    "message": "Invalid Login"
}
```

#### Possible errors:

| Code | Description   |
| ---- | ------------- |
| 409  | Invalid Login |
| 500  | Server Error  |
