---
sidebar_position: 2
---

# Confirm Email

### <span style={{color: 'green'}}>GET</span> `/auth/confirm_email`

#### Description:

This function allows you to confirm the email of a registered user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### Body

| Name               | Type     | Required | Description                                        |
| ------------------ | -------- | -------- | -------------------------------------------------- |
| `email`            | `string` | Yes      | The account email                                  |
| `verificationCode` | `number` | Yes      | 6-digit verification code sent to registered email |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get("https://api.daykeeper.life/auth/confirm_email", {
  email: "johndoe@example.com",
  verificationCode: "123456",
})
```

- <span style={{color: '#8B8000'}}>Note:</span> if you get the code wrong, the right code will expire. To get another code, just try to log-in into the account and another code will be sent to your email.

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 200
{
  "message": "JohnDoe email confirmed successfully"
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
  "message": "Verification code expired or invalid"
}
```

#### Possible errors:

| Code | Description         |
| ---- | ------------------- |
| 400  | Invalid information |
