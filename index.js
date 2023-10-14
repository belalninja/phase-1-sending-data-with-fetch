// Add your code here
// fetch(`http://localhost:3000/dogs`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: `application/json`,
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: userName, email: userEmail }),
  })
    .then((res) => res.json())
    .then((data) => {
      document.body.innerHTML += data.id;
    })
    .catch((error) => (document.body.innerHTML += error));
}
