Dropzone
=======================

Wrap a element as a drop zone.

Will show/hide the drop overlay as necessary.

`allowed=(true|false)` will be passed to the `overlayTemplate`. Usually in the case of users trying to drop
non-files. (eg, text or from other programs)

Usage
-----------------------
```handlebars
{{#dropzone overlayTemplate='myCustomOverlay' onDrop=myOnDropAction}}
<table>
  <tbody>
    {{#each files}}
      {{! ... }}
    {{/each}}
  </tbody>
</table>
{{/dropzone}}
```
