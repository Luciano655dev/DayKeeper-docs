---
sidebar_position: 3
---

# Edit Account

### <span style={{color: 'darkblue'}}>PUT</span> `/user`

#### Description:

This function allows you to edit a user's information, such as profile picture, password, time zone, bio, etc...

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Body (form-data)

| Name           | Type      | Required | Description                                                           |
| -------------- | --------- | -------- | --------------------------------------------------------------------- |
| `name`         | `string`  | No       | A new name for your account                                           |
| `bio`          | `string`  | No       | A new biography for your account                                      |
| `file`         | `file`    | No       | A new profile picture for your account                                |
| `private`      | `boolean` | No       | A boolean value `true` or `false` that can change the account privacy |
| `password`     | `string`  | No       | A new password for your account (need to have `lastPassword` to work) |
| `lastPassword` | `string`  | No       | The last account password (just if you change the `password`)         |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const formData = new FormData()

formData.append("file", imageFile)
formData.append("bio", "my new bio here")

const response = await axios.put(
  "https://daykeeper.life/update_user",
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
    "message": "user updated successfully",
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
  "message": "Biography is invalid"
}
```

#### Possible errors:

| Code | Description         |
| ---- | ------------------- |
| 400  | Invalid information |
| 409  | Invalid Login       |
| 500  | Server Error        |
