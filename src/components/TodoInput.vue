<template>
    <div class="todoInput">
        <input
            v-model.trim="todo"
            v-focus
            type="text"
            placeholder="Add a todo"
            @keyup.enter="submitHandler"
        >
    </div>
</template>

<script>
    export default {
        data () {
            return {
                todo: ''
            }
        },
        methods: {
            submitHandler () {
                if (!this.todo) return
                this.$store.commit('ADD_TODO', {
                    content: this.todo,
                    completed: false
                })
                this.todo = ''
            }
        }
    }
</script>