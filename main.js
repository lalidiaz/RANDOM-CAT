let name = document.querySelector('.name');
let picture = document.querySelector('.kitty');
let button = document.querySelector('.jsButton');



async function getCat() {
    try{
        let catFetch = await fetch('https://api.thecatapi.com/v1/images/search');
        let data = await catFetch.json();
        let nameCat;

        console.log(data);
        console.log(nameCat, "name cat")

        if (data[0].breeds.length === 0){
            nameCat = "Cute Cat";
            name.innerHTML = nameCat;

            console.log(nameCat, "es el primer if")
            
        }else{
            nameCat = data[0].breeds[0].name;
            name.innerHTML = nameCat;
            console.log(nameCat, "este es el else")
        }
    
        picture.src = data[0].url;

        console.log(data.url, "this is the photo!")

    }catch(err){
        console.log('This is an error!', err);
    }
}

console.log(getCat());

button.addEventListener("click", getCat);
