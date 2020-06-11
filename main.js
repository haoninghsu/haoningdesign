var arr = [
  [
    `samoyed`,
    `<a class="card" href="https://www.instagram.com/mayapolarbear/">
<div class="recommend-img" style="background-image:url(image/samoyed.jpg);">
</div>
<div class="recommend-content">
  <h3 class = "recommend-name">Samoyed</h3>
  <p class = "recommend-descr">The land cloud</p>
</div>
 
<div class = "insta">
  <img class="ins-icon" src="image/instagram-sketched.svg">
  <h6 class = "ins"> Recommended Instagram account </h6>
</div>           
</a>`,
  ],
  [
    `red panda`,
    `<a class="card" href="https://www.instagram.com/daniele.tokyo/">
<div class="recommend-img" style="background-image:url(image/redpanda-unsplash.jpg);">
</div>
<div class="recommend-content">
  <h3 class = "recommend-name">Red Panda</h3>
  <p class = "recommend-descr">Not a racoon</p>
</div>
<div class = "insta">
<img class="ins-icon" src="image/instagram-sketched.svg">
<h6 class = "ins"> Recommended Instagram account </h6>
</div> 
</a>`,
  ],
  [
    `quokka`,
    `<a class="card" href="https://www.instagram.com/quokkadailyshow/">
<div class="recommend-img" style="background-image:url(image/quokka.jpg);">
</div>
<div class="recommend-content">
  <h3 class = "recommend-name">Quokka</h3>
  <p class = "recommend-descr">The happiest animal on the world</p>
</div>
<div class = "insta">
<img class="ins-icon" src="image/instagram-sketched.svg">
<h6 class = "ins"> Recommended Instagram account </h6>
</div> 
</a>`,
  ],
  [
    `sea Otter`,
    `<a class="card" href="https://www.instagram.com/vanaqua/">
<div class="recommend-img" style="background-image:url(image/sea-otter-2.jpg);">
</div>
<div class="recommend-content">
  <h3 class = "recommend-name">Sea Otter</h3>
  <p class = "recommend-descr">Not so fluffy but still adorable</p>
</div>
<div class = "insta">
<img class="ins-icon" src="image/instagram-sketched.svg">
<h6 class = "ins"> Recommended Instagram account </h6>
</div> 
</a>`,
  ],
  [
    `capybara`,
    `<a class="card" href="https://www.instagram.com/tori_tori_capy/">
<div class="recommend-img" style="background-image:url(image/Capybara.jpg);">
</div>
<div class="recommend-content">
  <h3 class = "recommend-name">Capybara</h3>
  <p class = "recommend-descr">The largest rodent who loves hot spring</p>
</div>
<div class = "insta">
<img class="ins-icon" src="image/instagram-sketched.svg">
<h6 class = "ins"> Recommended Instagram account </h6>
</div> 
</a>`,
  ],
  [
    `Malamute`,
    `<a class="card" href="https://www.instagram.com/dubs_uw/">
<div class="recommend-img" style="background-image:url(image/Malamute.jpg);">
</div>
<div class="recommend-content">
  <h3 class = "recommend-name">Malamute</h3>
  <p class = "recommend-descr">We love Dubs. We love smiling malamutes.</p>
</div>
<div class = "insta">
<img class="ins-icon" src="image/instagram-sketched.svg">
<h6 class = "ins"> Recommended Instagram account </h6>
</div> 
</a>`,
  ],
];

function buildOneCard(child, div) {
  let a = document.createElement("a");
  a.innerHTML = child;

  div.appendChild(a);
}

function buildAllCards(currentArr) {
  let div = document.getElementById("cards");
  div.innerHTML = "";
  for (i = 0; i < arr.length; i++) {
    buildOneCard(currentArr[i][1], div);
  }
}

var searchInput = document.getElementById("animal-filter");
//compare the input with the animal list
function isAnimalFound(animal) {
  //Get the input
  var userInput = searchInput.value;
  console.log(animal[0]);
  console.log(animal[0].includes(userInput), userInput);
  if (animal[0].includes(userInput)) {
    return true;
  } else {
    return false;
  }
}

//listen when user types in the filed
searchInput.addEventListener("input", function () {
  //filter animals
  var filtered_animals = arr.filter(isAnimalFound);
  /*console.log(arr); */
  console.log(filtered_animals);
  //Update and display the list
  buildAllCards(filtered_animals);
});
