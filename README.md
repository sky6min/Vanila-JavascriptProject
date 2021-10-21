# CMS-Web-development
Development of web service that provides CMS function using Express

### LMS 종합 과제 관리 시스템을 제작한다.
#### - Single Page app으로 제작하였으며, Express 서버 + 프론트 엔드 기술을 이용하여 서비스를 구축하였다. Express 서버에서 서버가 종료되어도 정보가 유지되게 하기위해서, 텍스트 파일에 정보를 저장하였으며, 인코딩 & 디코딩 과정을 iconv-lite 패키지를 추가하여 처리하였으며, 그 외의 파일에 접근하기 위해서 express.static('public')를 app에 추가하였다.

#### 1. 초기화면
#### main.js에서 데이터 리스트(Data, NData, FData)중에 Data(전체 목록)을 ajax로 전달받아 
#### main_cms.js에서 가공하여 동적으로 ‘나의 과제’ 리스트에 표시한다.
![화면 1](https://user-images.githubusercontent.com/51622501/138258041-15f6d157-c01b-4280-a0a9-fb17eaf5ae58.png)

#### 2. 조회 기능 (과목명 조회)
#### main.js에서 indexof를 이용하여 해당 input을 가지는 과목명을 리스트로 전달.
![화면2](https://user-images.githubusercontent.com/51622501/138258044-6ffe1432-46ba-4e3e-a427-9199ece69d8e.png)

#### 3. 조회 기능 (과제명 조회)
#### main.js에서 indexof를 이용하여 해당 input을 가지는 과제명을 리스트로 전달.
![화면3](https://user-images.githubusercontent.com/51622501/138258048-8f78594f-e672-4932-93b0-9e0fcbfc6df1.png)

#### 4. 상세 기능
![화면4](https://user-images.githubusercontent.com/51622501/138258049-e6f2ec1d-e2db-4b4b-98c2-f117fb786294.png)

#### 5. 과제 내용 작성 및 제출.
##### 5.1. 과제 내용을 작성하고, 제출 버튼 클릭 시 ajax로 main.js에 전달하고, 줄띄움 처리를 수행한 후 data.txt 파일에 변경된 내용을 저장.
![화면5](https://user-images.githubusercontent.com/51622501/138258029-cebd9278-b3d4-453a-8c9b-a53160adb89b.png)

##### 5.2 제출이 완료되면, 다음 상세의 내용이 해당 입력한 내용이 출력되며, 미해결 과제 목록에서 삭제됨.
![화면6](https://user-images.githubusercontent.com/51622501/138258035-64238c9c-2dee-4d5b-b442-7b92efba7e50.png)

#### 6. 제출 완료된 과제 목록 조회
#### “상세” 버튼이 클릭되면, 제출한 내용이 출력되며, 해결버튼 클릭 시, 해결한 과제 목록이 출력된다.
![화면7](https://user-images.githubusercontent.com/51622501/138258038-4b48f584-4c3e-487e-a805-a9726069c214.png)
