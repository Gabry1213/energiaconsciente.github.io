// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function ($) {
  $(function () {
    // provide crossword entries in an array of objects like the following example
    // Position refers to the numerical order of an entry. Each position can have
    // two entries: an across entry and a down entry
    var puzzleData = [
      {
        clue: "Qual fonte de energia é menos prejudicial para o meio ambiente?",
        answer: "solar",
        position: 1,
        orientation: "across",
        startx: 1,
        starty: 5,
      },
      {
        clue: "Em fase de desenvolvimento",
        answer: "sustentavel",
        position: 1,
        orientation: "across",
        startx: 1,
        starty: 10,
      },
      {
        clue: "Em fase de desenvolvimento",
        answer: "uranio",
        position: 1,
        orientation: "across",
        startx: 2,
        starty: 8,
      },
      {
        clue: "Em fase de desenvolvimento",
        answer: "biomassa",
        position: 1,
        orientation: "down",
        startx: 4,
        starty: 1,
      },
      {
        clue: "Onde fica localizado a Usina Hidrelétrica do município?",
        answer: "balbina",
        position: 1,
        orientation: "down",
        startx: 9,
        starty: 1,
      },
      {
        clue: "Em fase de desenvolvimento",
        answer: "carvao",
        position: 1,
        orientation: "down",
        startx: 7,
        starty: 3,
      },
    ];

    $("#puzzle-wrapper").crossword(puzzleData);
  });
})(jQuery);
