# Node Login Example

## 개요

### 설명

node를 활용하여 간단하게 로그인 시스템 구현

### 기능

- **회원가입**
  
- **로그인** 
  
- **로깅 (winston, morgan)**

<br>

## 설치 및 실행 방법

### 시스템 요구사항

프로젝트를 설치하고 실행하기 전에 다음 소프트웨어가 시스템에 설치되어 있어야 합니다.

```
node 16.17.1
npm 8.15.0
```

### 설치

```
npm install
```

### 설정

1. 프로젝트 root 위치에 .env 파일 생성
2. .env에 해당 내용 추가
   
    ```
    DB_HOST=호스트명
    DB_PORT=포트
    DB_USER=유저명
    DB_PASSWORD=비밀번호
    DB_DATABASE=데이터베이스명
    ```
3. docs 폴더에 table.sql 실행


### 실행

```
npm run start
```