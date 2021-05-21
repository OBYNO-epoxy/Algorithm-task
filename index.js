/*
my solution to task 4
*/

function convertFahrToCelsius(val) {
    if (typeof val === "string" || typeof val === "number") {
        var num = parseInt(val);
        //1F = 1.8C + 32 (e.g 0deg c =32deg f
        var answer = ((num - 32) / 1.8);
        var answerDec = answer.toFixed(4);
        return `'${answerDec}'`
    };

    if (Array.isArray(val)) { return `[${val}] is not a valid number but a/an arrray.` };
    if (typeof val === "object") {
        var value = JSON.stringify(val);
        return `${value} is not a valid number but a/an object.`
    }
}
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
console.log(convertFahrToCelsius(32));

/* qustion number 2
 */

function checkYuGiOh(n) {
    if (!parseInt(n) == true) {
        return `invalid parameter: ${JSON.string
        }`
    }
    let myArr = []
    for (let x = 1; x <= n; x++) {
        myArr.push(x)
    }

    //Replace 'yu', 'gi' or 'oh'
    for (let i = 1; i < myArr.length; i++) {
        if (myArr[i] % 2 == 0) {
            // divisble by 2 and 3
            if (myArr[i] % 3 == 0) {
                //by all
                if (myArr[i] % 5 == 0) {
                    myArr.splice(i, 1, 'yu-gi-oh')
                } else {
                    myArr.splice(i, 1, 'yu-gi')
                }

            }
            //by 2 and 5
            else if (myArr[i] % 5 == 0) {
                myArr.splice(i, 1, 'yu-oh')
            }
            //by 2
            else {
                myArr.splice(i, 1, 'yu')
            }
        } else if (myArr[i] % 3 == 0) {
            // by 3 and 5
            if (myArr[i] % 5 == 0) {
                myArr.splice(i, 1, 'gi')

            }
            //by 3 
            else {
                myArr.splice(i, 1, 'gi')
            }
        }
        //by 5
        else if (myArr[i] % 5 == 0) {
            myArr.splice(i, 1, 'oh')
        }
        // if not divisible by none
        else {
            continue
        }
    }
    return myArr
}
console.log(checkYuGiOh(10))
console.log(checkYuGiOh("fizzbuzz is meh"))