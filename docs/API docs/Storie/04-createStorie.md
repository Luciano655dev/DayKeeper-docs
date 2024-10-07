---
sidebar_position: 4
---

# Create Storie

### <span style={{color: 'darkorange'}}>POST</span> `stories/create`

#### Description:

This function allows you to create a storie (WOW!!).

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Body (form-data)

| Name   | Type     | Required | Description                                                          |
| ------ | -------- | -------- | -------------------------------------------------------------------- |
| `file` | `file`   | Yes      | The file (image or video) that you will post in your storie          |
| `text` | `string` | No       | The text that will appear with your storie (like a snap on snapchat) |

- <strong>NOTE:</strong> You can only post max <strong>5 stories per day</strong>. You can change this number at `./constants/index.js`

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const formData = new FormData()

formData.append("text", "My First Storie")
formData.append("file", imageFile)

const response = await axios.post(
  "https://daykeeper.life/stories/create",
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
| `storie`  | `string` | The storie data      |

#### Example:

```javascript
Status Code 201
{
  "message": "Storie created successfully",
  "storie": {
    "title": "28-08-2024",
    "user": "66c4ac9f1cfe0795199a733e",
    "file": {
      "name": "Screenshot 2024-08-26 at 2.35.12 PM.png",
      "key": "171e1dd17e061c838d7b733b573f39b3-Screenshot 2024-08-26 at 2.35.12 PM.png",
      "mimetype": "image/png",
      "url": "http://s3.amazonaws.com/daykeeper/171e1dd17e061c838d7b733b573f39b3-Screenshot%202024-08-26%20at%202.35.12%E2%80%AFPM.png"
    },
    "text": "My first storie",
    "created_at": "2024-08-28T17:00:30.130Z",
    "_id": "66cf57aecd501387a0b95c41",
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
  "message": "Text is too long"
}
```

#### Possible errors:

| Code | Description                  |
| ---- | ---------------------------- |
| 413  | The text is too long         |
| 400  | Invalid / innapropriate file |
| 409  | Invalid Login                |
| 500  | Server Error                 |
