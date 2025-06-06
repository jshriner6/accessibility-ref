var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "oer",
  "level": "1",
  "url": "oer.html",
  "type": "Section",
  "number": "1",
  "title": "Open Source Textbooks",
  "body": " Open Source Textbooks    Use Case  Provide a free resource to students that has an option to be modified by the instructor.    Time Commitment  Minimal to significant. This will mostly depend on the level of modification desired.     Finding Existing Textbooks  There are numerous existing open source textbooks available in mathematics. A large repository that can be searched is the Open Textbook Library . An internet search for a specific topic may also be fruitful.  Be aware that \"open source\" does not imply \"accessible\", so it is necessary to evaluate these texts for accessibility. Textbooks that have an HTML (\"Read Online\") option will, in general, be more accessible that textbooks that are available only as a PDF.  Modifying open source materials will vary based on how they were created. Look for instructions from the original author regarding creating derivatives of the original work.   "
},
{
  "id": "markup",
  "level": "1",
  "url": "markup.html",
  "type": "Section",
  "number": "2",
  "title": "Markup",
  "body": " Markup    Use Case  Update an existing document (typically a PDF or Microsoft document) to be accessible by screen readers.    Time Commitment  Minimal to significant. For short documents, the effort is minimal. To update larger documents (like textbooks), the effort is significant.     PDF  This is how you tag PDFs.    Microsoft  This is how you tag Microsoft documents.   "
},
{
  "id": "html",
  "level": "1",
  "url": "html.html",
  "type": "Section",
  "number": "3",
  "title": "HTML",
  "body": " HTML    Use Case  Create new documents in HTML (without having to learn HTML), which is generally the most accessible format. These options are also good for authoring documents in which you'd like to have an HTML version for posting, and a PDF version for printing.    Time Commitment  Minimal to significant. This will vary based on the platform used, so we address this separately in each subsection below.     PreTeXt    Time Commitment  Moderate to significant.      Quarto    Time Commitment  Moderate to significant.      LaTeXML    Time Commitment  Minimal to moderate.     "
},
{
  "id": "canvas",
  "level": "1",
  "url": "canvas.html",
  "type": "Section",
  "number": "4",
  "title": "Canvas",
  "body": " Canvas    Use Case  Author short documents, like class announcements or responses to student questions, for which you do not need to have a printable version.    Time Commitment  Minimal.     Using the Canvas Editor     "
},
{
  "id": "ai",
  "level": "1",
  "url": "ai.html",
  "type": "Section",
  "number": "5",
  "title": "AI",
  "body": " AI   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "prefigure",
  "level": "1",
  "url": "prefigure.html",
  "type": "Section",
  "number": "6",
  "title": "PreFigure",
  "body": " PreFigure   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "webwork",
  "level": "1",
  "url": "webwork.html",
  "type": "Section",
  "number": "7",
  "title": "WeBWorK",
  "body": " WeBWorK   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "desmos",
  "level": "1",
  "url": "desmos.html",
  "type": "Section",
  "number": "8",
  "title": "Desmos",
  "body": " Desmos   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "doenet",
  "level": "1",
  "url": "doenet.html",
  "type": "Section",
  "number": "9",
  "title": "Doenet",
  "body": " Doenet   Remarks about general use cases and level of time commitment.    Workflow 1   Some words    My First Subsection  Some more words  foo     Workflow 2   Some words    "
},
{
  "id": "echo360",
  "level": "1",
  "url": "echo360.html",
  "type": "Section",
  "number": "10",
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
