---
sidebar_position: 13
---

# Report Post

### <span style={{color: 'darkorange'}}>POST</span> `/:name/:title/report`

#### Description:

This function allows you to report a post. This will allow admins to review the post.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name    | Type     | Required | Description                    |
| ------- | -------- | -------- | ------------------------------ |
| `name`  | `string` | Yes      | The username who made the post |
| `title` | `string` | Yes      | The post title (dd-MM-yyyy)    |

#### Body

| Name     | Type     | Required | Description                                       |
| -------- | -------- | -------- | ------------------------------------------------- |
| `reason` | `string` | Yes      | The reason (text) that you are reporting the post |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = axios.post(
  "https://daykeeper.life/JohnDoe/25-08-2024/report",
  {
    reason: "Just a test report",
  }
)
```

### Success Response

| Name      | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `Status`  | `code`   | Response Status Code             |
| `Message` | `string` | Descriptive message              |
| `reason`  | `string` | The report reason that you wrote |

#### Example:

```javascript
Status Code: 200
{
  "message": "Post reported successfully",
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
    "message": "Post not found"
}
```

#### Possible errors:

| Code | Description    |
| ---- | -------------- |
| 404  | Post not found |
| 409  | Invalid Login  |
| 500  | Server Error   |
