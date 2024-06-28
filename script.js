'use strict';

// Random Drivers //
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  let arr = [
    'Max Verstappen',
    'Sergio Pérez',
    'George Russel',
    'Lewis Hamilton',
    'Charles Leclerc',
    'Carlos Sainz',
    'Oscar Piastri',
    'Lando Norris',
    'Lance Stroll',
    'Fernando Alonso',
    'Estaban Ocon',
    'Pierre Gasly',
    'Alexander Albon',
    'Logan Sargeant',
    'Daniel Ricciardo',
    'Yuki Tsunoda',
    'Valtteri Bottas',
    'Zhou Guanyu',
    'Kevin Magnussen',
    'Nico Hulkenberg',
  ];
  let disPlay = document.querySelector('#display');
  disPlay.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  console.log(disPlay.innerHTML);
});

// Random Tracks //
let btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', function () {
  let arr = [
    'Bahrain Grand Prix',
    'Saudi Arabian Grand Prix',
    'Australian Grand Prix',
    'Japanese Grand Prix',
    'Chinese Grand Prix',
    'Emilia Romagna Grand Prix',
    'Monaco Grand Prix',
    'Canadian Grand Prix',
    'Spanish Grand Prix',
    'Austrian Grand Prix',
    'British Grand Prix',
    'Hungarian Grand Prix',
    'Belgian Grand Prix',
    'Dutch Grand Prix',
    'Italian Grand Prix',
    'Azerbaijan Grand Prix',
    'Singapore Grand Prix',
    'United States Grand Prix',
    'Mexico City Grand Prix',
    'São Paulo Grand Prix',
    'Las Vegas Grand Prix',
    'Qatar Grand Prix',
    'Abu Dhabi Grand Prix',
  ];
  let disPlay = document.querySelector('#display-2');
  disPlay.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  console.log(disPlay.innerHTML);
});
