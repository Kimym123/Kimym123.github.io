class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say(){
    return `${this.name} : Hello`
  }
  static enrollStudents() {
    return 'Enrolling students'
  }
}

console.log(Student.enrollStudents());