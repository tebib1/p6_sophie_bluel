// Get nav Filters
const filters = document.querySelector("#filters");
const gallery = document.querySelector(".gallery");
const modalContainer1 = document.querySelector(".contenu_modal");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalContainer2 = document.querySelector(".contenu-modal2");
const modalTriggers2 = document.querySelectorAll(".modal-trigger2");

async function main() {

    await getWorks();
    await getCategories();
}

main();




async function getWorks(categoryId) {
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

            //on vide la gallerie
            gallery.innerHTML = "";

            projects.forEach((project) => {
                if (categoryId == project.category.id || categoryId == null) {
                    createProject(project);
                }

            });
        })
        .catch((error) => {
            console.log(error);
        });
}


// la partie filtrer 
async function getCategories() {
    fetch("http://localhost:5678/api/categories")

        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Erreur");
            }
        })

        .then((categories) => {

            console.log(categories)
            //Auxquelles on applique la fonction createButton
            categories.forEach((categorie) => {

                createButton(categorie);

            });
        })
        .then(() => {
            //on récupère les boutons
            const buttons = document.querySelectorAll(".filtres button");


            buttons.forEach((button) => {
                //Pour chaque bouton, au clic
                button.addEventListener("click", function () {
                    // Get (et Affiche le data-tag)
                    let buttonTag = button.getAttribute("data-tag");
                    console.log(buttonTag);

                    //Get catégorie id
                    let categorieId = button.getAttribute("data-id");
                    console.log(categorieId);

                    //on enlève, pour chaque bouton la classe is-active
                    buttons.forEach((button) => button.classList.remove("is-active"));
                    //puis on ajoute la classe active au bouton cliqué
                    this.classList.add("is-active");
                    // On récupère les works de l'API en fonction des categories
                    getWorks(categorieId);
                });
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

// Fonction pour créer un bouton dans la nav des filtres
function createButton(categorie) {
    const buttonFilter = document.createElement("button");
    buttonFilter.setAttribute("data-tag", categorie.name);
    buttonFilter.setAttribute("data-id", categorie.id);
    buttonFilter.classList.add("btn_filter");
    buttonFilter.innerText = categorie.name;
    filters.appendChild(buttonFilter);
};

// Fonction pour créer un projet dans la galerie
function createProject(project) {
    const figureProject = document.createElement("figure");
    figureProject.setAttribute("data-tag", project.category.name);
    figureProject.setAttribute("data-id", project.id);

    const imageProject = document.createElement("img");  
    imageProject.src = project.imageUrl;
    imageProject.alt = project.title;

    const figcaptionProject = document.createElement("figcaption");
    figcaptionProject.innerText = project.title;



    figureProject.appendChild(imageProject);
    figureProject.appendChild(figcaptionProject);
    gallery.appendChild(figureProject);
};

// fonction pour créer les elements de premier Modal //
function creategaleriemodal(modal) {
    const figuremodal = document.createElement("article")
    figuremodal.setAttribute("data-tag", project.category.name);
    figuremodal.setAttribute("data-id", project.id);

    const imagemodal = document.createElement("img");
    imagemodal.src = modal.imageUrl;
    imagemodal.alt = modal.title;
}

/*partie modal */

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainer1.classList.toggle("active")
}

//modalTriggers,addEventListener("click",creategaleriemodal){}//

;

modalTriggers2.forEach(trigger2 => trigger2.addEventListener("click", toggleModal2))

function toggleModal2(){
  modalContainer2.classList.toggle("active")
}