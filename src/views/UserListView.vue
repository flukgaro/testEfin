<script setup>
import { useUserStore } from '../stores/user'

const userStore = useUserStore()

</script>
<template>
    UserListView
    <div>
        <RouterLink :to="{ name: 'user-add' }">
            Create User
        </RouterLink>
        <ul>
            <li v-for="(user, index) in userStore.users">
                {{ index + 1 }}. {{ user.firstname }} {{ user.lastname }}
                <RouterLink :to="{
                    name: 'user-edit',
                    params: { id: index }
                }">
                    <button>edit</button>
                </RouterLink>

                <button @click="userStore.deleteUser(index)">delete</button>
            </li>
        </ul>
    </div>
</template>