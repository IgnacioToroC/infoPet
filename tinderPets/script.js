// Definimos un arreglo de perfiles con sus respectivas propiedades
const profiles = [

    {
    picture: 'img/disfraz-de-joker-para-perro.jpg',
    username: 'Usuario 1',
    age: 'Edad 1',
    description: 'Descripción del perfil 1'
  },
  {
    picture: 'img/51IgmIamcrS._AC_SX679_.jpg',
    username: 'Usuario 2',
    age: 'Edad 2',
    description: 'Descripción del perfil 2'
  },
  // Agregar los demás perfiles aquí
  // ...
  {
    picture: 'img/descarga.jpeg',
    username: 'Usuario 3',
    age: 'Edad 3',
    description: 'Descripción del perfil 3'
  },
  // Agregar los demás perfiles aquí
  // ...
  {
    picture: 'img/F5CAZDOLNVBFHLXPPKS3NNYJEM.jpg',
    username: 'Usuario 4',
    age: 'Edad 4',
    description: 'Descripción del perfil 5'
  },
  // Agregar los demás perfiles aquí
  // ...
  {
    picture: 'img/descarga (1).jpeg',
    username: 'Usuario 5',
    age: 'Edad 5',
    description: 'Descripción del perfil 5'
  },
  // Agregar los demás perfiles aquí
  // ...
  {
    picture: 'img/descarga (2).jpeg',
    username: 'Usuario 6',
    age: 'Edad 6',
    description: 'Descripción del perfil 6'
  },
  // Agregar los demás perfiles aquí
  // ...
  {
    picture: 'img/Dog-clothes.jpg',
    username: 'Usuario 7',
    age: 'Edad 7',
    description: 'Descripción del perfil 7'
  },
  // Agregar los demás perfiles aquí
  // ...
  {
    picture: 'img/D_NQ_NP_899980-MLC48699642859_122021-O.jpg',
    username: 'Usuario 8',
    age: 'Edad 8',
    description: 'Descripción del perfil 8'
  },
    {
    picture: 'img/perritosexy1.jpg',
    username: 'Cosita',
    age: '2 años',
    description: 'Soy Cosita, tengo las vacunas al día, soy limpiecito, solo hago caca en tierrita, me gusta ver las estrellas y soy Tauro'
  },
];

// Variable para almacenar las imágenes pre-cargadas
const preloadedImages = [];

// Cargamos las imágenes de los perfiles de forma asíncrona
function preloadImages() {
  for (let i = 0; i < profiles.length; i++) {
    const img = new Image();
    img.src = profiles[i].picture;
    preloadedImages.push(img);
  }
}

// Obtenemos los elementos del DOM que necesitamos manipular
const profilePicture = document.getElementById('profile-picture');
const username = document.getElementById('username');
const age = document.getElementById('age');
const description = document.getElementById('description');
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const btninfoPet =  document.getElementById('btninfoPet');
// Variable para almacenar el índice del perfil actual
let currentProfileIndex = 0;

// Función para actualizar el perfil en la interfaz
function updateProfile() {
  // Ocultamos el perfil actual antes de actualizar los datos
  document.getElementById('profile').style.display = 'none';

  const currentProfile = profiles[currentProfileIndex];
  profilePicture.src = currentProfile.picture;
  username.textContent = currentProfile.username;
  age.textContent = currentProfile.age;
  description.textContent = currentProfile.description;

  // Mostramos el perfil actual después de haber actualizado los datos
  document.getElementById('profile').style.display = 'block';
}

// Función para cambiar al siguiente perfil
function nextProfile() {
  // Ocultamos el perfil actual antes de cambiar al siguiente
  document.getElementById('profile').style.display = 'none';

  currentProfileIndex++;
  // Si llegamos al final del arreglo, volvemos al principio
  if (currentProfileIndex >= profiles.length) {
    currentProfileIndex = 0;
  }
  updateProfile();
}

// Función para cambiar al perfil anterior
function previousProfile() {
  // Ocultamos el perfil actual antes de cambiar al anterior
  document.getElementById('profile').style.display = 'none';

  currentProfileIndex--;
  // Si llegamos al principio del arreglo, volvemos al final
  if (currentProfileIndex < 0) {
    currentProfileIndex = profiles.length - 1;
  }
  updateProfile();
}

// Event listener para el botón "Me gusta"
likeButton.addEventListener('click', nextProfile);

// Event listener para el botón "No me gusta"
dislikeButton.addEventListener('click', previousProfile);


btninfoPet.addEventListener('click', function(){
  window.location.href="../index.html";

})
//