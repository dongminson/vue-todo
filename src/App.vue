<template>
	<div id="app">
		<div id="nav">
			<router-link @click="changeFilter('all')" to="/all">All</router-link> |
			<router-link @click="changeFilter('active')" to="/active">Active</router-link> |
			<router-link @click="changeFilter('completed')" to="/completed">Completed</router-link>
		</div>
		<TodoInput />
		<div id="list">
			<TodoListItem
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
			/>
		</div>
	</div>
</template>

<script>
import { toRaw } from 'vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoListItem from '@/components/TodoListItem.vue'

export default {
	components: {
		TodoInput,
		TodoListItem
	},
	computed: {
		todos () {
			if (this.$store.state.todos) {
				const todos = toRaw(this.$store.state.todos)
				if (this.$store.state.filter === 'all') {
					return todos
				} else if(this.$store.state.filter === 'active') {
					return todos.filter(todo => !todo.completed)
				} else {
					return todos.filter(todo => todo.completed)
				}
			} else {
				return []
			}
		}
	},
	methods: {
		changeFilter(filter) {
			this.$store.commit('SET_FILTER', filter)
		}
	},
	mounted () {
		this.$store.dispatch('INIT_TODO')
	}
}
</script>

<style src="@/assets/style.css">
</style>
