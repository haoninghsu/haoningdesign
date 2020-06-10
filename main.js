function buildOneCard(child) {
  let div = document.getElementById("cards");
  let a = document.createElement("a");
  a.innerHTML = child;

  div.appendChild(a);
}

var arr = [
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
];

function buildAllCards() {
  for (i = 0; i < arr.length; i++) {
    buildOneCard(arr[i]);
  }
}

buildAllCards();
