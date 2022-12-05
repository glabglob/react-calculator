import { Textfit } from 'react-textfit';

import './calculatorDisplay.scss'

const CalculatorDisplay = ({ displayValue }) => {
    return (
        <div className="display__field">
            <Textfit className="display"
                mode="single"
                forceSingleModeWidth={false}
                max={60}
            >{displayValue}</Textfit>
        </div>
    );
}

export default CalculatorDisplay;

