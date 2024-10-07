---
sidebar_position: 1
---

# Ban or Unban Storie

### <span style={{color: 'darkorange'}}>POST</span> `/admin/storie/:name/:storieId`

#### Description:

This function allows you to ban or unban a storie.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

### URL

| Name       | Type     | Description                     |
| ---------- | -------- | ------------------------------- |
| `name`     | `string` | The username that made the post |
| `storieId` | `string` | The Storie ID                   |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.post("https://api.daykeeper.life/admin/storie/JohnDoe/1234")
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
  "message": "JohnDoe's storie with ID 1234 banned successfully"
}
```

##### or

```javascript
Status Code: 200
{
  "message": "JohnDoe's storie with ID 1234 unbanned successfully"
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
