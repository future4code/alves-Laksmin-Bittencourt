import { toUpperCase1 } from "./exercicios/exerciciosDeSeg";

//1:
describe("Testando toUpperCase", () => {
    test("A entrada bananinha gera a saída BANANINHA", () => {
        const input = "Raba"
        const output = toUpperCase1(input)

        expect(output).toBeDefined()
    })
})

//2:
describe("Testando toSplit", () => {
    test("A entrada bananinha gera a saída BANANINHA", () => {
        const input = "Raba"
        const output = toUpperCase1(input)

        expect(output).toBeDefined()
    })
})