function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj 
  // tu codigo aqui
}
console.log(addFullNameProperty({firstName : "Jose", lastName : "Carlos"}))