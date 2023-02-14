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

const tBodyEl = document.querySelector('.t-body')

for (i=0; i<team.length; i++) {

    const mate = team[i]

    const firstName = mate.firstName
    const lastName = mate.lastName
    const fullName = `${firstName} ${lastName}`
    const role = mate.role
    const imgSrc = mate.getImgSrc()

    const tr = `
    <tr>
        <td>${fullName}</td>
        <td>${role}</td>
        <td>${imgSrc}</td>
    </tr>`

    tBodyEl.innerHTML += tr
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