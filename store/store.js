import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    articles: [],
    article: [],
    error: ref(null),
    isLoading: ref(true),
  }),

  actions: {
    // home
    async renderArticles() {
      this.isLoading = true;

      try {
        this.articles = await fetch(`https://devtwit8.ru/api/v1/page/?path=/`);
        const resReceived = await this.articles.json();
        // console.log("resReceived :", resReceived);

        this.articles = resReceived.body[0].data.articles;
        console.log(this.articles);

        this.isLoading = false;
      } catch (err) {
        console.error(err);
        this.error = "Нет статей";
        this.isLoading = false;
      }
    },

    // article
    async fetchArticle(id) {
      this.isLoading = true;

      try {
        this.article = await fetch(
          `https://devtwit8.ru/api/v1/page/?path=/${id}`
        );

        const articleData = await this.article.json();
        this.article = articleData.body;
        console.log(this.article);

        this.isLoading = false;
      } catch (err) {
        this.error = `"Ошибка при загрузке статьи" (${err})`;
        this.isLoading = false;
      }
    },
  },
});
