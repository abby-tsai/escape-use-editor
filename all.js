// 工具列
var toolbarContainer = [
  [{ 'size': ['small', false, 'large', 'huge'] }],
  ['bold', 'italic', 'link'],
  ['image']
]

var quill = new Quill('#editor-container', {
  theme: 'snow',
  modules: {
    toolbar: {
      container: toolbarContainer,
      handlers: {
        image: imageHandler
      }
    },
    // 更改圖片尺寸的外掛
    // https://github.com/kensnyder/quill-image-resize-module
    imageResize: {
      modules: [ 'Resize', 'DisplaySize' ],
      // 提整圖片尺寸的手柄
      handleStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: 'white'
      },
      // 顯示像素大小
      displayStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: 'white'
      }
    }
  },
});

// 可插入圖片連結（出現對話框，可貼上圖片連結）
function imageHandler() {
  var range = this.quill.getSelection();
  var value = prompt('請輸入圖片網址'); // 讓他彈跳出視窗
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}