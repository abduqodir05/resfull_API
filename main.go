package main

import (
	"fmt"
	"net/http"
	"strconv"
)

func main() {
	http.HandleFunc("/add",add)
http.HandleFunc("/search",search)

	http.ListenAndServe(":3000",nil)
}

func search(res http.ResponseWriter, req *http.Request) {
	source := req.FormValue("source")
	q := req.FormValue("q")
	
	data := "/search?q=" + q + "&source=" + source
	res.Write([]byte(data))
}

func add(res http.ResponseWriter, req *http.Request) {
	n1 := req.FormValue("n1")
	intN1, _ := strconv.Atoi(n1) 
	n2 := req.FormValue("n2")
	intN2, _ := strconv.Atoi(n2)

	data := intN1 + intN2
	res.Write([]byte(fmt.Sprint(data)))
}