---
sidebar_position: 5
---

# Follow user

### <span style={{color: 'darkorange'}}>POST</span> `/:name/follow`

#### Description:

This function allows you to follow or unfollow a user. If you are not following the user, you'll follow and, if you are following, you'll unfollow. If the user is private, you send a follow request, that the user can accept or deny. If the user is private and you already have sent a follow request, the follow request will be removed.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Body

| Name   | Type     | Required | Description      |
| ------ | -------- | -------- | ---------------- |
| `name` | `string` | Yes      | The account name |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.post("https://daykeeper.life/JohnDoe/follow")
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

###### Follow:

```javascript
Status Code: 200
{
    "message": "You started following Luciano"
}
```

###### Unfollow:

```javascript
Status Code: 200
{
    "message": "You unfollowed Luciano"
}
```

<strong>or, if the account is private</strong>

##### Request Follow:

```javascript
Status Code: 200
{
    "message": "You sent a follow request to Luciano"
}
```

##### Remove follow request:

```javascript
Status Code: 200
{
    "message": "You have withdrawn your request to follow Luciano"
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
