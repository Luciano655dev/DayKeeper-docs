---
sidebar_position: 5
---

# Delete Post

### <span style={{color: 'darkred'}}>DELETE</span> `/:title`

#### Description:

This function allows you to completely delete one of your posts.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name    | Type     | Required | Description                 |
| ------- | -------- | -------- | --------------------------- |
| `title` | `string` | Yes      | The post title (dd-MM-yyyy) |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = axios.delete("https://daykeeper.life/25-08-2024")
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
    "message": "Post deleted successfully"
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
