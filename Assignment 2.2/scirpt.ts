class FavStudent {
  private _studentName: string;
  private _standard: number;

  constructor(studName: string, standard : number){
    this._studentName = studName;
    this._standard = standard;
  }

  getStudentName(): string {
    return `student name is ${this._studentName} and he is student of ${this._standard} th std`;
  }
}

let studenName = new FavStudent("Sachin", 8);
alert(studenName.getStudentName());

