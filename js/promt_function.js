var name = prompt('Wpisz swoje imię');
var h, a, triangleArea;
alert('Witaj, ' + name); // to jest komentarz liniowy wykonany zgodnie z treścia zadania 8.3
console.log('Witaj, ' + name);
//zadanie 8.4
h = prompt('Podaj wysokość trójkata');
a = prompt('Podaj długość podstawy');
triangleArea = a * h / 2;
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
//zadanie 8.5
var b, c, value;
b = prompt('Podaj wartość b');
c = prompt('Podaj wartość c');
value = (b * b) + (2 * b * c) - (c * c);
console.log(value);
if (value > 0) {
	console.log('wynik dodatni');
}
else if (value < 0) {
	console.log('wynik ujemny');
} 
else if (value == 0) {
	console.log('wynik jest równy 0');
}

else {
	console.log('Wprowadzono nieprawidłowe dane');
}



