<template>
  <div class="todoList">
    <div class="list">
      <label class="greenCheckbox">
        <input type="checkbox" v-if="!List.done" @click="toggleList(List)" />
        <input
          type="checkbox"
          checked
          v-if="List.done"
          @click="toggleList(List)"
        />
        <span></span>
      </label>
      <div class="text">
        <span :class="`${List.done ? 'completed' : ''}`">{{
          List.content
        }}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        @click="deleteList(List)"
      >
        <path
          d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
          fill="currentcolor"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ListPage",
  props: ["List"],
  methods: {
    ...mapMutations(["toggleList", "deleteList"]),
  },
};
</script>

<style scoped>
.todoList {
  padding: 8px 0;
}

.todoList .list:hover {
  background: #f7fcfa;
}

.todoList .list {
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: #fff;
  border-radius: 3px;
}

.todoList .list .text {
  font-size: 0.9rem;
  padding: 0 3px;
  height: 35px;
  line-height: 35px;
  margin: 6px 0;
  cursor: default;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.todoList .list .text .completed {
  text-decoration: line-through;
  color: #42b983;
}

.greenCheckbox {
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
}

.greenCheckbox > input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  z-index: -1;
  left: -5px;
  top: -5px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: rgba(0, 0, 0, 0.42);
  outline: none;
  opacity: 0;
  -ms-transform: scale(0);
  transform: scale(1);
  transition: opacity 0.5s, transform 0.5s;
}

.greenCheckbox > input:checked {
  background-color: #2196f3;
}

.greenCheckbox > input:disabled {
  opacity: 0;
}

.greenCheckbox > input:disabled + span {
  cursor: initial;
}

.greenCheckbox > span::before {
  content: "";
  display: inline-block;
  margin-right: 15px;
  border: solid 2px rgba(0, 0, 0, 0.42);
  border-radius: 2px;
  width: 14px;
  height: 14px;
  vertical-align: -4px;
  transition: border-color 0.5s, background-color 0.5s;
}

.greenCheckbox > input:checked + span::before {
  border-color: #41b883;
  background-color: #41b883;
}

.greenCheckbox > input:active + span::before {
  border-color: #41b883;
}

.greenCheckbox > input:checked:active + span::before {
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.42);
}

.greenCheckbox > span::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 10px;
  border: solid 2px transparent;
  border-left: none;
  border-top: none;
  transform: translate(5.5px, 1px) rotate(45deg);
  -ms-transform: translate(5.5px, 2px) rotate(45deg);
}

.greenCheckbox > input:checked + span::after {
  border-color: #fff;
}

svg {
  width: 1rem;
  height: 1rem;
  transition: 0.5s;
  cursor: pointer;
}

svg:hover {
  color: #42b983;
  transform: scale(1.1);
}
</style>
