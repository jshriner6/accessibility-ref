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
  "body": " Markup    Use Case  Update an existing PDF or Microsoft document to be accessible by screen readers.    Time Commitment  Minimal to significant. For short documents, the effort is minimal. To update larger documents (like textbooks), the effort can be significant.     PDF  To make a PDF generated from a .tex file fully accessible, you can complete the \"Advanced Tasks in Acrobat Professional\" items .    Microsoft Word and Powerpoint  To make Word and Powerpoint documents fully accessible, you can complete the Priority and Advanced Tasks for Word and the Priority and Advanced Tasks for Powerpoint .   "
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
  "title": "Alternative Text and Long Descriptions",
  "body": " Alternative Text and Long Descriptions    Use Case  Write useful alternative text\/descriptions for images.    Time Commitment  Minimal to significant. This can vary depending on how many images you need to create alternative text for.     Writing Alt Text and Descriptions  Alt text should convey the purpose of an image. It's possible that two different instructors use the same image to convey different information. In this case, their alternative texts for the image would not be exactly the same. Alt text should be concise (around 120 characters or less). If an image is complex and cannot be adequately described with alt text, you can include a long description next to the image or link to a separate document. Long descriptions can include more formatting when necessary, like headings, lists, and tables.  AI can be a helpful aid in generating image descriptions. As a starting point, you may try submitting your image with a prompt like generate an alternative text for this image . Since only you know your intent for the image, you will likely want to modify the output.  You can also read this advice for writing image descriptions .    Adding Alt Text and Descriptions to Images   How alternative text is added to an image will vary depending what you are using to create your document. We've included some common cases below.    PreTeXt  Alt text can be added with the <shortdescription> tag, while long descriptions can be added with the <description> tag. This is outlined in the images overview of the PreTeXt guide .    LaTeX  I don't know of a good way to do this as of now. Please send me a message if you have one.    PDF  To add alt text, open your .pdf file in Adobe Acrobat, and select Tools > Prepare for accessibility > Add alternate text . Note that your document must be properly tagged in order for Adobe to find the images needing alt text.  To add a long description, include it in a paragraph close to your image, or link to a separate file or appendix.    Word\/Powerpoint  To add alt text to an image in Word or Powerpoint, right click the image and select \"View Alt Text...\". Enter your alt text in the window provided.  To add a long description, include it in a paragraph close to your image, or link to a separate file.    Canvas  To add alt text to an image in Canvas pages, select the image and then \"Image Options\". Enter your alt text in the window provided.  To add a long description, include it in a paragraph close to your image, or link to a separate file.    "
},
{
  "id": "prefigure",
  "level": "1",
  "url": "prefigure.html",
  "type": "Section",
  "number": "6",
  "title": "PreFigure",
  "body": " PreFigure    Use Case  Create your own images.    Time Commitment  Significant.     PreFigure Images   PreFigure is an authoring system for mathematical images where the focus is on describing the meaning and purpose of the image. This allows for the creation of images that are very accessible, and can also be rendered in a tactile format.  I do not have experience with PreFigure, but there is PreFigure documentation which includes examples, as well as a PreFigure playground . If you play around and learn some things, please send me what you learn so I can include it here.   "
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
  "body": " Echo360    Use Case  Host videos of class or other content you'd like students to watch.    Time Commitment  Minimal to significant. This can vary depending on how\/if you're creating your videos, how long they are, and how much you need to edit.     Echo360 Hosting We are emphasizing Echo360 since this is the platform provided by default in Canvas. There are other hosting platforms that behave similarly.  Captioning and Transcripts  When you upload or record video using a hosting platform like Echo360, it will auto-generate captions and a transcript. These are separate files, but should generally convey the same information about the audio in the video. The auto-generated files often contain errors that may lead to confusion, so they should be reviewed and edited for accuracy. One workflow in Echo360 is to find your video and select Edit Transcript . Once your transcript is edited, you can then select Apply to CC to also update the caption file.    Audio Description  Audio description files are a narration of meaningful visual information in a video to provide context, clarify speakers, and articulate visual elements. (like alternative text for videos). If you are creating new videos, it is good to think about how you might articulate meaning and avoid certain presentation styles so that such an additional file would not be necessary. If you are using existing videos where such a file would be useful, you can add an audio file in Echo360 by (HOW DO YOU DO THIS? I don't see the \"Accessibility\" option in media details)    "
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
