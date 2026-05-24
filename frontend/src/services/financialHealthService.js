import { calculateFinancialHealthScore } from "../utils/financialHealthScore";

let cachedScore = null;
let cachedInput = null;

export const computeFinancialHealth = (input) => {
    const result = calculateFinancialHealthScore(input);

    cachedScore = result;
    cachedInput = input;

    return result;
};

export const getFinancialHealth = () => cachedScore;

export const getFinancialInput = () => cachedInput;