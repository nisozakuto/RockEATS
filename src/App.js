import React, { Component } from "react";
import "./App.css";
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      results: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchRecipes(this.state.query);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  fetchRecipes(
    query,
    cuisine,
    diet,
    excludeIngredients,
    intolerances,
    number,
    offset,
    type,
    limitLicense,
    instructionsRequired
  ) {
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          results: response,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <Headers />
        <main>
          <section id="search">
            <form onSubmit={this.handleSubmit}>
              <label>Search the food</label>
              <input
                placeholder="Burger, Pizza, Pasta"
                value={this.state.query}
                onChange={this.handleChange}
              ></input>
              <input type="submit" value="Search"></input>
            </form>
          </section>
          <SearchResults results={this.state.results} />
        </main>
        <Footer />
      </div>
    );
  }
}
