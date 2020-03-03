<template>
  <div class="container p-4">
    <div class="row">
      <div class="btn-group col-md-2 offset-md-5">
        <Pagination :articles="articles" :page="page" :perPage="perPage" @onSetData="setData" />
      </div>
    </div>

    <div class="row">
      <Article
        v-for="article in displayedArticles"
        :title="article.title"
        :description="article.description"
        :imageURL="article.imageURL"
        :key="article._id"
      />
    </div>
  </div>
</template>

<script>
import Article from "./components/Article";
import Pagination from "./components/Pagination";

import xhr from "./utils/request";

export default {
  components: {
    Article,
    Pagination
  },
  data: () => ({
    articles: [],
    page: 1,
    perPage: 9
  }),
  computed: {
    displayedArticles() {
      return this.paginate();
    }
  },
  methods: {
    getArticles() {
      const options = {
        method: "GET",
        url: `${process.env.VUE_APP_SERVER_URL}/articles`,
        async: true
      };

      xhr(options)
        .then(data => {
          console.log("Articles OK!");
          this.articles = JSON.parse(data).data;
        })
        .catch(error => {
          console.error("Articles KO!", error);
        });
    },
    paginate() {
      const from = this.page * this.perPage - this.perPage;
      const to =
        this.page * this.perPage > this.articles.length - 1
          ? this.articles.length - 1
          : this.page * this.perPage;

      return this.articles.slice(from, to);
    },
    setData(currentPage) {
      this.page = currentPage;
    }
  },
  created() {
    this.getArticles();
  }
};
</script>