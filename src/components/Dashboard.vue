<template>
  <div class="container">
    <h3>AutoTest Code Smells</h3>
    <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
    <hr>
    <AddSmell />
    <hr>
    <div class="">
      <SmellItem
        v-for="(smell_item, index) in orderedSmells"
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
import _ from 'lodash'

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
  },
  computed: {
    orderedSmells: function() {
      let smells = this.$store.state.smells
      return _.orderBy(smells, 'date', 'desc')
    }
  }
}
</script>
