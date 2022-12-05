import './calculatorButton.scss';

const CalculatorButton = ({ eachButton, buttonColor, keyContent, handleAction }) => {

    return (
        <button className={`key ${eachButton} ${buttonColor} `}
            onClick={handleAction}
            tabIndex={0}
        >
            {keyContent}
        </button>
    )
}

export default CalculatorButton;
