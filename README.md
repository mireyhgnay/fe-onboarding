# ๐ฉ๐ปโ๐ป ํ๋ฆผ ์คํฐ๋ ๊ณต๊ฐ
```
- ์ ๋ง๋๋ก ์ค์นํด๋ณด๊ณ  ๊ณต๋ถํ๋~~ ๊ณต๊ฐ์๋๋ค:)    
- master ์์ ๋ธ๋์น ๋ฐ์ ์ฌ์ฉ   
- hyerim-dev -> hyerim_origin merge  
```
-----  

## ๐ [๊ณผ์ 1 :: ์ง๋ผ ๋ฒํธ ์๋ ฅ, ๋งํฌ ์์ฑ, ์ด๋](https://bitbucket.tmon.co.kr/bitbucket/projects/FRT/repos/dev_test/browse/study/src/00_study?at=refs%2Fheads%2Fhyerim_dev)
> ์ง๋ผ ๋ฒํธ ์๋ ฅํ๊ณ  ๋ฒํผ ๋๋ฅด๋ฉด ๋งํฌ๋ฅผ ๋ง๋ค์ด์ฃผ๋ ํ์ด์ง์๋๋ค. + Webpack ์ค์น

**๐ก ํ์ํ ์ง์**
- npm ํ๋ก์ ํธ ๊ตฌ์ถ๊ณผ ์นํฉ ์ค์ 
- DOM ์กฐ์, ์์ฑ
    - dom ๊ฐ์ฒด ๊ฐ์ ธ์ค๊ธฐ: querySelector,ย getElerhkmentById
    - ์์ฑ ์ง์ : setAttribute ๋๋ ์ง์  ์ง์ 
    - dom ๋ง๋ค๊ธฐ: createElement
    - dom ์ถ๊ฐ: append
- ์ด๋ฒคํธ
    - ํด๋ฆญ: onclick ๋๋ addEventListener๋ก click ์ถ๊ฐ


**๐ ์ฐธ๊ณ  ๋งํฌ**
- [Introduction to fetch()](https://web.dev/introduction-to-fetch/)
- [๋ชจ๋ JavaScript ํํ ๋ฆฌ์ผ](https://ko.javascript.info/)
- [A mostly complete guide to webpack 5 (2020)](https://www.valentinog.com/blog/webpack/)

-----

## ๐ [๊ณผ์ 2 :: ์ง๋ผ ์นธ๋ฐ ๋ณด๋](https://bitbucket.tmon.co.kr/bitbucket/projects/FRT/repos/dev_test/browse/study/src/01_study?at=refs%2Fheads%2Fhyerim_dev)
> fetch + Webpack ์ฌ๋ฌ ํ๋ก์ ํธ ๊ด๋ฆฌ๋ฅผ ์ํ ์ฌ์ค์     
Babel + ESLint ์ค์น ๋ฐ ์ค์ 
- ์ ๋ชฉ, ์ค๋ช, ๋งํฌ ์ฃผ์๋ฅผ ์๋ ฅํ๊ณ  ์ถ๊ฐํ๋ฉด ์์ ์นด๋๊ฐ ๋ง๋ค์ด์ง๋๋ค.
- ์ ๋ชฉ, ์ค๋ช์ ํ์! ๋งํฌ ์ฃผ์๋ ํ์๊ฐ ์๋๋๋ค.
- ์์์ 4๋จ๊ณ๋ก ๊ตฌ๋ถํฉ๋๋ค.(์ค๋น, ๊ฐ๋ฐ, QA, ์ข๋ฃ)
- ์์ ์นด๋๋ฅผ ๊ฐ ๋จ๊ณ๋ก ๋์ด ์ด๋ํ  ์ ์์ต๋๋ค.    

**๐ฏย ์๊ตฌ์ฌํญ ๊ตฌํํ๊ธฐ**
1. `Form` ์ง๋ผ๋ฒํธ & ์ค๋ช value ๊ฐ์ ์๋ ฅํ๋ค. (TWORK๋ฅผ ์ ์ธํ ๋ฒํธ๋ง ์๋ ฅ)
    - [ ] ๊ฐ input value ๊ฐ์ ์ง๋ผ ์นด๋ ์์ ์ถ๊ฐ๋์ด์ผ ํ๋ค.
    - [ ]  input value ๊ฐ์ ์๋ ฅํ์ง ์์ ๊ฒฝ์ฐ ๊ฐ๊ฐ์ alert์ฐฝ์ ๋์ด๋ค.
2. `Form` ์ถ๊ฐํ๊ธฐ ๋ฒํผ ํด๋ฆญ/Enter ์ด๋ฒคํธ ์คํ์
    - [ ]  ์ง๋ผ ์นด๋๊ฐ.jira_board > .board.todo ์์ a.card ๋ก ์นด๋๊ฐ ์์ฑ๋๋ค.
    - [ ]  ๋๊ฐ์ ์ง๋ผ๋ฒํธ๊ฐ ์์ฑ๋์ด์๋ค๋ฉด alert์ฐฝ์ผ๋ก ์ด๋ฏธ ์ถ๊ฐ๋์๋ค๊ณ  ์๋ ค์ค๋ค.
    - [ ]  ์์ฑํ๋ input value ๊ฐ์ ์ ๊ฑฐ(โโ)๋๋ค.
3. `Card` ์ง๋ผ ์นด๋ ์ค์ 
    - [ ]  form input ์์ ์๋ญํ ์ง๋ผ๋ฒํธ value ๊ฐ์ twork-{number}๋ก ๊ฐ์ ธ์จ๋ค.
    - [ ]  ์นด๋๋ a๋งํฌ๋ก http://โ-/twrok-{number} ๋ก ์ฐ๊ฒฐ๋๋๋ก ํ๋ค(target : blank)
    - [ ]  drag๊ฐ ๊ฐ๋ฅํ ์นด๋๋ก ์ค์ ํ๊ธฐ
4. `Board` ์์ฑ๋ ์นด๋ ๋๋๊ทธ ์ ์ด๋ ์์น๋ก๋  ์ด๋์ด ๊ฐ๋ฅํ๋ค.
    - [ ]  ๋๋๊ทธ ์ค ๋๋กญ API๋ฅผ ์ฌ์ฉํ์ฌ ์นด๋๋ฅผ ๋๋๊ทธ์ํจ๋ค.

**๐ ์ฐธ๊ณ  ๋งํฌ**
- [HTML5 ๋๋๊ทธ ์ค ๋๋กญ API ์ฌ์ฉ](https://web.dev/i18n/ko/drag-and-drop/#%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD-%EC%8B%9C%ED%80%80%EC%8A%A4-%EC%8B%9C%EC%9E%91-%EB%B0%8F-%EC%A2%85%EB%A3%8C)

-----

## ๐ ํด์ฆ
- [Add ํจ์ ๊ตฌํํ๊ธฐ](https://bitbucket.tmon.co.kr/bitbucket/projects/FRT/repos/dev_test/browse/study/src/quiz/Add.js?at=refs%2Fheads%2Fhyerim_dev)