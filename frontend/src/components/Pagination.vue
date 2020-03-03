<template>
  <div class="nav mb-3">
    <button
      type="button"
      class="btn btn-sm btn-outline-secondary"
      @click.prevent="onOld"
      v-if="currentPage < totalPages"
    >Previous</button>
    <button
      type="button"
      class="btn btn-outline-secondary"
      @click.prevent="onNumber(n)"
      v-for="n in totalPages"
      :key="n"
    >{{ n }}</button>
    <button
      type="button"
      class="btn btn-sm btn-outline-secondary"
      @click.prevent="onNew"
      v-if="currentPage > 1"
    >Next</button>
  </div>
</template>

<script>
import { parse } from "url";
export default {
  name: "Pagination",
  data: () => ({
    currentPage: null
  }),
  props: {
    articles: Array,
    page: Number,
    perPage: Number
  },
  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / this.perPage);
    }
  },
  methods: {
    onOld() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.$emit("onSetData", this.currentPage);
      }
    },
    onNew() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$emit("onSetData", this.currentPage);
      }
    },
    onNumber(n) {
      this.currentPage = n;
      this.$emit("onSetData", this.currentPage);
    }
  },
  created() {
    this.currentPage = this.page;
  }
};
</script>