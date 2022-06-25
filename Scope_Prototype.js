var User = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.getFullInformation = function () {
    //     console.log(this.firstName, this.lastName);
    // }
}

User.prototype.showInformation = function() {
    console.log(this.firstName, this.lastName);
}

var Ajay = new User("Ajay", "Sharma");
Ajay.showInformation();