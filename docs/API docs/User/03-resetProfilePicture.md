---
sidebar_position: 3
---

# Reset Profile Picture

### <span style={{color: 'darkblue'}}>PUT</span> `/reset_profile_picture`

#### Description:

This feature allows you to remove your profile picture, making your account have the default profile picture.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.put("https://daykeeper.life/reset_profile_picture")
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
    "message": "JohnDoe's profile picture reseted successfully",
}
```

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 200
{
    "message": "User`s profile picture is already the default"
}
```

#### Possible errors:

| Code | Description                                                   |
| ---- | ------------------------------------------------------------- |
| 400  | Invalid information OR profile picture is already the default |
| 409  | Invalid Login                                                 |
| 500  | Server Error                                                  |
