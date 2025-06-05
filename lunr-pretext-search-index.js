var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "tool",
  "level": "1",
  "url": "tool.html",
  "type": "Article",
  "number": "",
  "title": "Accessibility Tools",
  "body": " Accessibility Tools   General Remarks   PreTeXt  PreTeXt  PreTeXt  "
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
