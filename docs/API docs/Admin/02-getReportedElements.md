---
sidebar_position: 5
---

# Get Reported Elements

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/reports`

#### Description:

This function allows you to get all the reported posts, stories or users.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

### URL Query Params

| Name   | Type     | Description                                                                                  |
| ------ | -------- | -------------------------------------------------------------------------------------------- |
| `type` | `string` | `user`, `post` or `storie`, telling what type of element will be searched (`storie` default) |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get("https://api.daykeeper.life/admin/reports?type=post")
```

### Success Response

| Name      | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| `Status`  | `code`   | Response Status Code          |
| `Message` | `string` | Descriptive message           |
| `Data`    | `array`  | Data for the fetched elements |

#### Example:

```javascript
Status Code: 200
{
  "message": "reported posts fetched successfully",
  "data": [
    {
      "entity_id": "66cbbea31e854f3d7995c1f0",
      "_id": "66cbbea31e854f3d7995c1f0",
      "title": "25-08-2024",
      "data": "My first Post here",
      "user": "66c4ac9f1cfe0795199a733e",
      "created_at": "2024-08-25T23:30:43.463Z",
      "files": [
        {
          "name": "Screenshot 2024-08-22 at 9.03.09 AM.png",
          "key": "d76d775053d021f930ce1fe203f7bebd-Screenshot 2024-08-22 at 9.03.09 AM.png",
          "mimetype": "image/png",
          "url": "http://s3.amazonaws.com/daykeeper/d76d775053d021f930ce1fe203f7bebd-Screenshot%202024-08-22%20at%209.03.09%E2%80%AFAM.png",
          "_id": "66cbbea31e854f3d7995c1f1"
        }
      ],
      "banned": false
    }
  ],
  "page": 1,
  "pageSize": 1,
  "maxPageSize": 1,
  "totalPages": 1
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
