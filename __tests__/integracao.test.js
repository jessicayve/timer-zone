///TESTE DE INTEGRAÇÃO
import { startTimer } from "../script"

describe('Integração de startTimer e updateDisplay', () => {
    it('deve atualizar o display quando o timer é iniciado', () => {
        document.body.innerHTML = '<div id="timer"></div><input id="minutes" value="1"/>'
        startTimer()
        jest.advanceTimersByTime(1000) //  1 segundo
        const display = document.getElementById('timer').textContent
        expect(display).toBe('00:59')
    })
})