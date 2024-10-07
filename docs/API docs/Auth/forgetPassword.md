---
sidebar_position: 6
---

# Forget Password

### <span style={{color: 'darkorange'}}>POST</span> `/auth/forget_password`

#### Description:

This function is used when you forget the password for a registered account. A 6-digit code will be sent to your email to reset your password. The old password will continue to work until it is changed.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### Body

| Name    | Type     | Required | Description       |
| ------- | -------- | -------- | ----------------- |
| `email` | `string` | Yes      | The account email |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.post("https://api.daykeeper.life/auth/forget_password", {
  email: "johndoe@example.com",
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
Status Code: 200
{
    "message": "A password reset email has been sent to your registered email address"
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
  "message": "Email does not exist"
}
```

#### Possible errors:

| Code | Description       |
| ---- | ----------------- |
| 404  | Account not found |
