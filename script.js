//Q1

const menuIsOpen = false;

if(menuIsOpen){
    console.log("truthy");
}
else {
    console.log("falsy");
}

//Q2


async function getCatFacts(){
    const url ="https://cat-fact.herokuapp.com/facts"

    const response = await fetch(url)

    const results = await response.json()

    console.log(results
        )
}

getCatFacts();