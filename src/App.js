import React, { Component } from "react";
import "./App.css";
import Headers from "./components/Headers";

export default class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <main>
          <section id="search">
            <form>
              <label>Search your zip code</label>
              <input placeholder="11001" type="number"></input>
              <input type="submit" value="Search"></input>
            </form>
          </section>
        </main>
        <footer>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </footer>
      </div>
    );
  }
}
