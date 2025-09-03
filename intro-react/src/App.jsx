import { useState } from "react";
import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";
import Alert from "./components/Alert";

function App() {
    const food = ["Pizza", "Hamburger", "Coke"];
    const [strValue, setStrValue] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
        console.log(strValue);
    };

    const handleInputChange = (e) => {
        setStrValue(e.target.value);
    };

    return (
        <>
            <Wrapper className="flex">
                <MyComponent title="It works!" />
                <MyComponent title="Another one" />
            </Wrapper>
            <ul className="flex">
                {food.map((f) => (
                    <Food name={f} key={f} />
                ))}
            </ul>
            <Alert
                strValue={strValue}
                handleButtonClick={handleButtonClick}
                handleInputChange={handleInputChange}
            />
            {isClicked && <p>{strValue}</p>}
        </>
    );
}

export default App;
