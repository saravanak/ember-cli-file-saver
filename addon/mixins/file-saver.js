import FileSaver from 'file-saver';
import Mixin from '@ember/object/mixin';

export default Mixin.create({

  saveCanvasAs(filename, canvas) {
    canvas.toBlob((blob) => this.saveAs(blob, filename));
  },

  saveTextAs(filename, text) {
    this.saveFileAs(filename, text, 'text/plain;charset=utf-8');
  },

  saveFileAs(filename, content, contentType) {
    this.saveAs(new Blob([ content ], { type: contentType }), filename);
  },

  saveAs() {
    FileSaver.saveAs(...arguments);
  }

});
