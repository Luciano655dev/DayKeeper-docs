---
sidebar_position: 1
---

# Feed

### <span style={{color: 'green'}}>GET</span> `/`

#### Description:

This function allows you to fetch the app's feed. It works the same way as the search.

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
await axios.get("https://api.daykeeper.life/search? order=relevant")
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
            "_id": "6639185cfc7a0435b0b208a6",
            "title": "06-05-2024",
            "data": "Meu postzinho bacana do dia 06-05",
            "user": "65cd809dc6f6529359c790ed",
            "created_at": "2024-05-06T17:50:20.071Z",
            "files": [
                {
                    "name": "Captura de tela 2024-04-03 193231.png",
                    "key": "5620b8454e8ec66a94d230a569bf14e6-Captura de tela 2024-04-03 193231.png",
                    "mimetype": "image/png",
                    "url": "https://daykeeper.s3.amazonaws.com/5620b8454e8ec66a94d230a569bf14e6-Captura%20de%20tela%202024-04-03%20193231.png",
                    "_id": "6639185cfc7a0435b0b208a7"
                },
                {
                    "name": "Captura de tela 2024-04-03 193319.png",
                    "key": "275192207faf1df4cb3ed689c6a45ddb-Captura de tela 2024-04-03 193319.png",
                    "mimetype": "image/png",
                    "url": "https://daykeeper.s3.amazonaws.com/275192207faf1df4cb3ed689c6a45ddb-Captura%20de%20tela%202024-04-03%20193319.png",
                    "_id": "6639185cfc7a0435b0b208a8"
                }
            ],
            "likes": [
                "65cbaab84b9d1cce41e98b60"
            ],
            "comments": 0,
            "user_info": {
                "_id": "65cd809dc6f6529359c790ed",
                "name": "Leticia",
                "email": "lele@gmail.com",
                "profile_picture": {
                    "name": "Captura de tela 2024-04-04 235107.png",
                    "key": "03bbee7b83216fb02b9871ef0453a187-Captura de tela 2024-04-04 235107.png",
                    "url": "https://daykeeper.s3.amazonaws.com/03bbee7b83216fb02b9871ef0453a187-Captura%20de%20tela%202024-04-04%20235107.png"
                },
                "private": false,
                "followers": [
                    "65cbaab84b9d1cce41e98b60"
                ],
                "__v": 2,
                "bio": "Essa é a bio da Lele mana",
                "created_at": "2024-02-15T03:10:21.636Z",
                "timeZone": "America/Recife"
            }
        },
        {
            "_id": "6632e02467d6c477c07687a3",
            "title": "01-05-2024",
            "data": "Deletei a conta sem querer",
            "user": "6632d8575e64a71b55427a8d",
            "created_at": "2024-05-02T00:36:52.270Z",
            "files": [],
            "likes": [],
            "comments": 0,
            "user_info": {
                "_id": "6632d8575e64a71b55427a8d",
                "name": "Luciano655",
                "email": "outrolulu@gmail.com",
                "profile_picture": {
                    "name": "Doggo.jpg",
                    "key": "Doggo.jpg",
                    "url": "https://daykeeper.s3.amazonaws.com/Doggo.jpg"
                },
                "private": false,
                "followers": [],
                "__v": 0,
                "bio": "minha nova bio está aqui",
                "created_at": "2024-05-02T00:03:35.425Z",
                "timeZone": "America/Recife"
            }
        },
        {
            "_id": "6629373378715f94ca88f022",
            "title": "24-04-2024",
            "data": "Meu post zinho bacana",
            "user": "65cbaab84b9d1cce41e98b60",
            "created_at": "2024-04-24T16:45:39.652Z",
            "files": [],
            "likes": [],
            "comments": 0,
            "user_info": {
                "_id": "65cbaab84b9d1cce41e98b60",
                "name": "Luciano",
                "email": "lucianomenezes655@gmail.com",
                "profile_picture": {
                    "name": "imagem_2024-04-06_185517723.png",
                    "key": "c5d4d49f80d4e9ee7ef551dfb019fe1b-imagem_2024-04-06_185517723.png",
                    "url": "https://daykeeper.s3.amazonaws.com/c5d4d49f80d4e9ee7ef551dfb019fe1b-imagem_2024-04-06_185517723.png"
                },
                "private": false,
                "followers": [
                    "65cd809dc6f6529359c790ed",
                    "660c77a9895c0ffacca25499"
                ],
                "__v": 1,
                "bio": "Essa é a minha bio, a bio do Luciano",
                "created_at": "2024-02-13T17:45:28.803Z",
                "timeZone": "America/Recife"
            }
        }
    ],
    "page": 1,
    "pageSize": 3,
    "maxPageSize": 3,
    "totalPages": 2
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
