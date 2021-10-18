console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
}
console.log(dolarDun)

//sabit
const euroDun = 11.2
//euroDun = 11 //bunu yapamazsın const olunca

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]
console.log("<ul>")

//index genelde i olarak yazılır
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")
    
}
console.log("</ul>")

{/* <ul>
    <li>Konut Kredisi</li>
    <li>Konut Kredisi</li>
    <li>Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)