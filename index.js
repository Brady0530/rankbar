//console.log(document.location.search);

document.addEventListener('DOMContentLoaded', postData);

const data = document.location.search;
const params = new URLSearchParams(data);

const name = params.get('username');
const amount = params.get('amount');
const foodtype = params.get('foodtypes');
const major = params.get('major');
const carsrange = params.get('carsrange');


let count = 0; 

if (amount == "1") {
    count = count += 1
} else if (amount == "2") {
    count = count += 2
} else if (amount == "3") {
    count = count += 3
} else {
    count = count += 4
}

if (foodtype == "quail")  {
    count = count += 3
 } else {
    count = count += 1
 }

if (major == "ie") {
    count = count += 3
} else if (major == "othere" || major == "cs") {
    count = count += 2
} else if (major == "biz") {
    count = count += 1
} else if (major == "lmc" || major == "otherm") {
    count = 0
}

if (carsrange >= 90 && carsrange <= 100) {
    count = count += 200
} else {
    count = count += 2
}

let chair;
let image;

if (count >= 200) {
    chair = "Lightning McQueen Chair"
    image = 'mcqueenchair.jpg';
    bodystuff = "You. Are. Speed. You could care less about eating your favorite foods or what you do in school. All you're worried about is winning. Get to the races!";

} else if (count <= "2") {
    chair = "Highchair"
    image = 'highchair.avif';
    bodystuff = "You don't really know what all you got going on here. You're not terribly adventurous and you're comfortable letting that silver spoon find its way right to your mouth. Maybe it's to keep you away from your siblings, or an effort to keep you from making such a mess yourself, but a highchair sure is neccessary when it comes to you.";

} else if (count >= "9" && count <= "12") {
    chair = "Sofa"
    image = 'sofa.jpg';
    bodystuff = "You're the star of the group. No hangout is complete without you and there's never a dull moment with you. Whether you have to leave space for your huge family or maybe some extra storage for all that work piling up, everybody knows you got stuff going on but you are killing it.";

} else if (count >= "6" && count <= "8" ) {
    chair = "Recliner"
    image = 'recliner.jpg';
    bodystuff = "You are exactly where you want to be. Your evening plan is already filled with nothing more than just hanging out, doing your thing, maybe getting one or two things done then just catching a vibe. You're easy going and try not to complicate things to much.";

} else if (count >= "3" && count <= "5") {
    chair = "Wooden chair"
    image = 'woodenchair.jpg';
    bodystuff = "You are perfectly you. You know what you're good at and don't pretend to be something you're not, and people appreciate that. Sure you're a big mundane and even a little creaky from time to time, but you always get the job done.";
}
console.log(chair);
function postData() {
    const container = document.getElementById('results');
    container.innerHTML = `<h1>${name}, you are a ${chair}!</h1>
                           <img src="${image}"></img>
                           <p3>${bodystuff}</p3>`;

}


