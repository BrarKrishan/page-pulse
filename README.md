# Page Pulse

Production-ready URL Audit API built for the Digital Heroes Software Development qualification task.

## Live Demo

https://page-pulse-x8y0.onrender.com

## GitHub

https://github.com/BrarKrishan/page-pulse

---

## Features

- URL validation
- Request timeout handling
- Concurrency limiting
- In-memory caching
- Rate limiting
- Structured logging with Request IDs
- REST API
- Automated tests
- GitHub Actions CI
- Render deployment

---

## Installation

git clone https://github.com/BrarKrishan/page-pulse.git

cd page-pulse

npm install

npm start

---

## Run Tests

npm test

---

## API

POST /audit

Request

{
"url":"https://example.com"
}

Response

{
"url":"https://example.com",
"status":200,
"title":"Example Domain",
"responseTime":210
}

Errors

400 Invalid URL

429 Too Many Requests

500 Internal Server Error

---

## Tech Stack

Node.js

Express

Jest

GitHub Actions

Render

---

## Deployment

Hosted on Render.

CI automatically runs tests on every push.