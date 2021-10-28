let superheroes = [
    {
        name: 'Thor',
        age: 1500,
        planet: 'Asgard',
        height: '6.3',
        weapon: 'Mjolnir',
    },
    {
        name: 'Iron Man',
        age: 34,
        planet: 'Earth',
        height: '5.10',
        weapon: 'Repulsors',
    },
    {
        name: 'Captain America',
        age: 101,
        planet: 'Earth',
        height: '6',
        weapon: 'Shield',
    },
];

function display(superarray) {
    let tabledata = '';
    superarray.forEach(function (superhero, index) {
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${superhero.name}</td>
        <td>${superhero.age}</td>
        <td>${superhero.planet}</td>
        <td>${superhero.height}</td>
        <td>${superhero.weapon}</td>
        <td><button onclick="deleteSuperhero(${index})">delete</button>
        <button onclick="showModal(${index})">update</button></td>
        </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName('tdata')[0].innerHTML = tabledata;
    // document.getElementById('tdata').innerHTML = tabledata;
}

display(superheroes);

function addSuperhero(event) {
    event.preventDefault();
    let superhero = {};
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let planet = document.getElementById('planet').value;
    let height = document.getElementById('height').value;
    let weapon = document.getElementById('weapon').value;
    superhero.name = name;
    superhero.age = Number(age);
    superhero.planet = planet;
    superhero.height = height;
    superhero.weapon = weapon;

    superheroes.push(superhero);

    display(superheroes);

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('planet').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weapon').value = '';
}

function searchByName() {
    let searchValue = document.getElementById('searchName').value;

    let newdata = superheroes.filter(function (superhero) {
        return (
            superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) !=
            -1
        );
    });

    display(newdata);
}

function deleteSuperhero(index) {
    superheroes.splice(index, 1);
    display(superheroes);
}

let updateIndex;

function copySuperhero(index) {
    updateIndex = index;

    let superhero = superheroes[index];

    document.getElementById('upname').value = superhero.name;
    document.getElementById('upage').value = superhero.age;
    document.getElementById('upplanet').value = superhero.planet;
    document.getElementById('upheight').value = superhero.height;
    document.getElementById('upweapon').value = superhero.weapon;
}

function updateSuperhero(e) {
    e.preventDefault();
    let superhero = superheroes[updateIndex];
    console.log(superhero);
    let name = document.getElementById('upname').value;
    let age = document.getElementById('upage').value;
    let planet = document.getElementById('upplanet').value;
    let height = document.getElementById('upheight').value;
    let weapon = document.getElementById('upweapon').value;
    superhero.name = name;
    superhero.age = Number(age);
    superhero.planet = planet;
    superhero.height = height;
    superhero.weapon = weapon;
    console.log(superhero);

    display(superheroes);
    // code for hiding from anywhere
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
}

function showModal(index) {
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'block';

    copySuperhero(index);
}

function hideModal(event) {
    if (event.target.className == 'modal') {
        let modal = document.getElementsByClassName('modal')[0];
        modal.style.display = 'none';
    }
}
