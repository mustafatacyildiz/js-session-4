// let i = 0 ;
// let sum = 0;
// while (i < 6) {
//     sum += i
//     i++
// }
// console.log(sum);

// let i = 10 ;
// let sum = 0;

// do {
//     sum += i
//     i++
// } while (i < 6);
// console.log({sum}, {i});

// let i = +prompt('Bir sayı giriniz :')

// // console.log(isNaN(i), {i});


// while (isNaN(i)) {
//     i = +prompt("Bir sayı giriniz :")
// }

// console.log('Bir sayı girdiniz');

// let i = +prompt('Bir sayı giriniz :')
// while (isNaN(i)) {
//         i = +prompt("Bir sayı giriniz :")
// }   
//     console.log('Bir sayı girdiniz');

// let i;

// do {
//     let i = +prompt('Bir sayı giriniz :')
// } while (isNaN(i));

// console.log(`Girilen değer ${i}`);

// let i = 0;

// while (i>6) {
//     console.log(i);
//     i++
//     if (i==6) break;  
// }

// let i = 0;
// for (let i = 0; i < 10; i++ ) {
//     console.log(i);
    
// }
// console.log({i});

// let str = 'Clarusway'
// console.log(str[str.length-1]);
// // console.log(str.length);
// // console.log(str[0]);

// for (let i = 0; i < str.length; i++){
//     console.log( {i}, str[i]);
// }


// for (let i =1; i <= 100; i++) {
//     if (i % 5 ===0 ) break;
//     console.log(i);
// }

// while (true) {
//     let x = prompt(`Bir sayı giriniz: \n q ile çıkış yapınız`);
//     if (x == 'q') {
//         console.log('Çıkış yapıldı');
//         break
//     } else if (isNaN(x)){
//         continue;
//     } else {
//         console.log(`${x}'in karesi = ${x*x}`);
//     }
// }

// console.log(Math.trunc(Math.random()*6)+1);

let x, y ;
let count = 0;
let cift = 0;
while (true) {
    x = Math.trunc(Math.random()*6)+1;
    y = Math.trunc(Math.random()*6)+1;

    if (x ==6 && y == 6){
        count++
        console.log(x, y, 'Kazandınız');
        break
    }else if (x == y && x!=6) {
        cift++
        console.log(x, y, `${cift}. cift zar`);
        if (cift == 3){
            console.log('Kaybettiniz');
            break
        }
    }
    console.log(x, y);
    count++;
}

console.log(count);
