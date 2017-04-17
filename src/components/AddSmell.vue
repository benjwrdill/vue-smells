<template>
  <div class="panel panel-primary">
    <div class="panel-heading" @click="activateForm">
      <h4 class="panel-title">Add a Smelly Location</h4>
    </div>
    <div class="panel-body" v-if="showForm">
      <div class="form">
        <div class="form-group">
          <label>Smell Type</label>
          <input type="text" class="form-control" v-model="event.smell_type">
        </div>
        <div class="form-group">
          <label>Location</label>
          <input type="text" class="form-control" v-model="event.location">
        </div>
        <div class="form-group">
          <label>Comments</label>
          <input type="textbox" class="form-control" v-model="event.comments">
        </div>
        <button class="btn-sm btn-primary" @click="addSmell">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { smellsRef } from '../firebaseApp'

export default {
  data() {
    return {
      event: {
        date: '',
        smell_type: '',
        location: '',
        comments: '',
        email: ''
      },
      showForm: false
    }
  },
  methods: {
    addSmell() {
      this.event.email = this.$store.state.user.email;
      this.event.date = new Date().toISOString().slice(0,10)
      smellsRef.push(this.event)
    },
    activateForm() {
      this.showForm = !this.showForm
    }
  }
}
</script>
