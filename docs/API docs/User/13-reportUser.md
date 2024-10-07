---
sidebar_position: 13
---

# Report User

### <span style={{color: 'darkorange'}}>POST</span> `/:name/report`

#### Description:

This function allows you to report a user. This will allow admins to review it.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name   | Type     | Required | Description                         |
| ------ | -------- | -------- | ----------------------------------- |
| `name` | `string` | Yes      | The username who you want to report |

#### Body

| Name     | Type     | Required | Description                                       |
| -------- | -------- | -------- | ------------------------------------------------- |
| `reason` | `string` | Yes      | The reason (text) that you are reporting the user |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = axios.post("https://daykeeper.life/JohnDoe/report", {
  reason: "Just a test report",
})
```

### Success Response

| Name      | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `Status`  | `code`   | Response Status Code             |
| `Message` | `string` | Descriptive message              |
| `reaosn`  | `string` | The report reason that you wrote |

#### Example:

```javascript
Status Code: 200
{
  "message": "User reported successfully",
  "reason": "Just a test Report"
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
