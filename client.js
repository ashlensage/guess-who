console.log('Here are all the available people:', people);
$(onReady);
let randomNum = randomNumber(0, 6);
let personName = getPersonObject(randomNum);

function onReady(){
    console.log('jquery is working');
    
    
    render(personName);

    for (let person of people){
        $('#body').append(`<div class="pictures">
                        <img class="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
                    </div>`
        )
    }

    $('.pictures').on('click', checkName);

}

function getPersonObject(num){
    let personObject = people[num];
    return personObject.name;
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function render(name){
    console.log(name);
    $('#textInformation').append(`<h1>Click on the picture who's name is ${name}</h1>`);
}

function checkName(){
    let hasClass = $(this).children().hasClass(personName);
    console.log(hasClass);
    if (hasClass){
        clearResult();
        $('#click-result-text').append(`
        <h2>Correct!</h2>
        `);
        $('#textInformation').empty();
        randomNum = randomNumber(0, 6);
        personName = getPersonObject(randomNum);
        setTimeout(clearResult, 2000);
        render(personName);
    }else{
        clearResult();
        $('#click-result-text').append(`
        <h2>Try Again!</h2>
        `);
    }
}

function clearResult(){
    $('#click-result-text').empty();
}


