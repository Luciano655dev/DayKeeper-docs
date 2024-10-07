---
sidebar_position: 1
---

# Getting Started

### First, clone the project with the following command:

```
git clone https://github.com/Luciano655dev/DayKeeper-API.git
```

After that, create a `.env` file in the root of the project and fill it with the following information:

```
DB_USER={MongoDB Username}
DB_PASS={MongoDB Password}

EMAIL_PASS={Email SMTP server Pass (ex: aaaa bbbb cccc dddd)}
EMAIL_SECRET={Email SMTP Server Secret}

BUCKET_NAME={AWS buckes s3 name}
AWS_ACCESS_KEY_ID={AWS bucket s3 access key}
AWS_SECRET_ACCESS_KEY={AWS bucket s3 secret}
AWS_DEFAULT_REGION={AWS region (default `us-east-1`)}

GIPHY_API_KEY={GIPHY API key}

GOOGLE_CLIENT_ID={Google Client ID}
GOOGLE_CLIENT_SECRET={Google Client Secret}

SECRET={Random String to encrypt data}
RESET_TIME={Time (00-24) to reset the day (posts, questions, etc...)}
PORT={port (default: 3000)}
```

If a error message about AWS appear on the terminal, put this line on the `.env` file:

```
AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = '1'
```

Now, put the `firebase-admin-sdk.json` in the root of the project, for mobile notifications (not necessary)

### To Start the server, use this command:

```
npm start
```

or with <a href="https://www.npmjs.com/package/nodemon">nodemon</a>

```
npm run dev
```
