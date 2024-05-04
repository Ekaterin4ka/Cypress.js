// Название набора тестов
describe('Проверка на позитивный кейс авторизации', function () {                               
    // Название теста
    it('e2e Проверка на позитивный кейс авторизации', function () {   
         // Переходим на сайт https://login.qa.studio/
         cy.visit('https://login.qa.studio/');                          
         //  Вводим логин 
         cy.get('#mail').type('german@dolnikov.ru');      
         // Вводим пароль
         cy.get('#pass').type('iLoveqastudio1');    
         // Нажимаем кнопку "Подтвердить"
         cy.get('#loginButton').click(); 
         //  Проверка текста
         cy.contains('Авторизация прошла успешно').should; 
         // Проверка крестика 
         cy.get('#exitMessageButton > .exitIcon') .should;               
             
     });
 });
 