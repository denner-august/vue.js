<template>
  <div id="container">
    <h1 v-html="question" />

    <label>true</label>
    <input type="radio" name="options" value="true" />

    <label>false</label>
    <input type="radio" name="options" value="true" />

    <button class="send" type="button">send</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "App",

  data() {
    return {
      question: undefined,
      incorrect_answers: undefined,
      correct_answer: undefined,
    };
  },

  created() {
    axios
      .get("https://opentdb.com/api.php?amount=5&type=boolean")
      .then((response) => {
        this.question = response.data.results[0].question;
        this.incorrect_answers = response.data.results[0].incorrect_answers;
        this.correct_answer = response.data.results[0].correct_answer;
      });
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  #container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input,
    label,
    button {
      margin: 0.5rem 0rem;
      cursor: pointer;
      font-size: 1.2rem;
    }

    input {
      width: 2rem;
      height: 2rem;
    }

    button {
      background-color: blue;
      color: white;

      width: 10rem;
      height: 3rem;

      border: 0px;
      border-radius: 0.5rem;
    }
  }
}
</style>
