<template>
  <div class="">
    <h3>AutoTest Code Smells</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <AddSmell />
    <hr>
    <div class="col-md-12">
      <SmellItem
        v-for="(smell_item, index) in this.$store.state.smells"
        :smell="smell_item"
        key="index"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, smellsRef } from '../firebaseApp'
import AddSmell from './AddSmell.vue'
import SmellItem from './SmellItem.vue'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddSmell,
    SmellItem
  },
  mounted() {
    smellsRef.on('value', snap => {
      let smells = []
      snap.forEach(smell => {
        smells.push(smell.val())
      })
      this.$store.dispatch('setSmells', smells)
    })
  }
}
</script>
