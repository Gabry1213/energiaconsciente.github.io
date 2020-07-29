(function () {
  var questions = [
    {
      question:
        "Ao finalizar o uso do qualquer aparelho eletrodoméstico, você o retira tomada?",
      choices: ["SIM", "NÃO"],
    },
    {
      question: "Quais dessas fontes energéticas são consideradas renováveis?",
      choices: [
        "Solar",
        "Petróleo",
        "Hidrelétrica",
        "Geotérmica",
        "Eolica",
        "Biomassa",
        "Carvão",
        "Urânio",
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
    if (isNaN(selections[questionCounter])) {
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
      input = '<input type="radio" name="answer" value=' + i + " />";
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // pega o valor da resposta escolhida e coloca na array selections
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
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
    var selection = selections[0] + "" + selections[1];
    switch (selection) {
      case "00":
        matchKit =
          "Parabéns, você está contribuindo economizar energia e assim presenvar o meio ambiente";
        break;
      case "01":
        matchKit =
          "2 Obrigado, você está contribuindo economizar energia e assim presenvar o meio ambiente";
        break;
      case "02":
        matchKit =
          "3 Obrigado, você está contribuindo economizar energia e assim presenvar o meio ambiente";
        break;
      case "03":
        matchKit =
          "4 Obrigado, você está contribuindo economizar energia e assim presenvar o meio ambiente";
        break;
      case "04":
        matchKit =
          "5 Obrigado, você está contribuindo economizar energia e assim presenvar o meio ambiente";
        break;
      case "05":
        matchKit =
          "6 Obrigado, você está contribuindo economizar energia e assim presenvar o meio ambiente";
        break;
      case "06":
        matchKit =
          "7 Obrigado, você está contribuindo economizar energia e assim presenvar o meio ambiente";
        break;
      case "07":
        matchKit =
          "8 Obrigado, você está contribuindo economizar energia e assim presenvar o meio ambiente";
        break;
      case "10":
        matchKit =
          "Que pena, por favor. Após o uso, desconecte-o da tomada. Assim você estará contribuindo com o meio ambiente";
        break;
      case "11":
        matchKit =
          "Que pena, por favor. Após o uso, desconecte-o da tomada. Assim você estará contribuindo com o meio ambiente";
        break;
      case "12":
        matchKit =
          "Que pena, por favor. Após o uso, desconecte-o da tomada. Assim você estará contribuindo com o meio ambiente";
        break;
      case "13":
        matchKit =
          "Que pena, por favor. Após o uso, desconecte-o da tomada. Assim você estará contribuindo com o meio ambiente";
        break;
      case "14":
        matchKit =
          "Que pena, por favor. Após o uso, desconecte-o da tomada. Assim você estará contribuindo com o meio ambiente";
        break;
      case "15":
        matchKit =
          "Que pena, por favor. Após o uso, desconecte-o da tomada. Assim você estará contribuindo com o meio ambiente";
        break;
      case "16":
        matchKit =
          "Que pena, por favor. Após o uso, desconecte-o da tomada. Assim você estará contribuindo com o meio ambiente";
        break;
      case "17":
        matchKit =
          "Que pena, por favor. Após o uso, desconecte-o da tomada. Assim você estará contribuindo com o meio ambiente";
        break;
      default:
        matchKit = "Sem resposta";
    }

    score.append(matchKit + " !");
    return score;
  }
})();
