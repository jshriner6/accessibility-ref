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
