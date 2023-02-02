# 👩🏻‍💻 혜림 스터디 공간
```
- 제맘대로 설치해보고 공부하는~~ 공간입니다:)    
- master 에서 브랜치 따서 사용   
- hyerim-dev -> hyerim_origin merge  
```
-----  

## 📌 [과제1 :: 지라 번호 입력, 링크 생성, 이동](https://bitbucket.tmon.co.kr/bitbucket/projects/FRT/repos/dev_test/browse/study/src/00_study?at=refs%2Fheads%2Fhyerim_dev)
> 지라 번호 입력하고 버튼 누르면 링크를 만들어주는 페이지입니다. + Webpack 설치

**💡 필요한 지식**
- npm 프로젝트 구축과 웹팩 설정
- DOM 조작, 생성
    - dom 객체 가져오기: querySelector, getElerhkmentById
    - 속성 지정: setAttribute 또는 직접 지정
    - dom 만들기: createElement
    - dom 추가: append
- 이벤트
    - 클릭: onclick 또는 addEventListener로 click 추가


**🔗 참고 링크**
- [Introduction to fetch()](https://web.dev/introduction-to-fetch/)
- [모던 JavaScript 튜토리얼](https://ko.javascript.info/)
- [A mostly complete guide to webpack 5 (2020)](https://www.valentinog.com/blog/webpack/)

-----

## 📌 [과제2 :: 지라 칸반 보드](https://bitbucket.tmon.co.kr/bitbucket/projects/FRT/repos/dev_test/browse/study/src/01_study?at=refs%2Fheads%2Fhyerim_dev)
> fetch + Webpack 여러 프로젝트 관리를 위한 재설정    
Babel + ESLint 설치 및 설정
- 제목, 설명, 링크 주소를 입력하고 추가하면 작업 카드가 만들어집니다.
- 제목, 설명은 필수! 링크 주소는 필수가 아닙니다.
- 작업은 4단계로 구분합니다.(준비, 개발, QA, 종료)
- 작업 카드를 각 단계로 끌어 이동할 수 있습니다.    

**🎯 요구사항 구현하기**
1. `Form` 지라번호 & 설명 value 값을 입력한다. (TWORK를 제외한 번호만 입력)
    - [ ] 각 input value 값을 지라 카드 안에 추가되어야 한다.
    - [ ]  input value 값을 입력하지 않을 경우 각각의 alert창을 띄운다.
2. `Form` 추가하기 버튼 클릭/Enter 이벤트 실행시
    - [ ]  지라 카드가.jira_board > .board.todo 안에 a.card 로 카드가 생성된다.
    - [ ]  똑같은 지라번호가 생성되어있다면 alert창으로 이미 추가되었다고 알려준다.
    - [ ]  작성했던 input value 값은 제거(’’)된다.
3. `Card` 지라 카드 설정
    - [ ]  form input 에서 입럭한 지라번호 value 값을 twork-{number}로 가져온다.
    - [ ]  카드는 a링크로 http://—-/twrok-{number} 로 연결되도록 한다(target : blank)
    - [ ]  drag가 가능한 카드로 설정하기
4. `Board` 생성된 카드 드래그 시 어느 위치로든 이동이 가능하다.
    - [ ]  드래그 앤 드롭 API를 사용하여 카드를 드래그시킨다.

**🔗 참고 링크**
- [HTML5 드래그 앤 드롭 API 사용](https://web.dev/i18n/ko/drag-and-drop/#%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD-%EC%8B%9C%ED%80%80%EC%8A%A4-%EC%8B%9C%EC%9E%91-%EB%B0%8F-%EC%A2%85%EB%A3%8C)

-----

## 📌 퀴즈
- [Add 함수 구현하기](https://bitbucket.tmon.co.kr/bitbucket/projects/FRT/repos/dev_test/browse/study/src/quiz/Add.js?at=refs%2Fheads%2Fhyerim_dev)