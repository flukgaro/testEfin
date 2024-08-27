<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter, RouterLink, useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
    console.log(route.name)
    console.log(route.params.id)
})

const userData = reactive({
    firstname: '',
    lastname: '',
    age: '',
    gender: ''
})
const mode = ref('create')
const userIndex = ref(-1)

onMounted(() => {
    if (route.name === 'user-edit') {
        mode.value = 'update'
        userIndex.value = parseInt(route.params.id)
        userStore.users[userIndex.value]
        const oldUser = userStore.users[userIndex.value]
        userData.firstname = oldUser.firstname
        userData.lastname = oldUser.lastname
        userData.age = oldUser.age
        userData.gender = oldUser.gender
    }
})

const createUser = () => {
    console.log(userData)
    if (mode.value === 'update') {
        userStore.editUser(userData, userIndex.value)
    } else {
        userStore.createUser(userData)

    }
    router.push({
        name: 'user-list'
    })
}
const chagemode = computed(() => {
    if (mode.value === 'create') {
        return 'Add'
    } else {
        return 'Update'
    }
})
</script>


<template>
    User {{ chagemode }}
    <div>
        <form @submit.prevent="createUser">

            <div>
                Firstname:
                <input type="text" v-model="userData.firstname" required>
            </div>
            <div>
                Lastname:
                <input type="text" v-model="userData.lastname" required>
            </div>
            <div>
                Age:
                <input type="text" v-model="userData.age" required>
            </div>
            <div>
                Gender:
                <select v-model="userData.gender" required>
                    <option disabled value="">Please select one</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <span v-if="!userData.gender && submitted">Gender is required.</span>
            </div>
            <button type="submit">{{ chagemode }} user</button>
            <RouterLink :to="{ name: 'user-list' }"> back to home</RouterLink>
        </form>
    </div>
</template>
<style scoped>
button {
    margin-right: 5px;
    border-radius: 5px;
    height: 30px;
    cursor: pointer;
}
</style>