const team = [
    {
        firstName: "Wayne", 
        lastName: "Barnett",
        role: "Founder & CEO",
        getImageSrc: getImageSrc,
    },
    {
        firstName: "Angela", 
        lastName: "Caroll",
        role: "Chief Editor",
        getImageSrc: getImageSrc,
    },
    {
        firstName: "Walter", 
        lastName: "Gordon",
        role: "Office Manager",
        getImageSrc: getImageSrc,
    },
    {
        firstName: "Angela", 
        lastName: "Lopez",
        role: "Social Media Manager",
        getImageSrc: getImageSrc,
    },
    {
        firstName: "Scott", 
        lastName: "Estrada",
        role: "Developer",
        getImageSrc: getImageSrc,
    },
    {
        firstName: "Barbara", 
        lastName: "Ramos",
        role: "Graphic Designer",
        getImageSrc: getImageSrc,
    }
]

console.log(team)

const imgSrcWayne = team[0].getimgSrc()
console.log(imgSrcWayne)

// FUNCTIONS 

// GET img SRC FUNC
function getimgSrc() {
    const firstName = this.firstName
    const lastName = this.lastName
    const role = this.role

    let imgSrc = `${firstName} ${lastName} ${role}.jpg`
    let imgSrcLowerCase = imgSrc.toLowerCase()
    let imgSrcLowerCaseDash = imgSrcLowerCase.replaceAll(' ', '-')
    let imgSrcLowerCaseDashNoSpec = imgSrcLowerCaseDash.replaceAll('-&', '')

    return imgSrcLowerCaseDashNoSpec
}