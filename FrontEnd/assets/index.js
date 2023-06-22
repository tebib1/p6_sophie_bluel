/* début projet */ 

fetch("http://localhost:5678/api/works")

.then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        console.log("Erreur dans la récupération des données de l'API");
    }
})
.then((projects) => {

    console.log(projects)

      projects.forEach((project) => {

        const figureProject = document.createElement("figure");
        figureProject.setAttribute("data-tag", project.category.name);
        figureProject.setAttribute("data-id", project.id);

        const imageProject = document.createElement("img");
        imageProject.src = project.imageUrl;
        imageProject.alt = project.title;

        const figcaptionProject = document.createElement("figcaption");
        figcaptionProject.innerText = project.title;

const gallery = document.querySelector(".gallery");

figureProject.appendChild(imageProject);
figureProject.appendChild(figcaptionProject);
gallery.appendChild(figureProject);

});
})
.catch((error) => {
    console.log(error);
});



