//use this for

const reload = (callback) => {
  //Laufen lassen bis das Rennen zu Ende ist
  setInterval(callback, 1000);
};
const dateShowcase = document.getElementById("date");

const testFunction = () => {
  const date = new Date();
  dateShowcase.innerHTML = date;
};

reload(testFunction);
