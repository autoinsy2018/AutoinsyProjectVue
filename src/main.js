import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import $axios from 'axios'
import qs from 'qs'
import iView from 'iview'
import 'jquery-page/jquery.page'
import 'carousel/index'
import 'jquery-easing/dist/jquery.easing.1.3.umd'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-fileinput/js/fileinput'
import 'bootstrap-fileinput/css/fileinput.css'
import 'video.js'
import videoPlayer from 'vue-video-player'
import store from './vuex/store'
import './assets/js/jquery.flexslider'
import './assets/js/mag'
import './assets/js/my-js-style.js'
import './assets/css/index.css'
import './assets/css/mystyle.css'
import './assets/css/reset.css'
import './assets/css/retable-f721744060.css'
import 'iview/dist/styles/iview.css'   // 使用 CSS

Vue.config.productionTip = false;
Vue.prototype.$ = $;
Vue.prototype.$axios = $axios;
Vue.prototype.HOME = '/api';
Vue.prototype.qs = qs;

require('vue-video-player/src/custom-theme.css');
Vue.use(videoPlayer);
Vue.use(iView);
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next()
});
router.afterEach(() => {
  iView.LoadingBar.finish()
});

$.fn.fileinputLocales['zh'] = {
  fileSingle: '文件',
  filePlural: '个文件',
  browseLabel: '选择 &hellip;',
  removeLabel: '移除',
  removeTitle: '清除选中文件',
  cancelLabel: '取消',
  cancelTitle: '取消进行中的上传',
  uploadLabel: '上传',
  uploadTitle: '上传选中文件',
  msgNo: '没有',
  msgNoFilesSelected: '未选择文件',
  msgCancelled: '取消',
  msgPlaceholder: '选择 {files}...',
  msgZoomModalHeading: '详细预览',
  msgFileRequired: '必须选择一个文件上传.',
  msgSizeTooSmall: '文件 "{name}" (<b>{size} KB</b>) 必须大于限定大小 <b>{minSize} KB</b>.',
  msgSizeTooLarge: '文件 "{name}" (<b>{size} KB</b>) 超过了允许大小 <b>{maxSize} KB</b>.',
  msgFilesTooLess: '你必须选择最少 <b>{n}</b> {files} 来上传. ',
  msgFilesTooMany: '选择的上传文件个数 <b>({n})</b> 超出最大文件的限制个数 <b>{m}</b>.',
  msgFileNotFound: '文件 "{name}" 未找到!',
  msgFileSecured: '安全限制，为了防止读取文件 "{name}".',
  msgFileNotReadable: '文件 "{name}" 不可读.',
  msgFilePreviewAborted: '取消 "{name}" 的预览.',
  msgFilePreviewError: '读取 "{name}" 时出现了一个错误.',
  msgInvalidFileName: '文件名 "{name}" 包含非法字符.',
  msgInvalidFileType: '不正确的类型 "{name}". 只支持 "{types}" 类型的文件.',
  msgInvalidFileExtension: '不正确的文件扩展名 "{name}". 只支持 "{extensions}" 的文件扩展名.',
  msgFileTypes: {
    'image': 'image',
    'html': 'HTML',
    'text': 'text',
    'video': 'video',
    'audio': 'audio',
    'flash': 'flash',
    'pdf': 'PDF',
    'object': 'object'
  },
  msgUploadAborted: '该文件上传被中止',
  msgUploadThreshold: '处理中...',
  msgUploadBegin: '正在初始化...',
  msgUploadEnd: '完成',
  msgUploadEmpty: '无效的文件上传.',
  msgUploadError: '上传出错',
  msgValidationError: '验证错误',
  msgLoading: '加载第 {index} 文件 共 {files} &hellip;',
  msgProgress: '加载第 {index} 文件 共 {files} - {name} - {percent}% 完成.',
  msgSelected: '{n} {files} 选中',
  msgFoldersNotAllowed: '只支持拖拽文件! 跳过 {n} 拖拽的文件夹.',
  msgImageWidthSmall: '图像文件的"{name}"的宽度必须是至少{size}像素.',
  msgImageHeightSmall: '图像文件的"{name}"的高度必须至少为{size}像素.',
  msgImageWidthLarge: '图像文件"{name}"的宽度不能超过{size}像素.',
  msgImageHeightLarge: '图像文件"{name}"的高度不能超过{size}像素.',
  msgImageResizeError: '无法获取的图像尺寸调整。',
  msgImageResizeException: '调整图像大小时发生错误。<pre>{errors}</pre>',
  msgAjaxError: '{operation} 发生错误. 请重试!',
  msgAjaxProgressError: '{operation} 失败',
  ajaxOperations: {
    deleteThumb: '删除文件',
    uploadThumb: '上传文件',
    uploadBatch: '批量上传',
    uploadExtra: '表单数据上传'
  },
  dropZoneTitle: '',
  dropZoneClickTitle: '(点击{files}按钮选择文件)',
  fileActionSettings: {
    removeTitle: '删除文件',
    uploadTitle: '上传文件',
    uploadRetryTitle: '重试',
    zoomTitle: '查看详情',
    dragTitle: '移动 / 重置',
    indicatorNewTitle: '没有上传',
    indicatorSuccessTitle: '上传',
    indicatorErrorTitle: '上传错误',
    indicatorLoadingTitle: '上传 ...'
  },
  previewZoomButtonTitles: {
    prev: '预览上一个文件',
    next: '预览下一个文件',
    toggleheader: '缩放',
    fullscreen: '全屏',
    borderless: '无边界模式',
    close: '关闭当前预览'
  }
};
$axios.create({
  baseURL: 'http://192.168.1.229:7036/',
  headers: 'Access-Control-Allow-Origin:*'
});
new Vue({
  el: '#app',
  store,
  router,
  components: {App, videoPlayer},
  template: '<App/>'
});
