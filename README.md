# :zap: Vuex-TodoList 프로젝트 소개
:octocat: 바로가기 https://light9639.github.io/Vuex-TodoList/

![light9639 github io_Vuex-TodoList_ (2)](https://user-images.githubusercontent.com/95972251/213455952-06bd0e3b-a0c5-407b-9af3-a4d2a8bfb608.png)

:sparkles: Vuex-TodoList 사이트입니다. :sparkles:

## :rocket: 시작하는 법
미리보기를 원하신다면 다운로드 후 yarn을 설치하고
```bash
yarn vite
# or
yarn dev
```
를 누르고 http://127.0.0.1:5173/ 로 접속하면 미리보기 화면을 띄울 수 있습니다.
## :calendar: 개발인원 및 기간
- 1인 개발 2023.01.18 ~ 2022.01.19(2일 소요)
## :dart: 개발 목적
- Vue.js를 이용해 TodoList를 만들고자 하여 제작하게 되었습니다.
## :black_nib: 구현기능
- Vue의 `@click`, `v-model` 기능들을 활용하여 제작한 Vue.js TodoList입니다.
## :hammer_and_wrench: 적용 기술
### :zap: Vue
- React와 함께 SPA 제작에 가장 유명한 Vue.js를 이용하여 만든 TodoList입니다.
- @click 이벤트를 작성한 함수를 적용하여 Vuex Mutations가 실행되도록 작성했습니다.
### :zap: Vite
- WebPack을 사용하는 대신 Vite라는 2세대 번들링 툴을 사용하여 서버에서 작동하는 JS의 크기를 줄이고 속도를 높였습니다.
### :zap: Vuex
- Vue.js의 상태관리 라이브러리인 Vuex를 사용하여 state를 생성 및 수정하도록 만들었습니다.
- `this.$store.state.commit`, `this.$store.state.dispatch` 문을 간소화하기 위하여 `mapState`, `mapMutations`를 사용하여 간소화시켰습니다.
### :zap: uex-persistedstate
- Vuex-persistedstate 라이브러리를 통해 Vuex 데이터를 Localstorage에 저장함으로써 새로고침을 해도 데이터가 사라지지 않습니다.
