# Functional JavaScript
The below functions are commonly used to form React components. This is a small intro into them.
Note that all of the below methods are part of the array prototype. Any type of value (strings, numbers, objects, arrays) can make up the contents of the array on which these methods are executed.
## map
This method returns a *new array* by calling the provided callback function against all of the elements of the array. The callback has 3 arguments:
- the current value
- the index of the current value
- the original array
The map method does not mutate the original array.
In React, we often use the first two arguments in this callback to map an array in a component.
```js
const todos = ['todo 1', 'todo 2', 'todo 3'];
const App = () => {
  return (
    <ul>
      {todos.map((todo, i) => ( // notice we use the first and second argument
        <li key={`todo-${i}`}>{todo}</li> // we implicitly return the list item
      ))}
    </ul>
  );
}
```

The above component will produce an unordered list with our `todos` array as the list items.

## filter
Similar to the map method, the `filter`, method returns a *new array*. As the name implies, it's used to filter out values. The function provide has the same 3 arguments as the above map method. The filter method does not mutate the original array. The filter method returns an array with the elements that return `true` from the callback.
In React, we often use this method. Here is an example.
```js
const todos = [
  { name: 'todo 1', status: 'done' },
  { name: 'todo 2', status: 'in progress' },
  { name: 'todo 3', status: 'not started' },
  { name: 'todo 4', status: 'in progress' },
  { name: 'todo 5', status: 'done' },
];
const DoneTodos = () => {
  return (
    <div>
      <h1>Below are our done todos</h1>
      <ul>
        {todos.filter((todo) => (todo.status === 'done')).map((todo, i) => (
          <li key={`done-${i}`}>
            {todo.name}
          </li>
        ))}
    </div>
  );
}
```
# ES6
## Arrow Functions
In ES6, we have the option of writing functions using a shorter syntax called arrow functions. The following are equivelent:
```js
function func1(param1) {
  return param1;
}
const func12 = (param1) => {
  return param1;
}
const func3 = (param1) => param1 // note here we can implicitly return null
const func4 = param1 => param1 // since there is only 1 parameter in the function the parethensis can be dropped
```
Unlike regular functions, arrow functions do not bind `this`. With regular functions, a new `this` object was created with every new function. This proved to be annoying in object oriented programming.
```js
const START_TIME = 300;
const brokenCar = {
  startSound: 'voom',
  start() {
    window.setTimeout(function() {
      // this is undefined in strict mode or the global object (window in the case of the browswer) in non-strict mode
      console.log(this.startSound) 
    }, START_TIME);
  }
};

const workingCar = {
  startSound: 'voom',
  start() {
    window.setTimeout(() => {
      // this now refers to the working car since the arrow function does not bind this
      console.log(this.startSound) 
    }, START_TIME);
  }
};
```
## Classes
`class` was introduced in ES6. It's important to note, however; that this is not a true class (like in Java or C#). Instead classes are simply syntax sugar to create special functions that provide a simplier approach to objects and inheritance. 
Look at the following example:
```js
class Car {
  constructor(props) {
    this.model = props.model;
    this.color = props.color;
  }
  details() {
    console.log(`A ${this.color} ${this.model}`);
  }
}
class Toyota extends Car {
  constructor(props) {
    super(props);
    this.model = 'Toyota';
  }
}

const car1 = new Toyota({ color: 'red' });
car1.details(); // logs: A red Toyota
```
Nice that we have a Car class and Toyota extends this class. By calling `super()` in the constructor, it calls the constructor of the base class `Car`. The constructor of `Toyota` is called with every new instance of the class. Using babel, we can see that these are infact just functions. In fact the constructor of each class isn't special at all, it's just a regular function.

```js
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
  function Car(props) {
    _classCallCheck(this, Car);

    this.model = props.model;
    this.color = props.color;
  }

  _createClass(Car, [{
    key: 'details',
    value: function details() {
      console.log('A ' + this.color + ' ' + this.model);
    }
  }]);

  return Car;
}();

var Toyota = function (_Car) {
  _inherits(Toyota, _Car);

  function Toyota(props) {
    _classCallCheck(this, Toyota);

    var _this = _possibleConstructorReturn(this, (Toyota.__proto__ || Object.getPrototypeOf(Toyota)).call(this, props));

    _this.model = 'Toyota';
    return _this;
  }

  return Toyota;
}(Car);

var car1 = new Toyota({ color: 'red' });
car1.details();
```

You can also see why classes were introduced. Classes can be difficult to implement in ES5 and readability is even worse. in ES6, classes are easy to implement and read. Classes have become the defacto way to write components in React that require life-cycle methods. We'll go over these shortly.

# React
The following is supplementary notes to the slideshow presented in class.
React is a component based view library (not a *framework*) used to build dynamic, fast user interfaces.
A great way to get started with React is using Create React App. The only requirement is Node v4 or above.

## Slide 8 notes:
- A capital letter A for app signifies that we are using a dev created component which must be in scope in order to successfully render.
- index.js is actually referenced in our index.html in our public folder. Notice in our public/index.html that there is a div with an id of root. App is in scope in this file because we import it from App.js.
- Other notes: JSX is *NOT* HTML. It's JavaScript. We can actually write React components without JSX although this becomes unreadable very quickly. Look at the following two examples from the React docs which are equivilant. When compiled with webpack or any other build tool, the build tool will transpile the with JSX example to the without JSX example below. Notice that everything is just JavaScript which means React is nothing but JavaScript.
```js
// with JSX
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, mountNode);
// without JSX
class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), mountNode);
```
## Slide 9 Notes:
- React must be in scope in order to use JSX
- React components can be written in several ways. Let's look at the following:
```js
import React from 'react';
// ES5
const App = React.createClass({
  getInitialState() {
    return {
      count: 0
    };
  }, // notice the comma
  increment() {
    this.setState({ count: this.state.count + 1 });
  },
  render() {
    return (
      <button onClick={this.increment}>
        {this.state.count}
      </button>
    );
  }
});
// ES6
class App extends React.Component {
  constructor(props, context) { // notice the constructor
    super(props, context);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this); // notice we need to bind this
  }; // notice no comma; semicolon instead

  increment() {
    this.setState({ count: this.state.count : 1 })
  };

  render() {
    return (
      <button onClick={this.increment}>
        {this.state.count}
      </button>
    );
  };
}
// React with Babel
class App extends React.Component {
  state = { // state is directly on the class
    count: 0
  };

  increment = () => { // property initializer; implicitly binds this
    this.setState({ count: this.state.count : 1 })
  }

  render() {
    return (
      <button onClick={this.increment}>
        {this.state.count}
      </button>
    );
  }
}

// Pure functional component - With arrow function
const App = () => (
  <h1>I am pure</h1>
);
// Pure functional component - without arrow function
function App() {
  return (
    <h1>I am also pure</h1>
  );
}
```
## Slide 10 Notes:
- Remember JSX is not HTML
- React can currently on return one child. This is changing with React Fiber (you'll be able to render an array of children).
- Hard coded data does not have to sit inside the class (this is simply a matter of preference). All it has to do is be in scope.
- {} anything inside these brackets just indicates to React that I want to escape JSX so that I can use regular JavaScript.
## Slide 13 Notes:
- Remember, that key is required when looping over an array. The slide mistakenly leaves out the key.

## Slide 13 Notes
- Remember that a key property is required when you map over an array. 
- What makes a good key?
  * A key tells react which elements in a list have been updated, removed or added. So the best keys are going to be unique keys. Use array indexes only as a last resort and try to make them unique even if you are doing so. Here are some examples:
```
// bad
list.map((item, i) => <Item key={i} />

// better
list.map((item, i) => <Item key={`mylist-${i}`} />

// best
list.map(item => <Item key={item.id} />
```
## Slide 14 Notes
- Thinking in React requires you to think of component not pages of your application. A component is a small piece of your application. One of the benefits of React is that these pieces are reusable throughout your application. The more experienced you become with React the more you'll consider reusability in your components.
## Slide 15 Notes
- Components accept two arguments - props and context.
  * `props` is the properties of the components passed by it's parent. This is the first argument of a component.
  * `context` is implicitly passed be either it's parent or on a higher level. The vast majority of application do not need context. It's API is still considered experimental and likely to change. It can often lead to confusion in an applications since it's not immediately clear how context is passed.
- You can pass props like follows:
  ```js
  const onClickHandler = () => {
    console.log('Button Pressed');
  }
  // without ES6 destructuring 
  const Button = (props) => {
    console.log(props); // an object with the keys color, onPress, label
    return (
      <button onClick={props.onPress} style={{ color: props.color }}>
        {props.label}
      </button>
    );
  }
  // without ES6 spread operator
  const App = () => (
    <Button color="blue" onPress={onClickHandler} label="My Button" />
  );
  // with ES6 destructuring
  const Button = ({ color, onPress, label }) => {
    // notice since the key and value are the same we can use es6 object literal
    // { color } === { color: color }
    return (
      <button onClick={onPress} style={{ color }}>
        {label}
      </button>
    );
  }
  // with ES6 spread operator
  const buttonProps = {
    color: 'blue',
    onPress: onClickHandler,
    label: 'My Button'
  };
  const App = () => (
    <Button {...props} />
  );
  ```
- ES6 Destructuring allows you to assign variables based on the keys of an object or array
```js
const person = { name: 'Joe', age: 27, weight: 170 };
// using destructuring we can create variables name, age, weight based on the keys of the person object
const { name, age, weight } = person
// notice that we can also destructor in the parameters of a function (like we do with React)
function logDetails({ name, age, weight }) {
  console.log(name, age, weight);
}
logDetails(person);
```
## Slide 18
- Notice we can also use destructuring on the import statement
## Slide 19 & 20 & 21
- `this.setState()` is used to change state in a React Component. The setState function can accept either a function or object as the first parameter and a callback function as it's second parameter. When using a function as the first parameter, the function has 2 parameter state and props. You're expected to return an object representing the new state. Setting state will trigger the component to re-render unless specific logic is placed in `shouldComponentUpdate` to prevent an update. The callback function runs after the re-render happens (which means it reflects the new state of the component). In general, logic in the callback should be placed in `componentDidUpdate`. setState will merge the current state with the new state passed into the function.
```js
// setting state with an object
this.setState({ count: this.state.count + 1 });
// setting state with an function
this.setState((prevState, props) => {
  return { count: prevState.count + 1 };
});
```
- React will try to avoid re-renders so setting state so it's important to note that the only way to guarantee that that state is set based on the previous state is to use a function as the first parameter. Observe the following example:
```js
handleClick = () => {
  // initial count = 0
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })
  // new state is count: 1 despite calling setState twice
}
handleClick = () => {
  // initial count = 0
  this.setState((prevState) => ({ count: prevState.count + 1 }))
  this.setState((prevState) => ({ count: prevState.count + 1 }))
  // new state is count: 2 as expected
}
```
## Slide 24
- react-router also provides a `Switch` component. The `Switch` component will render exactly one route based on the URL path. Without `Switch`, the `Route` component will render all routes that match the current path. This is by design in order to render content like side bars. In general, if you are going to another page, use the `Switch` component.
## Slide 25
- react-router now provides `NavLink` which is a special version of `Link` that can add styling to your Link based on the current path of your application.
# Redux
Honestly the redux docs are so good that restating information from the docs would be pointless. Check out the redux docs at http://redux.js.org/
