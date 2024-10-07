---
sidebar_position: 7
---

# Reset Password

### <span style={{color: 'darkorange'}}>POST</span> `/auth/forget_password`

#### Description:

This feature allows you to reset your password after you have forgotten it. Remember that it only works after `forget password`. It will verify the 6-digit code with the email and reset the password.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### Body

| Name               | Type     | Required | Description                                     |
| ------------------ | -------- | -------- | ----------------------------------------------- |
| `email`            | `string` | Yes      | The account email                               |
| `password`         | `string` | Yes      | The account new password                        |
| `verificationCode` | `number` | Yes      | The 6 digit verification code sent to the email |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.post("https://api.daykeeper.life/auth/forget_password", {
  email: "johndoe@example.com",
  password: "MyNewPassword1234",
  verificationCode: "123456", // can be number or string
})
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 205
{
    "message": "Password updated successfully"
}
```

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 400
{
  "message": "Verification Code is Invalid"
}
```

#### Possible errors:

| Code | Description         |
| ---- | ------------------- |
| 404  | Account not found   |
| 400  | Invalid Information |
