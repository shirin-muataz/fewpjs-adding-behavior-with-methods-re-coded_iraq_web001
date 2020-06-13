// Your code here
class Cat{
  constructor (name,sex){
    this.name=name;
    this.sex=sex;
  }
}

class Dog{
  constructor (name,sex){
    this.name=name;
    this.sex=sex;
  }
  function speak()
  {
    return `${this.name} says woof!`;
  }
}

class Bird{
  constructor (name,sex){
    this.name=name;
    this.sex=sex;
  }
}