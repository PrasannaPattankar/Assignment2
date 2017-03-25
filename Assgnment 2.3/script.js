var User = (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "userDetail", {
        get: function () {
            if (!this._validUser) {
                return "User entered is not valid";
            }
            if (this._validUser === "Sachin") {
                return "The user name is " + this._userName + " and is a valid user";
            }
        },
        set: function (name) {
            this._userName = name;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.checkTheuserValid = function (validCode) {
        if (validCode === 6621) {
            this._validUser = this._userName;
        }
    };
    return User;
}());
var user = new User();
user.userDetail = "Sachin";
user.checkTheuserValid(6621);
alert(user.userDetail);
