---
sidebar_position: 7
---

# Get Storie Likes

### <span style={{color: 'darkgreen'}}>GET</span> `stories/:storieId/views`

#### Description:

This function allows you to get the information about the users who viewed a storie. <strong>It will just work if the logged account made the storie.</strong>

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name       | Type       | Required | Description   |
| ---------- | ---------- | -------- | ------------- |
| `storieId` | `objectId` | Yes      | The storie ID |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://daykeeper.life/stories/1234/views")
```

### Success Response

| Name          | Type     | Description                                                       |
| ------------- | -------- | ----------------------------------------------------------------- |
| `Status`      | `code`   | Response Status Code                                              |
| `Message`     | `string` | Descriptive message                                               |
| `data`        | `array`  | Array of objects containing the data of the fectehd users         |
| `page`        | `number` | The current page                                                  |
| `pageSize`    | `number` | The quantity of objects returned in thois page                    |
| `maxPageSize` | `number` | The maximun number of objects that a page can return (max: `100`) |
| `totalPages`  | `number` | The total number of pages                                         |

#### Example:

```javascript
Status Code: 200
{
    "message": "Storie Views fetched successfully",
    "data": [
        {
            "userId": "66c4ac9f1cfe0795199a733e",
            "_id": "66c4ac9f1cfe0795199a733e",
            "name": "JohnDoe",
            "email": "johndoe@example.com",
            "profile_picture": {
                "name": "Doggo.jpg",
                "key": "Doggo.jpg",
                "url": "https://daykeeper.s3.amazonaws.com/Doggo.jpg"
            },
            "timeZone": "America/Sao_Paulo",
            "bio": "That is my new Bio",
            "private": false,
            "roles": [
                "user"
            ],
            "created_at": "2024-08-20T14:47:59.453Z",
            "banned": "false"
        }
    ],
    "page": 1,
    "pageSize": 1,
    "maxPageSize": 1,
    "totalPages": 5
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
    "message": "Storie not Found"
}
```

#### Possible errors:

| Code | Description      |
| ---- | ---------------- |
| 404  | Storie not Found |
| 409  | Invalid Login    |
| 500  | Server Error     |
