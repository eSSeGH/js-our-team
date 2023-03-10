const team = [
    {
        firstName: "Wayne", 
        lastName: "Barnett",
        role: "Founder & CEO",
        getImgSrc: getImgSrc,
    },
    {
        firstName: "Angela", 
        lastName: "Caroll",
        role: "Chief Editor",
        getImgSrc: getImgSrc,
    },
    {
        firstName: "Walter", 
        lastName: "Gordon",
        role: "Office Manager",
        getImgSrc: getImgSrc,
    },
    {
        firstName: "Angela", 
        lastName: "Lopez",
        role: "Social Media Manager",
        getImgSrc: getImgSrc,
    },
    {
        firstName: "Scott", 
        lastName: "Estrada",
        role: "Developer",
        getImgSrc: getImgSrc,
    },
    {
        firstName: "Barbara", 
        lastName: "Ramos",
        role: "Graphic Designer",
        getImgSrc: getImgSrc,
    }
]

console.log(team)

// MILESTONE 1

for (i=0; i<team.length; i++) {

    for (let key in team[i]) {
        console.log(team[i][key])
    }
    let imgSrc = team[i].getImgSrc()
    console.log(imgSrc)
}

// MILESTONE 2

const rowEl = document.querySelector('.row')

for (i=0; i<team.length; i++) {

    const mate = team[i]

    const firstName = mate.firstName
    const lastName = mate.lastName
    const fullName = `${firstName} ${lastName}`
    const role = mate.role
    const imgSrc = mate.getImgSrc()

    const card = `
    <div class="col-auto mb-3">
        <div class="card py-3">
            <img class="mx-auto" src='./img/${imgSrc}' alt='${mate.fullName} photo'>
            <div class="mx-auto card-body">
                <h5 class="card-title">${fullName}</h5>
                <span class="card-text">${role}</span>
            </div>
        </div>
    </div>
    `

    rowEl.innerHTML += card
}



// FUNCTIONS 

// GET img SRC FUNC
function getImgSrc() {
    const firstName = this.firstName
    const lastName = this.lastName
    const role = this.role

    let imgSrc = `${firstName} ${lastName} ${role}.jpg`
    let imgSrcLowerCase = imgSrc.toLowerCase()
    let imgSrcLowerCaseDash = imgSrcLowerCase.replaceAll(' ', '-')
    let imgSrcLowerCaseDashNoSpec = imgSrcLowerCaseDash.replaceAll('-&', '')

    return imgSrcLowerCaseDashNoSpec
}

// VUOI SEMPLIFICARTI LA VITA?
// DESTRUTTURAZIONE OGGETTO

// al posto di scrivere:

// const mate = team[i]

//     const firstName = mate.firstName
//     const lastName = mate.lastName
//     const role = mate.role

// scrivi:

// const {firstName, lastName, role} = mate



// DESTRUTTURAZIONE ARRAY

// al posto di scrivere:

//     const nome1 = nomi[1]
//     const nome2 = nomi[2]
//     const nome3 = nomi[3]
//     const nome4 = nomi[4]

// scrivi:

// const nomi = [nomi[1], nomi[2], nomi[3], nomi[4]]

// e se volessi solo prendere il nome 1 e il nome 3 dell'array?

// const nomi = [nomi[1], ,nomi[4], ,]
// lascia spazi vuoti tra le virgole nell'ordine corretto degli oggetti 