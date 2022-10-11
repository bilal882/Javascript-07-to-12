function Math() {
    var userValue = +prompt("Enter a number")

    console.log(userValue);

    if (userValue == 0) {
        alert("Please enter a number")
    } else {
        alert(userValue)
    }
}

Math()


function concatinate() {
    let thanks = "Thanks";
    let you = "You";

    console.log(thanks + you)
}

concatinate()