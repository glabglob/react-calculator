import CalculatorButton from '../calculator-button/CalculatorButton'

import './ButtonsField.scss';

const ButtonsField = () => {

    return (
        <div className="buttons__field">
            <div className="left__side">
                <CalculatorButton eachButton={'key__c'}
                    buttonColor={'key__dark'}
                    keyContent={'C'}
                />
                <CalculatorButton eachButton={'key__ce'}
                    buttonColor={'key__dark'}
                    keyContent={'CE'}
                />
                <CalculatorButton eachButton={'key__persent'}
                    buttonColor={'key__dark'}
                    keyContent={'%'}
                />
            </div>
            <div className="center__side">
                <CalculatorButton eachButton={'key__7'}
                    keyContent={'7'}
                />
                <CalculatorButton eachButton={'key__8'}
                    keyContent={'8'}
                />
                <CalculatorButton eachButton={'key__9'}
                    keyContent={'9'}
                />
                <CalculatorButton eachButton={'key__4'}
                    keyContent={'4'}
                />
                <CalculatorButton eachButton={'key__5'}
                    keyContent={'5'}
                />
                <CalculatorButton eachButton={'key__6'}
                    keyContent={'6'}
                />
                <CalculatorButton eachButton={'key__1'}
                    keyContent={'1'}
                />
                <CalculatorButton eachButton={'key__2'}
                    keyContent={'2'}
                />
                <CalculatorButton eachButton={'key__3'}
                    keyContent={'3'}
                />
                <CalculatorButton eachButton={'key__0'}
                    keyContent={'0'}
                />
                <CalculatorButton eachButton={'key__point'}
                    buttonColor={'key__yellow'}
                    keyContent={'.'}
                />
            </div>
            <div className="right__side">
                <CalculatorButton eachButton={'key__divide'}
                    buttonColor={'key__dark'}
                    keyContent={'÷'}
                />
                <CalculatorButton eachButton={'key__multiply'}
                    buttonColor={'key__dark'}
                    keyContent={'x'}
                />
                <CalculatorButton eachButton={'key__minus'}
                    buttonColor={'key__dark'}
                    keyContent={'-'}
                />
                <CalculatorButton eachButton={'key__equals'}
                    buttonColor={'key__yellow'}
                    keyContent={'='}
                />
                <CalculatorButton eachButton={'key__plus'}
                    buttonColor={'key__dark'}
                    keyContent={'+'}
                />
            </div>
        </div>
    )
}

export default ButtonsField;

