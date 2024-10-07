---
sidebar_position: 4
---

# Delete Report

### <span style={{color: 'darkred'}}>DELETE</span> `admin/report/:reportId`

#### Description:

This function allows you to delete a report made on a post, storie or user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name       | Type       | Required | Description   |
| ---------- | ---------- | -------- | ------------- |
| `reportId` | `objectId` | Yes      | The report ID |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.delete("https://daykeeper.life/admin/report/1234")
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
    "message": "Report deleted successfully"
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
    "message": "Report not found"
}
```

#### Possible errors:

| Code | Description      |
| ---- | ---------------- |
| 404  | Report not found |
| 409  | Invalid Login    |
| 500  | Server Error     |
