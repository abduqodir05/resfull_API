package crud

import (
	"fmt"
	"log"
	"net/http"

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

	router.HandleFunc("/movies", getMovies).Methods("GET")
	router.HandleFunc("/movies/{id}", getMovieById).Methods("GET")
	router.HandleFunc("/movies", createMovie).Methods("POST")
	router.HandleFunc("/movies/{id}", updateMovie).Methods("PUT")
	router.HandleFunc("/movies/{id}", deleteMovie).Methods("DELETE")

	fmt.Printf("starting server at localhost:8080\n")
	log.Fatal(http.ListenAndServe(":8080", router))
}

func getMovies(response http.ResponseWriter, request *http.Request) {}

func getMovieById(response http.ResponseWriter, request *http.Request) {}

func createMovie(response http.ResponseWriter, request *http.Request) {}

func updateMovie(response http.ResponseWriter, request *http.Request) {}

func deleteMovie(response http.ResponseWriter, request *http.Request) {}
