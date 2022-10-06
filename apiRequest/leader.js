const Url = "https://racemap.com/api/data/v1/61a21210e5d45d000199f7d9/ranks";

const getLeaders = async (url) => {
  /**"starters" */
  let arrayRanks = [];
  const request = await fetch(url);
  const toJSon = await request.json();

  for (starter of toJSon.starters) {
    const rank = await starter.rank;
    arrayRanks.push(rank);
  }
  /* return Promise.resolve(arrayRanks); */
  return Promise.resolve(toJSon);
};

//it only returns the
getLeaders(Url).then((valu) => console.log(valu));
