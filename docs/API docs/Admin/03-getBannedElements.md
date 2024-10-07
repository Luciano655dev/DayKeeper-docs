---
sidebar_position: 6
---

# Get Banned Elements

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/reports`

#### Description:

This function allows you to get all the banned posts, stories or users.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

### URL Query Params

| Name   | Type     | Description                                                                                  |
| ------ | -------- | -------------------------------------------------------------------------------------------- |
| `type` | `string` | `user`, `post` or `storie`, telling what type of element will be searched (`storie` default) |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get("https://api.daykeeper.life/admin/bans?type=post")
```

### Success Response

| Name      | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| `Status`  | `code`   | Response Status Code          |
| `Message` | `string` | Descriptive message           |
| `Data`    | `string` | Data for the fetched elements |

#### Example:

```javascript
Status Code: 200
{
  "message": "banned posts fetched successfully",
  "data": [
    {
      "_id": "65e122fb82a98a84fb4bf381",
      "title": "29-02-2024",
      "data": "Post muito legal",
      "user": "65cbaab84b9d1cce41e98b60",
      "created_at": "2024-03-01T00:36:11.456Z",
      "edited_at": "2024-03-19T03:34:41.480Z",
      "banned": "true",
      "files": []
    }
  ],
  "page": 1,
  "pageSize": 1,
  "maxPageSize": 1,
  "totalPages": 3
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
