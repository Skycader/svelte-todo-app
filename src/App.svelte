<script lang="ts">

  import AddTodo from "./components/add-todo.svelte";
  import TodoList from "./components/todo-list.svelte";
  import { Todo, type TodoInterface } from "./models/todo.model";

  let todos: TodoInterface[] = $state([])

  const addTodo = (title: string) => { todos.push(new Todo(title)); };
  const toggleTodo = (id: number) => { todos = todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)}
  const removeTodo = (id: number) => { todos = todos.filter(todo => todo.id !== id) }

</script>
<div class="container">
	<br />
	<nav>
    	<h3>Svelte Todo App</h3>
  	</nav>

	<hr />
</div>

<div class="container">
	<AddTodo addTodo={addTodo} />
</div>

<br />

<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>

<br/>

{#if todos.length > 0}
<div class="container d-flex justify-content-center">
	<span>{todos.reduce((total, todo) => total += todo.done ? 1 : 0, 0)} of {todos.length} done</span>
</div>
{/if}