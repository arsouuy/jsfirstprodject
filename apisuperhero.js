//here i wiil build an api that gives me the superhero that i typed,
const typeyourhero = (name) => {
    const hero = document.getElementById('hero');
    fetch(`https://superheroapi.com/api.php/8e580624a42f2e1a8e99cbb09d744eee/search/${name}`)
        .then(response => response.json())
        .then(json => {
            
                console.log(json.results[0]);
                   const heronamee= `<h1>${json.results[0].name}</h1>`
                const heroImage = json.results[0].image.url; // Get hero image
                hero.innerHTML = `${heronamee}<img src="${heroImage}" class="imgdog" height="200" width="200" alt="Hero Image" />`;
             
        })
        
         
}

const search = document.getElementById('search');
search.onclick = () => {
    const heroName = document.getElementById('heroName').value; // Get the value from input
        typeyourhero(heroName); // Pass the hero name to the function
}
