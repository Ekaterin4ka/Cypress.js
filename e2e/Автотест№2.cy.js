// Название набора тестов
describe('Автотест на проверку логики восстановления пароля', function () {                               
    // Название теста
    it('e2e Автотест на проверку логики восстановления пароля', function () {   
         // Переходим на сайт https://login.qa.studio/
         cy.visit('https://login.qa.studio/');                          
         // Нажимаем на "Забыли пароль"   
         cy.get('#forgotEmailButton').click();      
         // Вводим почту
         cy.get('#mailForgot').type('kauvewacayi-7543@yopmail.com');    
         // Нажимаем кнопку "Восстановить"
         cy.get('#restoreEmailButton').click();
         //  Проверка текста
         cy.contains('Успешно отправили пароль на e-mail').should;
         // Проверка крестика 
         cy.get('#exitMessageButton > .exitIcon') .should; 
                             
             
     });
 });