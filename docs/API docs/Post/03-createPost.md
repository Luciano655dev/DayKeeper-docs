---
sidebar_position: 3
---

# Create Post

### <span style={{color: 'darkorange'}}>POST</span> `/create`

#### Description:

This function allows you to create a Post. <strong>You can only make one post per day</strong>

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Body (form-data)

| Name    | Type     | Required | Description                                       |
| ------- | -------- | -------- | ------------------------------------------------- |
| `data`  | `string` | Yes      | The text content of your post                     |
| `files` | `file`   | No       | Images and videos you want to post, max `5` files |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const formData = new FormData()

formData.append("data", "My first post here")

// one file
formData.append("files", file)

// Multiple files
for (let file in filesArray) // max 5 (five) files
  formData.append("files", file)

const response = await axios.post("https://daykeeper.life/create", formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
})
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |
| `user`    | `string` | The logged user data |

#### Example:

```javascript
Status Code: 201
{
    "message": "post created successfully",
    "post": {
        "title": "24-08-2024",
        "data": "My first Post here",
        "user": "66c4ac9f1cfe0795199a733e",
        "created_at": "2024-08-24T21:52:13.386Z",
        "files": [
            {
                "name": "Screenshot 2024-08-22 at 9.03.09 AM.png",
                "key": "92a602118c87bef721103ba265211f0d-Screenshot 2024-08-22 at 9.03.09 AM.png",
                "mimetype": "image/png",
                "url": "http://s3.amazonaws.com/daykeeper/92a602118c87bef721103ba265211f0d-Screenshot%202024-08-22%20at%209.03.09%E2%80%AFAM.png",
                "_id": "66ca560de464036ce909f08b"
            }
        ],
        "likes": [],
        "comments": [],
        "_id": "66ca560de464036ce909f08a"
        "__v": 0
    }
}
```

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 413
{
    "message": "Text is not filled in"
}
```

#### Possible errors:

| Code | Description                    |
| ---- | ------------------------------ |
| 413  | Information not filled In      |
| 400  | Invalid or innapropriate image |
| 409  | Invalid Login                  |
| 500  | Server Error                   |
