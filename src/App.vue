<template>
  <div class="Wrapper">
    <a href="https://vuejs.org/" target="_blank">
      <img src="/logo.png" class="logo vue" alt="Vue logo" />
    </a>
    <p class="title">Vue.js Todo List</p>
    <div class="inputBox">
      <div class="inputWrap">
        <input
          type="text"
          v-model.trim="newList"
          placeholder="Add a new List"
          @keypress.enter="plusList()"
        />
        <button @click="plusList()">Add</button>
      </div>
    </div>

    <div class="Lists">
      <ListPage v-for="(List, idx) in Lists" :key="idx" :List="List" />
    </div>

    <footer>
      <span>할 일이 {{ Lists.length }}개 남았습니다.</span>
    </footer>
  </div>
</template>

<script>
import ListPage from "./components/ListPage.vue";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      newList: "",
    };
  },
  computed: {
    ...mapState(["Lists"]),
    ...mapMutations(["addList"]),
  },
  components: {
    ListPage: ListPage,
  },
  methods: {
    plusList() {
      if (this.newList) {
        this.$store.commit("addList", this.newList);
        this.newList = "";
      }
    },
  },
};
</script>

<style scoped>
.logo {
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto 15px auto;
  will-change: filter;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

p.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #fff;
}

.inputBox {
  margin: 6px 0 7.5px;
  position: relative;
  border-radius: 3px;
  flex: 1;
}

.inputBox:focus-within .inputWrap {
  background: #fff;
}

.inputBox .inputWrap {
  background: #f7fcfa;
  transition: background 0.3s;
  display: flex;
  border-radius: 3px;
}

.inputBox .inputWrap input {
  height: 35px;
  background: 0 0;
  border: none;
  color: #2c3e50;
  display: block;
  font-family: inherit;
  font-size: 16px;
  line-height: 16px;
  outline: 0;
  padding: 12.5px 0 7.5px 15px;
  position: relative;
  width: 100%;
  z-index: 1;
  border-radius: 3px 0 0 3px;
}

.inputBox .inputWrap button {
  border: 1px solid #42b983;
  background-color: #42b983;
  padding: 12.5px 20px;
  border-radius: 0 3px 3px 0;
  transition: 0.5s;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
}

footer {
  margin-top: 7.5px;
  padding: 10px 15px;
  background: #76dbae;
  border-radius: 3px;
  font-size: 0.85rem;
}
</style>