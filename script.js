const planets = [{
        id: 1,
        name: 'Mercury',
        orbitalYear: 0.2408467,
        image: './images/mercury.jpg',
        // age: yıl / orbitalYear,
    },
    {
        id: 2,
        name: "Venus",
        orbitalYear: 0.61519726,
        image: './images/venus.jpg',
        // age: yıl / orbitalYear,
    },
    {
        id: 3,
        name: "Earth",
        orbitalYear: 1.0,
        image: './images/earth.jpg',
        // age: yıl / orbitalYear,
    },
    {
        id: 4,
        name: "Mars",
        orbitalYear: 1.88088158,
        image: './images/mars.jpg',
        // age: yıl / orbitalYear,
    },
    {
        id: 5,
        name: "Jupiter",
        orbitalYear: 11.862615,
        image: './images/jupiter.jpg',
        // age: yıl / orbitalYear,
    },
    {
        id: 6,
        name: "Saturn",
        orbitalYear: 29.447498,
        image: './images/saturn.jpg',
        // age: yıl / orbitalYear,
    },
    {
        id: 7,
        name: "Uranus",
        orbitalYear: 84.016846,
        image: './images/uranus.jpg',
        // age: yıl / orbitalYear,
    },
    {
        id: 8,
        name: "Neptune",
        orbitalYear: 164.79132,
        image: './images/neptun.jpg',
        // age: yıl / orbitalYear,
    },

];
// age: yıl / orbitalYear,  =>>>> orbital year tanımlanmadı hatası veriyor bu şekilde kulanınca


document.querySelector('#btnCalc').addEventListener('click', function() {
    displayCard(planets)
});

function displayCard(planet) {

    console.log(planets.orbitalYear)
    let second = document.getElementById('saniye').value;

    let year = parseInt(second) / 31577600;
    // let age = yıl /parseInt(planets.orbitalYear) ;   =>>> bu şekilde çağırınca tüm orbital year ları array 
    // olarak çağırıyor o yüzden bu işlemi for each içinde yapmamız gerek. tek tek yakalayarak aynı işleme 
    // tabi tutmamız gerek.


    const cardElement = document.getElementById('cardDisplay');


    let cardContent = "";

    planet.forEach((element) => {
        cardContent += `<div class="planetCard">
    <h1 id="planetname" > ${element.name}</h1>
    <img src="${element.image}" class="planetimg" >
    <p id="statement" >You are at your  <span>${ Math.round(parseFloat(year)/parseFloat(element.orbitalYear)*100)/100}</span> if you live on ${element.name} planet.</p>
</div>`

        //  Math.ronud ()*100/100 ile virgülden sonra 2 basamak alarak yuvarlıyor.
        console.log(year / element.orbitalYear)
    });
    cardElement.innerHTML = cardContent;
}