import { useState } from 'react';
import { math, limitedEvaluate, formatOptions } from '../math-config/mathConfig';
import { playAudio } from '../key-press-audio/keyPressAudio';

import CalculatorDisplay from '../calculator-display/CalculatorDisplay';
import ButtonsField from '../buttons-field/ButtonsField';

import './calculator.scss';

const Calculator = () => {

    const [displayValue, setDisplayValue] = useState('0');

    const addDigit = (digit) => {
        playAudio();

        setDisplayValue(displayValue => displayValue === '0' ? math.format(digit) : displayValue + math.format(digit));
    }

    const clearDisplay = () => {
        playAudio();

        setDisplayValue(displayValue => displayValue.length === 1 ? '' : displayValue = '');
    }
    const clearLastInputValue = () => {
        playAudio();

        setDisplayValue(displayValue => displayValue.length === 1 ? '' : displayValue.slice(0, -1));
    }

    const addOperator = (operator) => {
        playAudio();

        if (operator === '-') {
            setDisplayValue(displayValue => displayValue.substring(-1) === '.' ? displayValue : displayValue + operator);
        } else {
            // eslint-disable-next-line
            setDisplayValue(displayValue => /[\+\-x÷\.]$/.test(displayValue) ? displayValue : displayValue + operator);
        }
    }


    const addPoint = () => {
        playAudio();
        // eslint-disable-next-line
        if (/[\+\-x÷]$/.test(displayValue)) {
            return setDisplayValue(displayValue => displayValue + '0.');
            // eslint-disable-next-line
        } else if (/[\+\-x÷]/.test(displayValue.slice(displayValue.lastIndexOf('.')))) {
            return setDisplayValue(displayValue => displayValue + '.');
        } else if (displayValue.length < 1) {
            return setDisplayValue(displayValue => displayValue + '0.');
        } else if (displayValue.lastIndexOf('.') === -1) {
            return setDisplayValue(displayValue => displayValue + '.');
        } else {
            return;
        }
    }

    const addPercent = () => {
        playAudio();

        // eslint-disable-next-line
        if (/[\+\-x÷]$/.test(displayValue)) {
            return setDisplayValue(displayValue => displayValue + '0%');
        } else if (displayValue.lastIndexOf('%') === -1) {
            return setDisplayValue(displayValue => displayValue + '%');
            // eslint-disable-next-line
        } else if (/[\+\-x÷]/.test(displayValue.slice(displayValue.lastIndexOf('%')))) {
            return setDisplayValue(displayValue => displayValue + '%');
        } else {
            return;
        }
    }

    const calculateResult = () => {
        playAudio();

        let result;

        let convertOperators = displayValue.replace(/x/g, '*').replace(/÷/g, '/');

        if (displayValue.substring(-1) === '.') {
            return;
        }

        try {
            result = math.format(limitedEvaluate(convertOperators), formatOptions).replace(/\.0+$|0+$/, '');
        } catch (error) {
            return;
        }

        if (result === 'Infinity' || result === '-Infinity' || result === 'NaN') {
            return;
        } else {
            setDisplayValue(displayValue => displayValue = result);
        }
    }

    return (
        <div className="main">
            <CalculatorDisplay displayValue={displayValue} />
            <ButtonsField
                addDigit={addDigit}
                addOperator={addOperator}
                clearDisplay={clearDisplay}
                addPoint={addPoint}
                calculateResult={calculateResult}
                clearLastInputValue={clearLastInputValue}
                addPercent={addPercent}
            />
        </div>
    )
}

export default Calculator;



