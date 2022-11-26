package main

import "fmt"

func main() {
	mybill := billgates("it's genius bill")

	mybill.updateTip(10)

	mybill.addItem("plov",9.99)
	mybill.addItem("pepsi",2.99)
	mybill.addItem("lagman",4.50)
	mybill.addItem("ice-cream",1.49)
	mybill.addItem("dessert",14.99)

	fmt.Println(mybill.format())
}