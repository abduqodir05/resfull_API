package main

import "fmt"

type bill struct {
	name   string
	items  map[string]float64
	tip float64
}

func billgates(assa string) bill {
	b := bill{
		name:   assa,
		items:  map[string]float64{"pie": 23.3, "cake": 23.4},
		tip: 0,
	}
	return b
}
func (b *bill) format() string {
	fs := "Bill breakdown: \n"
	var total float64 = 0

	for k, v := range b.items {
		fs += fmt.Sprintf("%-25v ...$%v \n", k+":",v)
		total += v
	}
	fs += fmt.Sprintf("%-25v ...$%v\n","tip:",b.tip)

	fs += fmt.Sprintf("%-25v ...%0.2f", "total:",total+b.tip)
	return fs
}

func (b *bill) updateTip(tip float64) {
	b.tip = tip
}

func (b bill) addItem(name string, price float64)  {
	b.items[name] = price
}
