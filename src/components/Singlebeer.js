import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Singlebeer extends Component {
  constructor(props) {
    super(props);
    this.state = { singleBeer: "" };
  }

  getSingleBeer() {
    const { params } = this.props.match;
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${params.id}`)
      // axios.get("https://ironbeer-api.herokuapp.com/beers/single/5b0cfee6861982000a48fd2a")

      .then(response => {
        console.log(response.data);
        this.setState({ singleBeer: response.data });
      });
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  render() {
    return (
      <div>
        <header className="header-component">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymKW7blR5IoWJz4L9BuXeng1G3jPF3F-M1eQ7mQURgnsHm42d"
              alt="home-img"
            />
          </Link>
        </header>
        <div className="beer-detail">
          <span>
            <img src={this.state.singleBeer.image_url} alt="img-beer" />
          </span>
          <h1>{this.state.singleBeer.name}</h1>
          <div>{this.state.singleBeer.tagline}</div>
          <dsiv>{this.state.singleBeer.first_brewed}</dsiv>
          <div>{this.state.singleBeer.attenuation_level}</div>
          <div>{this.state.singleBeer.description}</div>
          <div>{this.state.singleBeer.contributed_by}</div>
          <Link to="/beers">Back to All beers</Link>
          <br />
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }
}

export default Singlebeer;
