
const okvir = document.getElementById('okvir')

let sablon = ``

for (let i = 0; i < korisnici.results.length; i++) {
    const user = korisnici.results[i];

    sablon += `
    <div class="student">
        <h2>${user.name.first}</h2>
        <p>Prezime: ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <img src="${user.picture.large}" alt="${user.name.first}">
        <p>&#9742; <a href="tel:${user.phone}">${user.phone}</a></p>
        <p>Članski staž: ${user.registered.age} god.</p>
    </div>
    `
}

okvir.innerHTML = sablon
