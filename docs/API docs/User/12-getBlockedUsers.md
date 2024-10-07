---
sidebar_position: 12
---

# Get Blocked Users

### <span style={{color: 'darkgreen'}}>GET</span> `/blocks`

#### Description:

This function allows you to get the users that you are blocking.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://daykeeper.life/blocks")
```

### Success Response

| Name          | Type     | Description                                                       |
| ------------- | -------- | ----------------------------------------------------------------- |
| `Status`      | `code`   | Response Status Code                                              |
| `Message`     | `string` | Descriptive message                                               |
| `data`        | `array`  | Array of objects that contain the users information               |
| `page`        | `number` | The current page                                                  |
| `pageSize`    | `number` | The quantity of objects returned in thois page                    |
| `maxPageSize` | `number` | The maximun number of objects that a page can return (max: `100`) |
| `totalPages`  | `number` | The total number of pages                                         |

#### Example:

```javascript
Status Code: 200
{
    "message": "followers fetched successfully",
    "data": [
        {
            "_id": "65cbaab84b9d1cce41e98b60",
            "name": "Luciano",
            "email": "lucianomenezes655@gmail.com",
            "profile_picture": {
                "name": "imagem_2024-04-06_185517723.png",
                "key": "c5d4d49f80d4e9ee7ef551dfb019fe1b-imagem_2024-04-06_185517723.png",
                "url": "https://daykeeper.s3.amazonaws.com/c5d4d49f80d4e9ee7ef551dfb019fe1b-imagem_2024-04-06_185517723.png"
            },
            "private": false,
            "__v": 2,
            "bio": "Essa é a minha bio, a bio do Luciano",
            "created_at": "2024-02-13T17:45:28.803Z",
            "timeZone": "America/Recife"
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
