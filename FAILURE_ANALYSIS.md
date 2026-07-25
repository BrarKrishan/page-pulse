# Failure Analysis

## Failure 1

External website timeout

Mitigation

Timeout after configured duration

Return structured error

---

## Failure 2

Too many concurrent requests

Mitigation

Concurrency limiter

Queue requests

---

## Failure 3

Abuse / API flooding

Mitigation

Rate limiting

429 response
