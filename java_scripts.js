document.addEventListener('DOMContentLoaded', function() {
    var expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var nestedList = this.nextElementSibling;
            var isActive = nestedList.style.display === 'block';
            nestedList.style.display = isActive ? 'none' : 'block';
            this.classList.toggle('active', !isActive);
        });
    });

    // Display the first topic by default
    showContent('inheritance');
});

function showContent(topic) {
    const content = {
        inheritance: generateQuestionsHTML('inheritanceQuestions'),
        abstraction: generateQuestionsHTML('abstractionQuestions')
        // Add more topics here
    };

    document.getElementById('main-content').innerHTML = content[topic];

    // Attach event listeners for collapsing/expanding answers
    var questionButtons = document.querySelectorAll('.question-btn');

    questionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            var isActive = answer.style.display === 'block';
            answer.style.display = isActive ? 'none' : 'block';
            this.classList.toggle('active', !isActive);
        });
    });

    // Reinitialize Highlight.js after content update
    hljs.highlightAll();
}

function generateQuestionsHTML(topic) {
    if (topic === 'inheritanceQuestions') {
        return `
            <h2>Inheritance Questions</h2>
            <ul class="questions-list">
                ${inheritanceQuestions.map((q, index) => `
                    <li>
                        <div class="question-btn">${index + 1}. ${q.question}</div>
                        <div class="answer">${q.answer}</div>
                    </li>
                `).join('')}
            </ul>
        `;
    } else if (topic === 'abstractionQuestions') {
        return `
            <h2>Abstraction Questions</h2>
            <ul class="questions-list">
                ${abstractionQuestions.map((q, index) => `
                    <li>
                        <div class="question-btn">${index + 1}. ${q.question}</div>
                        <div class="answer">${q.answer}</div>
                    </li>
                `).join('')}
            </ul>
        `;
    }
    // Add more topics as needed
}

const inheritanceQuestions = [
    { question: "What is inheritance in Java?", answer: "Inheritance is a mechanism in Java by which one class can inherit fields and methods from another class. It allows for hierarchical classification." },
    { question: "Why is inheritance important in OOP?", answer: "Inheritance promotes code reuse and establishes a natural hierarchy between classes. It also allows for the polymorphic behavior of objects." },
    { question: "Can a class extend multiple classes in Java?", answer: "No, Java does not support multiple inheritance with classes. However, a class can implement multiple interfaces." },
    { question: "What is the difference between superclass and subclass?", answer: "A superclass is the class from which other classes inherit, while a subclass is a class that inherits from a superclass." },
    { question: "What is method overriding in Java?", answer: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass." },
    { question: "What is the use of the 'super' keyword in Java?", answer: "The 'super' keyword is used to refer to the immediate parent class object. It can be used to call superclass methods or constructors." },
    { question: "Can constructors be inherited?", answer: "No, constructors are not inherited in Java, but a subclass can call the constructor of the superclass using 'super()'." },
    { question: "What are the types of inheritance in Java?", answer: "Java supports single, multilevel, and hierarchical inheritance. It does not support multiple inheritance with classes." },
    { question: "What is a final class?", answer: "A final class is a class that cannot be extended. No other class can inherit from a final class." },
    { question: "Can you override a final method?", answer: "No, a final method cannot be overridden in a subclass. It is a method that cannot be modified once it is declared as final." },
    { question: "What is the significance of protected access modifier?", answer: "The protected access modifier allows access to class members within the same package and by subclasses even if they are in different packages." },
    { question: "What is an abstract class?", answer: "An abstract class is a class that cannot be instantiated on its own and must be extended by other classes. It can contain abstract and concrete methods." },
    { question: "How do you implement inheritance in Java?", answer: "Inheritance is implemented using the 'extends' keyword. For example: class Subclass extends Superclass { }" }
];

const abstractionQuestions = [
    { question: "What is abstraction in Java?", answer: "Abstraction is the process of hiding the implementation details and showing only the functionality to the user." },
     {
        question: "How do you define and use an abstract class in Java? Provide a code example.",
        answer: `
            <p>In Java, an abstract class is defined using the <code>abstract</code> keyword. It can contain abstract methods (methods without a body) that must be implemented by subclasses. Here is an example:</p>
            <pre><code class="language-java">
abstract class Animal {
    // Abstract method (does not have a body)
    abstract void makeSound();
    
    // Regular method
    void sleep() {
        System.out.println("Zzz");
    }
}

class Dog extends Animal {
    // The body of makeSound() is provided here
    void makeSound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();
        myDog.makeSound();  // Outputs: Woof
        myDog.sleep();      // Outputs: Zzz
    }
}
            </code></pre>
            <p>In this example, the <code>Animal</code> class is abstract and defines an abstract method <code>makeSound()</code>. The <code>Dog</code> class extends <code>Animal</code> and provides an implementation for the <code>makeSound()</code> method. The <code>Main</code> class demonstrates creating an instance of <code>Dog</code> and calling both the abstract and regular methods.</p>
        `
    },
    { question: "What is an abstract method?", answer: "An abstract method is a method that is declared without an implementation. Subclasses are required to provide an implementation for abstract methods." },
    { question: "Can an abstract class have concrete methods?", answer: "Yes, an abstract class can have both abstract methods (without implementation) and concrete methods (with implementation)." },
    { question: "What is the difference between an interface and an abstract class?", answer: "An interface can only contain abstract methods and final fields, while an abstract class can have both abstract and concrete methods, as well as fields that are not final." },
    { question: "Why use interfaces?", answer: "Interfaces are used to achieve full abstraction and multiple inheritance in Java. They define a contract that the implementing classes must follow." },
    { question: "Can you instantiate an abstract class?", answer: "No, you cannot instantiate an abstract class directly. It must be subclassed, and the subclass must provide implementations for the abstract methods." },
    { question: "What is the use of the 'default' keyword in interfaces?", answer: "The 'default' keyword allows an interface to provide a default implementation for a method. Classes that implement the interface can use the default method as is or override it." },
    { question: "What is the significance of the 'abstract' keyword in Java?", answer: "The 'abstract' keyword is used to declare a class or method as abstract, indicating that the class cannot be instantiated and that the method must be implemented by subclasses." },
    { question: "Can an abstract class have a constructor?", answer: "Yes, an abstract class can have a constructor. It is used to initialize the fields of the abstract class when it is extended by a subclass." },
    { question: "Can you extend multiple abstract classes?", answer: "No, similar to normal classes, you cannot extend multiple abstract classes in Java. Java does not support multiple inheritance with classes." },
    { question: "What is the purpose of interfaces in Java?", answer: "Interfaces provide a way to achieve abstraction and multiple inheritance. They allow the definition of methods that must be implemented by any class that chooses to implement the interface." }
];
