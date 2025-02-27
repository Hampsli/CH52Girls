/* Write a function to show an alert with information about links.
Clicking on the button should display the number of links on the page, the first link in the page, and the last link in the page. */

function alertLinkInfo(){
    //Se buscan todos los links en el html y se guardan en links '[href]'
    const links = document.querySelectorAll("a");
    const numberOfLinks = links.length //Numero de links
    const firstLink = links[0].href //Se guarda el primer link
    const lastLink = links[numberOfLinks-1].href //numberOfLinks nos dará la posición del ultimo link 
    //console.log(links,numberOfLinks, firstLink,lastLink)

    //Alert solo acepta un argumento, por lo que debe haber texto entre cada variable
    alert(`Número de links: ${numberOfLinks} \nPrimer link: ${firstLink}\nÚltimo link: ${lastLink}`)

}