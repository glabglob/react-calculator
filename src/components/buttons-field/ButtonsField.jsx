import { useKeyPress } from '../hooks/useKeyPress';
import CalculatorButton from '../calculator-button/CalculatorButton';

import './ButtonsField.scss';

const ButtonsField = ({ addDigit, addOperator, clearDisplay, addPoint, calculateResult, clearLastInputValue, addPercent }) => {

    return (
        <div className="buttons__field">
            <div className="left__side">
                <CalculatorButton eachButton={useKeyPress('Delete', 'key__c') ? 'key__c active' : 'key__c'}
                    buttonColor={'key__dark'}
                    keyContent={'C'}
                    handleAction={() => clearDisplay()}
                />
                <CalculatorButton eachButton={useKeyPress('Backspace', 'key__ce') ? 'key__ce active' : 'key__ce'}
                    buttonColor={'key__dark'}
                    keyContent={'CE'}
                    handleAction={() => clearLastInputValue()}
                />
                <CalculatorButton eachButton={useKeyPress('%', 'key__persent') ? 'key__persent active' : 'key__persent'}
                    buttonColor={'key__dark'}
                    keyContent={'%'}
                    handleAction={() => addPercent()}
                />
            </div>
            <div className="center__side">
                <CalculatorButton eachButton={useKeyPress('7', 'key__7') ? 'key__7 active' : 'key__7'}
                    keyContent={'7'}
                    handleAction={() => addDigit(7)} />
                <CalculatorButton eachButton={useKeyPress('8', 'key__8') ? 'key__8 active' : 'key__8'}
                    keyContent={'8'}
                    handleAction={() => addDigit(8)} />
                <CalculatorButton eachButton={useKeyPress('9', 'key__9') ? 'key__9 active' : 'key__9'}
                    keyContent={'9'}
                    handleAction={() => addDigit(9)} />
                <CalculatorButton eachButton={useKeyPress('4', 'key__4') ? 'key__4 active' : 'key__4'}
                    keyContent={'4'}
                    handleAction={() => addDigit(4)} />
                <CalculatorButton eachButton={useKeyPress('5', 'key__5') ? 'key__5 active' : 'key__5'}
                    keyContent={'5'}
                    handleAction={() => addDigit(5)} />
                <CalculatorButton eachButton={useKeyPress('6', 'key__6') ? 'key__6 active' : 'key__6'}
                    keyContent={'6'}
                    handleAction={() => addDigit(6)} />
                <CalculatorButton eachButton={useKeyPress('1', 'key__1') ? 'key__1 active' : 'key__1'}
                    keyContent={'1'}
                    handleAction={() => addDigit(1)} />
                <CalculatorButton eachButton={useKeyPress('2', 'key__2') ? 'key__2 active' : 'key__2'}
                    keyContent={'2'}
                    handleAction={() => addDigit(2)} />
                <CalculatorButton eachButton={useKeyPress('3', 'key__3') ? 'key__3 active' : 'key__3'}
                    keyContent={'3'}
                    handleAction={() => addDigit(3)} />
                <CalculatorButton eachButton={useKeyPress('0', 'key__0') ? 'key__0 active' : 'key__0'}
                    keyContent={'0'}
                    handleAction={() => addDigit(0)} />
                <CalculatorButton eachButton={useKeyPress('.', 'key__point') ? 'key__point active' : 'key__point'}
                    buttonColor={'key__yellow'}
                    keyContent={'.'}
                    handleAction={() => addPoint()} />
            </div>
            <div className="right__side">
                <CalculatorButton eachButton={useKeyPress('/', 'key__divide') ? 'key__divide active' : 'key__divide'}
                    buttonColor={'key__dark'}
                    keyContent={'÷'}
                    handleAction={() => addOperator('÷')} />
                <CalculatorButton eachButton={useKeyPress('*', 'key__multiply') ? 'key__multiply active' : 'key__multiply'}
                    buttonColor={'key__dark'}
                    keyContent={'x'}
                    handleAction={() => addOperator('x')} />
                <CalculatorButton eachButton={useKeyPress('-', 'key__minus') ? 'key__minus active' : 'key__minus'}
                    buttonColor={'key__dark'}
                    keyContent={'-'}
                    handleAction={() => addOperator('-')} />
                <CalculatorButton eachButton={useKeyPress('Enter', 'key__equals') ? 'key__equals active' : 'key__equals'}
                    buttonColor={'key__yellow'}
                    keyContent={'='}
                    handleAction={() => calculateResult()} />
                <CalculatorButton eachButton={useKeyPress('+', 'key__plus') ? 'key__plus active' : 'key__plus'}
                    buttonColor={'key__dark'}
                    keyContent={'+'}
                    handleAction={() => addOperator('+')} />
            </div>
        </div>
    )
}

export default ButtonsField;

