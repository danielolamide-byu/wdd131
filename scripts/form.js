

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

let numberOfVisits = document.getElementById("visit");

let visits = Number(window.localStorage.getItem('store'));

if (visits != 0) {
    numberOfVisits.textContent = visits;
}
    else {
            numberOfVisits.textContent = "First Visitor"
        }
visits ++ ;
localStorage.setItem('store', visits);