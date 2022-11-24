//zad 9
const myPromise = new Promise(function (myResolve) {
    setTimeout(function () { myResolve("Udało się!"); }, 5000);
});

myPromise.then(function (value) {
    console.log("Zadanie 9: " + value);
});

//zad 10

function multiplyAsync(x, y) {
    const mnozenie = new Promise((resolve, reject) => {


        if (typeof x === "number" && typeof y === "number") {
            resolve(x * y);
        }

        else {
            reject("Porażka (nie wprowadzono liczby)");
        }


    });




    mnozenie.then((value) =>

        console.log(value))
        .catch(error => console.error("porażka - zły typ zmiennej"))
}
console.log("Zadanie 10: Wersja z liczbami oraz poniżej wersja z błędnym typem zmiennej")
multiplyAsync(6, 5);
multiplyAsync("gfdgfds", 5);


//zad 11
fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
    if (res.status === 200) {
        return res.json();
    }
    throw new Error("bad request");
})
.then(array => array.forEach(({title, body}) => console.log(title, body)))
    .catch(console.error);