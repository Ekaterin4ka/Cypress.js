// Название набора тестов
describe('Покупка аватара', function () {                               
    // Название теста
    it('e2e тест на покупку нового аватара для тренера', function () {   
        // Переходим на сайт https://pokemonbattle.me/ 
        cy.visit('https://pokemonbattle.me/');                         
        // Вводим логин 
        cy.get('input[type="email"]').type('USER_LOGIN');      
        // Вводим пароль 
        cy.get('input[type="password"]').type('USER_PASSWORD');    
        // Нажимаем кнопку "Подтвердить" 
        cy.get('button[type="submit"]').click();                        
        // Нажимаем кнопку "Магазин"
        cy.get('.header__btns > [href="/shop"]').click();               
        // Нажимаем кнопку "Купить" у первого доступного аватара
        cy.get('.available > button').first().click();                  
        // Вводим номер карты
        cy.get('.credit').type('4620869113632996');                     
        // Вводим CVV карты
        cy.get('.k_input_ccv').type('125');                             
        // Вводим срок действия карты
        cy.get('.k_input_date').type('1225');                          
        // Вводим имя владельца действия карты
        cy.get('.k_input_name').type('NAME');                           
        // Нажимаем кнопку Оплатить
        cy.get('.pay-btn').click();                                     
        // Вводим код подтверждения СМС
        cy.get('#cardnumber').type('56456');                            
        // Нажимаем кнопку Отправить
        cy.get('.payment__submit-button').click();                      
        // Проверяем наличие и видимость сообщения о успешной покупке
        cy.contains('Покупка прошла успешно').should('be.visible');     
     });
 });
 