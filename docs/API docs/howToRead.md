---
sidebar_position: 1
---

# How to Read

All the pages will follow this format, all data here is just an example:

# Title

### METHOD `/endpoint`

#### Description:

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

### Request Parameters (example)

#### Body (example)

| Name       | Type     | Required | Description                                             |
| ---------- | -------- | -------- | ------------------------------------------------------- |
| `name`     | `string` | Yes      | The user's full name                                    |
| `email`    | `string` | Yes      | A valid email address for the user                      |
| `password` | `string` | Yes      | A password for authentication (minimum of 8 characters) |

#### Authentication (example)

| Name     | Type     | Required | Description                             |
| -------- | -------- | -------- | --------------------------------------- |
| `Cookie` | `string` | Yes      | Automaticaly created Cookie when log-in |

## Usage Example:

#### JavaScript with axios:

```javascript
await axios.post("/endpoint", { name: "", email: "", password: "" })
```

### Success Response:

| Name      | Type     | Description                                                   |
| --------- | -------- | ------------------------------------------------------------- |
| `Status`  | `string` | Operation status (success)                                    |
| `Message` | `string` | Descriptive message (User registered successfully.)           |
| `Data`    | `object` | Data for the created user, including the authentication token |

#### Example:

```javascript
{
  "status": "success",
  "message": "User registered successfully.",
  "data": {
    "user": {
      "id": "64b8f8f1a4f0e629d4b8b8f1",
      "name": "John Doe",
      "email": "john.doe@example.com"
    }
  }
}
```

### Error Response:

| Name      | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| `Status`  | `string` | Operation status (success)                          |
| `Message` | `string` | Descriptive message (User registered successfully.) |

#### Example:

```json
{
  "status": "error",
  "message": "User not found."
}
```

#### Possible errors:

| Code | Description  |
| ---- | ------------ |
| 400  | Bad Request  |
| 404  | Not Found    |
| 409  | Unauthorized |
