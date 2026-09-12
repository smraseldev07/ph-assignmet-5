1 . My project name - ph-assignment-5
2. my project is react project . a functional website where we can select technology and also remove it.
3. in this project i use vite , typescript .
4. in this project we can select technology , then add to your stack section and also remove it.

i. JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript code

ii.Props (Properties): Read-only data passed from a parent component down to a child component. They are immutable from the perspective of the receiving child, meaning the child cannot modify them directly. State: An internal, mutable data store managed within the component itself. When a component's state updates via its setter function, React automatically triggers a re-render of that component and its children.

iv .  useState is a React Hook that lets you add local, reactive state variables to functional components. It returns an array with two elements: the current state value and a updater function to modify it and trigger a re-render. i used on technology card button.

v . useEffect allows you to execute side effects in functional components—such as fetching data, modifying the DOM manually, or setting up timers and subscriptions. i used it too recive promise and show it

vi . React uses the key prop to identify which items in a dynamic list have changed, been added, or been removed during its virtual DOM reconciliation (diffing) process.

A unique, stable key helps React:

Avoid re-rendering the entire list when only a single item changes.

Maintain internal component state (like inputs or animations) on the correct elements when items are sorted, added, or deleted.

vi . Conditional rendering is the practice of rendering different UI elements or components based on specific conditions or state values, using JavaScript operators like && or ternary operators (? :).

Example displaying an empty stack message when the array length is 0:

vii .Data is passed downward as props directly on the child component tag . React uses a callback pattern. The parent passes a callback function down to the child via props. When an event occurs inside the child (such as a click or form submission), the child invokes that function and passes data back up as arguments
