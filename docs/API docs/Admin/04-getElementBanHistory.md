---
sidebar_position: 7
---

# Get Element's Ban History

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/banHistory/:entityId`

#### Description:

This function allows you to get the ban history of an element.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

### URL

| Name       | Type       | Description                                                |
| ---------- | ---------- | ---------------------------------------------------------- |
| `entityId` | `objectId` | The ID of the element that you wan tto get the ban history |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
await axios.get(
  "https://api.daykeeper.life/admin/banHistory/66c4ac9f1cfe0795199a733e"
)
```

- Gets the ban history of an user.

### Success Response

| Name      | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `Status`  | `code`   | Response Status Code             |
| `Message` | `string` | Descriptive message              |
| `Data`    | `array`  | Data for the fetched ban history |

#### Example:

```javascript
Status Code: 200
{
  "message": "66c4ac9f1cfe0795199a733e Ban History fetched successfully",
  "data": [
    {
      "_id": "66f1b247998df28960dbaa63",
      "entity_type": "user",
      "action_type": "ban",
      "entity_id": "66c4ac9f1cfe0795199a733e",
      "banned_by": "65cbaab84b9d1cce41e98b60",
      "ban_date": "2024-09-23T18:24:07.879Z",
      "ban_message": "My ban reason here :(",
    }
  ],
  "page": 1,
  "pageSize": 1,
  "maxPageSize": 1,
  "totalPages": 4
}
```

### Error Response

| Name      | Type     | Description          |
| --------- | -------- | -------------------- |
| `Status`  | `code`   | Response Status Code |
| `Message` | `string` | Descriptive message  |

#### Example:

```javascript
Status Code: 409
{
  "message": "Invalid Login"
}
```

#### Possible errors:

| Code | Description   |
| ---- | ------------- |
| 409  | Invalid Login |
| 500  | Server Error  |
