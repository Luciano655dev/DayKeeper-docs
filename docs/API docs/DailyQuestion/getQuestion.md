---
sidebar_position: 2
---

# Get Question

### <span style={{color: 'green'}}>GET</span> `/question/:date`

#### Description:

This function allows you to retrieve the daily question from a specific past day

### Request Parameters

#### URL

| Name   | Type     | Required | Description                                             |
| ------ | -------- | -------- | ------------------------------------------------------- |
| `date` | `string` | Yes      | A string representing a date on the format `dd-MM-yyyy` |

- note that you need to put a `dd-MM-yyyy` formated date even when the response returns a `dd-MM` date. It happens to make sure that the apllication will work with different questions every year.

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get("https://api.daykeeper.life/question/{date}")
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

| Code | Description                      |
| ---- | -------------------------------- |
| 400  | You put a invalid or future date |
| 404  | Not Found                        |
