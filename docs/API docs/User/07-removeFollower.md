---
sidebar_position: 7
---

# Remove Follower

### <span style={{color: 'darkred'}}>DELETE</span> `/:name/follower`

#### Description:

This function allows you to make a user stop following you. <strong>Just work if your account is private.</strong>

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Body

| Name   | Type     | Required | Description      |
| ------ | -------- | -------- | ---------------- |
| `name` | `string` | Yes      | The account name |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.delete("https://daykeeper.life/Luciano/follower")
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
    "message": "Luciano's follow removed successfully"
}
```

### Error Response

| Name      | Type     | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| `Status`  | `code`   | Response Status Code                                        |
| `Message` | `string` | Descriptive message                                         |
| `Reason`  | `string` | Reason why you were unauthorized (if you were unauthorized) |

#### Example:

```javascript
Status Code: 409
{
    "message": "You don't have authorization to 'remove follower'",
    "reason": "Only private accounts can remove followers"
}
```

#### Possible errors:

| Code | Description                   |
| ---- | ----------------------------- |
| 404  | User not found                |
| 409  | Unauthorized OR Invalid Login |
| 500  | Server Error                  |
