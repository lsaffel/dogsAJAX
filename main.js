async function makeCalls() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  // the next line is not executed until that fetch completes
  // Fetches a list of dog breeds from a public API

  const dogBreedsList = await response.json();
  // the next line below is not executed until the line above completes

  console.log(dogBreedsList); // log the list of breeds to the console
}

makeCalls();
