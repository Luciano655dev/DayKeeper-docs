---
sidebar_position: 4
---

# Edit Post

### <span style={{color: 'darkblue'}}>PUT</span> `/:title`

#### Description:

This function allows you to edit one of your posts. <strong>You can only edit one time</strong>

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### URL

| Name    | Type     | Required | Description                 |
| ------- | -------- | -------- | --------------------------- |
| `title` | `string` | Yes      | The post title (dd-MM-yyyy) |

#### Body (form-data)

| Name         | Type     | Required | Description                                                           |
| ------------ | -------- | -------- | --------------------------------------------------------------------- |
| `data`       | `string` | No       | The new text for the post                                             |
| `files`      | `file`   | No       | The new files for the post (max `5` with previous files)              |
| `keep_files` | `string` | No       | A string like `012...files.length` that says the files that will stay |

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

formData.append("keep_files", "013") // keep the first, second and forty file, removing the third one

const response = await axios.post(
  "https://daykeeper.life/24-08-2024",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
)
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
    "message": "post updated successfully"
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
    "message": "This image violates DayKeeper's terms of service"
}
```

#### Possible errors:

| Code | Description                                         |
| ---- | --------------------------------------------------- |
| 400  | Invalid or innapropriate image / image limit exeded |
| 409  | Invalid Login                                       |
| 500  | Server Error                                        |
