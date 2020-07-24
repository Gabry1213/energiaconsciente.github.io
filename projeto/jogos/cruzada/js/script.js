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
        starty: 1,
      },
      {
        clue:
          "Defines the alpha-numeric characters that are typically associated with text used in programming",
        answer: "ascii",
        position: 1,
        orientation: "down",
        startx: 1,
        starty: 1,
      },
    ];

    $("#puzzle-wrapper").crossword(puzzleData);
  });
})(jQuery);
