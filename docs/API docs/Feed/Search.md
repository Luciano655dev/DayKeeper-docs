---
sidebar_position: 2
---

# Search

### <span style={{color: 'green'}}>GET</span> `/search`

#### Description:

This function allows you to search for data such as posts and users.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### QUERY PARAMS

| Name        | Type     | Required | Description                                                                                                                            |
| ----------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `q`         | `string` | Yes      | A string representing the searched text                                                                                                |
| `order`     | `string` | No       | Values `recent` or `relevant` (default), showinh how the data will be ordered.                                                         |
| `type`      | `string` | No       | Values `User` or `Post` (default) representing what type of data will be searched                                                      |
| `following` | `string` | No       | Values `false`, `true` or `friends`, a date filter for users you are following (true) or users you follow mutually (friends).          |
| `page`      | `number` | No       | The page that will be searched (default: `1`). You can change the ammount of data that appears in a page at the `./constants/index.js` |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get(
  "https://api.daykeeper.life/search? q=Luciano & type=User & order=relevant"
)
```

- `order=relevant` is not required, as it is a default value. Its

### Success Response

| Name         | Type     | Description                                                      |
| ------------ | -------- | ---------------------------------------------------------------- |
| `Status`     | `code`   | Response Status Code                                             |
| `data`       | `object` | Object for the fetched data                                      |
| `page`       | `number` | Number representing the page                                     |
| `pageSize`   | `number` | Number representing the current page size                        |
| `maxPageSze` | `number` | Number representing the max ammount of data that a page can have |
| `totalPages` | `number` | Number representing the total fetched pages                      |

#### Example:

```javascript
Status Code: 200
{
    "data": [
        {
            "_id": "6632d8575e64a71b55427a8d",
            "name": "Luciano655",
            "email": "lucianomenezes655@gmail.com",
            "profile_picture": {
                "name": "Doggo.jpg",
                "key": "Doggo.jpg",
                "url": "https://daykeeper.s3.amazonaws.com/Doggo.jpg"
            },
            "private": false,
            "followers": [],
            "__v": 0,
            "bio": "my bio here",
            "created_at": "2024-05-02T00:03:35.425Z",
            "timeZone": "America/Recife"
        },
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
            "followers": [ // ID of the users following 'Luciano'
                "65cd809dc6f6529359c790ed",
                "660c77a9895c0ffacca25499"
            ],
            "__v": 1,
            "bio": "Essa é a minha bio, a bio do Luciano",
            "created_at": "2024-02-13T17:45:28.803Z",
            "timeZone": "America/Recife"
        }
    ],
    "page": 1,
    "pageSize": 2,
    "maxPageSize": 3,
    "totalPages": 1
}
```

- At this example, see that 'Luciano655' appears first. Thats because he is more 'relenat' than 'Luciano', as re received more likes/commentarys in his posts. If you put `order=recent`, 'Luciano' will appear first because he was created before 'Luciano655'

### Error Response:

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

If theres no data fetched, the response will be like this:

```javascript
{
    "data": [],
    "page": 1,
    "pageSize": 0,
    "maxPageSize": 3,
    "totalPages": 0
}
```

#### Possible errors:

| Code | Description                     |
| ---- | ------------------------------- |
| 409  | Invalid Login                   |
| 500  | Server error (contact an admin) |
