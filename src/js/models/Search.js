import axios from "axios";
import "core-js/stable";
import "regenerator-runtime/runtime";

export default class Search {
  constructor(keyword) {
    this.keyword = keyword;
  }

  async getResult() {
    try {
      const results = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${this.keyword}`
      );
      this.results = results.data.recipes;
      return this.results;
    } catch (error) {
      alert(error);
    }
  }
}
