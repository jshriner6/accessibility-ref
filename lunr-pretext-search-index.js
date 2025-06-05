var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "oer",
  "level": "1",
  "url": "oer.html",
  "type": "Section",
  "number": "1",
  "title": "Open Source Textbooks",
  "body": " Open Source Textbooks   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "pretext",
  "level": "1",
  "url": "pretext.html",
  "type": "Section",
  "number": "2",
  "title": "PreTeXt",
  "body": " PreTeXt   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "quarto",
  "level": "1",
  "url": "quarto.html",
  "type": "Section",
  "number": "3",
  "title": "Quarto",
  "body": " Quarto   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "latexml",
  "level": "1",
  "url": "latexml.html",
  "type": "Section",
  "number": "4",
  "title": "LaTeXML",
  "body": " LaTeXML   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "canvas",
  "level": "1",
  "url": "canvas.html",
  "type": "Section",
  "number": "5",
  "title": "Canvas",
  "body": " Canvas   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "ai",
  "level": "1",
  "url": "ai.html",
  "type": "Section",
  "number": "6",
  "title": "AI",
  "body": " AI   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "prefigure",
  "level": "1",
  "url": "prefigure.html",
  "type": "Section",
  "number": "7",
  "title": "PreFigure",
  "body": " PreFigure   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "webwork",
  "level": "1",
  "url": "webwork.html",
  "type": "Section",
  "number": "8",
  "title": "WeBWorK",
  "body": " WeBWorK   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "desmos",
  "level": "1",
  "url": "desmos.html",
  "type": "Section",
  "number": "9",
  "title": "Desmos",
  "body": " Desmos   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "doenet",
  "level": "1",
  "url": "doenet.html",
  "type": "Section",
  "number": "10",
  "title": "Doenet",
  "body": " Doenet   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "echo360",
  "level": "1",
  "url": "echo360.html",
  "type": "Section",
  "number": "11",
  "title": "Echo360",
  "body": " Echo360   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
