---
sidebar_position: 1
---

# Ban or Unban Post

### <span style={{color: 'darkorange'}}>POST</span> `/admin/:name/:posttitle`

#### Description:

This function allows you to ban or unban a post.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

### URL

| Name        | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| `name`      | `string` | The username that made the post |
| `posttitle` | `string` | The post title (`DD-MM-YYYY`)   |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.post("https://api.daykeeper.life/admin/JohnDoe/26-09-2024")
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

- <strong>Note: An e-mail is going to be sent to the account</strong>

#### Example:

```javascript
Status Code: 200
{
  "message": "JohnDoe's post from 25-08-2024 banned successfully"
}
```

##### or

```javascript
Status Code: 200
{
  "message": "JohnDoe's post from 25-08-2024 unbanned successfully"
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
