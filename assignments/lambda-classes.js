// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today, we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }

    changeGrade(student) {
        let delta = Math.floor(Math.random() * 101);
        student.grade = (student.grade + delta) / 2;
        console.log(`${this.name} changed ${student.name}'s grade to ${student.grade}.`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }

    listSubjects() {
        this.favSubjects.forEach(console.log);
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }

    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} has graduate Lambda school with a grade of ${this.grade}.`);
        } else {
            console.log(`${this.name} does not have a high enough grade to graduate Lambda School.`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const instructor = new Instructor({
    "name": "Cam",
    "age": 30,
    "location": "Somewhere in Utah",
    "gender": "M",
    "specialty": "Teaching people how to become full stack web developers",
    "favLanguage": "Javascript",
    "catchPhrase": "I don't have a catchphrase."
});

const student = new Student({
    "name": "Christian",
    "age": 20,
    "location": "Plainville",
    "gender": "M",
    "previousBackground": "Computer Science",
    "className": "WEBPT5",
    "favSubjects": ["Javascript", "Responsive Design"],
    "grade": 90
});

const pm = new ProjectManager({
    "name": "Brandon",
    "age": 25,
    "location": "Somewhere in Louisiana",
    "gender": "M",
    "specialty": "Teaching people how to become full stack web developers",
    "favLanguage": "Python",
    "catchPhrase": "Wait, I can have a catchphrase?",
    "gradClassName": "WEBPT5",
    "favInstructor": "Cam"
});

instructor.speak();
instructor.demo("Javascript Arrays");
instructor.grade(student, "Javascript Arrays");

student.speak();
student.listSubjects();
student.PRAssignment("Javascript Arrays");
student.sprintChallenge("Javascript Arrays");

pm.speak();
pm.demo("Javascript Arrays");
pm.grade(student, "Javascript Arrays");
pm.standUp("webpt5_brandon");
pm.debugsCode(student, "Javascript Arrays");

instructor.changeGrade(student);
pm.changeGrade(student);
student.graduate();