---
sidebar_position: 11
---

# Block User

### <span style={{color: 'darkorange'}}>POST</span> `/:name/block`

#### Description:

This function allows you to block a user. With that the user wont be able to see your posts or comments.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name   | Type     | Required | Description                                     |
| ------ | -------- | -------- | ----------------------------------------------- |
| `name` | `string` | Yes      | The username of the user that you want to block |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = axios.post("https://daykeeper.life/Luciano/block")
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
    "message": "Luciano blocked successfully"
}
```

or

```javascript
Status Code: 200
{
    "message": "Luciano unblocked successfully"
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

| Code | Description           |
| ---- | --------------------- |
| 404  | User not found        |
| 400  | Invalid user to block |
| 409  | Invalid Login         |
| 500  | Server Error          |
