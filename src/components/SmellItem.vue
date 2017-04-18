<template>
    <div class="smell-card">
      <div class="row">
        <div class="col-md-4">
          <h4 class="card-title pull-left">{{smell.smell_type}}</h4>
        </div>
        <div class="col-md-4">
          <p class="card-text">{{smell.date}}</p>
        </div>
        <div class="col-md-4">
          <p class="card-text pull-right">{{smell.email}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <p class="card-text pull-left"><em>file:</em>{{smell.location}} <em v-if="'lines' in smell">lines:</em>{{smell.lines}}</p>
        </div>
        <div class="col-md-4">
          <p class="card-text pull-right">{{smell.comments}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['smell']
}
</script>
