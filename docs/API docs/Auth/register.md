---
sidebar_position: 1
---

# Register

### <span style={{color: 'darkorange'}}>POST</span> `/auth/register`

#### Description:

This function allows you to register a new user in the database.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### Body

| Name       | Type     | Required | Description                                                   |
| ---------- | -------- | -------- | ------------------------------------------------------------- |
| `name`     | `string` | Yes      | The new account username                                      |
| `email`    | `string` | Yes      | The new account email                                         |
| `password` | `string` | Yes      | The new account password                                      |
| `timeZone` | `string` | No       | The new account IANA time zone (default: `America/Sao_Paulo`) |

- You can change the default time zone at `./constants/index.js`
- An email will be sent to the new account email's to confirm the registration with an code. If an account does not confirm the email in 24 hours, the account info will be deleted.

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.post("https://api.daykeeper.life/auth/register", {
  name: "JohnDoe",
  email: "johndoe@example.com",
  password: "MyPassword1234",
  timeZone: "America/Orlando",
})
```

### Success Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 201
{
  "message": "JohnDoe created successfully"
}
```

#### After the user creation, <span style={{color: '#8B8000'}}>you need to confirm the email with a code sent to it!</span>

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 400
{
  "message": "Email is not valid"
}
```

#### Possible errors:

| Code | Description                        |
| ---- | ---------------------------------- |
| 400  | Invalid information                |
| 413  | Information `{name}` not filled in |
