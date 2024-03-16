
//const element = document.getElementById("club");
//console.log(window.getComputedStyle(element).display);
let types = ['html','css','js','php','codecademy'];
let allProjects = document.getElementsByClassName('project')
let htmlProject = document.getElementById("html");
let cssProject = document.getElementById("css");
let jsProject = document.getElementById("javascript");
let phpProject = document.getElementById("php");
let codecademyProject = document.getElementById("codecademy");
const hideUnwantedElements = (arr1,arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i].classList.add('hide');
    }
    for (let j = 0; j < arr2.length; j++) {
        arr2[j].classList.remove('hide');
    }
}

const hideHtmlElements = () => {
    let htmlProjects = document.getElementsByClassName('html');
    hideUnwantedElements(allProjects,htmlProjects);
};
htmlProject.onclick = hideHtmlElements;
const hideCssElements = () => {
    let cssProjects = document.getElementsByClassName('css');
    hideUnwantedElements(allProjects,cssProjects);
};
cssProject.onclick = hideCssElements;
const hideJsElements = () => {
    let jsProjects = document.getElementsByClassName('js');
    hideUnwantedElements(allProjects,jsProjects);
};
jsProject.onclick = hideJsElements;
const hidePhpElements = () => {
    let phpProjects = document.getElementsByClassName('php');
    hideUnwantedElements(allProjects,phpProjects);
};
phpProject.onclick = hidePhpElements;
const hideCodecademyElements = () => {
    let codecademyProjects = document.getElementsByClassName('codecademy');
    hideUnwantedElements(allProjects,codecademyProjects);
};
codecademyProject.onclick = hideCodecademyElements;
