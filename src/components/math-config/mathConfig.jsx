import { create, all } from 'mathjs';

export const config = {
    number: 'BigNumber',
    notation: 'fixed',
    precision: 16
};

export const math = create(all, config);

export const limitedEvaluate = math.evaluate;

export const formatOptions = {
    notation: config.notation,
    precision: config.precision
}
math.import({
    'import': function () { throw new Error('Function import is disabled') },
    'createUnit': function () { throw new Error('Function createUnit is disabled') },
    'evaluate': function () { throw new Error('Function evaluate is disabled') },
    'parse': function () { throw new Error('Function parse is disabled') },
    'simplify': function () { throw new Error('Function simplify is disabled') },
    'derivative': function () { throw new Error('Function derivative is disabled') }
}, { override: true });