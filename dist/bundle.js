/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/body.jpg */ "./src/assets/body.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Global Styles */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: rgba(255, 255, 255, 0.062);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #2b2b2b94;\r\n  border-radius: 5px;\r\n}\r\n\r\n:root {\r\n  --primary-green: hwb(113 41% 7% / 0.767);\r\n  --background-grey: #1d1d1d;\r\n  --text-grey: #919191;\r\n  --header-font: 'Poppins', sans-serif;\r\n  --body-font: 'Raleway', sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: var(--body-font);\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.mainwrapper {\r\n  border: rgba(222, 184, 135, 0.671) 5px solid;\r\n  box-shadow: 0 0 20px 10px rgb(243, 125, 180);\r\n  width: 90%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  background-color: rgba(149, 155, 158, 0.842);\r\n}\r\n\r\n.topHead {\r\n  height: 60px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 2em;\r\n  background-color: rgb(23, 23, 26);\r\n}\r\n\r\n.logo img {\r\n  padding: 0.5em 0;\r\n  height: 3rem;\r\n  transition: 1s;\r\n}\r\n\r\n.logo img:hover {\r\n  height: 5rem;\r\n  cursor: pointer;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  height: 20px;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  gap: 3rem;\r\n}\r\n\r\nnav ul li {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li a {\r\n  text-transform: capitalize;\r\n  text-decoration: none;\r\n  color: rgb(214, 243, 247);\r\n  border: none;\r\n  transition: ease 0.6s;\r\n}\r\n\r\nnav ul li a:hover {\r\n  color: rgb(236, 79, 52);\r\n  font-size: 20px;\r\n}\r\n\r\nform#idform {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.search {\r\n  width: 70%;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 10px;\r\n  margin-left: 3rem;\r\n  font-size: 1rem;\r\n  color: var(--primary-green);\r\n}\r\n\r\n.search:focus {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n/* Movie section styles */\r\n\r\nh2 {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.movie-section-title {\r\n  background-color: rgba(66, 55, 55, 0.76);\r\n  text-align: center;\r\n  color: #fff;\r\n  padding: 1em 1.2em 0;\r\n  margin-bottom: 1rem;\r\n  height: 11rem;\r\n}\r\n\r\n.movie-section-title span {\r\n  font-size: 1.15em;\r\n  font-weight: 700;\r\n}\r\n\r\n.fa-star {\r\n  color: var(--primary-green);\r\n  padding-right: 0.4em;\r\n}\r\n\r\n.movie-list {\r\n  padding: 1em 0;\r\n}\r\n\r\n.movie-list span {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.countsize {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nspan.showhead {\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n  color: rgb(221, 61, 154);\r\n}\r\n\r\n.showdetail {\r\n  color: #cdd2d6;\r\n}\r\n\r\n.showsize {\r\n  color: #c0c7c7;\r\n}\r\n\r\n.movies {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  color: #fff;\r\n  overflow-y: auto;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 23% 23% 23% 23%;\r\n  grid-gap: 20px 20px;\r\n  grid-auto-flow: row;\r\n  padding-bottom: 1.5em;\r\n}\r\n\r\n/* Movie Wrapper overlay styles */\r\n.movie-image-div {\r\n  position: relative;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movie-image-div:hover {\r\n  border: 4px solid var(--primary-green);\r\n}\r\n\r\n.details-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  font-family: var(--body-font);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity 0.35s;\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.details-overlay > * {\r\n  transform: translateY(50px);\r\n  transition: transform 2s;\r\n}\r\n\r\n.details-overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.details-overlay:hover > * {\r\n  transform: translateY(0);\r\n}\r\n\r\n.movie-image {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.overlay-star {\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n.movie-overlay-rating {\r\n  padding-bottom: 1.1em;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-overlay-genre {\r\n  padding-bottom: 1.1em;\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.ovelay-details-btn {\r\n  color: #fff;\r\n  padding: 0.5em 1.3em;\r\n  background: var(--primary-green);\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Movie Wrapper styles */\r\n.movie-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.8em;\r\n}\r\n\r\n.movie-title {\r\n  height: 42px;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 1em;\r\n  align-items: center;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.movie-likes {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.commentBtn {\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  background: #3d3a39;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  box-shadow: 0 8px 16px #23332c3d;\r\n}\r\n\r\n.commentBtn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n/* Movie Modal styles */\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(32, 32, 32, 0.95);\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.35s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-basis: 60%;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  gap: 3rem;\r\n  width: 55vw;\r\n  height: 95%;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\r\n  overflow: auto;\r\n  cursor: default;\r\n  margin: 5em;\r\n  padding: 3em;\r\n}\r\n\r\n/* PopUp styles */\r\n.popUp-button {\r\n  width: 40%;\r\n  margin: 1rem;\r\n  background-color: var(--primary-green);\r\n  border: 2px solid #4b962b;\r\n  border-radius: 20px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  font-family: inherit;\r\n}\r\n\r\n.popUp-button:hover {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n.movieCard {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.movieCard-img {\r\n  width: 100%;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movieContent {\r\n  width: 40%;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popUp-title {\r\n  font-size: 3em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-Genre {\r\n  color: #4b962b;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-releaseDate {\r\n  font-size: 1rem;\r\n  color: #ffffff81;\r\n  padding-bottom: 2em;\r\n}\r\n\r\n.popUp-summary {\r\n  color: #ccc;\r\n  margin: 0 auto;\r\n  line-height: 1.4em;\r\n  letter-spacing: 0.8px;\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\n.subtitle-button {\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  margin-bottom: 4em;\r\n}\r\n\r\n.readMoreBtn {\r\n  width: 40%;\r\n  margin: 1rem 0;\r\n  background-color: hsl(0, 54%, 65%);\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  color: #414141;\r\n}\r\n\r\n.close-proj-modal {\r\n  border-radius: 50%;\r\n  padding: 0.5em;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 2px solid #555;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n}\r\n\r\n.close-proj-modal:hover {\r\n  border: 2px solid #fff;\r\n  background-color: #414141;\r\n  color: #fff;\r\n}\r\n\r\n.close-proj-modal::before {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  width: 2px;\r\n  left: 12px;\r\n  top: 5px;\r\n  bottom: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-proj-modal::after {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  height: 2px;\r\n  top: 12px;\r\n  left: 5px;\r\n  right: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Modal comments styles */\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 3rem;\r\n  flex-basis: 100%;\r\n  gap: 2rem;\r\n  background-color: #1d1d1d;\r\n}\r\n\r\n.comments-count {\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 1em;\r\n  font-family: var(--header-font);\r\n}\r\n\r\n.display-comments {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-container {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #171717;\r\n  padding: 1em;\r\n}\r\n\r\n.author-thumbnail {\r\n  flex: none;\r\n  margin-right: 12px;\r\n}\r\n\r\n.user-name-link {\r\n  background-color: #00579c;\r\n  border-radius: 99px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.8em;\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  width: 1.6em;\r\n}\r\n\r\n.user-name-link span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.user-name {\r\n  background-color: #2b2b2b;\r\n}\r\n\r\n.comment-main {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n#comment-header {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n#header-author {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: baseline;\r\n}\r\n\r\n#author-text {\r\n  margin-right: 10px;\r\n  color: #919191;\r\n  margin-bottom: 2px;\r\n  display: block;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n#comment-date {\r\n  color: #606060;\r\n  font-family: 'Roboto', 'Arial', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 400;\r\n}\r\n\r\n#comment-text {\r\n  color: #fff;\r\n  word-wrap: break-word;\r\n  font-size: 14px;\r\n  height: 20px;\r\n  line-height: 1.4rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-comment {\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.add-comment h2 {\r\n  display: block;\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\n.add-comment-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.fa-message {\r\n  padding-right: 1em;\r\n  color: var(--primary-green);\r\n}\r\n\r\n/* Comment form styles */\r\n.add-comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  overflow: hidden;\r\n  background-color: #171717;\r\n  padding: 2em;\r\n  border-radius: 10px;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: var(--header-font);\r\n  width: 100%;\r\n  color: #fff;\r\n  border: 1px solid #1d1d1d;\r\n  background: #2b2b2b;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n}\r\n\r\ntextarea {\r\n  height: 100px;\r\n  max-width: 100%;\r\n  resize: none;\r\n}\r\n\r\ninput,\r\ntextarea:hover {\r\n  -webkit-transition: border-color 0.3s ease-in-out;\r\n  -moz-transition: border-color 0.3s ease-in-out;\r\n  transition: border-color 0.3s ease-in-out;\r\n  border: 1px solid var(--primary-green);\r\n}\r\n\r\n.comment-btn {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  border: none;\r\n  background: var(--primary-green);\r\n  color: #fff;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-btn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n.comment-btn:hover {\r\n  background: #43a047;\r\n  -webkit-transition: background 0.3s ease-in-out;\r\n  -moz-transition: background 0.3s ease-in-out;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n/* Footer Styles */\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5em;\r\n  margin-top: 20px;\r\n  background: rgba(0, 0, 0, 0.466);\r\n}\r\n\r\nfooter p {\r\n  padding: 2em;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  font-size: 1.3em;\r\n  color: #fff;\r\n}\r\n\r\n.footer-link {\r\n  color: var(--primary-green);\r\n  font-size: 1.1em;\r\n}\r\n\r\n/* Mobile Styles */\r\n@media screen and (max-width: 800px) {\r\n  .topHead {\r\n    width: auto;\r\n  }\r\n\r\n  .movies {\r\n    display: grid;\r\n    grid-gap: 20px 20px;\r\n    grid-template-columns: 100%;\r\n  }\r\n\r\n  #idform {\r\n    display: none;\r\n  }\r\n\r\n  .buttonDiv {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .popUp-button {\r\n    width: auto;\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  .popUp-title {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .subtitle-button {\r\n    width: auto;\r\n  }\r\n\r\n  .movie-overlay-rating {\r\n    font-size: 1.4em;\r\n  }\r\n\r\n  .popUp-summary {\r\n    width: auto;\r\n  }\r\n\r\n  .modal-dialog {\r\n    width: 85vw;\r\n    padding: 1em;\r\n    margin: 0.5em;\r\n    gap: 1em;\r\n    flex-basis: 90%;\r\n  }\r\n\r\n  .comment-section {\r\n    flex-direction: column;\r\n    padding: 0;\r\n  }\r\n\r\n  .readMoreBtn {\r\n    width: auto;\r\n  }\r\n\r\n  .movieContent {\r\n    width: auto;\r\n  }\r\n\r\n  .comment-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .display-comments {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 325px) {\r\n  nav,\r\n  span.showdetail,\r\n  span.showsize {\r\n    display: none;\r\n  }\r\n\r\n  .topHead {\r\n    width: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: rgba(255, 255, 255, 0.062);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #2b2b2b94;\r\n  border-radius: 5px;\r\n}\r\n\r\n:root {\r\n  --primary-green: hwb(113 41% 7% / 0.767);\r\n  --background-grey: #1d1d1d;\r\n  --text-grey: #919191;\r\n  --header-font: 'Poppins', sans-serif;\r\n  --body-font: 'Raleway', sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: var(--body-font);\r\n  background-image: url(./assets/body.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.mainwrapper {\r\n  border: rgba(222, 184, 135, 0.671) 5px solid;\r\n  box-shadow: 0 0 20px 10px rgb(243, 125, 180);\r\n  width: 90%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  background-color: rgba(149, 155, 158, 0.842);\r\n}\r\n\r\n.topHead {\r\n  height: 60px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 2em;\r\n  background-color: rgb(23, 23, 26);\r\n}\r\n\r\n.logo img {\r\n  padding: 0.5em 0;\r\n  height: 3rem;\r\n  transition: 1s;\r\n}\r\n\r\n.logo img:hover {\r\n  height: 5rem;\r\n  cursor: pointer;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  height: 20px;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  gap: 3rem;\r\n}\r\n\r\nnav ul li {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li a {\r\n  text-transform: capitalize;\r\n  text-decoration: none;\r\n  color: rgb(214, 243, 247);\r\n  border: none;\r\n  transition: ease 0.6s;\r\n}\r\n\r\nnav ul li a:hover {\r\n  color: rgb(236, 79, 52);\r\n  font-size: 20px;\r\n}\r\n\r\nform#idform {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.search {\r\n  width: 70%;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 10px;\r\n  margin-left: 3rem;\r\n  font-size: 1rem;\r\n  color: var(--primary-green);\r\n}\r\n\r\n.search:focus {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n/* Movie section styles */\r\n\r\nh2 {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.movie-section-title {\r\n  background-color: rgba(66, 55, 55, 0.76);\r\n  text-align: center;\r\n  color: #fff;\r\n  padding: 1em 1.2em 0;\r\n  margin-bottom: 1rem;\r\n  height: 11rem;\r\n}\r\n\r\n.movie-section-title span {\r\n  font-size: 1.15em;\r\n  font-weight: 700;\r\n}\r\n\r\n.fa-star {\r\n  color: var(--primary-green);\r\n  padding-right: 0.4em;\r\n}\r\n\r\n.movie-list {\r\n  padding: 1em 0;\r\n}\r\n\r\n.movie-list span {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.countsize {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nspan.showhead {\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n  color: rgb(221, 61, 154);\r\n}\r\n\r\n.showdetail {\r\n  color: #cdd2d6;\r\n}\r\n\r\n.showsize {\r\n  color: #c0c7c7;\r\n}\r\n\r\n.movies {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  color: #fff;\r\n  overflow-y: auto;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 23% 23% 23% 23%;\r\n  grid-gap: 20px 20px;\r\n  grid-auto-flow: row;\r\n  padding-bottom: 1.5em;\r\n}\r\n\r\n/* Movie Wrapper overlay styles */\r\n.movie-image-div {\r\n  position: relative;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movie-image-div:hover {\r\n  border: 4px solid var(--primary-green);\r\n}\r\n\r\n.details-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  font-family: var(--body-font);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity 0.35s;\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.details-overlay > * {\r\n  transform: translateY(50px);\r\n  transition: transform 2s;\r\n}\r\n\r\n.details-overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.details-overlay:hover > * {\r\n  transform: translateY(0);\r\n}\r\n\r\n.movie-image {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.overlay-star {\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n.movie-overlay-rating {\r\n  padding-bottom: 1.1em;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-overlay-genre {\r\n  padding-bottom: 1.1em;\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.ovelay-details-btn {\r\n  color: #fff;\r\n  padding: 0.5em 1.3em;\r\n  background: var(--primary-green);\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Movie Wrapper styles */\r\n.movie-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.8em;\r\n}\r\n\r\n.movie-title {\r\n  height: 42px;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 1em;\r\n  align-items: center;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.movie-likes {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.commentBtn {\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  background: #3d3a39;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  box-shadow: 0 8px 16px #23332c3d;\r\n}\r\n\r\n.commentBtn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n/* Movie Modal styles */\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(32, 32, 32, 0.95);\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.35s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-basis: 60%;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  gap: 3rem;\r\n  width: 55vw;\r\n  height: 95%;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\r\n  overflow: auto;\r\n  cursor: default;\r\n  margin: 5em;\r\n  padding: 3em;\r\n}\r\n\r\n/* PopUp styles */\r\n.popUp-button {\r\n  width: 40%;\r\n  margin: 1rem;\r\n  background-color: var(--primary-green);\r\n  border: 2px solid #4b962b;\r\n  border-radius: 20px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  font-family: inherit;\r\n}\r\n\r\n.popUp-button:hover {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n.movieCard {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.movieCard-img {\r\n  width: 100%;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movieContent {\r\n  width: 40%;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popUp-title {\r\n  font-size: 3em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-Genre {\r\n  color: #4b962b;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-releaseDate {\r\n  font-size: 1rem;\r\n  color: #ffffff81;\r\n  padding-bottom: 2em;\r\n}\r\n\r\n.popUp-summary {\r\n  color: #ccc;\r\n  margin: 0 auto;\r\n  line-height: 1.4em;\r\n  letter-spacing: 0.8px;\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\n.subtitle-button {\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  margin-bottom: 4em;\r\n}\r\n\r\n.readMoreBtn {\r\n  width: 40%;\r\n  margin: 1rem 0;\r\n  background-color: hsl(0, 54%, 65%);\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  color: #414141;\r\n}\r\n\r\n.close-proj-modal {\r\n  border-radius: 50%;\r\n  padding: 0.5em;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 2px solid #555;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n}\r\n\r\n.close-proj-modal:hover {\r\n  border: 2px solid #fff;\r\n  background-color: #414141;\r\n  color: #fff;\r\n}\r\n\r\n.close-proj-modal::before {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  width: 2px;\r\n  left: 12px;\r\n  top: 5px;\r\n  bottom: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-proj-modal::after {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  height: 2px;\r\n  top: 12px;\r\n  left: 5px;\r\n  right: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Modal comments styles */\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 3rem;\r\n  flex-basis: 100%;\r\n  gap: 2rem;\r\n  background-color: #1d1d1d;\r\n}\r\n\r\n.comments-count {\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 1em;\r\n  font-family: var(--header-font);\r\n}\r\n\r\n.display-comments {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-container {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #171717;\r\n  padding: 1em;\r\n}\r\n\r\n.author-thumbnail {\r\n  flex: none;\r\n  margin-right: 12px;\r\n}\r\n\r\n.user-name-link {\r\n  background-color: #00579c;\r\n  border-radius: 99px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.8em;\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  width: 1.6em;\r\n}\r\n\r\n.user-name-link span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.user-name {\r\n  background-color: #2b2b2b;\r\n}\r\n\r\n.comment-main {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n#comment-header {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n#header-author {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: baseline;\r\n}\r\n\r\n#author-text {\r\n  margin-right: 10px;\r\n  color: #919191;\r\n  margin-bottom: 2px;\r\n  display: block;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n#comment-date {\r\n  color: #606060;\r\n  font-family: 'Roboto', 'Arial', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 400;\r\n}\r\n\r\n#comment-text {\r\n  color: #fff;\r\n  word-wrap: break-word;\r\n  font-size: 14px;\r\n  height: 20px;\r\n  line-height: 1.4rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-comment {\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.add-comment h2 {\r\n  display: block;\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\n.add-comment-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.fa-message {\r\n  padding-right: 1em;\r\n  color: var(--primary-green);\r\n}\r\n\r\n/* Comment form styles */\r\n.add-comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  overflow: hidden;\r\n  background-color: #171717;\r\n  padding: 2em;\r\n  border-radius: 10px;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: var(--header-font);\r\n  width: 100%;\r\n  color: #fff;\r\n  border: 1px solid #1d1d1d;\r\n  background: #2b2b2b;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n}\r\n\r\ntextarea {\r\n  height: 100px;\r\n  max-width: 100%;\r\n  resize: none;\r\n}\r\n\r\ninput,\r\ntextarea:hover {\r\n  -webkit-transition: border-color 0.3s ease-in-out;\r\n  -moz-transition: border-color 0.3s ease-in-out;\r\n  transition: border-color 0.3s ease-in-out;\r\n  border: 1px solid var(--primary-green);\r\n}\r\n\r\n.comment-btn {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  border: none;\r\n  background: var(--primary-green);\r\n  color: #fff;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-btn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n.comment-btn:hover {\r\n  background: #43a047;\r\n  -webkit-transition: background 0.3s ease-in-out;\r\n  -moz-transition: background 0.3s ease-in-out;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n/* Footer Styles */\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5em;\r\n  margin-top: 20px;\r\n  background: rgba(0, 0, 0, 0.466);\r\n}\r\n\r\nfooter p {\r\n  padding: 2em;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  font-size: 1.3em;\r\n  color: #fff;\r\n}\r\n\r\n.footer-link {\r\n  color: var(--primary-green);\r\n  font-size: 1.1em;\r\n}\r\n\r\n/* Mobile Styles */\r\n@media screen and (max-width: 800px) {\r\n  .topHead {\r\n    width: auto;\r\n  }\r\n\r\n  .movies {\r\n    display: grid;\r\n    grid-gap: 20px 20px;\r\n    grid-template-columns: 100%;\r\n  }\r\n\r\n  #idform {\r\n    display: none;\r\n  }\r\n\r\n  .buttonDiv {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .popUp-button {\r\n    width: auto;\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  .popUp-title {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .subtitle-button {\r\n    width: auto;\r\n  }\r\n\r\n  .movie-overlay-rating {\r\n    font-size: 1.4em;\r\n  }\r\n\r\n  .popUp-summary {\r\n    width: auto;\r\n  }\r\n\r\n  .modal-dialog {\r\n    width: 85vw;\r\n    padding: 1em;\r\n    margin: 0.5em;\r\n    gap: 1em;\r\n    flex-basis: 90%;\r\n  }\r\n\r\n  .comment-section {\r\n    flex-direction: column;\r\n    padding: 0;\r\n  }\r\n\r\n  .readMoreBtn {\r\n    width: auto;\r\n  }\r\n\r\n  .movieContent {\r\n    width: auto;\r\n  }\r\n\r\n  .comment-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .display-comments {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 325px) {\r\n  nav,\r\n  span.showdetail,\r\n  span.showsize {\r\n    display: none;\r\n  }\r\n\r\n  .topHead {\r\n    width: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/comments-handler.js":
/*!*****************************************!*\
  !*** ./src/modules/comments-handler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
// @ts-ignore
const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'HqxG6qkpi3DhZGaAkW1w';
const endPoint = `${URL}/apps/${appID}/comments/`;

const postComment = async (buttonId, userName, userComment) => {
  const res = await fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({
      item_id: buttonId,
      username: userName.value,
      comment: userComment.value,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return res.text();
};

const getComments = async (id) => {
  const response = await fetch(`${endPoint}?item_id=${id}`);
  return response.json();
};




/***/ }),

/***/ "./src/modules/display-comments.js":
/*!*****************************************!*\
  !*** ./src/modules/display-comments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countComments": () => (/* binding */ countComments),
/* harmony export */   "displayComments": () => (/* binding */ displayComments)
/* harmony export */ });
const displayComments = (commentsDiv, comments) => {
  if (comments.length >= 1) {
    commentsDiv.innerHTML = `<h3 class=comments-count> ${comments.length} Comments</h3>`;
    comments.forEach((comment) => {
      const commentContainer = document.createElement('div');
      commentContainer.className = 'comment-container';
      const userThumbnail = document.createElement('div');
      userThumbnail.className = 'author-thumbnail';
      const thumbnailLink = document.createElement('a');
      thumbnailLink.className = 'user-name-link';
      thumbnailLink.href = '#';
      const thumbnailContent = document.createElement('span');
      thumbnailContent.textContent = 'U';
      thumbnailLink.appendChild(thumbnailContent);
      userThumbnail.appendChild(thumbnailLink);

      const commentMain = document.createElement('div');
      commentMain.className = 'comment-main';
      commentMain.innerHTML = `
       <div id="comment-header">
          <div id="header-author">
             <h3>
              <a href="" id="author-text">
                <span>${comment.username}</span>
              </a>
             </h3>
             <a href="" id="comment-date">
                <span>${comment.creation_date}</span>
             </a>
          </div>
       </div>
       <div id="comment-text">
          <p>${comment.comment}</p>
       </div>
      `;
      commentContainer.append(userThumbnail, commentMain);
      commentsDiv.append(commentContainer);
    });
  }
};

const countComments = (element, comments) => {
  element.textContent = '';
  if (comments.length >= 1) {
    element.textContent = `${comments.length} Comments`;
  } else {
    element.textContent = '0 Comments';
  }
};




/***/ }),

/***/ "./src/modules/display-movies.js":
/*!***************************************!*\
  !*** ./src/modules/display-movies.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likes_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes-handler.js */ "./src/modules/likes-handler.js");


const movieContainer = document.querySelector('.movies');
const displayMovies = (sampleMovies) => {
  sampleMovies.forEach((movie) => {
    const movieWrapper = document.createElement('div');
    movieWrapper.id = `movie_${movie.id}`;
    movieWrapper.className = 'movie-wrapper';
    const movieImgDiv = document.createElement('div');
    movieImgDiv.className = 'movie-image-div';
    const movieImg = document.createElement('img');
    movieImg.src = movie.image.medium;
    movieImg.className = 'movie-image';
    movieImgDiv.appendChild(movieImg);
    const movieImgOverlay = document.createElement('div');
    movieImgOverlay.className = 'details-overlay';
    const ratingStar = document.createElement('i');
    ratingStar.classList.add('fa-solid');
    ratingStar.classList.add('fa-star');
    ratingStar.classList.add('overlay-star');
    const movieRating = document.createElement('span');
    movieRating.className = 'movie-overlay-rating';
    if (movie.rating.average) {
      movieRating.innerHTML = `${movie.rating.average} / 10`;
    } else {
      movieRating.innerHTML = '0 / 10';
    }
    const movieGenre = document.createElement('span');
    movieGenre.className = 'movie-overlay-genre';
    movieGenre.innerHTML = `${movie.genres[0]}`;
    const movieDetailsBtn = document.createElement('button');
    movieDetailsBtn.className = 'ovelay-details-btn';
    movieDetailsBtn.innerHTML = 'View Details';
    movieImgOverlay.append(
      ratingStar,
      movieRating,
      movieGenre,
      movieDetailsBtn,
    );
    movieImgDiv.appendChild(movieImgOverlay);
    movieWrapper.appendChild(movieImgDiv);
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = `${movie.name}`;
    movieTitle.className = 'movie-title';
    movieWrapper.appendChild(movieTitle);
    const likesContainer = document.createElement('div');
    likesContainer.className = 'likes-container';
    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fa-solid');
    likeBtn.classList.add('fa-heart');
    likeBtn.id = `${movieWrapper.id}`;
    likesContainer.appendChild(likeBtn);
    const movieLikes = document.createElement('span');
    movieLikes.className = 'movie-likes';
    movieLikes.textContent = '0 likes';
    likesContainer.appendChild(movieLikes);
    movieWrapper.appendChild(likesContainer);
    const commentBtn = document.createElement('button');
    commentBtn.innerHTML = 'Comment on Movie';
    commentBtn.className = 'commentBtn';
    movieWrapper.appendChild(commentBtn);
    const popLikes = async () => {
      const resArray = await (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
      (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(likeBtn, resArray, movieLikes);
    };
    movieContainer.appendChild(movieWrapper);
    likeBtn.addEventListener('click', async (e) => {
      const movie = e.target;
      // @ts-ignore
      await (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.postLike)(movie.id);
      const resArray = await (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
      (0,_likes_handler_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(movie, resArray, movieLikes);
    });
    popLikes();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);


/***/ }),

/***/ "./src/modules/get-movies.js":
/*!***********************************!*\
  !*** ./src/modules/get-movies.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const endPoint = 'https://api.tvmaze.com/shows?page=33';
const getMovies = async () => {
  const res = await fetch(endPoint);
  const data = res.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);

/***/ }),

/***/ "./src/modules/likes-handler.js":
/*!**************************************!*\
  !*** ./src/modules/likes-handler.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postLike": () => (/* binding */ postLike),
/* harmony export */   "updateLikes": () => (/* binding */ updateLikes)
/* harmony export */ });
const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'HqxG6qkpi3DhZGaAkW1w';
const endPoint = `${URL}/apps/${appID}/likes/`;
const postLike = async (item) => {
  const response = await fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response.text();
};
const getLikes = async () => {
  const response = await fetch(endPoint);
  return response.json();
};
const updateLikes = (movie, resArray, movieLikes) => {
  resArray.forEach((element) => {
    if (element.item_id === movie.id) {
      movieLikes.innerHTML = `${element.likes} likes`;
    }
  });
};



/***/ }),

/***/ "./src/modules/movie-counter.js":
/*!**************************************!*\
  !*** ./src/modules/movie-counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ countMovies)
/* harmony export */ });
function countMovies(sampleMovies) {
  return sampleMovies.length;
}

/***/ }),

/***/ "./src/modules/movie-modal.js":
/*!************************************!*\
  !*** ./src/modules/movie-modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comments_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-handler.js */ "./src/modules/comments-handler.js");
/* harmony import */ var _display_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-comments.js */ "./src/modules/display-comments.js");



const isVisible = 'is-visible';

const movieModal = async (commentButtons, sampleMovies) => {
  commentButtons.forEach((button, i) => {
    button.addEventListener('click', async () => {
      const modal = document.createElement('article');
      modal.className = 'modal';

      const popUpDiv = document.createElement('div');
      popUpDiv.className = 'modal-dialog';
      modal.classList.add(isVisible);
      modal.appendChild(popUpDiv);

      const movieImgDiv = document.createElement('div');
      const movieImg = document.createElement('img');
      const buttonDiv = document.createElement('div');
      const movieDownloadBtn = document.createElement('button');
      const movieWatchBtn = document.createElement('button');
      movieImgDiv.className = 'movieCard';
      movieImg.className = 'movieCard-img';
      movieImg.src = `${sampleMovies[i].image.original}`;
      buttonDiv.className = 'buttonDiv';
      movieDownloadBtn.className = 'popUp-button';
      movieDownloadBtn.innerHTML = '<i class="fa-solid fa-angles-down"></i>Download';
      movieWatchBtn.className = 'popUp-button';
      movieWatchBtn.innerHTML = 'Watch Now';
      movieImgDiv.appendChild(movieImg);
      buttonDiv.appendChild(movieDownloadBtn);
      buttonDiv.appendChild(movieWatchBtn);
      movieImgDiv.appendChild(buttonDiv);
      popUpDiv.appendChild(movieImgDiv);

      const movieContentDiv = document.createElement('div');
      const movieTitle = document.createElement('h1');
      const movieGenre = document.createElement('h2');
      const movieReleaseDate = document.createElement('h2');
      const movieNetwork = document.createElement('h1');
      const downloadSubtitle = document.createElement('a');
      const ratingStar = document.createElement('i');
      const movieRating = document.createElement('span');
      const movieSummary = document.createElement('p');
      movieContentDiv.className = 'movieContent';
      movieTitle.textContent = `${sampleMovies[i].name}`;
      movieTitle.className = 'popUp-title';
      movieGenre.innerHTML = `${sampleMovies[i].genres[0]}`;
      movieGenre.className = 'popUp-Genre';
      movieReleaseDate.innerHTML = `${sampleMovies[i].premiered}`;
      movieReleaseDate.className = 'popUp-releaseDate';
      movieNetwork.innerHTML = '';
      movieNetwork.className = '';
      downloadSubtitle.href = '#';
      downloadSubtitle.innerHTML = '<i class="fa-solid fa-angles-down"></i> Download Subtitles';
      downloadSubtitle.className = 'subtitle-button';
      ratingStar.classList.add('fa-solid');
      ratingStar.classList.add('fa-star');
      ratingStar.classList.add('overlay-star');
      movieRating.className = 'movie-overlay-rating';
      if (sampleMovies[i].rating.average) {
        movieRating.innerHTML = `${sampleMovies[i].rating.average} / 10`;
      } else {
        movieRating.innerHTML = '0 / 10';
      }
      movieSummary.innerHTML = `${sampleMovies[i].summary.substring(
        0,
        200,
      )}......`;
      movieSummary.className = 'popUp-summary';
      movieContentDiv.appendChild(movieTitle);
      movieContentDiv.appendChild(movieGenre);
      movieContentDiv.appendChild(movieReleaseDate);
      movieContentDiv.appendChild(downloadSubtitle);
      movieContentDiv.appendChild(ratingStar);
      movieContentDiv.appendChild(movieRating);
      movieContentDiv.appendChild(movieSummary);
      popUpDiv.appendChild(movieContentDiv);

      const closeModalBtn = document.createElement('button');
      closeModalBtn.innerHTML = '';
      closeModalBtn.className = 'close-proj-modal';
      popUpDiv.appendChild(closeModalBtn);
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('is-visible');
        document.body.style.overflow = 'auto';
      });

      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
          modal.classList.remove('is-visible');
          document.body.style.overflow = 'auto';
        }
      });

      document.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal.is-visible')) {
          modal.classList.remove('is-visible');
          document.body.style.overflow = 'auto';
        }
      });

      // Comments
      const commentSection = document.createElement('section');
      commentSection.className = 'comment-section';
      const formDiv = document.createElement('div');
      formDiv.className = 'add-comment';
      const formHeaderDiv = document.createElement('div');
      formHeaderDiv.className = 'add-comment-header';
      const formHeader = document.createElement('h2');
      const formIcon = document.createElement('i');
      formIcon.classList.add('fa-solid');
      formIcon.classList.add('fa-message');
      formHeader.innerHTML = 'Add your comment';
      formHeaderDiv.append(formIcon, formHeader);
      const commentForm = document.createElement('form');
      commentForm.className = 'add-comment-form';

      const userName = document.createElement('input');
      userName.className = 'user-name';
      userName.placeholder = 'Username...';
      const userComment = document.createElement('textarea');
      userComment.className = 'user-comment';
      userComment.placeholder = 'Share your comments ...';
      const commentBtn = document.createElement('button');
      commentBtn.className = 'comment-btn';
      commentBtn.textContent = 'Submit Comment';
      commentBtn.id = `movie_cmt_${sampleMovies[i].id}`;
      commentForm.append(userName, userComment, commentBtn);
      formDiv.append(formHeaderDiv, commentForm);

      const commentsDiv = document.createElement('div');
      commentsDiv.className = 'display-comments';
      const comments = await (0,_comments_handler_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(commentBtn.id);
      const commentsCount = document.createElement('h3');
      commentsCount.className = 'comments-count';
      commentsDiv.append(commentsCount);
      (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__.countComments)(commentsCount, comments);
      (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(commentsDiv, comments);

      commentBtn.addEventListener('click', async (e) => {
        const resMsg = document.createElement('span');
        if (userName.value === '' || userComment.value === '') {
          e.preventDefault();
          resMsg.className = 'error-msg';
          resMsg.innerText = 'Please fill out your Username and add a comment';
          commentBtn.parentNode.insertBefore(resMsg, commentBtn);
          setTimeout(() => {
            commentForm.removeChild(resMsg);
          }, 2000);
        } else {
          e.preventDefault();
          resMsg.className = 'success-msg';
          resMsg.innerText = 'Successfully added your comment';
          commentBtn.parentNode.insertBefore(resMsg, commentBtn);
          setTimeout(() => {
            commentForm.removeChild(resMsg);
          }, 2000);
          await (0,_comments_handler_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(commentBtn.id, userName, userComment);
          const myComments = await (0,_comments_handler_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(commentBtn.id);
          (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__.countComments)(commentsCount, myComments);
          (0,_display_comments_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(commentsDiv, myComments);
          commentForm.reset();
        }
      });

      commentSection.append(formDiv, commentsDiv);
      popUpDiv.appendChild(commentSection);
      const readMore = document.createElement('button');
      readMore.innerHTML = 'Read More';
      readMore.className = 'readMoreBtn';
      movieContentDiv.appendChild(readMore);
      readMore.addEventListener('click', () => {
        if (readMore.innerHTML === 'Read More') {
          readMore.innerHTML = 'Read Less';
          movieSummary.innerHTML = `${sampleMovies[i].summary}`;
        } else {
          readMore.innerHTML = 'Read More';
          movieSummary.innerHTML = `${sampleMovies[i].summary.substring(
            0,
            400,
          )}......`;
        }
      });
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieModal);


/***/ }),

/***/ "./src/assets/body.jpg":
/*!*****************************!*\
  !*** ./src/assets/body.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/58ddbb5b090867f8b14d.jpg";

/***/ }),

/***/ "./src/assets/showlogoo.jpg":
/*!**********************************!*\
  !*** ./src/assets/showlogoo.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/5f4f8935e81dc1209b17.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/Showmax-Movies/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_get_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get-movies.js */ "./src/modules/get-movies.js");
/* harmony import */ var _modules_display_movies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display-movies.js */ "./src/modules/display-movies.js");
/* harmony import */ var _modules_movie_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/movie-modal.js */ "./src/modules/movie-modal.js");
/* harmony import */ var _modules_movie_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/movie-counter.js */ "./src/modules/movie-counter.js");
/* harmony import */ var _assets_showlogoo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/showlogoo.jpg */ "./src/assets/showlogoo.jpg");





// @ts-ignore


window.addEventListener('load', async () => {
  const logoImgDiv = document.querySelector('.logo');
  const logoIcon = new Image();
  logoIcon.src = _assets_showlogoo_jpg__WEBPACK_IMPORTED_MODULE_5__;
  logoImgDiv.appendChild(logoIcon);

  const movies = await (0,_modules_get_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const sampleMovies = movies.slice(6, 70);
  await (0,_modules_display_movies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sampleMovies);

  const movieList = document.querySelector('.movie-list');

  movieList.innerHTML = `<span> ${(0,_modules_movie_counter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(sampleMovies)} <span>`;

  const commentButtons = [...document.querySelectorAll('.commentBtn')];
  const viewDetailsButtons = [...document.querySelectorAll('.ovelay-details-btn')];
  (0,_modules_movie_modal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentButtons, sampleMovies);
  (0,_modules_movie_modal_js__WEBPACK_IMPORTED_MODULE_3__["default"])(viewDetailsButtons, sampleMovies);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFB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V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDMkI7QUFDUTtBQUNOO0FBQ0c7QUFDckQ7QUFDMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0RBQUk7QUFDckI7QUFDQTtBQUNBLHVCQUF1QixrRUFBUztBQUNoQztBQUNBLFFBQVEsc0VBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFFQUFXLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1FQUFVO0FBQ1osRUFBRSxtRUFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9jb21tZW50cy1oYW5kbGVyLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL21vZHVsZXMvZGlzcGxheS1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktbW92aWVzLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL21vZHVsZXMvZ2V0LW1vdmllcy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9tb2R1bGVzL2xpa2VzLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9tb3ZpZS1jb3VudGVyLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL21vZHVsZXMvbW92aWUtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYm9keS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgU3R5bGVzICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYyKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiOTQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1ncmVlbjogaHdiKDExMyA0MSUgNyUgLyAwLjc2Nyk7XFxyXFxuICAtLWJhY2tncm91bmQtZ3JleTogIzFkMWQxZDtcXHJcXG4gIC0tdGV4dC1ncmV5OiAjOTE5MTkxO1xcclxcbiAgLS1oZWFkZXItZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1ib2R5LWZvbnQ6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXHJcXG5cXHJcXG4ubWFpbndyYXBwZXIge1xcclxcbiAgYm9yZGVyOiByZ2JhKDIyMiwgMTg0LCAxMzUsIDAuNjcxKSA1cHggc29saWQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAxMHB4IHJnYigyNDMsIDEyNSwgMTgwKTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ5LCAxNTUsIDE1OCwgMC44NDIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wSGVhZCB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAyNik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZzpob3ZlciB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkgYSB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjE0LCAyNDMsIDI0Nyk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlIDAuNnM7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjM2LCA3OSwgNTIpO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtI2lkZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2g6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBzZWN0aW9uIHN0eWxlcyAqL1xcclxcblxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNTUsIDU1LCAwLjc2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMWVtIDEuMmVtIDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUgc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuMTVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1zdGFyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlzdCB7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpc3Qgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5jb3VudHNpemUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5zaG93aGVhZCB7XFxyXFxuICBmb250LXNpemU6IDIuMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogcmdiKDIyMSwgNjEsIDE1NCk7XFxyXFxufVxcclxcblxcclxcbi5zaG93ZGV0YWlsIHtcXHJcXG4gIGNvbG9yOiAjY2RkMmQ2O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3NpemUge1xcclxcbiAgY29sb3I6ICNjMGM3Yzc7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMyUgMjMlIDIzJSAyMyU7XFxyXFxuICBncmlkLWdhcDogMjBweCAyMHB4O1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgV3JhcHBlciBvdmVybGF5IHN0eWxlcyAqL1xcclxcbi5tb3ZpZS1pbWFnZS1kaXYge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWltYWdlLWRpdjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXkgPiAqIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAycztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5OmhvdmVyID4gKiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1zdGFyIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLW92ZXJsYXktZ2VucmUge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtO1xcclxcbiAgZm9udC1zaXplOiAyLjFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlbGF5LWRldGFpbHMtYnRuIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMS4zZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBXcmFwcGVyIHN0eWxlcyAqL1xcclxcbi5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMC44ZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjM2QzYTM5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggIzIzMzMyYzNkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBNb2RhbCBzdHlsZXMgKi9cXHJcXG4ubW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDMyLCAzMiwgMC45NSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5pcy12aXNpYmxlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZGlhbG9nIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBmbGV4LWJhc2lzOiA2MCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgd2lkdGg6IDU1dnc7XFxyXFxuICBoZWlnaHQ6IDk1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NS4zNGRlZywgIzJiMmIyYiA2NSUsICMwMDI0MDAgOTQuMzUlKTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgbWFyZ2luOiA1ZW07XFxyXFxuICBwYWRkaW5nOiAzZW07XFxyXFxufVxcclxcblxcclxcbi8qIFBvcFVwIHN0eWxlcyAqL1xcclxcbi5wb3BVcC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzRiOTYyYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZUNhcmQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25EaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZUNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllQ29udGVudCB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLUdlbnJlIHtcXHJcXG4gIGNvbG9yOiAjNGI5NjJiO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtcmVsZWFzZURhdGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY4MTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1zdW1tYXJ5IHtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsaW5lLWhlaWdodDogMS40ZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWRNb3JlQnRuIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA1NCUsIDY1JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiAjNDE0MTQxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wcm9qLW1vZGFsOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wcm9qLW1vZGFsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG4gIGxlZnQ6IDEycHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICB0b3A6IDEycHg7XFxyXFxuICBsZWZ0OiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBjb21tZW50cyBzdHlsZXMgKi9cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtY291bnQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yLXRodW1ibmFpbCB7XFxyXFxuICBmbGV4OiBub25lO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lLWxpbmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTc5YztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEuOGVtO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB3aWR0aDogMS42ZW07XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5hbWUtbGluayBzcGFuIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5hbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItYXV0aG9yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jYXV0aG9yLXRleHQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgY29sb3I6ICM5MTkxOTE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWRhdGUge1xcclxcbiAgY29sb3I6ICM2MDYwNjA7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC10ZXh0IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQgaDIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtbWVzc2FnZSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgZm9ybSBzdHlsZXMgKi9cXHJcXG4uYWRkLWNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZDFkMWQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcclxcbiAgbWFyZ2luOiAwIDAgNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWE6aG92ZXIge1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwIDAgNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmY0NzBhO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIFN0eWxlcyAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNWVtO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NjYpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgU3R5bGVzICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC50b3BIZWFkIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2lkZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uRGl2IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC1idXR0b24ge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN1YnRpdGxlLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC1zdW1tYXJ5IHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtZGlhbG9nIHtcXHJcXG4gICAgd2lkdGg6IDg1dnc7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjVlbTtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIGZsZXgtYmFzaXM6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlYWRNb3JlQnRuIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzI1cHgpIHtcXHJcXG4gIG5hdixcXHJcXG4gIHNwYW4uc2hvd2RldGFpbCxcXHJcXG4gIHNwYW4uc2hvd3NpemUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcEhlYWQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IseURBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSw0Q0FBNEM7RUFDNUMsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLFdBQVc7QUFDYjs7QUFFQSx5QkFBeUI7O0FBRXpCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0VBQXdFO0VBQ3hFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNDQUFzQztFQUN0Qyx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsaURBQWlEO0VBQ2pELDhDQUE4QztFQUM5Qyx5Q0FBeUM7RUFDekMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyw0Q0FBNEM7RUFDNUMsNkNBQTZDO0FBQy9DOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFOzs7SUFHRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNjIpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI5NDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWdyZWVuOiBod2IoMTEzIDQxJSA3JSAvIDAuNzY3KTtcXHJcXG4gIC0tYmFja2dyb3VuZC1ncmV5OiAjMWQxZDFkO1xcclxcbiAgLS10ZXh0LWdyZXk6ICM5MTkxOTE7XFxyXFxuICAtLWhlYWRlci1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWJvZHktZm9udDogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9ib2R5LmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcclxcblxcclxcbi5tYWlud3JhcHBlciB7XFxyXFxuICBib3JkZXI6IHJnYmEoMjIyLCAxODQsIDEzNSwgMC42NzEpIDVweCBzb2xpZDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDEwcHggcmdiKDI0MywgMTI1LCAxODApO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDksIDE1NSwgMTU4LCAwLjg0Mik7XFxyXFxufVxcclxcblxcclxcbi50b3BIZWFkIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMjMsIDI2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nOmhvdmVyIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigyMTQsIDI0MywgMjQ3KTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UgMC42cztcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigyMzYsIDc5LCA1Mik7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0jaWRmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdmllIHNlY3Rpb24gc3R5bGVzICovXFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtc2VjdGlvbi10aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA1NSwgNTUsIDAuNzYpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxZW0gMS4yZW0gMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBoZWlnaHQ6IDExcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtc2VjdGlvbi10aXRsZSBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXN0YXIge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgcGFkZGluZy1yaWdodDogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saXN0IHtcXHJcXG4gIHBhZGRpbmc6IDFlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlzdCBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50c2l6ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLnNob3doZWFkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4xZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiByZ2IoMjIxLCA2MSwgMTU0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dkZXRhaWwge1xcclxcbiAgY29sb3I6ICNjZGQyZDY7XFxyXFxufVxcclxcblxcclxcbi5zaG93c2l6ZSB7XFxyXFxuICBjb2xvcjogI2MwYzdjNztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcyB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzJSAyMyUgMjMlIDIzJTtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4IDIwcHg7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBXcmFwcGVyIG92ZXJsYXkgc3R5bGVzICovXFxyXFxuLm1vdmllLWltYWdlLWRpdiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW1hZ2UtZGl2OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheSA+ICoge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5OmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXk6aG92ZXIgPiAqIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWltYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LXN0YXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtb3ZlcmxheS1yYXRpbmcge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtb3ZlcmxheS1nZW5yZSB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW07XFxyXFxuICBmb250LXNpemU6IDIuMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5vdmVsYXktZGV0YWlscy1idG4ge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxLjNlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdmllIFdyYXBwZXIgc3R5bGVzICovXFxyXFxuLm1vdmllLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGhlaWdodDogNDJweDtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQ6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlrZXMge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdG4ge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJhY2tncm91bmQ6ICMzZDNhMzk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdG46aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAjMjMzMzJjM2Q7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmY0NzBhO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdmllIE1vZGFsIHN0eWxlcyAqL1xcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgzMiwgMzIsIDMyLCAwLjk1KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLmlzLXZpc2libGUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1kaWFsb2cge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGZsZXgtYmFzaXM6IDYwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICB3aWR0aDogNTV2dztcXHJcXG4gIGhlaWdodDogOTUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1LjM0ZGVnLCAjMmIyYjJiIDY1JSwgIzAwMjQwMCA5NC4zNSUpO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBtYXJnaW46IDVlbTtcXHJcXG4gIHBhZGRpbmc6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9wVXAgc3R5bGVzICovXFxyXFxuLnBvcFVwLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGI5NjJiO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNDAwO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllQ2FyZCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllQ2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVDb250ZW50IHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtR2VucmUge1xcclxcbiAgY29sb3I6ICM0Yjk2MmI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1yZWxlYXNlRGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogI2ZmZmZmZjgxO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLXN1bW1hcnkge1xcclxcbiAgY29sb3I6ICNjY2M7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGUtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVhZE1vcmVCdG4ge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDU0JSwgNjUlKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6ICM0MTQxNDE7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wcm9qLW1vZGFsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXByb2otbW9kYWw6aG92ZXIge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDE7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXByb2otbW9kYWw6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnICc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDE7XFxyXFxuICB3aWR0aDogMnB4O1xcclxcbiAgbGVmdDogMTJweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgYm90dG9tOiA1cHg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wcm9qLW1vZGFsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnICc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDE7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHRvcDogMTJweDtcXHJcXG4gIGxlZnQ6IDVweDtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIE1vZGFsIGNvbW1lbnRzIHN0eWxlcyAqL1xcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb3VudCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkZXItZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbW1lbnRzIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5hdXRob3ItdGh1bWJuYWlsIHtcXHJcXG4gIGZsZXg6IG5vbmU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5hbWUtbGluayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NzljO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOTlweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHdpZHRoOiAxLjZlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZS1saW5rIHNwYW4ge1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtaGVhZGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1hdXRob3Ige1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbiNhdXRob3ItdGV4dCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICBjb2xvcjogIzkxOTE5MTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtZGF0ZSB7XFxyXFxuICBjb2xvcjogIzYwNjA2MDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LXRleHQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMS40cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCBoMiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1tZXNzYWdlIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBmb3JtIHN0eWxlcyAqL1xcclxcbi5hZGQtY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkZXItZm9udCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzFkMWQxZDtcXHJcXG4gIGJhY2tncm91bmQ6ICMyYjJiMmI7XFxyXFxuICBtYXJnaW46IDAgMCA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYTpob3ZlciB7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW46IDAgMCA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyZjQ3MGE7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM0M2EwNDc7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgU3R5bGVzICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ2Nik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1vYmlsZSBTdHlsZXMgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgLnRvcEhlYWQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWdhcDogMjBweCAyMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaWRmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b25EaXYge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3VidGl0bGUtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtb3ZlcmxheS1yYXRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDEuNGVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwLXN1bW1hcnkge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1kaWFsb2cge1xcclxcbiAgICB3aWR0aDogODV2dztcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBtYXJnaW46IDAuNWVtO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgZmxleC1iYXNpczogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVhZE1vcmVCdG4ge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZUNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjVweCkge1xcclxcbiAgbmF2LFxcclxcbiAgc3Bhbi5zaG93ZGV0YWlsLFxcclxcbiAgc3Bhbi5zaG93c2l6ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wSGVhZCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEB0cy1pZ25vcmVcclxuY29uc3QgVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XHJcbmNvbnN0IGFwcElEID0gJ0hxeEc2cWtwaTNEaFpHYUFrVzF3JztcclxuY29uc3QgZW5kUG9pbnQgPSBgJHtVUkx9L2FwcHMvJHthcHBJRH0vY29tbWVudHMvYDtcclxuXHJcbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGJ1dHRvbklkLCB1c2VyTmFtZSwgdXNlckNvbW1lbnQpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRQb2ludCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IGJ1dHRvbklkLFxyXG4gICAgICB1c2VybmFtZTogdXNlck5hbWUudmFsdWUsXHJcbiAgICAgIGNvbW1lbnQ6IHVzZXJDb21tZW50LnZhbHVlLFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgQ2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiByZXMudGV4dCgpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2VuZFBvaW50fT9pdGVtX2lkPSR7aWR9YCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHBvc3RDb21tZW50LCBnZXRDb21tZW50cyB9O1xyXG4iLCJjb25zdCBkaXNwbGF5Q29tbWVudHMgPSAoY29tbWVudHNEaXYsIGNvbW1lbnRzKSA9PiB7XHJcbiAgaWYgKGNvbW1lbnRzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICBjb21tZW50c0Rpdi5pbm5lckhUTUwgPSBgPGgzIGNsYXNzPWNvbW1lbnRzLWNvdW50PiAke2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHM8L2gzPmA7XHJcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29tbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnY29tbWVudC1jb250YWluZXInO1xyXG4gICAgICBjb25zdCB1c2VyVGh1bWJuYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHVzZXJUaHVtYm5haWwuY2xhc3NOYW1lID0gJ2F1dGhvci10aHVtYm5haWwnO1xyXG4gICAgICBjb25zdCB0aHVtYm5haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICB0aHVtYm5haWxMaW5rLmNsYXNzTmFtZSA9ICd1c2VyLW5hbWUtbGluayc7XHJcbiAgICAgIHRodW1ibmFpbExpbmsuaHJlZiA9ICcjJztcclxuICAgICAgY29uc3QgdGh1bWJuYWlsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgdGh1bWJuYWlsQ29udGVudC50ZXh0Q29udGVudCA9ICdVJztcclxuICAgICAgdGh1bWJuYWlsTGluay5hcHBlbmRDaGlsZCh0aHVtYm5haWxDb250ZW50KTtcclxuICAgICAgdXNlclRodW1ibmFpbC5hcHBlbmRDaGlsZCh0aHVtYm5haWxMaW5rKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbW1lbnRNYWluLmNsYXNzTmFtZSA9ICdjb21tZW50LW1haW4nO1xyXG4gICAgICBjb21tZW50TWFpbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICA8ZGl2IGlkPVwiY29tbWVudC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGlkPVwiYXV0aG9yLXRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29tbWVudC51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImNvbW1lbnQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgaWQ9XCJjb21tZW50LXRleHRcIj5cclxuICAgICAgICAgIDxwPiR7Y29tbWVudC5jb21tZW50fTwvcD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZCh1c2VyVGh1bWJuYWlsLCBjb21tZW50TWFpbik7XHJcbiAgICAgIGNvbW1lbnRzRGl2LmFwcGVuZChjb21tZW50Q29udGFpbmVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNvdW50Q29tbWVudHMgPSAoZWxlbWVudCwgY29tbWVudHMpID0+IHtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgaWYgKGNvbW1lbnRzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y29tbWVudHMubGVuZ3RofSBDb21tZW50c2A7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnMCBDb21tZW50cyc7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheUNvbW1lbnRzLCBjb3VudENvbW1lbnRzIH07XHJcbiIsImltcG9ydCB7IGdldExpa2VzLCBwb3N0TGlrZSwgdXBkYXRlTGlrZXMgfSBmcm9tICcuL2xpa2VzLWhhbmRsZXIuanMnO1xyXG5cclxuY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVzJyk7XHJcbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSAoc2FtcGxlTW92aWVzKSA9PiB7XHJcbiAgc2FtcGxlTW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vdmllV3JhcHBlci5pZCA9IGBtb3ZpZV8ke21vdmllLmlkfWA7XHJcbiAgICBtb3ZpZVdyYXBwZXIuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXInO1xyXG4gICAgY29uc3QgbW92aWVJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vdmllSW1nRGl2LmNsYXNzTmFtZSA9ICdtb3ZpZS1pbWFnZS1kaXYnO1xyXG4gICAgY29uc3QgbW92aWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIG1vdmllSW1nLnNyYyA9IG1vdmllLmltYWdlLm1lZGl1bTtcclxuICAgIG1vdmllSW1nLmNsYXNzTmFtZSA9ICdtb3ZpZS1pbWFnZSc7XHJcbiAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChtb3ZpZUltZyk7XHJcbiAgICBjb25zdCBtb3ZpZUltZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vdmllSW1nT3ZlcmxheS5jbGFzc05hbWUgPSAnZGV0YWlscy1vdmVybGF5JztcclxuICAgIGNvbnN0IHJhdGluZ1N0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XHJcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcclxuICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1zdGFyJyk7XHJcbiAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1vdmllUmF0aW5nLmNsYXNzTmFtZSA9ICdtb3ZpZS1vdmVybGF5LXJhdGluZyc7XHJcbiAgICBpZiAobW92aWUucmF0aW5nLmF2ZXJhZ2UpIHtcclxuICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYCR7bW92aWUucmF0aW5nLmF2ZXJhZ2V9IC8gMTBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gJzAgLyAxMCc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtb3ZpZUdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbW92aWVHZW5yZS5jbGFzc05hbWUgPSAnbW92aWUtb3ZlcmxheS1nZW5yZSc7XHJcbiAgICBtb3ZpZUdlbnJlLmlubmVySFRNTCA9IGAke21vdmllLmdlbnJlc1swXX1gO1xyXG4gICAgY29uc3QgbW92aWVEZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBtb3ZpZURldGFpbHNCdG4uY2xhc3NOYW1lID0gJ292ZWxheS1kZXRhaWxzLWJ0bic7XHJcbiAgICBtb3ZpZURldGFpbHNCdG4uaW5uZXJIVE1MID0gJ1ZpZXcgRGV0YWlscyc7XHJcbiAgICBtb3ZpZUltZ092ZXJsYXkuYXBwZW5kKFxyXG4gICAgICByYXRpbmdTdGFyLFxyXG4gICAgICBtb3ZpZVJhdGluZyxcclxuICAgICAgbW92aWVHZW5yZSxcclxuICAgICAgbW92aWVEZXRhaWxzQnRuLFxyXG4gICAgKTtcclxuICAgIG1vdmllSW1nRGl2LmFwcGVuZENoaWxkKG1vdmllSW1nT3ZlcmxheSk7XHJcbiAgICBtb3ZpZVdyYXBwZXIuYXBwZW5kQ2hpbGQobW92aWVJbWdEaXYpO1xyXG4gICAgY29uc3QgbW92aWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBtb3ZpZVRpdGxlLnRleHRDb250ZW50ID0gYCR7bW92aWUubmFtZX1gO1xyXG4gICAgbW92aWVUaXRsZS5jbGFzc05hbWUgPSAnbW92aWUtdGl0bGUnO1xyXG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKG1vdmllVGl0bGUpO1xyXG4gICAgY29uc3QgbGlrZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxpa2VzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdsaWtlcy1jb250YWluZXInO1xyXG4gICAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcclxuICAgIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnZmEtaGVhcnQnKTtcclxuICAgIGxpa2VCdG4uaWQgPSBgJHttb3ZpZVdyYXBwZXIuaWR9YDtcclxuICAgIGxpa2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpa2VCdG4pO1xyXG4gICAgY29uc3QgbW92aWVMaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1vdmllTGlrZXMuY2xhc3NOYW1lID0gJ21vdmllLWxpa2VzJztcclxuICAgIG1vdmllTGlrZXMudGV4dENvbnRlbnQgPSAnMCBsaWtlcyc7XHJcbiAgICBsaWtlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZUxpa2VzKTtcclxuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChsaWtlc0NvbnRhaW5lcik7XHJcbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb21tZW50QnRuLmlubmVySFRNTCA9ICdDb21tZW50IG9uIE1vdmllJztcclxuICAgIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ2NvbW1lbnRCdG4nO1xyXG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xyXG4gICAgY29uc3QgcG9wTGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcclxuICAgICAgdXBkYXRlTGlrZXMobGlrZUJ0biwgcmVzQXJyYXksIG1vdmllTGlrZXMpO1xyXG4gICAgfTtcclxuICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllV3JhcHBlcik7XHJcbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgY29uc3QgbW92aWUgPSBlLnRhcmdldDtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBhd2FpdCBwb3N0TGlrZShtb3ZpZS5pZCk7XHJcbiAgICAgIGNvbnN0IHJlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcclxuICAgICAgdXBkYXRlTGlrZXMobW92aWUsIHJlc0FycmF5LCBtb3ZpZUxpa2VzKTtcclxuICAgIH0pO1xyXG4gICAgcG9wTGlrZXMoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNb3ZpZXM7XHJcbiIsImNvbnN0IGVuZFBvaW50ID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3M/cGFnZT0zMyc7XHJcbmNvbnN0IGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XHJcbiAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZXM7IiwiY29uc3QgVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XHJcbmNvbnN0IGFwcElEID0gJ0hxeEc2cWtwaTNEaFpHYUFrVzF3JztcclxuY29uc3QgZW5kUG9pbnQgPSBgJHtVUkx9L2FwcHMvJHthcHBJRH0vbGlrZXMvYDtcclxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpdGVtIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IENoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG59O1xyXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZFBvaW50KTtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59O1xyXG5jb25zdCB1cGRhdGVMaWtlcyA9IChtb3ZpZSwgcmVzQXJyYXksIG1vdmllTGlrZXMpID0+IHtcclxuICByZXNBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5pdGVtX2lkID09PSBtb3ZpZS5pZCkge1xyXG4gICAgICBtb3ZpZUxpa2VzLmlubmVySFRNTCA9IGAke2VsZW1lbnQubGlrZXN9IGxpa2VzYDtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuZXhwb3J0IHsgcG9zdExpa2UsIGdldExpa2VzLCB1cGRhdGVMaWtlcyB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3VudE1vdmllcyhzYW1wbGVNb3ZpZXMpIHtcclxuICByZXR1cm4gc2FtcGxlTW92aWVzLmxlbmd0aDtcclxufSIsImltcG9ydCB7IHBvc3RDb21tZW50LCBnZXRDb21tZW50cyB9IGZyb20gJy4vY29tbWVudHMtaGFuZGxlci5qcyc7XHJcbmltcG9ydCB7IGRpc3BsYXlDb21tZW50cywgY291bnRDb21tZW50cyB9IGZyb20gJy4vZGlzcGxheS1jb21tZW50cy5qcyc7XHJcblxyXG5jb25zdCBpc1Zpc2libGUgPSAnaXMtdmlzaWJsZSc7XHJcblxyXG5jb25zdCBtb3ZpZU1vZGFsID0gYXN5bmMgKGNvbW1lbnRCdXR0b25zLCBzYW1wbGVNb3ZpZXMpID0+IHtcclxuICBjb21tZW50QnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGkpID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbCc7XHJcblxyXG4gICAgICBjb25zdCBwb3BVcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwb3BVcERpdi5jbGFzc05hbWUgPSAnbW9kYWwtZGlhbG9nJztcclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChpc1Zpc2libGUpO1xyXG4gICAgICBtb2RhbC5hcHBlbmRDaGlsZChwb3BVcERpdik7XHJcblxyXG4gICAgICBjb25zdCBtb3ZpZUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCBtb3ZpZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgbW92aWVEb3dubG9hZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBjb25zdCBtb3ZpZVdhdGNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIG1vdmllSW1nRGl2LmNsYXNzTmFtZSA9ICdtb3ZpZUNhcmQnO1xyXG4gICAgICBtb3ZpZUltZy5jbGFzc05hbWUgPSAnbW92aWVDYXJkLWltZyc7XHJcbiAgICAgIG1vdmllSW1nLnNyYyA9IGAke3NhbXBsZU1vdmllc1tpXS5pbWFnZS5vcmlnaW5hbH1gO1xyXG4gICAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2J1dHRvbkRpdic7XHJcbiAgICAgIG1vdmllRG93bmxvYWRCdG4uY2xhc3NOYW1lID0gJ3BvcFVwLWJ1dHRvbic7XHJcbiAgICAgIG1vdmllRG93bmxvYWRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGVzLWRvd25cIj48L2k+RG93bmxvYWQnO1xyXG4gICAgICBtb3ZpZVdhdGNoQnRuLmNsYXNzTmFtZSA9ICdwb3BVcC1idXR0b24nO1xyXG4gICAgICBtb3ZpZVdhdGNoQnRuLmlubmVySFRNTCA9ICdXYXRjaCBOb3cnO1xyXG4gICAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChtb3ZpZUltZyk7XHJcbiAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChtb3ZpZURvd25sb2FkQnRuKTtcclxuICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG1vdmllV2F0Y2hCdG4pO1xyXG4gICAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xyXG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChtb3ZpZUltZ0Rpdik7XHJcblxyXG4gICAgICBjb25zdCBtb3ZpZUNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgbW92aWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgIGNvbnN0IG1vdmllR2VucmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICBjb25zdCBtb3ZpZVJlbGVhc2VEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgY29uc3QgbW92aWVOZXR3b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgY29uc3QgZG93bmxvYWRTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgY29uc3QgcmF0aW5nU3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgY29uc3QgbW92aWVSYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNvbnN0IG1vdmllU3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgbW92aWVDb250ZW50RGl2LmNsYXNzTmFtZSA9ICdtb3ZpZUNvbnRlbnQnO1xyXG4gICAgICBtb3ZpZVRpdGxlLnRleHRDb250ZW50ID0gYCR7c2FtcGxlTW92aWVzW2ldLm5hbWV9YDtcclxuICAgICAgbW92aWVUaXRsZS5jbGFzc05hbWUgPSAncG9wVXAtdGl0bGUnO1xyXG4gICAgICBtb3ZpZUdlbnJlLmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5nZW5yZXNbMF19YDtcclxuICAgICAgbW92aWVHZW5yZS5jbGFzc05hbWUgPSAncG9wVXAtR2VucmUnO1xyXG4gICAgICBtb3ZpZVJlbGVhc2VEYXRlLmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5wcmVtaWVyZWR9YDtcclxuICAgICAgbW92aWVSZWxlYXNlRGF0ZS5jbGFzc05hbWUgPSAncG9wVXAtcmVsZWFzZURhdGUnO1xyXG4gICAgICBtb3ZpZU5ldHdvcmsuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIG1vdmllTmV0d29yay5jbGFzc05hbWUgPSAnJztcclxuICAgICAgZG93bmxvYWRTdWJ0aXRsZS5ocmVmID0gJyMnO1xyXG4gICAgICBkb3dubG9hZFN1YnRpdGxlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlcy1kb3duXCI+PC9pPiBEb3dubG9hZCBTdWJ0aXRsZXMnO1xyXG4gICAgICBkb3dubG9hZFN1YnRpdGxlLmNsYXNzTmFtZSA9ICdzdWJ0aXRsZS1idXR0b24nO1xyXG4gICAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XHJcbiAgICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc3RhcicpO1xyXG4gICAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktc3RhcicpO1xyXG4gICAgICBtb3ZpZVJhdGluZy5jbGFzc05hbWUgPSAnbW92aWUtb3ZlcmxheS1yYXRpbmcnO1xyXG4gICAgICBpZiAoc2FtcGxlTW92aWVzW2ldLnJhdGluZy5hdmVyYWdlKSB7XHJcbiAgICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnJhdGluZy5hdmVyYWdlfSAvIDEwYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSAnMCAvIDEwJztcclxuICAgICAgfVxyXG4gICAgICBtb3ZpZVN1bW1hcnkuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnN1bW1hcnkuc3Vic3RyaW5nKFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMjAwLFxyXG4gICAgICApfS4uLi4uLmA7XHJcbiAgICAgIG1vdmllU3VtbWFyeS5jbGFzc05hbWUgPSAncG9wVXAtc3VtbWFyeSc7XHJcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChtb3ZpZVRpdGxlKTtcclxuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllR2VucmUpO1xyXG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVSZWxlYXNlRGF0ZSk7XHJcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChkb3dubG9hZFN1YnRpdGxlKTtcclxuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKHJhdGluZ1N0YXIpO1xyXG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVSYXRpbmcpO1xyXG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVTdW1tYXJ5KTtcclxuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQobW92aWVDb250ZW50RGl2KTtcclxuXHJcbiAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgY2xvc2VNb2RhbEJ0bi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgY2xvc2VNb2RhbEJ0bi5jbGFzc05hbWUgPSAnY2xvc2UtcHJvai1tb2RhbCc7XHJcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKGNsb3NlTW9kYWxCdG4pO1xyXG4gICAgICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5pcy12aXNpYmxlJykpIHtcclxuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5pcy12aXNpYmxlJykpIHtcclxuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIENvbW1lbnRzXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICBjb21tZW50U2VjdGlvbi5jbGFzc05hbWUgPSAnY29tbWVudC1zZWN0aW9uJztcclxuICAgICAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBmb3JtRGl2LmNsYXNzTmFtZSA9ICdhZGQtY29tbWVudCc7XHJcbiAgICAgIGNvbnN0IGZvcm1IZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZm9ybUhlYWRlckRpdi5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQtaGVhZGVyJztcclxuICAgICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgIGNvbnN0IGZvcm1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBmb3JtSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xyXG4gICAgICBmb3JtSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1tZXNzYWdlJyk7XHJcbiAgICAgIGZvcm1IZWFkZXIuaW5uZXJIVE1MID0gJ0FkZCB5b3VyIGNvbW1lbnQnO1xyXG4gICAgICBmb3JtSGVhZGVyRGl2LmFwcGVuZChmb3JtSWNvbiwgZm9ybUhlYWRlcik7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICBjb21tZW50Rm9ybS5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQtZm9ybSc7XHJcblxyXG4gICAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHVzZXJOYW1lLmNsYXNzTmFtZSA9ICd1c2VyLW5hbWUnO1xyXG4gICAgICB1c2VyTmFtZS5wbGFjZWhvbGRlciA9ICdVc2VybmFtZS4uLic7XHJcbiAgICAgIGNvbnN0IHVzZXJDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgdXNlckNvbW1lbnQuY2xhc3NOYW1lID0gJ3VzZXItY29tbWVudCc7XHJcbiAgICAgIHVzZXJDb21tZW50LnBsYWNlaG9sZGVyID0gJ1NoYXJlIHlvdXIgY29tbWVudHMgLi4uJztcclxuICAgICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBjb21tZW50QnRuLmNsYXNzTmFtZSA9ICdjb21tZW50LWJ0bic7XHJcbiAgICAgIGNvbW1lbnRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0IENvbW1lbnQnO1xyXG4gICAgICBjb21tZW50QnRuLmlkID0gYG1vdmllX2NtdF8ke3NhbXBsZU1vdmllc1tpXS5pZH1gO1xyXG4gICAgICBjb21tZW50Rm9ybS5hcHBlbmQodXNlck5hbWUsIHVzZXJDb21tZW50LCBjb21tZW50QnRuKTtcclxuICAgICAgZm9ybURpdi5hcHBlbmQoZm9ybUhlYWRlckRpdiwgY29tbWVudEZvcm0pO1xyXG5cclxuICAgICAgY29uc3QgY29tbWVudHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29tbWVudHNEaXYuY2xhc3NOYW1lID0gJ2Rpc3BsYXktY29tbWVudHMnO1xyXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRCdG4uaWQpO1xyXG4gICAgICBjb25zdCBjb21tZW50c0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgY29tbWVudHNDb3VudC5jbGFzc05hbWUgPSAnY29tbWVudHMtY291bnQnO1xyXG4gICAgICBjb21tZW50c0Rpdi5hcHBlbmQoY29tbWVudHNDb3VudCk7XHJcbiAgICAgIGNvdW50Q29tbWVudHMoY29tbWVudHNDb3VudCwgY29tbWVudHMpO1xyXG4gICAgICBkaXNwbGF5Q29tbWVudHMoY29tbWVudHNEaXYsIGNvbW1lbnRzKTtcclxuXHJcbiAgICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc01zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBpZiAodXNlck5hbWUudmFsdWUgPT09ICcnIHx8IHVzZXJDb21tZW50LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcmVzTXNnLmNsYXNzTmFtZSA9ICdlcnJvci1tc2cnO1xyXG4gICAgICAgICAgcmVzTXNnLmlubmVyVGV4dCA9ICdQbGVhc2UgZmlsbCBvdXQgeW91ciBVc2VybmFtZSBhbmQgYWRkIGEgY29tbWVudCc7XHJcbiAgICAgICAgICBjb21tZW50QnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc01zZywgY29tbWVudEJ0bik7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29tbWVudEZvcm0ucmVtb3ZlQ2hpbGQocmVzTXNnKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICByZXNNc2cuY2xhc3NOYW1lID0gJ3N1Y2Nlc3MtbXNnJztcclxuICAgICAgICAgIHJlc01zZy5pbm5lclRleHQgPSAnU3VjY2Vzc2Z1bGx5IGFkZGVkIHlvdXIgY29tbWVudCc7XHJcbiAgICAgICAgICBjb21tZW50QnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc01zZywgY29tbWVudEJ0bik7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29tbWVudEZvcm0ucmVtb3ZlQ2hpbGQocmVzTXNnKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgYXdhaXQgcG9zdENvbW1lbnQoY29tbWVudEJ0bi5pZCwgdXNlck5hbWUsIHVzZXJDb21tZW50KTtcclxuICAgICAgICAgIGNvbnN0IG15Q29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhjb21tZW50QnRuLmlkKTtcclxuICAgICAgICAgIGNvdW50Q29tbWVudHMoY29tbWVudHNDb3VudCwgbXlDb21tZW50cyk7XHJcbiAgICAgICAgICBkaXNwbGF5Q29tbWVudHMoY29tbWVudHNEaXYsIG15Q29tbWVudHMpO1xyXG4gICAgICAgICAgY29tbWVudEZvcm0ucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kKGZvcm1EaXYsIGNvbW1lbnRzRGl2KTtcclxuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQoY29tbWVudFNlY3Rpb24pO1xyXG4gICAgICBjb25zdCByZWFkTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICByZWFkTW9yZS5pbm5lckhUTUwgPSAnUmVhZCBNb3JlJztcclxuICAgICAgcmVhZE1vcmUuY2xhc3NOYW1lID0gJ3JlYWRNb3JlQnRuJztcclxuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKHJlYWRNb3JlKTtcclxuICAgICAgcmVhZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlYWRNb3JlLmlubmVySFRNTCA9PT0gJ1JlYWQgTW9yZScpIHtcclxuICAgICAgICAgIHJlYWRNb3JlLmlubmVySFRNTCA9ICdSZWFkIExlc3MnO1xyXG4gICAgICAgICAgbW92aWVTdW1tYXJ5LmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5zdW1tYXJ5fWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlYWRNb3JlLmlubmVySFRNTCA9ICdSZWFkIE1vcmUnO1xyXG4gICAgICAgICAgbW92aWVTdW1tYXJ5LmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5zdW1tYXJ5LnN1YnN0cmluZyhcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgNDAwLFxyXG4gICAgICAgICAgKX0uLi4uLi5gO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbW92aWVNb2RhbDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9TaG93bWF4LU1vdmllcy9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2V0TW92aWVzIGZyb20gJy4vbW9kdWxlcy9nZXQtbW92aWVzLmpzJztcclxuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXktbW92aWVzLmpzJztcclxuaW1wb3J0IG1vdmllTW9kYWwgZnJvbSAnLi9tb2R1bGVzL21vdmllLW1vZGFsLmpzJztcclxuaW1wb3J0IGNvdW50TW92aWVzIGZyb20gJy4vbW9kdWxlcy9tb3ZpZS1jb3VudGVyLmpzJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9zaG93bG9nb28uanBnJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ29JbWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG4gIGNvbnN0IGxvZ29JY29uID0gbmV3IEltYWdlKCk7XHJcbiAgbG9nb0ljb24uc3JjID0gTG9nbztcclxuICBsb2dvSW1nRGl2LmFwcGVuZENoaWxkKGxvZ29JY29uKTtcclxuXHJcbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XHJcbiAgY29uc3Qgc2FtcGxlTW92aWVzID0gbW92aWVzLnNsaWNlKDYsIDcwKTtcclxuICBhd2FpdCBkaXNwbGF5TW92aWVzKHNhbXBsZU1vdmllcyk7XHJcblxyXG4gIGNvbnN0IG1vdmllTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1saXN0Jyk7XHJcblxyXG4gIG1vdmllTGlzdC5pbm5lckhUTUwgPSBgPHNwYW4+ICR7Y291bnRNb3ZpZXMoc2FtcGxlTW92aWVzKX0gPHNwYW4+YDtcclxuXHJcbiAgY29uc3QgY29tbWVudEJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRCdG4nKV07XHJcbiAgY29uc3Qgdmlld0RldGFpbHNCdXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vdmVsYXktZGV0YWlscy1idG4nKV07XHJcbiAgbW92aWVNb2RhbChjb21tZW50QnV0dG9ucywgc2FtcGxlTW92aWVzKTtcclxuICBtb3ZpZU1vZGFsKHZpZXdEZXRhaWxzQnV0dG9ucywgc2FtcGxlTW92aWVzKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==