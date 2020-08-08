(function () {
  var questions = [
    {
      type: "radio",
      question:
        "Ao finalizar o uso do qualquer aparelho eletrodoméstico, você o retira tomada?",
      choices: [
        { answer: "Sim", check: true },
        { answer: "Não", check: false },
      ],
    },
    {
      type: "checkbox",
      question: "Quais dessas fontes energéticas são consideradas renováveis?",
      choices: [
        { answer: "Solar", check: true },
        { answer: "Petróleo", check: false },
        { answer: "Hidrelétrica", check: true },
        { answer: "Geotérmica", check: false },
        { answer: "Eolica", check: true },
        { answer: "Biomassa", check: true },
        { answer: "Carvão", check: false },
        { answer: "Urânio", check: false },
      ],
    },
  ];

  var questionCounter = 0; //segue numero de questões
  var selections = []; //respostas do usuário Array
  var quiz = $("#quiz"); //div da quiz

  //mostra questão inicial
  displayNext();

  // Click handler para botão "proxima"
  $("#next").on("click", function (e) {
    e.preventDefault();

    // rava animações indevidas
    if (quiz.is(":animated")) {
      return false;
    }
    choose();

    // protecão caso não ecolha nenhuma questão
    if (isNaN(selections[questionCounter]) && hasAnswer2() == 0) {
      alert("Por favor, faça sua escolha!");
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler para o botão 'voltar'
  $("#prev").on("click", function (e) {
    e.preventDefault();

    if (quiz.is(":animated")) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler para o botão 'iniciar'
  $("#start").on("click", function (e) {
    e.preventDefault();

    if (quiz.is(":animated")) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $("#start").hide();
  });
  // animações de hover
  $(".button").on("mouseenter", function () {
    $(this).addClass("active");
  });
  $(".button").on("mouseleave", function () {
    $(this).removeClass("active");
  });

  // cria a div que contem a respostas
  function createQuestionElement(index) {
    var qElement = $("<div>", {
      id: "question",
    });

    var header = $("<h2>Questão" + (index + 1) + ":</h2>");
    qElement.append(header);

    var question = $("<p>").append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // cria a lista de respostas com radio buttons
  function createRadios(index) {
    var radioList = $("<ul>");
    var item;
    var input = "";
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $("<li>");
      input = `<input type="${questions[index].type}" name="answer" class="form-input" value="${i}" />`;
      input += questions[index].choices[i].answer;
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  function hasAnswer2() {
    let qtd = 0;
    var inputElements = document.getElementsByClassName("form-input");
    for (var i = 0; i < inputElements.length; ++i) {
      if (inputElements[i] != undefined) {
        if (inputElements[i].checked) {
          qtd++;
        }
      }
    }
    return qtd;
  }

  // pega o valor da resposta escolhida e coloca na array selections
  function choose() {
    if (questionCounter == 0)
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    else {
      var inputElements = document.getElementsByClassName("form-input");
      for (var i = 0; i < inputElements.length; ++i) {
        if (inputElements[i] != undefined) {
          if (inputElements[i].checked) {
            selections[i + 1] = i ?? undefined;
          }
        }
      }
    }
  }

  // busca e exibe o proximo elemento
  function displayNext() {
    quiz.fadeOut(function () {
      $("#question").remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!isNaN(selections[questionCounter])) {
          $("input[value=" + selections[questionCounter] + "]").prop(
            "checked",
            true
          );
        }

        // controles para o botão voltar aparecer após a primeira questão
        if (questionCounter === 1) {
          $("#prev").show();
        } else if (questionCounter === 0) {
          $("#prev").hide();
          $("#next").show();
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $("#next").hide();
        $("#prev").hide();
        $("#start").show();
      }
    });
  }

  // Analisa as resposta e retorna o resultado
  function displayScore() {
    var score = $("<p>", { id: "question" });
    var matchKit;
    let correctAnswer = 0;
    let incorrectAnswer = 0;
    // 1 Pergunta - 0 = Sim, 1 = Não
    if (questions[0].choices[0].check == true && selections[0] == 0) {
      matchKit =
        "Parabéns, você esta desligando os equipamentos eletronicos da tomada.";
    } else {
      matchKit = "Que pena, por favor. Após o uso, desconecte-o da tomada.";
    }

    // 2 Pergunta
    for (let i = 1; i < selections.length; i++) {
      if (selections[i] != undefined) {
        if (questions[1].choices[selections[i]].check == true) {
          correctAnswer++;
        }
      }
    }

    for (let i = 1; i < selections.length; i++) {
      if (selections[i] != undefined) {
        if (questions[1].choices[selections[i]].check == false) {
          incorrectAnswer++;
        }
      }
    }

    function getQtdQuestCorrect() {
      let qtd = 0;
      for (let i = 0; i < questions[1].choices.length; i++) {
        if (questions[1].choices[i].check) qtd++;
      }
      return qtd;
    }

    if (
      correctAnswer >= getQtdQuestCorrect() / 2 &&
      correctAnswer != incorrectAnswer
    ) {
      if (questions[0].choices[0].check == true && selections[0] == 0) {
        matchKit += " E você sabe o que é uma fonte de energia renovavel";
      } else {
        matchKit += " Mas você sabe o que é uma fonte de energia renovavel";
      }
    } else {
      if (questions[0].choices[0].check == true && selections[0] == 0) {
        matchKit +=
          " Mas você não fixou o conteúdo acima sobre as fontes de energia renovavel";
      } else {
        matchKit +=
          " E você não fixou o conteúdo acima sobre as fontes de energia renovavel";
      }
    }

    score.append(matchKit + " !");
    return score;
  }
})();
