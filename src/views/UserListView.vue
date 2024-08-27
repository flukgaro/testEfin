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

        <table class="rounded-table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in userStore.users" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.gender }}</td>
                    <td>
                        <RouterLink :to="{ name: 'user-edit', params: { id: index } }">
                            <button>Edit</button>
                        </RouterLink>
                        <button @click="userStore.deleteUser(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped>
.rounded-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 12px;
    overflow: hidden;
}

th,
td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

button {
    margin-right: 5px;
    border-radius: 5px;
    height: 30px;
    cursor: pointer;
}

.rounded-table thead tr th:first-child {
    border-top-left-radius: 12px;
}

.rounded-table thead tr th:last-child {
    border-top-right-radius: 12px;
}

.rounded-table tbody tr:last-child td:first-child {
    border-bottom-left-radius: 12px;
}

.rounded-table tbody tr:last-child td:last-child {
    border-bottom-right-radius: 12px;
}
</style>
