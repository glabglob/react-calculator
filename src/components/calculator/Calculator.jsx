import CalculatorDisplay from '../calculator-display/CalculatorDisplay';
import ButtonsField from '../buttons-field/ButtonsField';
import './calculator.scss';

const Calculator = () => {
    const displayValue = '0'
    return (
        <div className="main">
            <CalculatorDisplay displayValue={displayValue} />
            <ButtonsField />
        </div>
    )
}

export default Calculator;



