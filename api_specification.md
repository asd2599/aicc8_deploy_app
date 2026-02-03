# API 명세서 (API Specification)

기본 URL (Base URL): `http://localhost:8000`

## 엔드포인트 (Endpoints)

### 1. 할 일 목록 조회 (Get Tasks)

특정 사용자의 모든 할 일 목록을 가져옵니다.

- **주소 (Endpoint)**: `/get_tasks/:userId`
- **방식 (Method)**: `GET`
- **파라미터 (Parameters)**:
  - `userId` (경로 파라미터): 사용자의 고유 ID.
- **응답 (Response)**:
  - `200 OK`: 할 일 객체들이 담긴 JSON 배열.
  - `500 Internal Server Error`: 에러 메시지.

### 2. 할 일 생성 (Create Task)

새로운 할 일을 생성합니다.

- **주소 (Endpoint)**: `/post_task`
- **방식 (Method)**: `POST`
- **헤더 (Headers)**: `Content-Type: application/json`
- **본문 (Body)**:
  ```json
  {
    "title": "할 일 제목",
    "description": "할 일 설명",
    "date": "YYYY-MM-DD",
    "isCompleted": false,
    "isImportant": false,
    "userId": "사용자_ID_문자열"
  }
  ```
- **응답 (Response)**:
  - `200 OK`: `{ "msg": "Task Created Sucessfully" }`
  - `500 Internal Server Error`: `{ "msg": "Post Task FAil: ..." }`

### 3. 할 일 상세 수정 (Update Task Details)

기존 할 일의 모든 정보를 수정합니다.

- **주소 (Endpoint)**: `/update_task`
- **방식 (Method)**: `PUT`
- **헤더 (Headers)**: `Content-Type: application/json`
- **본문 (Body)**:
  ```json
  {
    "_id": "할일_ID",
    "title": "수정된 제목",
    "description": "수정된 설명",
    "date": "YYYY-MM-DD",
    "isCompleted": true,
    "isImportant": false
  }
  ```
- **응답 (Response)**:
  - `200 OK`: `{ "msg": "Task Update Sucessfully" }`
  - `500 Internal Server Error`: `{ "msg": "Update Task FAil: ..." }`

### 4. 할 일 완료 상태 수정 (Update Task Completion)

할 일의 완료 여부만 빠르게 변경합니다.

- **주소 (Endpoint)**: `/update_completed_task`
- **방식 (Method)**: `PATCH`
- **헤더 (Headers)**: `Content-Type: application/json`
- **본문 (Body)**:
  ```json
  {
    "itemId": "할일_ID",
    "iscompleted": true
  }
  ```
  _(주의: 파라미터 이름은 `iscompleted` (소문자) 입니다)_
- **응답 (Response)**:
  - `200 OK`: `{ "msg": "Task Update Sucessfully" }`
  - `500 Internal Server Error`: `{ "msg": "Update Task FAil: ..." }`

### 5. 할 일 삭제 (Delete Task)

Specific 할 일을 삭제합니다.

- **주소 (Endpoint)**: `/delete_task/:itemId`
- **방식 (Method)**: `DELETE`
- **파라미터 (Parameters)**:
  - `itemId` (경로 파라미터): 삭제할 할 일의 ID.
- **응답 (Response)**:
  - `200 OK`: `{ "msg": "Task Delete Sucessfully" }`
  - `500 Internal Server Error`: `{ "msg": "Delete Task FAil: ..." }`
