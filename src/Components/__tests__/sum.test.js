import Sum from "../Sum"

test("Sum should calculate sum of two numbers",()=>{
    const result=Sum(3,4)

    //Assertion
    expect(result).toBe(7);
})