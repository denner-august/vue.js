var todo_list = [{ tarefaName: "teste", check: false }];
let tarefa = "";

function PushList() {
  this.todo_list.push({ tarefaName: tarefa, check: false });
}

const TodoMangerList = {
  data() {
    return {
      todo_list: window.todo_list,
      text: "",
    };
  },

  methods: {
    clearAll() {
      this.todo_list = [];
    },
    TarefaName(event) {
      tarefa = event.target.value;
    },
    PushList,
  },
};

Vue.createApp(TodoMangerList).mount("#app");
