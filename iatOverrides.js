define([
  "pipAPI",
  "https://samfenwick.github.io/test-iat-delete-me/iat.js",
], function (APIConstructor, iatExtension) {
  var API = new APIConstructor();

  return iatExtension({
    isTouch: navigator.maxTouchPoints > 0 ? true : false,
    category1: {
      name: "Fat people", //Will appear in the data.
      title: {
        media: { word: "Fat people" }, //Name of the category presented in the task.
        css: { color: "#31940F", "font-size": "2em" }, //Style of the category title.
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { image: "fatman1.jpg" },
        { image: "fatman3.jpg" },
        { image: "fatman4.jpg" },
        { image: "fatman5.jpg" },
        { image: "fatman6.jpg" },
        { image: "fatwoman1.jpg" },
        { image: "fatwoman2.jpg" },
        { image: "fatwoman3.jpg" },
        { image: "fatwoman4.jpg" },
        { image: "fatwoman6.jpg" },
      ],
      //Stimulus css (style)
      stimulusCss: { color: "#31940F", "font-size": "1.8em" },
    },
    category2: {
      name: "Thin people", //Will appear in the data.
      title: {
        media: { word: "Thin people" }, //Name of the category presented in the task.
        css: { color: "#31940F", "font-size": "2em" }, //Style of the category title.
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { image: "thinman1.jpg" },
        { image: "thinman2.jpg" },
        { image: "thinman3.jpg" },
        { image: "thinman5.jpg" },
        { image: "thinman6.jpg" },
        { image: "thinwoman1.jpg" },
        { image: "thinwoman2.jpg" },
        { image: "thinwoman3.jpg" },
        { image: "thinwoman5.jpg" },
        { image: "thinwoman6.jpg" },
      ],
      //Stimulus css
      stimulusCss: { color: "#31940F", "font-size": "1.8em" },
    },
    attribute1: {
      name: "Bad words",
      title: {
        media: { word: "Bad words" },
        css: { color: "#0000FF", "font-size": "1.8em" },
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { word: "Pain" },
        { word: "Humiliate" },
        { word: "Horrific" },
        { word: "Hate" },
        { word: "Bothersome" },
        { word: "Detest" },
        { word: "Rotten" },
        { word: "Poison" },
      ],
      //Stimulus css
      stimulusCss: { color: "#0000FF", "font-size": "2.3em" },
    },
    attribute2: {
      name: "Good words",
      title: {
        media: { word: "Good words" },
        css: { color: "#0000FF", "font-size": "1.8em" },
        height: 4, //Used to position the "Or" in the combined block.
      },
      stimulusMedia: [
        //Stimuli content as PIP's media objects
        { word: "Cheerful" },
        { word: "Fantastic" },
        { word: "Spectacular" },
        { word: "Friendship" },
        { word: "Laughing" },
        { word: "Cheer" },
        { word: "Pleasing" },
        { word: "Love" },
      ],
      //Stimulus css
      stimulusCss: { color: "#0000FF", "font-size": "2.3em" },
    },
    base_url: {
      //Where are your images at?
      image: "https://samfenwick.github.io/test-iat-delete-me/images/",
    },
    remindErrorText:
      '<p align="center" style="font-size:1.2em; font-family:arial">' +
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. ' +
      "Press the other key to continue.<p/>",

    remindErrorTextTouch:
      '<p align="center" style="font-size:1.4em; font-family:arial">' +
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. ' +
      "Touch the other side to continue.<p/>",
    instAttributePractice:
      '<div><p align="center" style="font-size:20px; font-family:arial">' +
      '<p style="color:#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
      '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
      'Put a left finger on the <b>E</b> key for items that belong to the category <p style="color:#0000ff">leftAttribute.</p>' +
      '<br/>Put a right finger on the <b>I</b> key for items that belong to the category <p style="color:#0000ff">rightAttribute</p>.<br/><br/>' +
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. ' +
      "Press the other key to continue.<br/>" +
      "<u>Go as fast as you can</u> while being accurate.<br/><br/></p>" +
      '<p align="center">Press the <b>space bar</b> when you are ready to start.</p></p></div>',
    instAttributePracticeTouch: [
      "<div>",
      '<p align="center">',
      "<u>Part blockNum of nBlocks</u>",
      "</p>",
      '<p align="left" style="margin-left:5px">',
      "<br/>",
      'Tap the <b>left</b> green area for items that belong to the category <p style="color:#0000ff">leftAttribute</p>.<br/>',
      'Tap the <b>right</b> green area for items that belong to the category <p style="color:#0000ff">rightAttribute</p>.<br/>',
      "Items will appear one at a time.<br/>",
      "<br/>",
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. Touch the other side to continue. <u>Go as fast as you can</u> while being accurate.',
      "</p>",
      '<p align="center">Touch the <b>lower </b> green area to start.</p>',
      "</div>",
    ].join("\n"),

    instCategoriesPractice:
      '<div><p align="center" style="font-size:20px; font-family:arial">' +
      '<p style="color:#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
      '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
      'Put a left finger on the <b>E</b> key for items that belong to the category <p style="color:#336600">leftCategory</p>. ' +
      '<br/>Put a right finger on the <b>I</b> key for items that belong to the category <p style="color:#336600">rightCategory</p>.<br/>' +
      "Items will appear one at a time.<br/><br/>" +
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. ' +
      "Press the other key to continue.<br/>" +
      "<u>Go as fast as you can</u> while being accurate.<br/><br/></p>" +
      '<p align="center">Press the <b>space bar</b> when you are ready to start.</p></p></div>',
    instCategoriesPracticeTouch: [
      "<div>",
      '<p align="center">',
      "<u>Part blockNum of nBlocks</u>",
      "</p>",
      '<p align="left" style="margin-left:5px">',
      "<br/>",
      'Tap the <b>left</b> green area for items that belong to the category <p style="color:#336600">leftCategory</p>.<br/>',
      'Tap the <b>right</b> green area for items that belong to the category <p style="color:#336600">rightCategory</p>.<br/>',
      "Items will appear one at a time.<br/>",
      "<br/>",
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. Touch the other side to continue. <u>Go as fast as you can</u> while being accurate.',
      "</p>",
      '<p align="center">Touch the <b>lower </b> green area to start.</p>',
      "</div>",
    ].join("\n"),

    instFirstCombined:
      '<div><p align="center" style="font-size:20px; font-family:arial">' +
      '<p style="color:#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
      '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
      'Use the <b>E</b> key for <p style="color:#336600">leftCategory</p> and for <p style="color:#0000ff">leftAttribute</p>.<br/>' +
      'Use the <b>I</b> key for <p style="color:#336600">rightCategory</p> and for  <p style="color:#0000ff">rightAttribute</p>.<br/>' +
      "Each item belongs to only one category.<br/><br/>" +
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. ' +
      "Press the other key to continue.<br/>" +
      "<u>Go as fast as you can</u> while being accurate.<br/><br/></p>" +
      '<p align="center">Press the <b>space bar</b> when you are ready to start.</p></p></div>',
    instFirstCombinedTouch: [
      "<div>",
      '<p align="center">',
      "<u>Part blockNum of nBlocks</u>",
      "</p>",
      "<br/>",
      "<br/>",
      '<p align="left" style="margin-left:5px">',
      'Tap the <b>left</b> green area for <p style="color:#336600">leftCategory</p> items and for <p style="color:#0000ff">leftAttribute</p>.</br>',
      'Tap the <b>right</b> green area for <p style="color:#336600">rightCategory</p> items and for <p style="color:#0000ff">rightAttribute</p>.</br>',
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. Touch the other side to continue. <u>Go as fast as you can</u> while being accurate.</br>',
      "</p>",
      '<p align="center">Touch the <b>lower </b> green area to start.</p>',
      "</div>",
    ].join("\n"),

    instSecondCombined:
      '<div><p align="center" style="font-size:20px; font-family:arial">' +
      '<p style="color:#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
      '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
      "This is the same as the previous part.<br/>" +
      'Use the <b>E</b> key for <p style="color:#336600">leftCategory</p> and for <p style="color:#0000ff">leftAttribute</p>.<br/>' +
      'Use the <b>I</b> key for <p style="color:#336600">rightCategory</p> and for  <p style="color:#0000ff">rightAttribute</p>.<br/>' +
      "Each item belongs to only one category.<br/><br/>" +
      "<u>Go as fast as you can</u> while being accurate.<br/><br/></p>" +
      '<p align="center">Press the <b>space bar</b> when you are ready to start.</p></p></div>',
    instSecondCombinedTouch: [
      "<div>",
      '<p align="center"><u>Part blockNum of nBlocks</u></p>',
      "<br/>",
      "<br/>",

      '<p align="left" style="margin-left:5px">',
      'Tap the <b>left</b> green area for <p style="color:#336600">leftCategory</p> items and for <p style="color:#0000ff">leftAttribute</p>.<br/>',
      'Tap the <b>right</b> green area for <p style="color:#336600">rightCategory</p> items and for <p style="color:#0000ff">rightAttribute</p>.<br/>',
      "<br/>",
      "<u>Go as fast as you can</u> while being accurate.<br/>",
      "</p>",
      '<p align="center">Touch the <b>lower </b> green area to start.</p>',
      "</div>",
    ].join("\n"),

    instSwitchCategories:
      '<div><p align="center" style="font-size:20px; font-family:arial">' +
      '<p style="color:#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
      '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
      "<b>Watch out, the labels have changed position!</b><br/>" +
      'Put the left finger on the <b>E</b> key for <p style="color:#336600">leftCategory</p>.<br/>' +
      'Put the right finger on the <b>I</b> key for <p style="color:#336600">rightCategory</p>.<br/><br/>' +
      "<u>Go as fast as you can</u> while being accurate.<br/><br/></p>" +
      '<p align="center">Press the <b>space bar</b> when you are ready to start.</p></p></div>',
    instSwitchCategoriesTouch: [
      "<div>",
      '<p align="center">',
      "<u>Part blockNum of nBlocks</u>",
      "</p>",
      '<p align="left" style="margin-left:5px">',
      "<br/>",
      "Watch out, the labels have changed position!<br/>",
      'Tap the <b>left</b> green area for <p style="color:#336600">leftCategory</p> items.<br/>',
      'Tap the <b>right</b> green area for <p style="color:#336600">rightCategory</p> items.<br/>',
      "Items will appear one at a time.",
      "<br/>",
      'If you make a mistake, a red <p style="color:#ff0000"><b>X</b></p> will appear. Touch the other side to continue. <u>Go as fast as you can</u> while being accurate.<br/>',
      "</p>",
      '<p align="center">Touch the <b>lower </b> green area to start.</p>',
      "</div>",
    ].join("\n"),
  });
});
