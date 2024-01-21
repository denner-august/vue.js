<template>
  <div id="container">
    <h1>Pergunta para responder</h1>

    <label>true</label>
    <input type="radio" name="options" value="true" />

    <label>false</label>
    <input type="radio" name="options" value="true" />

    <button class="send" type="button">send</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
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
