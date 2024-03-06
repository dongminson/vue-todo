<template>
    <div class="todoListItem">
        <input
            type="text"
            class="edit"
            v-if="edit !== null"
            v-model.trim="edit"
            v-focus
            @keyup.enter="submitHandler"
            @keyup.esc="cancelHandler"
            @blur="cancelHandler"
        >
        <template v-else>
            <input
                type="checkbox"
                class="toggle"
                v-model="completed"
            >
            <label @dblclick="editHandler">
                {{ todo.content }}
            </label>
            <font-awesome-icon 
                class="destroy"
                @click="destroyHandler"
                :icon="['fas', 'trash']" 
            />
        </template>
    </div>
</template>
  
<script>
export default {
    data () {
        return {
            edit: null
        }
    },
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    computed: {
        completed: {
            get () {
                return this.todo.completed
            },
            set (val) {
                this.$store.commit('UPDATE_TODO', {
                    id: this.todo.id,
                    data: {
                        content: this.todo.content,
                        completed: val
                    }
                })
            }
        }
    },
    methods: {
        editHandler () {
            this.edit = this.todo.content
        },
        destroyHandler () {
            if (confirm(`Do you want to remove ${this.todo.content} ?`)) {
                this.$store.commit('REMOVE_TODO', this.todo.id)
            }
        },
        submitHandler () {
            if (!this.edit) return
                this.$store.commit('UPDATE_TODO', {
                id: this.todo.id,
                data: {
                    content: this.edit,
                    completed: this.todo.completed
                }
            })
            this.cancelHandler()
        },
        cancelHandler () {
            this.edit = null
        }
    }
}
</script>
  