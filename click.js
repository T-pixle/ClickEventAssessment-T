const button = document.querySelector("button");
const main = document.querySelector("main");

// Foo Button
Foo.addEventListener("click", function(event) {
    console.log(event.target.value);  
    const Tag = document.createElement("h3");
    Tag.textContent = "Foo";
    main.appendChild(Tag); 
})

// Bar Button
Bar.addEventListener("click", function(event) {
    console.log(event.target.value);  
    const Tag = document.createElement("h3");
    Tag.textContent = "Bar";
    main.appendChild(Tag); 
})

// FooBar Button
FooBar.addEventListener("click", function(event) {
    console.log(event.target.value);  
    const Tag = document.createElement("h2");
    Tag.textContent = "FooBar";
    main.appendChild(Tag); 
})
