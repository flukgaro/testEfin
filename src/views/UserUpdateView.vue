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
    lastname: ''
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
    if(mode.value === 'create'){
        return 'Add'
    } else {
        return 'Update'
    }
})
</script>


<template>
    UserUpdateView
    <div>
        <div>
            Firstname:
            <input type="text" v-model="userData.firstname">
        </div>
        <div>
            Lastname:
            <input type="text" v-model="userData.lastname">
        </div>
        <button @click="createUser()">{{chagemode}} user</button>
        <RouterLink :to="{ name: 'user-list' }"> back to home</RouterLink>
    </div>
</template>