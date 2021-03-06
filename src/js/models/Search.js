// =========================================
// Search Model
// =========================================

// For http request
import axios from "axios";

// For Babel ES6 functions
import "core-js/stable";
import "regenerator-runtime/runtime";

export default class Search {
  constructor(keyword) {
    this.keyword = keyword;
  }

  async fetchResult() {
    try {
      const results = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${this.keyword}`
      );
      this.results = results.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
