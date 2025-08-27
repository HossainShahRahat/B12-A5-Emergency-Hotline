### **Q1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

* **`getElementById`**: Gets one element by its unique ID.
* **`getElementsByClassName`**: Gets a live list of elements by a shared class name.
* **`querySelector`**: Gets the first element matching a CSS selector.
* **`querySelectorAll`**: Gets a static list of all elements matching a CSS selector.

***

### **Q2. How do you create and insert a new element into the DOM?**

1.  Create the element with `document.createElement('tag')`.
2.  Add it to a parent with `parentElement.appendChild(newElement)`.

***

### **Q3. What is Event Bubbling and how does it work?**

It's when an event on an element also triggers on its parent, then its parent's parent, and so on, up the DOM tree.

***

### **Q4. What is Event Delegation in JavaScript? Why is it useful?**

It's placing a single event listener on a parent element to manage events on all its children. It's useful because it's efficient and works for elements added later.

***

### **Q5. What is the difference between preventDefault() and stopPropagation() methods?**

* **`preventDefault()`**: Stops the browser's default action (like a link opening).
* **`stopPropagation()`**: Stops an event from bubbling up to parent elements.