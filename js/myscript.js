
let _experiences;
applyExperiences();


async function getExperiences() {
  const response = await fetch("js/experiences.json")
  experiences = await response.json();
  console.log(experiences[0]["title"]);
}

  async function applyExperiences()
  {
    await getExperiences();

    for (let index = 0; index < 4; index++) {
      document.getElementById(`h1-${index}`).innerHTML = experiences[index]["title"];
      document.getElementById(`h3-${index}`).innerHTML = experiences[index]["time-period"];
      document.getElementById(`p-${index}`).innerHTML = experiences[index]["description"];
    }
  }



