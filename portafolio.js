
let texto = str => {
 let arrFromStr = str.split("");
 let i = 0;
 let printStr = setInterval(function(){
     document.getElementById("texto").innerHTML += arrFromStr[i];
     i++;
     if (i === arrFromStr.length - 1){
         clearInterval(printStr);
     }
 }, 100);
};

texto("Al descubrir el mundo de la programación, la intriga de saber que había detrás de los sitios web, como se creaban, que conocimientos se necesitaban, y muchas otras preguntas, desaparecieron dejando lugar a la ansiedad por comenzar a ser parte de ese mundo... Desde la secundaria tenía la idea de crear aplicaciones y sitios web para satisfacer ciertas necesidades que considero importantes, Al igual que Meta, la idea es hacer una sola organización que se encargue de programar distintas aplicaciones. Siempre y cuando sea para ayudar a los demás claro..");

function visitar(element){
    if(element.id = "pagehelpme"){
        location.replace("https://pagehelpme.github.io/");
    }
    else if(element.id = "pagefindbus"){
        location.replace("https://find-colectivos.github.io/");
    }
    else if(element.id = "pagedan"){
        location.replace("https://dreamsandneeds.github.io/");
    }
}




