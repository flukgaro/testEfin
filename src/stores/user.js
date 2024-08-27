
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
state: () =>({
  users:[{
    firstname: 'fluke',
    lastname: 'sky'
  }]
}),
actions: {
  createUser(userData){
    this.users.push(userData)
  },
  deleteUser(userIndex){
    this.users.splice(userIndex,1)
  },
  editUser(userData, userIndex){
    this.users.splice(userIndex, 1, userData)
  }
}
})