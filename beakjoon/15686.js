const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m, min;
let i = 1;
const houses = [];
const chikinJoint = [];
const selectedChikinJoint = [];


rl.on('line', function (line) {
    if(n) {
        line.split(' ').forEach((el, j) =>{
            let place = Number(el);
            addPlace(place, i, j+1);
        })
        i++;
    } else {
        [n, m] = line.split(' ').map(a=>Number(a));
    }
}).on('close', function () {
    solution();
    console.log(min);

    process.exit();
});


function addPlace(place, i, j) {
    switch(place) {
        case 1:
            houses.push([i, j]);
            break;
        case 2:
            chikinJoint.push([i, j]);
            break;
        default:
            break;
    }
}

function solution() {
    let tmp = 0;

    if(selectedChikinJoint.length === m) {
        houses.forEach(([x, y]) => {
            tmp += getMinValue(x, y);
        });

        if(!min || tmp<min) {
            min = tmp;
        }
    }

    for(let i=0; i<chikinJoint.length; i++) {
        let length = selectedChikinJoint.length;
        if(!selectedChikinJoint.includes(i)
            && (length === 0 || selectedChikinJoint[length-1] <i)) {
            selectedChikinJoint.push(i);
            solution();
            selectedChikinJoint.pop(i);
        }
    }
}

function getMinValue(x, y) {
    let res, tmp;

    selectedChikinJoint.forEach(j =>{
        tmp = getDestination(chikinJoint[j], [x, y]);
        if(!res || tmp<res) {
            res = tmp;
        }
    });

    return res;
}

function getDestination(p1, p2) {
    return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
}

