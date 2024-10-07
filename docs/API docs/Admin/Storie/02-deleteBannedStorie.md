---
sidebar_position: 2
---

# Delete Banned Post

### <span style={{color: 'darkred'}}>DELETE</span> `/admin/storie/:name/:storieId`

#### Description:

This function allows you permanently delete an banned storie.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

### URL

| Name       | Type     | Description               |
| ---------- | -------- | ------------------------- |
| `name`     | `string` | The username to be banned |
| `storieId` | `string` | The Storie ID             |

- <strong>Note: You can just delete a banned storie is he is banned for 30 days AND you banned it before, you can change the amount of days at `constants/index.js`</strong>

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.delete("https://api.daykeeper.life/admin/storie/JohnDoe/1234")
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
  "message": "JohnDoe's storie with ID 1234 deleted successfully"
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
