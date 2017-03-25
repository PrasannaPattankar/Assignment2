var FavStudent = (function () {
    function FavStudent(studName, standard) {
        this._studentName = studName;
        this._standard = standard;
    }
    FavStudent.prototype.getStudentName = function () {
        return "student name is " + this._studentName + " and he is student of " + this._standard + " th std";
    };
    return FavStudent;
}());
var studenName = new FavStudent("Sachin", 8);
alert(studenName.getStudentName());
