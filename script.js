'use strict';

alert ('Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль. (Усложняем) Кроме кратного запросить количество чисел, которые следует вывести') ;

let numberUser ;
let quantityNumber ;

let psevdoNumberUser ;
let psevdoQuantityNumber = 0 ;

/*          версия do while
let numberUser ;
let quantityNumber ;

do {
    numberUser = prompt ('Введите число, кратное которому будут выводится числа: ');
} while (numberUser === null || !Number (numberUser) || Number (numberUser) < 0);
psevdoNumberUser = numberUser = Math.floor (Number (numberUser)) ;

do {
    quantityNumber = prompt ('Введите количество чисел, которые следует вывести: ');
} while (quantityNumber === null || !Number (quantityNumber) || Number (quantityNumber) < 0);
quantityNumber = Math.floor (Number (quantityNumber)) ;

do {
    if (!(psevdoNumberUser % numberUser)) {
        console.log (psevdoNumberUser) ;
        ++ sevdoQuantityNumber ;
    }
    ++psevdoNumberUser ;
} while (psevdoQuantityNumber !== quantityNumber)
*/

/*          версия while
let numberUser ;
let quantityNumber ;

while (numberUser === null || !Number (numberUser) || Number (numberUser) < 0) {
    numberUser = prompt ('Введите число, кратное которому будут выводится числа: ');
}
psevdoNumberUser = numberUser = Math.floor (Number (numberUser)) ;

while (quantityNumber === null || !Number (quantityNumber) || Number (quantityNumber) < 0) {
    quantityNumber = prompt ('Введите количество чисел, которые следует вывести: ');
}
quantityNumber = Math.floor (Number (quantityNumber)) ;

while (psevdoQuantityNumber !== quantityNumber) {
    if (!(psevdoNumberUser % numberUser)) {
        console.log (psevdoNumberUser) ;
        ++psevdoQuantityNumber ;
    }
    ++psevdoNumberUser ;
}
*/

//          версия for
for (; numberUser === null || !Number (numberUser) || Number (numberUser) < 0 ;) {
    numberUser = prompt ('Введите число, кратное которому будут выводится числа: ');
}
psevdoNumberUser = numberUser = Math.floor (Number (numberUser)) ;

for (; quantityNumber === null || !Number (quantityNumber) || Number (quantityNumber) < 0 ;) {
    quantityNumber = prompt ('Введите количество чисел, которые следует вывести: ');
}
quantityNumber = Math.floor (Number (quantityNumber)) ;

for (; psevdoQuantityNumber !== quantityNumber ; ++psevdoNumberUser) {
    if (!(psevdoNumberUser % numberUser)) {
        console.log (psevdoNumberUser) ;
        ++psevdoQuantityNumber ;
    }
}


