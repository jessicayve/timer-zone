///Teste unitário de alarme
import { playAlarm } from "../script"

describe('playAlarm', () => {
    it('deve tocar o alarme', () => {
        document.body.innerHTML = '<audio id="alarm-sound"></audio>'
        const alarmSound = document.getElementById('alarm-sound')
        const playSpy = jest.spyOn(alarmSound, 'play')
        playAlarm()
        expect(playSpy).toHaveBeenCalled()
    })
})