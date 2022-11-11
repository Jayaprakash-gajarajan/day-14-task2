var b = document.createElement("div");
b.setAttribute("class", "column");
document.body.append(b);
// I can select all random API to fetch the  data to refresh to see diffrent picture.
async function foo2() {
    let fish = await fetch("https://api.catboys.com/img");
    let fish1 = await fish.json();
    // let d = document.querySelector(".column3")
    b.innerHTML = `<img src="${fish1.url}">`
    console.log(fish1.url);
}
foo2();