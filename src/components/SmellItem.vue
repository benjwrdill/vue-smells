<template>
  <div class="col-md-12">
    <div class="smell-card">
      <h4 class="card-title col-md-4">{{smell.smell_type}}</h4>
      <p class="card-text col-md-4">{{smell.date}}</p>
      <p class="card-text col-md-4">{{smell.email}}</p>
      <ul class="list-group list-group-flush col-md-12">
        <li class="list-group-item text-left">{{smell.location}}</li>
        <li class="list-group-item text-left">{{smell.comments}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['smell']
}
</script>
