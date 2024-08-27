<script setup>
import {ref} from 'vue'
import {useUserStore} from '../stores/user'

const userstore = useUserStore()

const isUpdated = ref(flase)
const firstname = ref('')
const lastname = ref('')

const function = () =>{

}

</script>
<template>
  <div class="container-user">
    <div class="user-add">
      New user
    </div>
    <div class="user-flex">
      <div class="user-name">
        shikake new
      </div>
      <div class="crud-container">
        <div class="crud">Edit</div>
        <div class="crud">Delete</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.crud-container {
  width: 80%;
  display: flex;
  gap: 10px;
}
.user-flex{
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
</style>