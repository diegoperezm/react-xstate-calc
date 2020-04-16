/**
 * @description                    - Determine the result of the mathematical operations
 * @param   {object}          ctx  - Extended  state of the statechart
 * @returns {{number|string}}      - The result of the mathematical operations or error message
 *
 */
function calculate(ctx) {
  let operand1 = ctx.operand1.join("");
  let operator = ctx.operator.join("");
  let operand2 = ctx.operand2.join("");

  switch (operator) {
    case "+":
      return +operand1 + +operand2;
    case "-":
      return +operand1 - +operand2;
    case "/":
      return +operand1 / +operand2;
    case "*":
      return +operand1 * +operand2;

    default:
      return "error";
  }
}


export default calculate;
