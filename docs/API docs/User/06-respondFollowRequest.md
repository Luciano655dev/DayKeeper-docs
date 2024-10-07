---
sidebar_position: 6
---

# Respond Follow Request

### <span style={{color: 'darkorange'}}>POST</span> `/:name/respond_follow`

#### Description:

This function allows you to make a user stop following you. <strong>Just work with private accounts.</strong>

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name   | Type     | Required | Description      |
| ------ | -------- | -------- | ---------------- |
| `name` | `string` | Yes      | The account name |

#### Body

| Name       | Type      | Required | Description                    |
| ---------- | --------- | -------- | ------------------------------ |
| `response` | `boolean` | Yes      | The response `true` or `false` |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.post(
  "https://daykeeper.life/Luciano/respond_follow",
  {
    response: true,
  }
)
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
    "message": "You accepted Luciano's request"
}
```

or

```javascript
Status Code: 200
{
    "message": "You denied Luciano's request"
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

| Code | Description                                             |
| ---- | ------------------------------------------------------- |
| 404  | User not found OR the user did not send you any request |
| 409  | Unauthorized OR Invalid Login                           |
| 500  | Server Error                                            |
