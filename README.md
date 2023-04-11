# Project: back-end-assignment-reunion

## End-point: New Request

API to create a new user.

required fields:

- name
- email
- id
- password

### Method: POST
>
>```
>127.0.0.1:3000/api/register
>```
>
### Body (**raw**)

```json
{
    "name": "sudipta pradhan",
    "email": "sudipta95@gmail.com",
    "password": "12345678",
    "id": "sudipta95"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/authenticate

### Method: POST
>
>```
>127.0.0.1:3000/api/authenticate
>```
>
### Body (**raw**)

```json
{
    "email": "test@gmail.com",
    "password": "12345678"
}
```

### Response: 200

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzZWE5ZDJmNWZkYTFkODFhY2E1MWYiLCJpYXQiOjE2ODExMzg3ODQsImV4cCI6MTY4MTIyNTE4NH0.37GoOqpKFXbRrq0GYAigklvXyPFkodKAtChGLBlpkzY"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/follow/{id}

### Method: POST
>
>```
>127.0.0.1:3000/api/follow/test1
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxZjE0Nzc2ZjQ2MDlkZDdlM2EiLCJpYXQiOjE2ODExMzkwMTIsImV4cCI6MTY4MTIyNTQxMn0.I7SugoTnX_orWymkSqvJk1VZGGpJxVKKCJseeCXgMiI|

### Response: 200

```json
{
    "message": "Followed successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/unfollow/{id}

### Method: POST
>
>```
>127.0.0.1:3000/api/unfollow/test1
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxZjE0Nzc2ZjQ2MDlkZDdlM2EiLCJpYXQiOjE2ODExMzkwMTIsImV4cCI6MTY4MTIyNTQxMn0.I7SugoTnX_orWymkSqvJk1VZGGpJxVKKCJseeCXgMiI|

### Response: 200

```json
{
    "message": "Unfollowed successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/user

### Method: GET
>
>```
>127.0.0.1:3000/api/user
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxZjE0Nzc2ZjQ2MDlkZDdlM2EiLCJpYXQiOjE2ODExMzkwMTIsImV4cCI6MTY4MTIyNTQxMn0.I7SugoTnX_orWymkSqvJk1VZGGpJxVKKCJseeCXgMiI|

### Query Params

|Param|value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzZWE4MDJmNWZkYTFkODFhY2E1MTkiLCJpYXQiOjE2ODExMjQ4NDYsImV4cCI6MTY4MTIxMTI0Nn0._OePoEtfQO-85JZRkr6Sf2b-lEgD38PQn0DhDvZ76_s|

### Response: 200

```json
{
    "id": "sudipta",
    "email": "sudiptapradhan@gmail.com",
    "followers_count": 0,
    "following_count": 1
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/posts

### Method: POST
>
>```
>127.0.0.1:3000/api/posts
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxZjE0Nzc2ZjQ2MDlkZDdlM2EiLCJpYXQiOjE2ODExMzkwMTIsImV4cCI6MTY4MTIyNTQxMn0.I7SugoTnX_orWymkSqvJk1VZGGpJxVKKCJseeCXgMiI|

### Body (**raw**)

```json
{
    "title": "something",
    "desc": "post description"
}
```

### Response: 201

```json
{
    "message": "Post created successfully",
    "postID": "643424031432893cdf24e817",
    "title": "something",
    "desc": "post description",
    "createdAt": "2023-04-10T14:58:11.801Z"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/posts/{id}

### Method: DELETE
>
>```
>127.0.0.1:3000/api/posts/643426ab59de48716e27b538
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxMjE0Nzc2ZjQ2MDlkZDdlMzciLCJpYXQiOjE2ODExMzk0MDYsImV4cCI6MTY4MTIyNTgwNn0.iWVtjoWCkx65TwFJM_0YdXaaJGgwHzQUGHEEdKqaTGw|

### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxZjE0Nzc2ZjQ2MDlkZDdlM2EiLCJpYXQiOjE2ODExMzkwMTIsImV4cCI6MTY4MTIyNTQxMn0.I7SugoTnX_orWymkSqvJk1VZGGpJxVKKCJseeCXgMiI|

### Response: 200

```json
{
    "message": "Post deleted successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/like/{id}

### Method: POST
>
>```
>127.0.0.1:3000/api/like/643426f259de48716e27b545
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxMjE0Nzc2ZjQ2MDlkZDdlMzciLCJpYXQiOjE2ODExMzk0MDYsImV4cCI6MTY4MTIyNTgwNn0.iWVtjoWCkx65TwFJM_0YdXaaJGgwHzQUGHEEdKqaTGw|

### Response: 200

```json
{
    "message": "Post liked successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/dislike/{id}

### Method: POST
>
>```
>127.0.0.1:3000/api/dislike/643426f259de48716e27b545
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxZjE0Nzc2ZjQ2MDlkZDdlM2EiLCJpYXQiOjE2ODExMzkwMTIsImV4cCI6MTY4MTIyNTQxMn0.I7SugoTnX_orWymkSqvJk1VZGGpJxVKKCJseeCXgMiI|

### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxMjE0Nzc2ZjQ2MDlkZDdlMzciLCJpYXQiOjE2ODExMzk0MDYsImV4cCI6MTY4MTIyNTgwNn0.iWVtjoWCkx65TwFJM_0YdXaaJGgwHzQUGHEEdKqaTGw|

### Response: 200

```json
{
    "message": "Post disliked successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/comment/{id}

### Method: POST
>
>```
>127.0.0.1:3000/api/comment/643428775b60f3f79c75bbc1
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxMjE0Nzc2ZjQ2MDlkZDdlMzciLCJpYXQiOjE2ODExMzk0MDYsImV4cCI6MTY4MTIyNTgwNn0.iWVtjoWCkx65TwFJM_0YdXaaJGgwHzQUGHEEdKqaTGw|

### Body (**raw**)

```json
{
    "comment": "nice post"
}
```

### Response: 200

```json
{
    "message": "Comment added Successfully"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/posts/{id}

fetch a single post

### Method: GET
>
>```
>127.0.0.1:3000/api/posts/643428775b60f3f79c75bbc1
>```
>
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM0MjUxMjE0Nzc2ZjQ2MDlkZDdlMzciLCJpYXQiOjE2ODExMzk0MDYsImV4cCI6MTY4MTIyNTgwNn0.iWVtjoWCkx65TwFJM_0YdXaaJGgwHzQUGHEEdKqaTGw|

### Response: 200

```json
{
    "post": {
        "_id": "643428775b60f3f79c75bbc1",
        "user": "6434251f14776f4609dd7e3a",
        "title": "something",
        "desc": "post description",
        "likes": [],
        "likesCount": 0,
        "comments": [
            {
                "_id": "643428b4492d136228230d32",
                "user": "6434251214776f4609dd7e37",
                "post": "643428775b60f3f79c75bbc1",
                "comment": "nice post",
                "createdAt": "2023-04-10T15:18:12.570Z",
                "updatedAt": "2023-04-10T15:18:12.570Z",
                "__v": 0
            }
        ],
        "commentCount": 1,
        "createdAt": "2023-04-10T15:17:11.873Z",
        "updatedAt": "2023-04-10T15:18:12.638Z",
        "__v": 1
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: api/all_posts

fetch all posts

### Method: GET
>
>```
>127.0.0.1:3000/api/all_posts
>```
>
### Response: 200

```json
{
    "posts": [
        {
            "commentCount": 0,
            "_id": "643426f259de48716e27b545",
            "user": "6434251f14776f4609dd7e3a",
            "title": "something",
            "desc": "post description",
            "likes": [
                "6434251214776f4609dd7e37"
            ],
            "likesCount": 1,
            "comments": [],
            "commentsCount": 0,
            "createdAt": "2023-04-10T15:10:42.440Z",
            "updatedAt": "2023-04-10T15:11:35.264Z",
            "__v": 3
        },
        {
            "_id": "643428775b60f3f79c75bbc1",
            "user": "6434251f14776f4609dd7e3a",
            "title": "something",
            "desc": "post description",
            "likes": [],
            "likesCount": 0,
            "comments": [
                {
                    "_id": "643428b4492d136228230d32",
                    "user": "6434251214776f4609dd7e37",
                    "post": "643428775b60f3f79c75bbc1",
                    "comment": "nice post",
                    "createdAt": "2023-04-10T15:18:12.570Z",
                    "updatedAt": "2023-04-10T15:18:12.570Z",
                    "__v": 0
                }
            ],
            "commentCount": 1,
            "createdAt": "2023-04-10T15:17:11.873Z",
            "updatedAt": "2023-04-10T15:18:12.638Z",
            "__v": 1
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
