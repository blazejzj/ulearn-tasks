export default function Alert({
    strValue,
    handleButtonClick,
    handleInputChange,
}) {
    return (
        <div>
            <button onClick={handleButtonClick}>Click Me!</button>
            <input type="text" onChange={handleInputChange} value={strValue} />
        </div>
    );
}
