Tasks

DONE

// 1. Basic Component Create a component called MyComponent in the components folder and use it to render
My First Component
Use MyComponent in App.js

DONE

// 2. Basic Prop Add a "title" prop on MyComponent. Use it so that MyComponent render
It Works

DONE

// 3. Passing props to a child component Create a Title component in the components folder. It should take one prop named title. Replace the in MyComponent with the component. It should still render "It Works" in the browser. Remember to pass the prop from MyComponent to Title.

DONE

// 4. Children prop Create a Wrapper component in the components folder Return
from this component Use this in App.js Make it possible to render children between the component. Use (props.children) in the component.

Ex. </Wrapper> should render the content of

DONE

// 5. Styling Add (className='flex') to the
in to flex the items on . Add necessary styling in the styles.scss

DONE

// 6. Lists Create an array const food = ['Pizza', 'Hamburger', 'Coke']; Render this list inside App.js. Use and food.map() Remember to add a key to
. All of this should be inside the return ().

DONE

// 7. Lists Component Create a Food component in the components folder. Replace the list create above with this component. The browser should still render the list. Remember to add "food"-prop to the component and send the food array as prop.

DONE

// 8. Event Add a to App.js Listen to click-event on this button. console.log("Clicked") when clicking the button.

DONE

// 9. Input Add an input field to App.js Listen to change-event on this field console.log("change") when writing in this input.

DONE

// 10. Make the input field controlled (state) Use useState to store the input value. And add the value={state} to the input field to make it (controlled).

DONE

// 11. Combine the button and input When clicking the button above alert (or console.log) the content of the inputfield.

DONE

// 12. Refactor (move) button and input Create an Alert component in the components folder Use this in App.js Move the ,
and state from above to this component

DONE

// 13. Callback (lift state) (sending a functions as a prop)

Add const [inputValue, setInputValue] = useState('') in App.js. Add

{inputValue}
to App.js

Send setInputValue function as a prop to from App.js.

By using this prop you should be able to update the value of inputValue in App.js, when we are writing in the inside . You can now remove the internal in .

DONE

// Optional but very important
// 14. Multiple states (condition)

Only show the content of inputValue when the button inside is clicked.

When clicking the button in the value of inputValue should be what is written in the inside the .

To do this you must have state (isClicked) in App.js that is updated when the button is clicked (true / false). The function that we use to update this state must be sent to so we can update / read its value.

Use conditional around the

{inputValue}
to only write out the message when the button is clicked. Remove the value if we click the button another time.
