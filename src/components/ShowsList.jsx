import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class ShowsList extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      const response = await fetch("https://www.omdbapi.com/?apikey=967751bd&s=" + this.props.searchQuery, { "Content-Type": "application/json" });

      if (response.ok) {
        const movies = await response.json();
        this.setState({ movies });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const searchMovies = this.state.movies.Search;

    return (
      <>
        <h4>{this.props.title}</h4>
        <Row xs={1} sm={2} lg={4} xl={6}>
          {searchMovies &&
            searchMovies.map((movie) => {
              return (
                <>
                  <Col className="mb-2 text-center px-1">
                    <img className="PosterImage" fluid="true" src={movie.Poster} alt={"Poster di " + movie.Title} />
                  </Col>
                </>
              );
            })}
        </Row>
      </>
    );
  }
}

export default ShowsList;
