var conf = {
  name: "pollseed",
  age: 34,
  job: "programmer",
  birth: "tokyo",
  mariage: true
};

var User = function(conf) {
  if (conf) {
    this.name = conf.name;
    this.age = conf.age;
    this.job = conf.job;
    this.birth = conf.birth;
    this.mariage = conf.mariage;
  }
}.
  method('getName', function() {
    return this.name;
  }).
  method('getAge', function() {
    return this.age;
  }).
  method('getJob', function() {
    return this.job;
  }).
  method('getBirth', function() {
    return this.birth;
  }).
  method('getMariage', function() {
    return this.mariage;
  }).
  method('setName', function(name) {
    this.name = name;
    return this;
  }).
  method('setAge', function(age) {
    this.age = age;
    return this;
  }).
  method('setJob', function(job) {
    this.job = job;
    return this;
  }).
  method('setMariage', function(mariage) {
    this.mariage;
    return this;
  });
  
