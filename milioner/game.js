let game = {
    // Основное тело игры
    run() {
        let count = 0;
        for (let i = 0; i < question.length; i++) {

            let userAnswer = Number(prompt(question[i] + "\n" + answer[i][0]));
            if (userAnswer === answer[i][1]) {
                count = ++count;
                console.log("Это правильный ответ, так держать. Правильных ответов " + count);
            } else {
                console.log("К сожелению это не верно.Правильный ответ " + answer[i][1] + " Правильных ответов " + count);
            }
        }
        // Вопрос на повторную игру
        let again = prompt("Хотите сыграть еще раз? \n Для повторной игры введите 'Да'");
        if (again == "Да") {
            console.log("Удачи в повторной игре!")
            game.run();
        } else {
            console.log("Игра окончена");
        }

    },
    // Начальное приветствие
    hellow() {
        console.log("Вас приветствует игра 'Кто хочет стать миллионером?'. Для начала игры введите game.run() или нажмите кнопку")
    }
}
game.hellow();