let contaEnergia
let contaAgua
let contaInternet
let aluguel
let funcionarios 
let total 

contaEnergia = parseInt (prompt("informe o valor da conta de energia eletrica"))
contaAgua = parseInt (prompt ("informe sua conta de água"))
contaInternet = parseInt (prompt ('informe sua conta de internet'))
aluguel = parseInt (prompt ('informe seu aluguel'))
funcionarios = parseInt (prompt ('informe o custo com os funcionarios'))

total = contaEnergia+ contaAgua+ contaInternet+aluguel+funcionarios

alert('o seu custo é:' + total)
