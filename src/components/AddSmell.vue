<template>
  <div class="panel panel-primary">
    <div class="panel-heading" @click="toggleForm">
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
          <label>Lines</label>
          <input type="text" class="form-control" v-model="event.lines">
        </div>
        <div class="form-group">
          <label>Comments</label>
          <textarea class="form-control" v-model="event.comments"></textarea>
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
        lines: '',
        comments: '',
        email: ''
      },
      showForm: false
    }
  },
  methods: {
    addSmell() {
      this.event.email = this.$store.state.user.email;
      this.event.date = new Date().toLocaleString()
      smellsRef.push(this.event)
      this.toggleForm()
    },
    toggleForm() {
      this.showForm = !this.showForm
    }
  }
}
</script>
