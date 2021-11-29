import { Vup_comma_formatter, Vup_k_formatter } from "../dist";

test('Vup_comma_formatter', ()=>{
    expect(Vup_comma_formatter(10000)).toBe("10,000");
    
})

test('Vup_k_formatter', ()=>{
    expect(Vup_k_formatter(1000)).toBe("1k");
})