# Architecture

## Overview

The application follows a layered architecture.

Client

↓

Express Router

↓

Validation Middleware

↓

Rate Limiter

↓

Controller

↓

Audit Service

↓

External Website

↓

Cache

↓

Response

---

## Components

### Express Server

Handles routing and middleware.

### Validation Middleware

Validates incoming URLs before processing.

### Rate Limiter

Protects the service from excessive client requests.

### Audit Service

Performs URL auditing and timeout handling.

### Cache

Stores recent audit results for repeated requests.

### Logger

Produces structured logs with request identifiers.

---

## State

Application state is maintained only in the in-memory cache.

No persistent database is used.