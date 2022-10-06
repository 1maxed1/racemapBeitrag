const Url = "https://racemap.com/api/data/v1/61a21210e5d45d000199f7d9/current";

const getStarters = async (url) => {
  let arrayStartersName = [];
  const request = await fetch(url);
  const toJSon = await request.json();

  for (starter of toJSon.starters) {
    const nameStarter = await starter.name;

    arrayStartersName.push(nameStarter);
  }

  console.log(arrayStartersName);
  //use this for Dom Manipulation
  return Promise.resolve(arrayStartersName);
};

console.log(getStarters(Url));
