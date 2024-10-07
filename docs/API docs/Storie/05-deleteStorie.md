---
sidebar_position: 5
---

# Delete Storie

### <span style={{color: 'darkred'}}>DELETE</span> `stories/:storieId`

#### Description:

This function allows you to delete one of your's storie.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name       | Type     | Required | Description     |
| ---------- | -------- | -------- | --------------- |
| `storieId` | `string` | Yes      | The storie's ID |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://daykeeper.life/stories/123456")
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code 200
{
    "message": "Storie deleted successfully",
}
```

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 400
{
    "message": "Only the stories owner can do this action"
}
```

#### Possible errors:

| Code | Description                               |
| ---- | ----------------------------------------- |
| 400  | Only the stories owner can do this action |
| 404  | Storie not found                          |
| 409  | Invalid Login                             |
| 500  | Server Error                              |
