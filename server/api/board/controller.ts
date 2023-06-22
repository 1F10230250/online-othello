import { boardUseCase } from '$/useCase/boardUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: boardUseCase.getBoard() }),
  post: ({ body, user }) => ({
    status: 201,
    body: boardUseCase.clickBoard(body.x, body.y, user.id),
  }),
}));

curl 'http://localhost:31577/api/board' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: ja,en-US;q=0.9,en;q=0.8' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: _ga=GA1.1.842667494.1687464780; _gid=GA1.1.952575510.1687464780; _gat_gtag_UA_SOMENUMBER_X=1; session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJuYW1lIjoiQ2hpY2tlbiBQZWFjaCIsImVtYWlsIjoiY2hpY2tlbi5wZWFjaC4xNDdAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXV0aF90aW1lIjoxNjg3NDY2NDc1LCJ1c2VyX2lkIjoicXRTdzFNSGl6RWxrdUJxUWs3dnlmSklQT2NqdSIsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY2hpY2tlbi5wZWFjaC4xNDdAZXhhbXBsZS5jb20iXSwiZ2l0aHViLmNvbSI6WyI4Nzc4OTAyNDM1NzI2NjI1ODk2NTI2ODQyNjE0OTE4NzYzMzg3MTU5Il19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ2l0aHViLmNvbSJ9LCJpYXQiOjE2ODc0NjY0ODIsImV4cCI6MTY4Nzg5ODQ4MiwiYXVkIjoiZW11bGF0b3IiLCJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS9lbXVsYXRvciIsInN1YiI6InF0U3cxTUhpekVsa3VCcVFrN3Z5ZkpJUE9janUifQ.' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  --compressed  -X POST -H "Content-Type: application/json" -d '{"x":"1","y":"2"}'







  curl 'http://localhost:31577/api/board' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: ja,en;q=0.9,en-GB;q=0.8,en-US;q=0.7' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: _ga=GA1.1.1951235223.1687444818; _gid=GA1.1.1656180187.1687444818; _gat_gtag_UA_SOMENUMBER_X=1; session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJuYW1lIjoiQWxnYWUgT3JhbmdlIiwicGljdHVyZSI6Imh0dHBzOi8vZ2l0aHViLmNvbS8xRjEwMjMwMjUwLnBuZyIsImVtYWlsIjoiYWxnYWUub3JhbmdlLjc4M0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE2ODc0NjUwNDUsInVzZXJfaWQiOiI0ZlBjTzZQUjY0eXQycGhWdGJOaUhZOTdPdUFnIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhbGdhZS5vcmFuZ2UuNzgzQGV4YW1wbGUuY29tIl0sImdpdGh1Yi5jb20iOlsiMTgzODYxNDIxMDE1Mzg0OTU1ODA4MDE2NjY0NjU0Mjg0Njk1ODAxMCJdfSwic2lnbl9pbl9wcm92aWRlciI6ImdpdGh1Yi5jb20ifSwiaWF0IjoxNjg3NDY2NTM2LCJleHAiOjE2ODc4OTg1MzYsImF1ZCI6ImVtdWxhdG9yIiwiaXNzIjoiaHR0cHM6Ly9zZXNzaW9uLmZpcmViYXNlLmdvb2dsZS5jb20vZW11bGF0b3IiLCJzdWIiOiI0ZlBjTzZQUjY0eXQycGhWdGJOaUhZOTdPdUFnIn0.' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.51' \
  -H 'sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  --compressed -X POST -H "Content-Type: application/json" -d '{"x":"0","y":"0"}'
