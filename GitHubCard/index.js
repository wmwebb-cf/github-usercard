/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let cards = document.querySelector('.cards');
let dataObj = [
  // 'https://api.github.com/users/wmwebb-cf',
  // 'https://api.github.com/users/tetondan',
  // 'https://api.github.com/users/dustinmyers',
  // 'https://api.github.com/users/justsml',
  // 'https://api.github.com/users/luishrd',
  // 'https://api.github.com/users/bigknell'
];


axios.get('https://api.github.com/users/wmwebb-cf')
  .then(function (response) {
    // handle success
    dataObj.push(response.data);
    dataObj.forEach((item, i) => {
      let newGitCard = cardComponent(item);
      cards.appendChild(newGitCard);
    });
    // followersArray.forEach((item, i) => {
    //   followData.push(response.data);
    //   let followerGitCard = cardComponent(item);
    //   cards.appendChild(followerGitCard);
    // });

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [
//   'https://api.github.com/users/tetondan',
//   'https://api.github.com/users/dustinmyers',
//   'https://api.github.com/users/justsml',
//   'https://api.github.com/users/luishrd',
//   'https://api.github.com/users/bigknell'
// ];
// const followData = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardComponent(someObj) {

  const card = document.createElement('div');
  card.classList.add('card');

  const imgUser = document.createElement('img');
  imgUser.src = someObj.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = someObj.name;

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = someObj.login;

  const location = document.createElement('p');
  location.textContent = `Location:  ${dataObj.location}`;

  const profile = document.createElement('p');

  const profileLink = document.createElement('a');
  profileLink.setAttribute('href', `${someObj.url}`);

  const followers = document.createElement('p');
  followers.textContent = `Followers:  ${someObj.followers}`;

  const following = document.createElement('p');
  following.textContent = `Following: ${someObj.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${someObj.bio}`;

  profile.innerHTML = `Profile: ${profileLink}`;

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.appendChild(imgUser);
  card.appendChild(cardInfo);

  return card;

}

/* List of LS Instructors Github username's:
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'
*/
