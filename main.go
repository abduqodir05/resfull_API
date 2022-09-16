package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type Movie struct {
	Id       string    `json:"id"`
	Isbn     string    `json:"isbn"`
	Title    string    `json:"title"`
	Director *Director `json:"director"`
}

type Director struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
}

var movies []Movie

func main() {
	router := mux.NewRouter()

	movies = append(movies, Movie{Id: "1234", Isbn: "123441235", Title: "Lucy", Director: &Director{Firstname: "Luc", Lastname: "Besson"}})
	movies = append(movies, Movie{Id: "1235", Isbn: "346734523", Title: "sherlock", Director: &Director{Firstname: "Microft", Lastname: "holmes"}})

	router.HandleFunc("/movies", getMovies).Methods("GET")
	router.HandleFunc("/movies/{id}", getMovieById).Methods("GET")
	router.HandleFunc("/movies", createMovie).Methods("POST")
	router.HandleFunc("/movies/{id}", updateMovie).Methods("PUT")
	router.HandleFunc("/movies/{id}", deleteMovie).Methods("DELETE")

	fmt.Printf("starting server at localhost:8080\n")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func getMovies(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	json.NewEncoder(response).Encode(movies)
}

func getMovieById(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	params := mux.Vars(request)
	for _, movie := range movies {
		if movie.Id == params["id"] {
			json.NewEncoder(response).Encode(movie)
			return
		}
	}
}

func createMovie(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	var movie Movie
	smth := json.NewDecoder(request.Body).Decode(&movie)

	fmt.Println("asdfasdf", smth)

	movie.Id = strconv.Itoa(rand.Intn(10000000))
	movies = append(movies, movie)
	json.NewEncoder(response).Encode(movies)
}

func updateMovie(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	params := mux.Vars(request)
	var updatedMovie Movie
	_ = json.NewDecoder(request.Body).Decode(&updatedMovie)
	updatedMovie.Id = params["id"]

	for idx, movie := range movies {
		if movie.Id == params["id"] {
			movies = append(movies[:idx], movies[idx+1:]...)
			movies = append(movies, updatedMovie)
			json.NewEncoder(response).Encode(movies)
			return
		}
	}
}

func deleteMovie(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("Content-Type", "application/json")
	params := mux.Vars(request)
	for idx, movie := range movies {
		if movie.Id == params["id"] {
			movies = append(movies[:idx], movies[idx+1:]...)
			json.NewEncoder(response).Encode(movies)
			return
		}
	}
}
