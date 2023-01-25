package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)
func getinput(prompt string, r *bufio.Reader) (string error) {
	fmt.Print(prompt)
	input, err := r.ReadString('\n')

	return strings.TrimSpace(input), err
}

func createBill()bill {
	reader := bufio.NewReader(os.Stdin)

	fmt.Print("create a new bill")
	name, _ := reader.ReadString('\n')
	name = strings.TrimSpace(name)

	b := newbill(name)
	fmt.Println("Created the bill: ",b.name)
}
func promptoption() {
	reader :=bufio.NewReader(os.Stdin)

	option, _ :=
	 getinput("Choose option (a - add item, s - save bill, t - add tip)", reader)
	fmt.Println(option)
}
func main() {
	mybill := createBill()
	promptoption(mybill)
}
