describe("Praticando com jest", () => {
    test("o numero 100 é maior que o numero 99", () => {
        expect(100).toBeGreaterThan(99)
    })
 
    test("10 multiplicado por 2 é 20", () => {
        expect(10*2).toBe(20)
    })
})