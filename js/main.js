const app = Vue.createApp({
  created() {
    fetch("http://localhost:8888/marvel-lumen/public/index.php/movies")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.moviesData = data;
        this.loadingMovies = false;
      })
      .catch((error) => console.log(error));
  },
  data() {
    return {
      moviesData: [],
      title: "",
      release_date: "",
      rating: "",
      image: "",
      director_name: "",
      description: "",
      cast: [],
      bio: "",
      error: "",
      loadingMovies: true,
      loading: false,
      showPopup: false,
    };
  },
  methods: {
    getMovie(id) {
      this.loadingMovies = true;
      fetch(`http://localhost:8888/marvel-lumen/public/index.php/movies/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.loadingMovies = false;
          if (data) {
            this.title = data.title || "Not Available";
            this.release_date =
              data.release_date || "Release Date Not Available";
            this.rating = data.rating || "Ratings Not Available";
            this.image = data.movie_image || "Image Not Available";
            this.director_name = data.director_name || "Director Not Available";
            this.description = data.description || "No description available";
            this.cast = data.cast || [];
            this.bio = data.bio || "No director bio available";
            this.showPopup = true;
            console.log("Popup state:", this.showPopup);
          } else {
            this.error = "Movie not found.";
          }
        })
        .catch((error) => {
          this.loadingMovies = false;
          console.log(error);
          this.error = "An error occurred while fetching the movie.";
        });
    },
    closePopup() {
      this.showPopup = false;
      this.title = "";
      this.release_date = "";
      this.rating = "";
      this.image = "";
      this.director_name = "";
      this.description = "";
      this.cast = [];
      this.bio = "";
    },
  },
}).mount("#app");
