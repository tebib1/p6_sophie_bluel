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



/* la partie filtrer 

fetch("http://localhost:5678/api/categories") 

.then((response) => {
   if (response.ok) {
       return response.json();
   } else {
       console.log("Erreur");
   }
})

.then((category) => {
  
    console.log(category)

    category.forEach((trie) => {

        const trieparcategory= await response.json();
        trieparcategory.unshift({ id: 0, name: 'Tous' });
        
        let creationbouttoncattegory = trieparcategory.map( indexcategory => {
            return "<button class=filterbtn data-id=${indexCategory.id}>${indexCategory.name}</button>";
        }) ;

         let choisirparcategory = trieparcategory.map(indexcategory => {
            if (indexCategory.id === 0) {
                return `<option value=${indexCategory.id}></option>`
            } else {
                return `<option value=${indexCategory.id}> ${indexCategory.name}</option>`;
            }};
            document.querySelector("#filter").innerHTML = createButtonCategory.join('');

            )
    }) 
}
)
*/