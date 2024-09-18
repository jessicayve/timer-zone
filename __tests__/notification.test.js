///Teste unitário de notificação

import { notifyUser } from "../script";

describe('notifyUser', () => {
    beforeEach(() => {
      global.Notification = {
        permission: 'granted',
        constructor: jest.fn(),
      }
    })
  
    it('deve exibir uma notificação se as permissões forem concedidas', () => {
      notifyUser()
      expect(Notification.constructor).toHaveBeenCalled();
    })
  })
  

