const link = "https://racemap.com/api/data/v1/6336f41309be310001a5894b/current";

const totalDistance = async (urlL) => {
  //algorithm that searches for the smallest amount to the finsih line
  //Seraches in the starters>current>
  //fetches the url
  const request = await fetch(urlL);
  const JsonFormat = await request.json();

  //sets the starting value to the distance to the finsih line of the first starter
  var toFinish = JsonFormat.starters[0].current.toFinish;
  var starterName = JsonFormat.starters[0].name;

  for (starter of JsonFormat.starters) {
    //checks if the value is null -> No locations
    if (starter.current != null) {
      const current = await starter.current.toFinish;
      //for test porposes only

      if (current < toFinish) {
        starterName = starter.name;
        toFinish = current;
      }
    }
  }
  return Promise.resolve([toFinish, starterName]);
  //algorithm that searches for the smallest amount to the finsih line
  //Seraches in the starters>current>
};

totalDistance(link).then((val) => {
  console.log(val[0]), console.log(val[1]);
});

//runable die checkt ob der Wettkampf noch läuft
