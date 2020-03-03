<template>
  <div class="col-md-4">
    <div class="card mb-2">
      <img :src="imageURL" :alt="title" class="card-img-top" />
      <div class="card-body">
        <h5>{{ title }}</h5>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    title: String,
    description: String,
    imageURL: String
  }
};
</script>