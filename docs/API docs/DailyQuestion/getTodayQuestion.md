---
sidebar_position: 1
---

# Get Today`s Question

### <span style={{color: 'green'}}>GET</span> `/question`

#### Description:

This function allows you to retrieve the daily question for today, considering the `reset time`.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get("https://api.daykeeper.life/question")
```

### Success Response

| Name      | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| `Status`  | `code`   | Response Status Code          |
| `Message` | `string` | Descriptive message           |
| `Data`    | `object` | Data for the fetched question |

#### Example:

```javascript
Status Code: 200
{
  "message": "Question fetched successfully",
  "data": {
    "_id": "6657e1613df5daed6b77c415",
    "day": "08-08",
    "data": "Who did you interact with today and how did it make you feel?",
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
Status Code: 404
{
  "message": "Question not Found"
}
```

#### Possible errors:

| Code | Description |
| ---- | ----------- |
| 404  | Not Found   |
