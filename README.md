# Full Stack Technical Challenge

## Frontend

```bash
$ cd fibonacci-client && npm install
$ npm run start
```

## Backend

```bash
$ cd fibonacci-server && npm install
$ npm run start

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# Load tests

# Install k6
$ brew install k6

$ npm run test:k6
```

## Challenge Description

Please design and implement a web based API that steps through the Fibonacci sequence and a corresponding Web UI.

The API must expose 3 endpoints that can be called via HTTP requests:

- `current` - returns the current number in the sequence
- `next` - returns the next number in the sequence
- `previous` - returns the previous number in the sequence

Example:

    current -> 0
    next -> 1
    next -> 1
    next -> 2
    previous -> 1

Requirements:

- The API must be able to handle high throughput (~1k requests per second)
- The API should also be able to recover and restart if it unexpectedly crashes
- Use React, HTML, and any CSS preprocessor of your choice for the frontend
- Use any language/framework of your choice for the backend
- The submission should be sent in a GitHub repo
