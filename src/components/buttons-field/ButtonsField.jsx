import CalculatorButton from '../calculator-button/CalculatorButton'

import './ButtonsField.scss';

const ButtonsField = ({ addDigit, addOperator, clearDisplay, addPoint, calculateResult, clearLastInputValue, addPercent }) => {

    return (
        <div className="buttons__field">
            <div className="left__side">
                <CalculatorButton eachButton={'key__c'}
                    buttonColor={'key__dark'}
                    keyContent={'C'}
                    handleacAction={() => clearDisplay()}
                />
                <CalculatorButton eachButton={'key__ce'}
                    buttonColor={'key__dark'}
                    keyContent={'CE'}
                    handleacAction={() => clearLastInputValue()}
                />
                <CalculatorButton eachButton={'key__persent'}
                    buttonColor={'key__dark'}
                    keyContent={'%'}
                    handleacAction={() => addPercent()}
                />
            </div>
            <div className="center__side">
                <CalculatorButton eachButton={'key__7'}
                    keyContent={'7'}
                    handleacAction={() => addDigit(7)}
                />
                <CalculatorButton eachButton={'key__8'}
                    keyContent={'8'}
                    handleacAction={() => addDigit(8)}
                />
                <CalculatorButton eachButton={'key__9'}
                    keyContent={'9'}
                    handleacAction={() => addDigit(9)}
                />
                <CalculatorButton eachButton={'key__4'}
                    keyContent={'4'}
                    handleacAction={() => addDigit(4)}
                />
                <CalculatorButton eachButton={'key__5'}
                    keyContent={'5'}
                    handleacAction={() => addDigit(5)}
                />
                <CalculatorButton eachButton={'key__6'}
                    keyContent={'6'}
                    handleacAction={() => addDigit(6)}
                />
                <CalculatorButton eachButton={'key__1'}
                    keyContent={'1'}
                    handleacAction={() => addDigit(1)}
                />
                <CalculatorButton eachButton={'key__2'}
                    keyContent={'2'}
                    handleacAction={() => addDigit(2)}
                />
                <CalculatorButton eachButton={'key__3'}
                    keyContent={'3'}
                    handleacAction={() => addDigit(3)}
                />
                <CalculatorButton eachButton={'key__0'}
                    keyContent={'0'}
                    handleacAction={() => addDigit(0)}
                />
                <CalculatorButton eachButton={'key__point'}
                    buttonColor={'key__yellow'}
                    keyContent={'.'}
                    handleacAction={() => addPoint()}
                />
            </div>
            <div className="right__side">
                <CalculatorButton eachButton={'key__divide'}
                    buttonColor={'key__dark'}
                    keyContent={'÷'}
                    handleacAction={() => addOperator('÷')}
                />
                <CalculatorButton eachButton={'key__multiply'}
                    buttonColor={'key__dark'}
                    keyContent={'x'}
                    handleacAction={() => addOperator('x')}
                />
                <CalculatorButton eachButton={'key__minus'}
                    buttonColor={'key__dark'}
                    keyContent={'-'}
                    handleacAction={() => addOperator('-')}
                />
                <CalculatorButton eachButton={'key__equals'}
                    buttonColor={'key__yellow'}
                    keyContent={'='}
                    handleacAction={() => calculateResult()}
                />
                <CalculatorButton eachButton={'key__plus'}
                    buttonColor={'key__dark'}
                    keyContent={'+'}
                    handleacAction={() => addOperator('+')}
                />
            </div>
        </div>
    )
}

export default ButtonsField;

