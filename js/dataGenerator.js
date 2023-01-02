function typeCheck(){
    const number = document.getElementById('number').value;
    if(number < 1) return alert(`Input value cannot be less than 1\nUser Input Value: ${number}`);
    return number;
}

function dataGenerator(type) {
    const select = document.getElementById('create').value;
    if(Number(select) < 1) return false;
    const num = typeCheck();

    switch(select) {
        case '1':
            createNames(num);
            break;
        default:
            return false;
            break;
    }

}

function createNames(number) {
    const firstNames = ['김', '이', '박', '최', '조'];
    const lastNames = ['민준',  '서연', '서준', '서윤', '도윤', '지우', '예준', '서현'];
    let fullNameList = '';
    for(let i=0; i<number; i++) {
        let firstNum = number >= firstNames.length ? Math.floor(Math.random() * firstNames.length) : Math.floor(Math.random() * number);
        let lasttNum = number >= firstNames.length ? Math.floor(Math.random() * lastNames.length) : Math.floor(Math.random() * number);
        console.log(`firstNum: ${firstNum}`);
        console.log(`lasttNum: ${lasttNum}`);
        fullNameList += firstNames[firstNum] + lastNames[lasttNum] + '<br>';
    }
    const result = document.getElementById('result');
    result.innerHTML = fullNameList;
}

document.addEventListener('change', dataGenerator);