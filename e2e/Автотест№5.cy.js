// Название набора тестов
describe('Автотест на проверку негативного кейса авторизации', function () {                               
    // Название теста
    it('e2e Автотест на проверку негативного кейса авторизации: Неверный пароль', function () {   
         // Переходим на сайт https://login.qa.studio/
         cy.visit('https://login.qa.studio/');                          
         //  Вводим логин 
         cy.get('#mail').type('germandolnikov.ru');    
         // Вводим пароль
         cy.get('#pass').type('iLoveqastudio1');   
         // Нажимаем кнопку "Подтвердить"
         cy.get('#loginButton').click(); 
         //  Проверка текста
         cy.contains('Нужно исправить проблему валидации').should; 
         // Проверка крестика 
         cy.get('#exitMessageButton > .exitIcon') .should; 
                             
             
     });
 });