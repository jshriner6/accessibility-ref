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
  "body": " HTML    Use Case  Create new documents in HTML (without having to learn HTML), which is generally the most accessible format. These options are also good for authoring documents in which you'd like to have an HTML version for posting, and a PDF version for printing.    Time Commitment  Minimal to significant. This will vary based on the platform used, so we address this separately in each subsection below.     PreTeXt    Time Commitment  Moderate to significant. For basic documents like syllabi or notes with only text and math, there is a moderate commitment to learning the initial setup and syntax (which is XML). To learn more of the capabilities of PreTeXt would be a significant time commitment.    The main benefit of PreTeXt is that it allows you to author your document once, and then build your output in a variety of formats, including HTML (for posting an accessible version) and PDF (for printing). A common use case would be to use PreTeXt to author guided notes for class, in which an accessible version can be posted on Canvas and a PDF version can be printed for class.  There is a detailed PreTeXt guide and an annotated sample article , which are great references to access when you want to learn more. To get started quickly with a basic document, you can follow the directions in the Getting Started Tutorial . You can create, edit, and publish documents all through Github with no need for local installations.  There are multiple themes you can use, depending on what type of document you are creating. PreTeXt can also integrate with many other tools to make your document more interactive, including Sage and Desmos. You can find a complete list, with examples, starting in Chapter 14 of the annotated sample article.    Quarto    Time Commitment  Moderate to significant.     Quarto shares the same benefit as PreTeXt in that you can write your document once and use it to produce an output in multiple formats. I have not used Quarto, but I'm told the syntax feels like a mashup between LaTeX and Markdown. For some, this may be a reason to prefer this over PreTeXt. If you use it and find a good workflow, please share it so we can post it here.    LaTeXML    Time Commitment  Minimal to moderate. This will depend on what packages are in use in your .tex file.     LaTeXML accepts a .tex file and outputs an HTML file. This is what is currently being used by arXiv to provide HTML versions of papers.  This requires a local installation , and can be run using a single command from your computer's terminal.   "
},
{
  "id": "canvas",
  "level": "1",
  "url": "canvas.html",
  "type": "Section",
  "number": "4",
  "title": "Canvas",
  "body": " Canvas    Use Case  Author short documents, like class announcements, responses to student questions, or short homework assignments for which you do not need to have a printable version.    Time Commitment  Minimal.     Using the Canvas Editor  When typing math in Canvas, you can type LaTeX code directly in the equation editor, which will render the output in an accessible format (using MathJax).  When authoring pages in Canvas, be sure to use the provided options for headings, lists, and tables (as opposed to creating your own formatting). This will ensure the page is created in a way that is accessible to screen readers.   "
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
  "body": " WeBWorK    Use Case  Author exercises that can provide immediate feedback.    Time Commitment  Moderate to significant. This will depend if you are creating all of your content from scratch, or if you are modifying existing content.     WeBWorK Exercises   WeBWorK is a web-based system that allows you to write and assign self-graded questions. Student progress can be tracked and imported into Canvas. The CSU WeBWorK server has a list of existing courses in WeBWorK that can be used and modified.  There are built-in accessibility features in WeBWorK . The main things to be thoughtful of when writing or using a WeBWorK exercise are the following.   All math content should be authored in math mode (i.e., enclosing math in \\( \\) ).    If your exercise contains an image, be sure to write alternate text that includes the information needed from the image to answer the question being asked. If you are writing or using questions that have variation, be sure to make your alternate text dynamic by using the necessary variables in your image description.      "
},
{
  "id": "desmos",
  "level": "1",
  "url": "desmos.html",
  "type": "Section",
  "number": "8",
  "title": "Desmos",
  "body": " Desmos    Use Case  Author interactive elements for illustrations or student exploration.    Time Commitment  Minimal. There are many existing Desmos interactives, and it is fairly quick and intuitive to create new interactives.     Desmos Interactives   Desmos is a suite of web-based math tools. There are built-in accessibility features in Desmos . The main things to be thoughtful of when writing or using Desmos interactives are the following.   WHAT GOES HERE?      "
},
{
  "id": "doenet",
  "level": "1",
  "url": "doenet.html",
  "type": "Section",
  "number": "9",
  "title": "Doenet",
  "body": " Doenet    Use Case  Author exercises that can provide immediate feedback and\/or interactive elements for illustrations or student exploration.    Time Commitment  Moderate to significant. There are many existing Doenet activities, but there would be a necessary time investment to learn syntax for creating new activities.     Doenet Activities   Doenet provides a markup language that can generate interactive webpages. No local installations are necessary, and all authoring is done within a web browser. The main things to be thoughtful of when writing or using Doenet activities are the following.   WHAT GOES HERE?      "
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
