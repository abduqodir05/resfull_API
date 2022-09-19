package main

import (
	"encoding/json"
	"fmt"
)
type Data struct {
	username string
	password string
	ID int64
}
type Object struct {
	data Data
}
func main() {
	jsonString := `
	{
		"data": {
			"username" : "jake",
			"password" : "112233",
			"ID" : 1
		}
	}
	`

	var m Object
	if err := json.Unmarshal([]byte(jsonString), &m); err != nil {
		panic(err)
	}
	fmt.Println(m.data)

fmt.Println("---------------------------------------------------------------------------------------------------------------")

	b, err := json.Marshal(m)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(b))
}