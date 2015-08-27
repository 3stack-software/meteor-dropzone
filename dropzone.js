jQuery.event.props.push('dataTransfer');


Template.dropzone.onCreated(function(){
  var visible = this.visible = new ReactiveVar(false),
    hide = this.hide = _.bind(visible.set, visible, false),
    show = this.show = _.bind(visible.set, visible, true),
    allowed = this.allowed = new ReactiveVar(false),
    timeout = null;

  this.dragover = throttle(function(_allowed){
    allowed.set(_allowed);
    show();
    if (timeout){
      clearTimeout(timeout);
    }
    timeout = setTimeout(hide, 800);
  }, 90);
});


Template.dropzone.onDestroyed(function(){
  this.visible = null;
  this.hide = null;
  this.show = null;
  this.allowed = null;
  this.dragover = null;
});

Template.dropzone.helpers({
  show: function(){ return Template.instance().visible.get(); },
  data: function(){
    return {
      allowed: Template.instance().allowed.get()
    }
  }
});

Template.dropzone.events({
  'dragover .dropzone': function (e, tpl) {
    e.stopPropagation();
    e.preventDefault();
    tpl.dragover(_.indexOf(e.dataTransfer.types, 'Files') >= 0);
  },
  'dragleave .dropzone-mask': function (e, tpl) {
    e.stopPropagation();
    e.preventDefault();

    tpl.dragover.reset();
    tpl.hide();
  },
  'drop .dropzone-mask': function (e, tpl) {
    e.preventDefault();

    tpl.dragover.reset();
    tpl.hide();

    tpl.data.onDrop(e.dataTransfer.files);
  }
});

