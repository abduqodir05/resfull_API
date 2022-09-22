package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strconv"
)

type Name struct {
	Family   string
	Personal string
}
type Email struct {
	ID     int
	Adress string
}
type Interest struct {
	ID    int
	Hobby string
}
type Person struct {
	ID        int
	FirstName string
	Name      Name
	Email     []Email
	Interest  []Interest
}

func GetPerson(p *Person) string {
	return p.FirstName + " ID: " + strconv.Itoa(p.ID)
}

func GetPersonEmailAddress(p *Person, i int) string {
	return p.Email[i].Adress
}

func WriteMessage(msg string) {
	fmt.Println(msg)
}

func WriteStars() {
	fmt.Println("------------------------------------------------------------------------------")
}

func checkError(err error) {
	if err != nil {
		WriteMessage(err.Error())
		os.Exit(1)
	}
}

func SaveJson(fileName string, key interface{}) {
	outFile, err := os.Create(fileName)
	checkError(err)
	encoder := json.NewEncoder(outFile)
	err = encoder.Encode(key)
	checkError(err)
	defer outFile.Close()
}
func main() {
	Person := Person{
		ID:        1,
		FirstName: "Abduqodir",
		Name:      Name{Family: "Musayev", Personal: "Developer"},
		Email: []Email{
			Email{ID: 1, Adress: "abduqodirmusayeff@gmail.com"},
			Email{ID: 2, Adress: "Abduqodirmusayev7059@gmail.com"},
		},
		Interest: []Interest{
			Interest{ID: 1,Hobby: "Baseball"},
			Interest{ID: 2, Hobby: "FootBall"},
			Interest{ID: 3, Hobby: "Basketball"},
		},
	}
	WriteMessage("Personal ishi boshlandi")
	WriteStars()
	res1 := GetPerson(&Person)
	WriteMessage(res1)
	WriteStars()
	
	WriteMessage("email boshlandi!!!")
	WriteStars()
	res2 := GetPersonEmailAddress(&Person, 0)
	WriteMessage(res2)
	WriteStars()

	WriteMessage("Save Json Boshlandi:")
	WriteStars()
	SaveJson("Malumot.json",&Person)
	WriteMessage("Malumot sifatida yozildi")
	WriteStars()
}
