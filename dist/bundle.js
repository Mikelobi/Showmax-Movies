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
___CSS_LOADER_EXPORT___.push([module.id, "/* Global Styles */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: rgba(255, 255, 255, 0.062);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #2b2b2b94;\r\n  border-radius: 5px;\r\n}\r\n\r\n:root {\r\n  --primary-green: hwb(113 41% 7% / 0.767);\r\n  --background-grey: #1d1d1d;\r\n  --text-grey: #919191;\r\n  --header-font: 'Poppins', sans-serif;\r\n  --body-font: 'Raleway', sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: var(--body-font);\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.mainwrapper {\r\n  border: rgba(222, 184, 135, 0.671) 5px solid;\r\n  box-shadow: 0 0 20px 10px rgb(243, 125, 180);\r\n  width: 90%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  background-color: rgba(149, 155, 158, 0.842);\r\n}\r\n\r\n.topHead {\r\n  height: 60px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 2em;\r\n  background-color: rgb(23, 23, 26);\r\n}\r\n\r\n.logo img {\r\n  padding: 0.5em 0;\r\n  height: 3rem;\r\n  transition: 1s;\r\n}\r\n\r\n.logo img:hover {\r\n  height: 5rem;\r\n  cursor: pointer;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  height: 20px;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  gap: 3rem;\r\n}\r\n\r\nnav ul li {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li a {\r\n  text-transform: capitalize;\r\n  text-decoration: none;\r\n  color: rgb(214, 243, 247);\r\n  border: none;\r\n  transition: ease 0.6s;\r\n}\r\n\r\nnav ul li a:hover {\r\n  color: rgb(236, 79, 52);\r\n  font-size: 20px;\r\n}\r\n\r\nform#idform {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.search {\r\n  width: 70%;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 10px;\r\n  margin-left: 3rem;\r\n  font-size: 1rem;\r\n  color: var(--primary-green);\r\n}\r\n\r\n.search:focus {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n/* Movie section styles */\r\n\r\nh2 {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.movie-section-title {\r\n  background-color: rgba(66, 55, 55, 0.76);\r\n  text-align: center;\r\n  color: #fff;\r\n  padding: 1em 1.2em 0;\r\n  margin-bottom: 1rem;\r\n  height: 11rem;\r\n}\r\n\r\n.movie-section-title span {\r\n  font-size: 1.15em;\r\n  font-weight: 700;\r\n}\r\n\r\n.fa-star {\r\n  color: var(--primary-green);\r\n  padding-right: 0.4em;\r\n}\r\n\r\n.movie-list {\r\n  padding: 1em 0;\r\n}\r\n\r\n.movie-list span {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.countsize {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nspan.showhead {\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n  color: rgb(221, 61, 154);\r\n}\r\n\r\n.showdetail {\r\n  color: #cdd2d6;\r\n}\r\n\r\n.showsize {\r\n  color: #c0c7c7;\r\n}\r\n\r\n.movies {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  color: #fff;\r\n  overflow-y: auto;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 23% 23% 23% 23%;\r\n  grid-gap: 20px 20px;\r\n  grid-auto-flow: row;\r\n  padding-bottom: 1.5em;\r\n}\r\n\r\n/* Movie Wrapper overlay styles */\r\n.movie-image-div {\r\n  position: relative;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movie-image-div:hover {\r\n  border: 4px solid var(--primary-green);\r\n}\r\n\r\n.details-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  font-family: var(--body-font);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity 0.35s;\r\n  transform: translate3d(0,0,0);\r\n}\r\n\r\n.details-overlay > * {\r\n  transform: translateY(50px);\r\n  transition: transform 2s;\r\n}\r\n\r\n.details-overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.details-overlay:hover > * {\r\n  transform: translateY(0);\r\n}\r\n\r\n.movie-image {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.overlay-star {\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n.movie-overlay-rating {\r\n  padding-bottom: 1.1em;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-overlay-genre {\r\n  padding-bottom: 1.1em;\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.ovelay-details-btn {\r\n  color: #fff;\r\n  padding: 0.5em 1.3em;\r\n  background: var(--primary-green);\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Movie Wrapper styles */\r\n.movie-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.8em;\r\n}\r\n\r\n.movie-title {\r\n  height: 42px;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 1em;\r\n  align-items: center;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.movie-likes {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.commentBtn {\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  background: #3d3a39;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  box-shadow: 0 8px 16px #23332c3d;\r\n}\r\n\r\n.commentBtn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n/* Movie Modal styles */\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(32, 32, 32, 0.95);\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.35s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-basis: 60%;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  gap: 3rem;\r\n  width: 55vw;\r\n  height: 95%;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\r\n  overflow: auto;\r\n  cursor: default;\r\n  margin: 5em;\r\n  padding: 3em;\r\n}\r\n\r\n/* PopUp styles */\r\n.popUp-button {\r\n  width: 40%;\r\n  margin: 1rem;\r\n  background-color: var(--primary-green);\r\n  border: 2px solid #4b962b;\r\n  border-radius: 20px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  font-family: inherit;\r\n}\r\n\r\n.popUp-button:hover {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n.movieCard {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.movieCard-img {\r\n  width: 100%;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movieContent {\r\n  width: 40%;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popUp-title {\r\n  font-size: 3em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-Genre {\r\n  color: #4b962b;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-releaseDate {\r\n  font-size: 1rem;\r\n  color: #ffffff81;\r\n  padding-bottom: 2em;\r\n}\r\n\r\n.popUp-summary {\r\n  color: #ccc;\r\n  margin: 0 auto;\r\n  line-height: 1.4em;\r\n  letter-spacing: 0.8px;\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\n.subtitle-button {\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  margin-bottom: 4em;\r\n}\r\n\r\n.readMoreBtn {\r\n  width: 40%;\r\n  margin: 1rem 0;\r\n  background-color: hsl(0, 54%, 65%);\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  color: #414141;\r\n}\r\n\r\n.close-proj-modal {\r\n  border-radius: 50%;\r\n  padding: 0.5em;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 2px solid #555;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n}\r\n\r\n.close-proj-modal:hover {\r\n  border: 2px solid #fff;\r\n  background-color: #414141;\r\n  color: #fff;\r\n}\r\n\r\n.close-proj-modal::before {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  width: 2px;\r\n  left: 12px;\r\n  top: 5px;\r\n  bottom: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-proj-modal::after {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  height: 2px;\r\n  top: 12px;\r\n  left: 5px;\r\n  right: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Modal comments styles */\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 3rem;\r\n  flex-basis: 100%;\r\n  gap: 2rem;\r\n  background-color: #1d1d1d;\r\n}\r\n\r\n.comments-count {\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 1em;\r\n  font-family: var(--header-font);\r\n}\r\n\r\n.display-comments {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-container {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #171717;\r\n  padding: 1em;\r\n}\r\n\r\n.author-thumbnail {\r\n  flex: none;\r\n  margin-right: 12px;\r\n}\r\n\r\n.user-name-link {\r\n  background-color: #00579c;\r\n  border-radius: 99px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.8em;\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  width: 1.6em;\r\n}\r\n\r\n.user-name-link span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.user-name {\r\n  background-color: #2b2b2b;\r\n}\r\n\r\n.comment-main {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n#comment-header {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n#header-author {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: baseline;\r\n}\r\n\r\n#author-text {\r\n  margin-right: 10px;\r\n  color: #919191;\r\n  margin-bottom: 2px;\r\n  display: block;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n#comment-date {\r\n  color: #606060;\r\n  font-family: 'Roboto', 'Arial', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 400;\r\n}\r\n\r\n#comment-text {\r\n  color: #fff;\r\n  word-wrap: break-word;\r\n  font-size: 14px;\r\n  height: 20px;\r\n  line-height: 1.4rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-comment {\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.add-comment h2 {\r\n  display: block;\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\n.add-comment-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.fa-message {\r\n  padding-right: 1em;\r\n  color: var(--primary-green);\r\n}\r\n\r\n/* Comment form styles */\r\n.add-comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  overflow: hidden;\r\n  background-color: #171717;\r\n  padding: 2em;\r\n  border-radius: 10px;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: var(--header-font);\r\n  width: 100%;\r\n  color: #fff;\r\n  border: 1px solid #1d1d1d;\r\n  background: #2b2b2b;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n}\r\n\r\ntextarea {\r\n  height: 100px;\r\n  max-width: 100%;\r\n  resize: none;\r\n}\r\n\r\ninput,\r\ntextarea:hover {\r\n  -webkit-transition: border-color 0.3s ease-in-out;\r\n  -moz-transition: border-color 0.3s ease-in-out;\r\n  transition: border-color 0.3s ease-in-out;\r\n  border: 1px solid var(--primary-green);\r\n}\r\n\r\n.comment-btn {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  border: none;\r\n  background: var(--primary-green);\r\n  color: #fff;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-btn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n.comment-btn:hover {\r\n  background: #43a047;\r\n  -webkit-transition: background 0.3s ease-in-out;\r\n  -moz-transition: background 0.3s ease-in-out;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n/* Footer Styles */\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5em;\r\n  margin-top: 20px;\r\n  background: rgba(0, 0, 0, 0.466);\r\n}\r\n\r\nfooter p {\r\n  padding: 2em;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  font-size: 1.3em;\r\n  color: #fff;\r\n}\r\n\r\n.footer-link {\r\n  color: var(--primary-green);\r\n  font-size: 1.1em;\r\n}\r\n\r\n/* Mobile Styles */\r\n@media screen and (max-width: 800px) {\r\n  .topHead {\r\n    width: auto;\r\n  }\r\n\r\n  .movies {\r\n    display: grid;\r\n    grid-gap: 20px 20px;\r\n    grid-template-columns: 100%;\r\n  }\r\n\r\n  #idform {\r\n    display: none;\r\n  }\r\n\r\n  .buttonDiv {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .popUp-button {\r\n    width: auto;\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  .popUp-title {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .subtitle-button {\r\n    width: auto;\r\n  }\r\n\r\n  .movie-overlay-rating {\r\n    font-size: 1.4em;\r\n  }\r\n\r\n  .popUp-summary {\r\n    width: auto;\r\n  }\r\n\r\n  .modal-dialog {\r\n    width: 85vw;\r\n    padding: 1em;\r\n    margin: 0.5em;\r\n    gap: 1em;\r\n    flex-basis: 90%;\r\n  }\r\n\r\n  .comment-section {\r\n    flex-direction: column;\r\n    padding: 0;\r\n  }\r\n\r\n  .readMoreBtn {\r\n    width: auto;\r\n  }\r\n\r\n  .movieContent {\r\n    width: auto;\r\n  }\r\n\r\n  .comment-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .display-comments {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 325px) {\r\n  nav,\r\n  span.showdetail,\r\n  span.showsize {\r\n    display: none;\r\n  }\r\n\r\n  .topHead {\r\n    width: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: rgba(255, 255, 255, 0.062);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #2b2b2b94;\r\n  border-radius: 5px;\r\n}\r\n\r\n:root {\r\n  --primary-green: hwb(113 41% 7% / 0.767);\r\n  --background-grey: #1d1d1d;\r\n  --text-grey: #919191;\r\n  --header-font: 'Poppins', sans-serif;\r\n  --body-font: 'Raleway', sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: var(--body-font);\r\n  background-image: url(./assets/body.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.mainwrapper {\r\n  border: rgba(222, 184, 135, 0.671) 5px solid;\r\n  box-shadow: 0 0 20px 10px rgb(243, 125, 180);\r\n  width: 90%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  background-color: rgba(149, 155, 158, 0.842);\r\n}\r\n\r\n.topHead {\r\n  height: 60px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 2em;\r\n  background-color: rgb(23, 23, 26);\r\n}\r\n\r\n.logo img {\r\n  padding: 0.5em 0;\r\n  height: 3rem;\r\n  transition: 1s;\r\n}\r\n\r\n.logo img:hover {\r\n  height: 5rem;\r\n  cursor: pointer;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  height: 20px;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  gap: 3rem;\r\n}\r\n\r\nnav ul li {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li a {\r\n  text-transform: capitalize;\r\n  text-decoration: none;\r\n  color: rgb(214, 243, 247);\r\n  border: none;\r\n  transition: ease 0.6s;\r\n}\r\n\r\nnav ul li a:hover {\r\n  color: rgb(236, 79, 52);\r\n  font-size: 20px;\r\n}\r\n\r\nform#idform {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.search {\r\n  width: 70%;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 10px;\r\n  margin-left: 3rem;\r\n  font-size: 1rem;\r\n  color: var(--primary-green);\r\n}\r\n\r\n.search:focus {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n/* Movie section styles */\r\n\r\nh2 {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.movie-section-title {\r\n  background-color: rgba(66, 55, 55, 0.76);\r\n  text-align: center;\r\n  color: #fff;\r\n  padding: 1em 1.2em 0;\r\n  margin-bottom: 1rem;\r\n  height: 11rem;\r\n}\r\n\r\n.movie-section-title span {\r\n  font-size: 1.15em;\r\n  font-weight: 700;\r\n}\r\n\r\n.fa-star {\r\n  color: var(--primary-green);\r\n  padding-right: 0.4em;\r\n}\r\n\r\n.movie-list {\r\n  padding: 1em 0;\r\n}\r\n\r\n.movie-list span {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.countsize {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nspan.showhead {\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n  color: rgb(221, 61, 154);\r\n}\r\n\r\n.showdetail {\r\n  color: #cdd2d6;\r\n}\r\n\r\n.showsize {\r\n  color: #c0c7c7;\r\n}\r\n\r\n.movies {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  color: #fff;\r\n  overflow-y: auto;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 23% 23% 23% 23%;\r\n  grid-gap: 20px 20px;\r\n  grid-auto-flow: row;\r\n  padding-bottom: 1.5em;\r\n}\r\n\r\n/* Movie Wrapper overlay styles */\r\n.movie-image-div {\r\n  position: relative;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movie-image-div:hover {\r\n  border: 4px solid var(--primary-green);\r\n}\r\n\r\n.details-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  font-family: var(--body-font);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity 0.35s;\r\n  transform: translate3d(0,0,0);\r\n}\r\n\r\n.details-overlay > * {\r\n  transform: translateY(50px);\r\n  transition: transform 2s;\r\n}\r\n\r\n.details-overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.details-overlay:hover > * {\r\n  transform: translateY(0);\r\n}\r\n\r\n.movie-image {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.overlay-star {\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n.movie-overlay-rating {\r\n  padding-bottom: 1.1em;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-overlay-genre {\r\n  padding-bottom: 1.1em;\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.ovelay-details-btn {\r\n  color: #fff;\r\n  padding: 0.5em 1.3em;\r\n  background: var(--primary-green);\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Movie Wrapper styles */\r\n.movie-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.8em;\r\n}\r\n\r\n.movie-title {\r\n  height: 42px;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 1em;\r\n  align-items: center;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.movie-likes {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.commentBtn {\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  background: #3d3a39;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  box-shadow: 0 8px 16px #23332c3d;\r\n}\r\n\r\n.commentBtn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n/* Movie Modal styles */\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(32, 32, 32, 0.95);\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.35s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-basis: 60%;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  gap: 3rem;\r\n  width: 55vw;\r\n  height: 95%;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\r\n  overflow: auto;\r\n  cursor: default;\r\n  margin: 5em;\r\n  padding: 3em;\r\n}\r\n\r\n/* PopUp styles */\r\n.popUp-button {\r\n  width: 40%;\r\n  margin: 1rem;\r\n  background-color: var(--primary-green);\r\n  border: 2px solid #4b962b;\r\n  border-radius: 20px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  font-family: inherit;\r\n}\r\n\r\n.popUp-button:hover {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n.movieCard {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.movieCard-img {\r\n  width: 100%;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movieContent {\r\n  width: 40%;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popUp-title {\r\n  font-size: 3em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-Genre {\r\n  color: #4b962b;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-releaseDate {\r\n  font-size: 1rem;\r\n  color: #ffffff81;\r\n  padding-bottom: 2em;\r\n}\r\n\r\n.popUp-summary {\r\n  color: #ccc;\r\n  margin: 0 auto;\r\n  line-height: 1.4em;\r\n  letter-spacing: 0.8px;\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\n.subtitle-button {\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  margin-bottom: 4em;\r\n}\r\n\r\n.readMoreBtn {\r\n  width: 40%;\r\n  margin: 1rem 0;\r\n  background-color: hsl(0, 54%, 65%);\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  color: #414141;\r\n}\r\n\r\n.close-proj-modal {\r\n  border-radius: 50%;\r\n  padding: 0.5em;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 2px solid #555;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n}\r\n\r\n.close-proj-modal:hover {\r\n  border: 2px solid #fff;\r\n  background-color: #414141;\r\n  color: #fff;\r\n}\r\n\r\n.close-proj-modal::before {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  width: 2px;\r\n  left: 12px;\r\n  top: 5px;\r\n  bottom: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-proj-modal::after {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  height: 2px;\r\n  top: 12px;\r\n  left: 5px;\r\n  right: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Modal comments styles */\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 3rem;\r\n  flex-basis: 100%;\r\n  gap: 2rem;\r\n  background-color: #1d1d1d;\r\n}\r\n\r\n.comments-count {\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 1em;\r\n  font-family: var(--header-font);\r\n}\r\n\r\n.display-comments {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-container {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #171717;\r\n  padding: 1em;\r\n}\r\n\r\n.author-thumbnail {\r\n  flex: none;\r\n  margin-right: 12px;\r\n}\r\n\r\n.user-name-link {\r\n  background-color: #00579c;\r\n  border-radius: 99px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.8em;\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  width: 1.6em;\r\n}\r\n\r\n.user-name-link span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.user-name {\r\n  background-color: #2b2b2b;\r\n}\r\n\r\n.comment-main {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n#comment-header {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n#header-author {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: baseline;\r\n}\r\n\r\n#author-text {\r\n  margin-right: 10px;\r\n  color: #919191;\r\n  margin-bottom: 2px;\r\n  display: block;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n#comment-date {\r\n  color: #606060;\r\n  font-family: 'Roboto', 'Arial', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 400;\r\n}\r\n\r\n#comment-text {\r\n  color: #fff;\r\n  word-wrap: break-word;\r\n  font-size: 14px;\r\n  height: 20px;\r\n  line-height: 1.4rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-comment {\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.add-comment h2 {\r\n  display: block;\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\n.add-comment-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.fa-message {\r\n  padding-right: 1em;\r\n  color: var(--primary-green);\r\n}\r\n\r\n/* Comment form styles */\r\n.add-comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  overflow: hidden;\r\n  background-color: #171717;\r\n  padding: 2em;\r\n  border-radius: 10px;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: var(--header-font);\r\n  width: 100%;\r\n  color: #fff;\r\n  border: 1px solid #1d1d1d;\r\n  background: #2b2b2b;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n}\r\n\r\ntextarea {\r\n  height: 100px;\r\n  max-width: 100%;\r\n  resize: none;\r\n}\r\n\r\ninput,\r\ntextarea:hover {\r\n  -webkit-transition: border-color 0.3s ease-in-out;\r\n  -moz-transition: border-color 0.3s ease-in-out;\r\n  transition: border-color 0.3s ease-in-out;\r\n  border: 1px solid var(--primary-green);\r\n}\r\n\r\n.comment-btn {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  border: none;\r\n  background: var(--primary-green);\r\n  color: #fff;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-btn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n.comment-btn:hover {\r\n  background: #43a047;\r\n  -webkit-transition: background 0.3s ease-in-out;\r\n  -moz-transition: background 0.3s ease-in-out;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n/* Footer Styles */\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5em;\r\n  margin-top: 20px;\r\n  background: rgba(0, 0, 0, 0.466);\r\n}\r\n\r\nfooter p {\r\n  padding: 2em;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  font-size: 1.3em;\r\n  color: #fff;\r\n}\r\n\r\n.footer-link {\r\n  color: var(--primary-green);\r\n  font-size: 1.1em;\r\n}\r\n\r\n/* Mobile Styles */\r\n@media screen and (max-width: 800px) {\r\n  .topHead {\r\n    width: auto;\r\n  }\r\n\r\n  .movies {\r\n    display: grid;\r\n    grid-gap: 20px 20px;\r\n    grid-template-columns: 100%;\r\n  }\r\n\r\n  #idform {\r\n    display: none;\r\n  }\r\n\r\n  .buttonDiv {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .popUp-button {\r\n    width: auto;\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  .popUp-title {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .subtitle-button {\r\n    width: auto;\r\n  }\r\n\r\n  .movie-overlay-rating {\r\n    font-size: 1.4em;\r\n  }\r\n\r\n  .popUp-summary {\r\n    width: auto;\r\n  }\r\n\r\n  .modal-dialog {\r\n    width: 85vw;\r\n    padding: 1em;\r\n    margin: 0.5em;\r\n    gap: 1em;\r\n    flex-basis: 90%;\r\n  }\r\n\r\n  .comment-section {\r\n    flex-direction: column;\r\n    padding: 0;\r\n  }\r\n\r\n  .readMoreBtn {\r\n    width: auto;\r\n  }\r\n\r\n  .movieContent {\r\n    width: auto;\r\n  }\r\n\r\n  .comment-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .display-comments {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 325px) {\r\n  nav,\r\n  span.showdetail,\r\n  span.showsize {\r\n    display: none;\r\n  }\r\n\r\n  .topHead {\r\n    width: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0scUVBQXFFLGtCQUFrQixLQUFLLG1DQUFtQyxtREFBbUQsS0FBSyxtQ0FBbUMsa0NBQWtDLHlCQUF5QixLQUFLLGVBQWUsK0NBQStDLGlDQUFpQywyQkFBMkIsMkNBQTJDLHlDQUF5QyxLQUFLLGNBQWMsd0JBQXdCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLCtDQUErQyw2QkFBNkIsbUNBQW1DLEtBQUssY0FBYyxxQ0FBcUMsa0NBQWtDLDZCQUE2QixLQUFLLHNDQUFzQyxrQ0FBa0MsK0JBQStCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLDZCQUE2QixLQUFLLFdBQVcsNEJBQTRCLGtCQUFrQixLQUFLLGlEQUFpRCxtREFBbUQsbURBQW1ELGlCQUFpQixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIscUJBQXFCLG9CQUFvQix1QkFBdUIsbURBQW1ELEtBQUssa0JBQWtCLG1CQUFtQixrQkFBa0Isb0JBQW9CLHFDQUFxQywwQkFBMEIscUJBQXFCLHdDQUF3QyxLQUFLLG1CQUFtQix1QkFBdUIsbUJBQW1CLHFCQUFxQixLQUFLLHlCQUF5QixtQkFBbUIsc0JBQXNCLEtBQUssYUFBYSxvQkFBb0IsMEJBQTBCLEtBQUssZ0JBQWdCLG9CQUFvQixtQkFBbUIsMEJBQTBCLHFCQUFxQixnQkFBZ0IsS0FBSyxtQkFBbUIsdUJBQXVCLEtBQUsscUJBQXFCLGlDQUFpQyw0QkFBNEIsZ0NBQWdDLG1CQUFtQiw0QkFBNEIsS0FBSywyQkFBMkIsOEJBQThCLHNCQUFzQixLQUFLLHFCQUFxQixvQkFBb0IsMEJBQTBCLHNCQUFzQixLQUFLLGlCQUFpQixpQkFBaUIsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsd0JBQXdCLHNCQUFzQixrQ0FBa0MsS0FBSyx1QkFBdUIsaUJBQWlCLGdDQUFnQyw2Q0FBNkMsa0JBQWtCLEtBQUssOENBQThDLHlCQUF5QixLQUFLLDhCQUE4QiwrQ0FBK0MseUJBQXlCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLG9CQUFvQixLQUFLLG1DQUFtQyx3QkFBd0IsdUJBQXVCLEtBQUssa0JBQWtCLGtDQUFrQywyQkFBMkIsS0FBSyxxQkFBcUIscUJBQXFCLEtBQUssMEJBQTBCLGtDQUFrQyxLQUFLLG9CQUFvQixvQkFBb0IsMEJBQTBCLDhCQUE4QixLQUFLLHVCQUF1Qix1QkFBdUIsd0JBQXdCLCtCQUErQixLQUFLLHFCQUFxQixxQkFBcUIsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssaUJBQWlCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDZDQUE2QywwQkFBMEIsMEJBQTBCLDRCQUE0QixLQUFLLGdFQUFnRSx5QkFBeUIsNkJBQTZCLEtBQUssZ0NBQWdDLDZDQUE2QyxLQUFLLDBCQUEwQix5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIscUNBQXFDLGtCQUFrQixvQ0FBb0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGlCQUFpQixnQ0FBZ0Msb0NBQW9DLEtBQUssOEJBQThCLGtDQUFrQywrQkFBK0IsS0FBSyxnQ0FBZ0MsaUJBQWlCLEtBQUssb0NBQW9DLCtCQUErQixLQUFLLHNCQUFzQixxQkFBcUIsa0JBQWtCLEtBQUssdUJBQXVCLDRCQUE0QixLQUFLLCtCQUErQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixLQUFLLDhCQUE4Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QixLQUFLLDZCQUE2QixrQkFBa0IsMkJBQTJCLHVDQUF1Qyx5QkFBeUIsbUJBQW1CLG9CQUFvQix1QkFBdUIseUJBQXlCLHNCQUFzQixLQUFLLHNEQUFzRCxvQkFBb0IsNkJBQTZCLHFCQUFxQixLQUFLLHNCQUFzQixtQkFBbUIsdUJBQXVCLEtBQUssMEJBQTBCLG9CQUFvQiwwQkFBMEIseUJBQXlCLDBCQUEwQixLQUFLLHlCQUF5QixrQ0FBa0MsS0FBSyxzQkFBc0IsMEJBQTBCLEtBQUsscUJBQXFCLGtCQUFrQixxQkFBcUIsMEJBQTBCLHlCQUF5QixtQkFBbUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsc0JBQXNCLEtBQUssMkJBQTJCLHVDQUF1QyxLQUFLLDRCQUE0QiwwQkFBMEIsaUNBQWlDLEtBQUssNENBQTRDLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIseUNBQXlDLHNCQUFzQix5QkFBeUIsaUJBQWlCLG9DQUFvQyxLQUFLLDJCQUEyQiwwQkFBMEIsaUJBQWlCLEtBQUssdUJBQXVCLHlCQUF5QixvQkFBb0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIsa0NBQWtDLGdCQUFnQixrQkFBa0Isa0JBQWtCLHlCQUF5QiwrRUFBK0UscUJBQXFCLHNCQUFzQixrQkFBa0IsbUJBQW1CLEtBQUssNkNBQTZDLGlCQUFpQixtQkFBbUIsNkNBQTZDLGdDQUFnQywwQkFBMEIsMkJBQTJCLHNCQUFzQix3QkFBd0Isa0JBQWtCLDJCQUEyQixLQUFLLDZCQUE2QixpQkFBaUIsZ0NBQWdDLDZDQUE2QyxrQkFBa0IsS0FBSyxvQkFBb0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLEtBQUssb0JBQW9CLG9CQUFvQiwwQkFBMEIsS0FBSyx3QkFBd0Isa0JBQWtCLDZCQUE2QixLQUFLLHVCQUF1QixpQkFBaUIsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDhCQUE4QixLQUFLLHNCQUFzQixxQkFBcUIsNEJBQTRCLEtBQUssc0JBQXNCLHFCQUFxQiw0QkFBNEIsS0FBSyw0QkFBNEIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsS0FBSyx3QkFBd0Isa0JBQWtCLHFCQUFxQix5QkFBeUIsNEJBQTRCLDJCQUEyQixLQUFLLDBCQUEwQixpQkFBaUIscUJBQXFCLGdDQUFnQyw2QkFBNkIseUJBQXlCLDJCQUEyQix3QkFBd0Isa0JBQWtCLHlCQUF5QixLQUFLLHNCQUFzQixpQkFBaUIscUJBQXFCLHlDQUF5QyxtQkFBbUIseUJBQXlCLDJCQUEyQixzQkFBc0IscUJBQXFCLEtBQUssMkJBQTJCLHlCQUF5QixxQkFBcUIsa0JBQWtCLG1CQUFtQiw2QkFBNkIsa0JBQWtCLHlCQUF5QixnQkFBZ0Isa0JBQWtCLEtBQUssaUNBQWlDLDZCQUE2QixnQ0FBZ0Msa0JBQWtCLEtBQUssbUNBQW1DLG1CQUFtQix5QkFBeUIscUJBQXFCLGdDQUFnQyxpQkFBaUIsaUJBQWlCLGVBQWUsa0JBQWtCLCtCQUErQixLQUFLLGtDQUFrQyxtQkFBbUIseUJBQXlCLHFCQUFxQixnQ0FBZ0Msa0JBQWtCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLCtCQUErQixLQUFLLHlEQUF5RCxvQkFBb0IsMEJBQTBCLHFDQUFxQyxvQkFBb0IsdUJBQXVCLGdCQUFnQixnQ0FBZ0MsS0FBSyx5QkFBeUIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsc0NBQXNDLEtBQUssMkJBQTJCLGlCQUFpQixvQkFBb0IsNkJBQTZCLEtBQUssNEJBQTRCLDBCQUEwQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxtQkFBbUIsS0FBSywyQkFBMkIsaUJBQWlCLHlCQUF5QixLQUFLLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLDZCQUE2QixrQkFBa0Isc0JBQXNCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLEtBQUssOEJBQThCLDZCQUE2QixLQUFLLG9CQUFvQixnQ0FBZ0MsS0FBSyx1QkFBdUIsb0JBQW9CLGNBQWMsNkJBQTZCLEtBQUsseUJBQXlCLHlCQUF5QixLQUFLLHdCQUF3QixvQkFBb0IsMEJBQTBCLDRCQUE0QixLQUFLLHNCQUFzQix5QkFBeUIscUJBQXFCLHlCQUF5QixxQkFBcUIsc0JBQXNCLHVCQUF1QixLQUFLLHVCQUF1QixxQkFBcUIsaURBQWlELHNCQUFzQix1QkFBdUIsS0FBSyx1QkFBdUIsa0JBQWtCLDRCQUE0QixzQkFBc0IsbUJBQW1CLDBCQUEwQix1QkFBdUIsS0FBSyxzQkFBc0Isa0JBQWtCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHVCQUF1QixrQkFBa0IsS0FBSyx5QkFBeUIscUJBQXFCLHNCQUFzQix1QkFBdUIsS0FBSyw2QkFBNkIsb0JBQW9CLDBCQUEwQixLQUFLLHFCQUFxQix5QkFBeUIsa0NBQWtDLEtBQUssd0RBQXdELG9CQUFvQiw2QkFBNkIsOEJBQThCLHVCQUF1QixnQ0FBZ0MsbUJBQW1CLDBCQUEwQixLQUFLLDRCQUE0QixzQ0FBc0Msa0JBQWtCLGtCQUFrQixnQ0FBZ0MsMEJBQTBCLHNCQUFzQixvQkFBb0IsS0FBSyxrQkFBa0Isb0JBQW9CLHNCQUFzQixtQkFBbUIsS0FBSyxrQ0FBa0Msd0RBQXdELHFEQUFxRCxnREFBZ0QsNkNBQTZDLEtBQUssc0JBQXNCLHNCQUFzQixrQkFBa0IsbUJBQW1CLHVDQUF1QyxrQkFBa0Isc0JBQXNCLG9CQUFvQixzQkFBc0IsS0FBSyw2QkFBNkIsMEJBQTBCLGlDQUFpQyxLQUFLLDRCQUE0QiwwQkFBMEIsc0RBQXNELG1EQUFtRCxvREFBb0QsS0FBSyx1Q0FBdUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGtCQUFrQix1QkFBdUIsdUNBQXVDLEtBQUssa0JBQWtCLG1CQUFtQix5QkFBeUIsMEJBQTBCLHFCQUFxQix1QkFBdUIsa0JBQWtCLEtBQUssc0JBQXNCLGtDQUFrQyx1QkFBdUIsS0FBSyxxRUFBcUUsZ0JBQWdCLG9CQUFvQixPQUFPLG1CQUFtQixzQkFBc0IsNEJBQTRCLG9DQUFvQyxPQUFPLG1CQUFtQixzQkFBc0IsT0FBTyxzQkFBc0IsK0JBQStCLE9BQU8seUJBQXlCLG9CQUFvQix5QkFBeUIsT0FBTyx3QkFBd0IsdUJBQXVCLE9BQU8sNEJBQTRCLG9CQUFvQixPQUFPLGlDQUFpQyx5QkFBeUIsT0FBTywwQkFBMEIsb0JBQW9CLE9BQU8seUJBQXlCLG9CQUFvQixxQkFBcUIsc0JBQXNCLGlCQUFpQix3QkFBd0IsT0FBTyw0QkFBNEIsK0JBQStCLG1CQUFtQixPQUFPLHdCQUF3QixvQkFBb0IsT0FBTyx5QkFBeUIsb0JBQW9CLE9BQU8sOEJBQThCLCtCQUErQixPQUFPLDZCQUE2QixvQkFBb0IsT0FBTyxLQUFLLDhDQUE4QyxxREFBcUQsc0JBQXNCLE9BQU8sb0JBQW9CLG9CQUFvQixzQkFBc0IsZ0NBQWdDLE9BQU8sS0FBSyx1QkFBdUI7QUFDNW5uQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksUUFBUSxNQUFNOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlDQUF5QztBQUN6QyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUyxXQUFXLEdBQUc7QUFDekQ7QUFDQTs7QUFFb0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnBDO0FBQ0E7QUFDQSx5REFBeUQsaUJBQWlCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlCQUFpQjtBQUM5QyxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUUwQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEMkI7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0JBQXNCO0FBQ3ZELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkRBQVE7QUFDckMsTUFBTSw4REFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBUTtBQUNwQiw2QkFBNkIsMkRBQVE7QUFDckMsTUFBTSw4REFBVztBQUNqQixLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3RTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDUHhCO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSSxRQUFRLE1BQU07QUFDdEM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBLEdBQUc7QUFDSDtBQUMyQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEI1QjtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaUU7QUFDTTs7QUFFdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQkFBK0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUJBQXFCO0FBQ3ZEO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDtBQUNBLHNDQUFzQywwQkFBMEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQ0FBZ0M7QUFDbkUsUUFBUTtBQUNSO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixpRUFBVztBQUN4QztBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUFhO0FBQ25CLE1BQU0scUVBQWU7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGdCQUFnQixpRUFBVztBQUMzQixtQ0FBbUMsaUVBQVc7QUFDOUMsVUFBVSxtRUFBYTtBQUN2QixVQUFVLHFFQUFlO0FBQ3pCO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx3QkFBd0I7QUFDOUQsVUFBVTtBQUNWO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdMMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUMyQjtBQUNRO0FBQ047QUFDRztBQUNyRDtBQUMwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtEQUFJO0FBQ3JCOztBQUVBLHVCQUF1QixrRUFBUztBQUNoQztBQUNBLFFBQVEsc0VBQWE7O0FBRXJCOztBQUVBLGtDQUFrQyxxRUFBVyxnQkFBZ0I7O0FBRTdEO0FBQ0E7QUFDQSxFQUFFLG1FQUFVO0FBQ1osRUFBRSxtRUFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9jb21tZW50cy1oYW5kbGVyLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL21vZHVsZXMvZGlzcGxheS1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktbW92aWVzLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL21vZHVsZXMvZ2V0LW1vdmllcy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9tb2R1bGVzL2xpa2VzLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9tb3ZpZS1jb3VudGVyLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL21vZHVsZXMvbW92aWUtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYm9keS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgU3R5bGVzICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYyKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiOTQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1ncmVlbjogaHdiKDExMyA0MSUgNyUgLyAwLjc2Nyk7XFxyXFxuICAtLWJhY2tncm91bmQtZ3JleTogIzFkMWQxZDtcXHJcXG4gIC0tdGV4dC1ncmV5OiAjOTE5MTkxO1xcclxcbiAgLS1oZWFkZXItZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1ib2R5LWZvbnQ6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXHJcXG5cXHJcXG4ubWFpbndyYXBwZXIge1xcclxcbiAgYm9yZGVyOiByZ2JhKDIyMiwgMTg0LCAxMzUsIDAuNjcxKSA1cHggc29saWQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAxMHB4IHJnYigyNDMsIDEyNSwgMTgwKTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ5LCAxNTUsIDE1OCwgMC44NDIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wSGVhZCB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAyNik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZzpob3ZlciB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkgYSB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjE0LCAyNDMsIDI0Nyk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlIDAuNnM7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjM2LCA3OSwgNTIpO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtI2lkZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2g6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBzZWN0aW9uIHN0eWxlcyAqL1xcclxcblxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNTUsIDU1LCAwLjc2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMWVtIDEuMmVtIDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUgc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuMTVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1zdGFyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlzdCB7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpc3Qgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5jb3VudHNpemUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5zaG93aGVhZCB7XFxyXFxuICBmb250LXNpemU6IDIuMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogcmdiKDIyMSwgNjEsIDE1NCk7XFxyXFxufVxcclxcblxcclxcbi5zaG93ZGV0YWlsIHtcXHJcXG4gIGNvbG9yOiAjY2RkMmQ2O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3NpemUge1xcclxcbiAgY29sb3I6ICNjMGM3Yzc7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMyUgMjMlIDIzJSAyMyU7XFxyXFxuICBncmlkLWdhcDogMjBweCAyMHB4O1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgV3JhcHBlciBvdmVybGF5IHN0eWxlcyAqL1xcclxcbi5tb3ZpZS1pbWFnZS1kaXYge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWltYWdlLWRpdjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5ID4gKiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXk6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciA+ICoge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktc3RhciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW07XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1vdmVybGF5LWdlbnJlIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMi4xZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZWxheS1kZXRhaWxzLWJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuM2VtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgV3JhcHBlciBzdHlsZXMgKi9cXHJcXG4ubW92aWUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUge1xcclxcbiAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgcGFkZGluZzogMC41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saWtlcyB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZDogIzNkM2EzOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4ICMyMzMzMmMzZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyZjQ3MGE7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgTW9kYWwgc3R5bGVzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAzMiwgMzIsIDAuOTUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaXMtdmlzaWJsZSB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWRpYWxvZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZmxleC1iYXNpczogNjAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIHdpZHRoOiA1NXZ3O1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUuMzRkZWcsICMyYjJiMmIgNjUlLCAjMDAyNDAwIDk0LjM1JSk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIG1hcmdpbjogNWVtO1xcclxcbiAgcGFkZGluZzogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3BVcCBzdHlsZXMgKi9cXHJcXG4ucG9wVXAtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Yjk2MmI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1idXR0b246aG92ZXIge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVDYXJkIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVDYXJkLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZUNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1HZW5yZSB7XFxyXFxuICBjb2xvcjogIzRiOTYyYjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLXJlbGVhc2VEYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmODE7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtc3VtbWFyeSB7XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0ZW07XFxyXFxufVxcclxcblxcclxcbi5yZWFkTW9yZUJ0biB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNTQlLCA2NSUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogIzQxNDE0MTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXByb2otbW9kYWwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcgJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxuICBsZWZ0OiAxMnB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXByb2otbW9kYWw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcgJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgdG9wOiAxMnB4O1xcclxcbiAgbGVmdDogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgY29tbWVudHMgc3R5bGVzICovXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvdW50IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvci10aHVtYm5haWwge1xcclxcbiAgZmxleDogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZS1saW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU3OWM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2lkdGg6IDEuNmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lLWxpbmsgc3BhbiB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLWF1dGhvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGhvci10ZXh0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIGNvbG9yOiAjOTE5MTkxO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1kYXRlIHtcXHJcXG4gIGNvbG9yOiAjNjA2MDYwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtdGV4dCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IGgyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLW1lc3NhZ2Uge1xcclxcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb21tZW50IGZvcm0gc3R5bGVzICovXFxyXFxuLmFkZC1jb21tZW50LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMWQxZDFkO1xcclxcbiAgYmFja2dyb3VuZDogIzJiMmIyYjtcXHJcXG4gIG1hcmdpbjogMCAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbjogMCAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzQzYTA0NztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBTdHlsZXMgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDVlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDY2KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9iaWxlIFN0eWxlcyAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAudG9wSGVhZCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtZ2FwOiAyMHB4IDIwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpZGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbkRpdiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdWJ0aXRsZS1idXR0b24ge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtc3VtbWFyeSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWRpYWxvZyB7XFxyXFxuICAgIHdpZHRoOiA4NXZ3O1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIG1hcmdpbjogMC41ZW07XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgICBmbGV4LWJhc2lzOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWFkTW9yZUJ0biB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5LWNvbW1lbnRzIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNXB4KSB7XFxyXFxuICBuYXYsXFxyXFxuICBzcGFuLnNob3dkZXRhaWwsXFxyXFxuICBzcGFuLnNob3dzaXplIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3BIZWFkIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixvQ0FBb0M7RUFDcEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHlEQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsNENBQTRDO0VBQzVDLDRDQUE0QztFQUM1QyxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2Is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QUFDYjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTs7O0lBR0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHbG9iYWwgU3R5bGVzICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYyKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiOTQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1ncmVlbjogaHdiKDExMyA0MSUgNyUgLyAwLjc2Nyk7XFxyXFxuICAtLWJhY2tncm91bmQtZ3JleTogIzFkMWQxZDtcXHJcXG4gIC0tdGV4dC1ncmV5OiAjOTE5MTkxO1xcclxcbiAgLS1oZWFkZXItZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1ib2R5LWZvbnQ6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvYm9keS5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXHJcXG5cXHJcXG4ubWFpbndyYXBwZXIge1xcclxcbiAgYm9yZGVyOiByZ2JhKDIyMiwgMTg0LCAxMzUsIDAuNjcxKSA1cHggc29saWQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAxMHB4IHJnYigyNDMsIDEyNSwgMTgwKTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ5LCAxNTUsIDE1OCwgMC44NDIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wSGVhZCB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAyNik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZyB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZzpob3ZlciB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkgYSB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjE0LCAyNDMsIDI0Nyk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlIDAuNnM7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjM2LCA3OSwgNTIpO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtI2lkZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2g6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBzZWN0aW9uIHN0eWxlcyAqL1xcclxcblxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNTUsIDU1LCAwLjc2KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMWVtIDEuMmVtIDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUgc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuMTVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1zdGFyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlzdCB7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpc3Qgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5jb3VudHNpemUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5zaG93aGVhZCB7XFxyXFxuICBmb250LXNpemU6IDIuMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogcmdiKDIyMSwgNjEsIDE1NCk7XFxyXFxufVxcclxcblxcclxcbi5zaG93ZGV0YWlsIHtcXHJcXG4gIGNvbG9yOiAjY2RkMmQ2O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3NpemUge1xcclxcbiAgY29sb3I6ICNjMGM3Yzc7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMyUgMjMlIDIzJSAyMyU7XFxyXFxuICBncmlkLWdhcDogMjBweCAyMHB4O1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgV3JhcHBlciBvdmVybGF5IHN0eWxlcyAqL1xcclxcbi5tb3ZpZS1pbWFnZS1kaXYge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWltYWdlLWRpdjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2R5LWZvbnQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5ID4gKiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXk6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciA+ICoge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktc3RhciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW07XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1vdmVybGF5LWdlbnJlIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMi4xZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZWxheS1kZXRhaWxzLWJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuM2VtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgV3JhcHBlciBzdHlsZXMgKi9cXHJcXG4ubW92aWUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUge1xcclxcbiAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgcGFkZGluZzogMC41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saWtlcyB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZDogIzNkM2EzOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4ICMyMzMzMmMzZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyZjQ3MGE7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgTW9kYWwgc3R5bGVzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAzMiwgMzIsIDAuOTUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaXMtdmlzaWJsZSB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWRpYWxvZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZmxleC1iYXNpczogNjAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIHdpZHRoOiA1NXZ3O1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUuMzRkZWcsICMyYjJiMmIgNjUlLCAjMDAyNDAwIDk0LjM1JSk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIG1hcmdpbjogNWVtO1xcclxcbiAgcGFkZGluZzogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3BVcCBzdHlsZXMgKi9cXHJcXG4ucG9wVXAtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Yjk2MmI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1idXR0b246aG92ZXIge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVDYXJkIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVDYXJkLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZUNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1HZW5yZSB7XFxyXFxuICBjb2xvcjogIzRiOTYyYjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLXJlbGVhc2VEYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmODE7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtc3VtbWFyeSB7XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0ZW07XFxyXFxufVxcclxcblxcclxcbi5yZWFkTW9yZUJ0biB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNTQlLCA2NSUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogIzQxNDE0MTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXByb2otbW9kYWwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcgJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxuICBsZWZ0OiAxMnB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXByb2otbW9kYWw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcgJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgdG9wOiAxMnB4O1xcclxcbiAgbGVmdDogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgY29tbWVudHMgc3R5bGVzICovXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvdW50IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvci10aHVtYm5haWwge1xcclxcbiAgZmxleDogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZS1saW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU3OWM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2lkdGg6IDEuNmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lLWxpbmsgc3BhbiB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLWF1dGhvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGhvci10ZXh0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIGNvbG9yOiAjOTE5MTkxO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1kYXRlIHtcXHJcXG4gIGNvbG9yOiAjNjA2MDYwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtdGV4dCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IGgyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLW1lc3NhZ2Uge1xcclxcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb21tZW50IGZvcm0gc3R5bGVzICovXFxyXFxuLmFkZC1jb21tZW50LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMWQxZDFkO1xcclxcbiAgYmFja2dyb3VuZDogIzJiMmIyYjtcXHJcXG4gIG1hcmdpbjogMCAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbjogMCAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzQzYTA0NztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBTdHlsZXMgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDVlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDY2KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgZm9udC1zaXplOiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9iaWxlIFN0eWxlcyAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuICAudG9wSGVhZCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtZ2FwOiAyMHB4IDIwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNpZGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ1dHRvbkRpdiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zdWJ0aXRsZS1idXR0b24ge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wVXAtc3VtbWFyeSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vZGFsLWRpYWxvZyB7XFxyXFxuICAgIHdpZHRoOiA4NXZ3O1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIG1hcmdpbjogMC41ZW07XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgICBmbGV4LWJhc2lzOiA5MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWFkTW9yZUJ0biB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllQ29udGVudCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5LWNvbW1lbnRzIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyNXB4KSB7XFxyXFxuICBuYXYsXFxyXFxuICBzcGFuLnNob3dkZXRhaWwsXFxyXFxuICBzcGFuLnNob3dzaXplIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b3BIZWFkIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gQHRzLWlnbm9yZVxuY29uc3QgVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XG5jb25zdCBhcHBJRCA9ICdIcXhHNnFrcGkzRGhaR2FBa1cxdyc7XG5jb25zdCBlbmRQb2ludCA9IGAke1VSTH0vYXBwcy8ke2FwcElEfS9jb21tZW50cy9gO1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChidXR0b25JZCwgdXNlck5hbWUsIHVzZXJDb21tZW50KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGVuZFBvaW50LCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYnV0dG9uSWQsXG4gICAgICB1c2VybmFtZTogdXNlck5hbWUudmFsdWUsXG4gICAgICBjb21tZW50OiB1c2VyQ29tbWVudC52YWx1ZSxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IENoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzLnRleHQoKTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7ZW5kUG9pbnR9P2l0ZW1faWQ9JHtpZH1gKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCB7IHBvc3RDb21tZW50LCBnZXRDb21tZW50cyB9O1xuIiwiY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKGNvbW1lbnRzRGl2LCBjb21tZW50cykgPT4ge1xuICBpZiAoY29tbWVudHMubGVuZ3RoID49IDEpIHtcbiAgICBjb21tZW50c0Rpdi5pbm5lckhUTUwgPSBgPGgzIGNsYXNzPWNvbW1lbnRzLWNvdW50PiAke2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHM8L2gzPmA7XG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnY29tbWVudC1jb250YWluZXInO1xuICAgICAgY29uc3QgdXNlclRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdXNlclRodW1ibmFpbC5jbGFzc05hbWUgPSAnYXV0aG9yLXRodW1ibmFpbCc7XG4gICAgICBjb25zdCB0aHVtYm5haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdGh1bWJuYWlsTGluay5jbGFzc05hbWUgPSAndXNlci1uYW1lLWxpbmsnO1xuICAgICAgdGh1bWJuYWlsTGluay5ocmVmID0gJyMnO1xuICAgICAgY29uc3QgdGh1bWJuYWlsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRodW1ibmFpbENvbnRlbnQudGV4dENvbnRlbnQgPSAnVSc7XG4gICAgICB0aHVtYm5haWxMaW5rLmFwcGVuZENoaWxkKHRodW1ibmFpbENvbnRlbnQpO1xuICAgICAgdXNlclRodW1ibmFpbC5hcHBlbmRDaGlsZCh0aHVtYm5haWxMaW5rKTtcblxuICAgICAgY29uc3QgY29tbWVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbW1lbnRNYWluLmNsYXNzTmFtZSA9ICdjb21tZW50LW1haW4nO1xuICAgICAgY29tbWVudE1haW4uaW5uZXJIVE1MID0gYFxuICAgICAgIDxkaXYgaWQ9XCJjb21tZW50LWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItYXV0aG9yXCI+XG4gICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgaWQ9XCJhdXRob3ItdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29tbWVudC51c2VybmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImNvbW1lbnQtZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBpZD1cImNvbW1lbnQtdGV4dFwiPlxuICAgICAgICAgIDxwPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZCh1c2VyVGh1bWJuYWlsLCBjb21tZW50TWFpbik7XG4gICAgICBjb21tZW50c0Rpdi5hcHBlbmQoY29tbWVudENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGNvdW50Q29tbWVudHMgPSAoZWxlbWVudCwgY29tbWVudHMpID0+IHtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoY29tbWVudHMubGVuZ3RoID49IDEpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y29tbWVudHMubGVuZ3RofSBDb21tZW50c2A7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcwIENvbW1lbnRzJztcbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheUNvbW1lbnRzLCBjb3VudENvbW1lbnRzIH07XG4iLCJpbXBvcnQgeyBnZXRMaWtlcywgcG9zdExpa2UsIHVwZGF0ZUxpa2VzIH0gZnJvbSAnLi9saWtlcy1oYW5kbGVyLmpzJztcblxuY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVzJyk7XG5jb25zdCBkaXNwbGF5TW92aWVzID0gKHNhbXBsZU1vdmllcykgPT4ge1xuICBzYW1wbGVNb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICBjb25zdCBtb3ZpZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZVdyYXBwZXIuaWQgPSBgbW92aWVfJHttb3ZpZS5pZH1gO1xuICAgIG1vdmllV3JhcHBlci5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcic7XG4gICAgY29uc3QgbW92aWVJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZUltZ0Rpdi5jbGFzc05hbWUgPSAnbW92aWUtaW1hZ2UtZGl2JztcbiAgICBjb25zdCBtb3ZpZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1vdmllSW1nLnNyYyA9IG1vdmllLmltYWdlLm1lZGl1bTtcbiAgICBtb3ZpZUltZy5jbGFzc05hbWUgPSAnbW92aWUtaW1hZ2UnO1xuICAgIG1vdmllSW1nRGl2LmFwcGVuZENoaWxkKG1vdmllSW1nKTtcbiAgICBjb25zdCBtb3ZpZUltZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZUltZ092ZXJsYXkuY2xhc3NOYW1lID0gJ2RldGFpbHMtb3ZlcmxheSc7XG4gICAgY29uc3QgcmF0aW5nU3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zdGFyJyk7XG4gICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LXN0YXInKTtcbiAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtb3ZpZVJhdGluZy5jbGFzc05hbWUgPSAnbW92aWUtb3ZlcmxheS1yYXRpbmcnO1xuICAgIGlmIChtb3ZpZS5yYXRpbmcuYXZlcmFnZSkge1xuICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYCR7bW92aWUucmF0aW5nLmF2ZXJhZ2V9IC8gMTBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZpZVJhdGluZy5pbm5lckhUTUwgPSAnMCAvIDEwJztcbiAgICB9XG4gICAgY29uc3QgbW92aWVHZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtb3ZpZUdlbnJlLmNsYXNzTmFtZSA9ICdtb3ZpZS1vdmVybGF5LWdlbnJlJztcbiAgICBtb3ZpZUdlbnJlLmlubmVySFRNTCA9IGAke21vdmllLmdlbnJlc1swXX1gO1xuICAgIGNvbnN0IG1vdmllRGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1vdmllRGV0YWlsc0J0bi5jbGFzc05hbWUgPSAnb3ZlbGF5LWRldGFpbHMtYnRuJztcbiAgICBtb3ZpZURldGFpbHNCdG4uaW5uZXJIVE1MID0gJ1ZpZXcgRGV0YWlscyc7XG4gICAgbW92aWVJbWdPdmVybGF5LmFwcGVuZChcbiAgICAgIHJhdGluZ1N0YXIsXG4gICAgICBtb3ZpZVJhdGluZyxcbiAgICAgIG1vdmllR2VucmUsXG4gICAgICBtb3ZpZURldGFpbHNCdG4sXG4gICAgKTtcbiAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChtb3ZpZUltZ092ZXJsYXkpO1xuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChtb3ZpZUltZ0Rpdik7XG4gICAgY29uc3QgbW92aWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9IGAke21vdmllLm5hbWV9YDtcbiAgICBtb3ZpZVRpdGxlLmNsYXNzTmFtZSA9ICdtb3ZpZS10aXRsZSc7XG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKG1vdmllVGl0bGUpO1xuICAgIGNvbnN0IGxpa2VzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlrZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ2xpa2VzLWNvbnRhaW5lcic7XG4gICAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1oZWFydCcpO1xuICAgIGxpa2VCdG4uaWQgPSBgJHttb3ZpZVdyYXBwZXIuaWR9YDtcbiAgICBsaWtlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaWtlQnRuKTtcbiAgICBjb25zdCBtb3ZpZUxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1vdmllTGlrZXMuY2xhc3NOYW1lID0gJ21vdmllLWxpa2VzJztcbiAgICBtb3ZpZUxpa2VzLnRleHRDb250ZW50ID0gJzAgbGlrZXMnO1xuICAgIGxpa2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllTGlrZXMpO1xuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChsaWtlc0NvbnRhaW5lcik7XG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbW1lbnRCdG4uaW5uZXJIVE1MID0gJ0NvbW1lbnQgb24gTW92aWUnO1xuICAgIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ2NvbW1lbnRCdG4nO1xuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcbiAgICBjb25zdCBwb3BMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc0FycmF5ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgICAgIHVwZGF0ZUxpa2VzKGxpa2VCdG4sIHJlc0FycmF5LCBtb3ZpZUxpa2VzKTtcbiAgICB9O1xuICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllV3JhcHBlcik7XG4gICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBtb3ZpZSA9IGUudGFyZ2V0O1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgYXdhaXQgcG9zdExpa2UobW92aWUuaWQpO1xuICAgICAgY29uc3QgcmVzQXJyYXkgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAgICAgdXBkYXRlTGlrZXMobW92aWUsIHJlc0FycmF5LCBtb3ZpZUxpa2VzKTtcbiAgICB9KTtcbiAgICBwb3BMaWtlcygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNb3ZpZXM7XG4iLCJjb25zdCBlbmRQb2ludCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9MzMnO1xuY29uc3QgZ2V0TW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XG4gIGNvbnN0IGRhdGEgPSByZXMuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1vdmllczsiLCJjb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbmNvbnN0IGFwcElEID0gJ0hxeEc2cWtwaTNEaFpHYUFrVzF3JztcbmNvbnN0IGVuZFBvaW50ID0gYCR7VVJMfS9hcHBzLyR7YXBwSUR9L2xpa2VzL2A7XG5jb25zdCBwb3N0TGlrZSA9IGFzeW5jIChpdGVtKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGl0ZW0gfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBDaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuY29uc3QgdXBkYXRlTGlrZXMgPSAobW92aWUsIHJlc0FycmF5LCBtb3ZpZUxpa2VzKSA9PiB7XG4gIHJlc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5pdGVtX2lkID09PSBtb3ZpZS5pZCkge1xuICAgICAgbW92aWVMaWtlcy5pbm5lckhUTUwgPSBgJHtlbGVtZW50Lmxpa2VzfSBsaWtlc2A7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgeyBwb3N0TGlrZSwgZ2V0TGlrZXMsIHVwZGF0ZUxpa2VzIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3VudE1vdmllcyhzYW1wbGVNb3ZpZXMpIHtcbiAgcmV0dXJuIHNhbXBsZU1vdmllcy5sZW5ndGg7XG59IiwiaW1wb3J0IHsgcG9zdENvbW1lbnQsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50cy1oYW5kbGVyLmpzJztcbmltcG9ydCB7IGRpc3BsYXlDb21tZW50cywgY291bnRDb21tZW50cyB9IGZyb20gJy4vZGlzcGxheS1jb21tZW50cy5qcyc7XG5cbmNvbnN0IGlzVmlzaWJsZSA9ICdpcy12aXNpYmxlJztcblxuY29uc3QgbW92aWVNb2RhbCA9IGFzeW5jIChjb21tZW50QnV0dG9ucywgc2FtcGxlTW92aWVzKSA9PiB7XG4gIGNvbW1lbnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsJztcblxuICAgICAgY29uc3QgcG9wVXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBvcFVwRGl2LmNsYXNzTmFtZSA9ICdtb2RhbC1kaWFsb2cnO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZChpc1Zpc2libGUpO1xuICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQocG9wVXBEaXYpO1xuXG4gICAgICBjb25zdCBtb3ZpZUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgbW92aWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgbW92aWVEb3dubG9hZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgbW92aWVXYXRjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbW92aWVJbWdEaXYuY2xhc3NOYW1lID0gJ21vdmllQ2FyZCc7XG4gICAgICBtb3ZpZUltZy5jbGFzc05hbWUgPSAnbW92aWVDYXJkLWltZyc7XG4gICAgICBtb3ZpZUltZy5zcmMgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uaW1hZ2Uub3JpZ2luYWx9YDtcbiAgICAgIGJ1dHRvbkRpdi5jbGFzc05hbWUgPSAnYnV0dG9uRGl2JztcbiAgICAgIG1vdmllRG93bmxvYWRCdG4uY2xhc3NOYW1lID0gJ3BvcFVwLWJ1dHRvbic7XG4gICAgICBtb3ZpZURvd25sb2FkQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlcy1kb3duXCI+PC9pPkRvd25sb2FkJztcbiAgICAgIG1vdmllV2F0Y2hCdG4uY2xhc3NOYW1lID0gJ3BvcFVwLWJ1dHRvbic7XG4gICAgICBtb3ZpZVdhdGNoQnRuLmlubmVySFRNTCA9ICdXYXRjaCBOb3cnO1xuICAgICAgbW92aWVJbWdEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWcpO1xuICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG1vdmllRG93bmxvYWRCdG4pO1xuICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG1vdmllV2F0Y2hCdG4pO1xuICAgICAgbW92aWVJbWdEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKG1vdmllSW1nRGl2KTtcblxuICAgICAgY29uc3QgbW92aWVDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgIGNvbnN0IG1vdmllR2VucmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgY29uc3QgbW92aWVSZWxlYXNlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBjb25zdCBtb3ZpZU5ldHdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgY29uc3QgZG93bmxvYWRTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGNvbnN0IHJhdGluZ1N0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGNvbnN0IG1vdmllU3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG1vdmllQ29udGVudERpdi5jbGFzc05hbWUgPSAnbW92aWVDb250ZW50JztcbiAgICAgIG1vdmllVGl0bGUudGV4dENvbnRlbnQgPSBgJHtzYW1wbGVNb3ZpZXNbaV0ubmFtZX1gO1xuICAgICAgbW92aWVUaXRsZS5jbGFzc05hbWUgPSAncG9wVXAtdGl0bGUnO1xuICAgICAgbW92aWVHZW5yZS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uZ2VucmVzWzBdfWA7XG4gICAgICBtb3ZpZUdlbnJlLmNsYXNzTmFtZSA9ICdwb3BVcC1HZW5yZSc7XG4gICAgICBtb3ZpZVJlbGVhc2VEYXRlLmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5wcmVtaWVyZWR9YDtcbiAgICAgIG1vdmllUmVsZWFzZURhdGUuY2xhc3NOYW1lID0gJ3BvcFVwLXJlbGVhc2VEYXRlJztcbiAgICAgIG1vdmllTmV0d29yay5pbm5lckhUTUwgPSAnJztcbiAgICAgIG1vdmllTmV0d29yay5jbGFzc05hbWUgPSAnJztcbiAgICAgIGRvd25sb2FkU3VidGl0bGUuaHJlZiA9ICcjJztcbiAgICAgIGRvd25sb2FkU3VidGl0bGUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGVzLWRvd25cIj48L2k+IERvd25sb2FkIFN1YnRpdGxlcyc7XG4gICAgICBkb3dubG9hZFN1YnRpdGxlLmNsYXNzTmFtZSA9ICdzdWJ0aXRsZS1idXR0b24nO1xuICAgICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zdGFyJyk7XG4gICAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktc3RhcicpO1xuICAgICAgbW92aWVSYXRpbmcuY2xhc3NOYW1lID0gJ21vdmllLW92ZXJsYXktcmF0aW5nJztcbiAgICAgIGlmIChzYW1wbGVNb3ZpZXNbaV0ucmF0aW5nLmF2ZXJhZ2UpIHtcbiAgICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYCR7c2FtcGxlTW92aWVzW2ldLnJhdGluZy5hdmVyYWdlfSAvIDEwYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9ICcwIC8gMTAnO1xuICAgICAgfVxuICAgICAgbW92aWVTdW1tYXJ5LmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5zdW1tYXJ5LnN1YnN0cmluZyhcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgKX0uLi4uLi5gO1xuICAgICAgbW92aWVTdW1tYXJ5LmNsYXNzTmFtZSA9ICdwb3BVcC1zdW1tYXJ5JztcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChtb3ZpZVRpdGxlKTtcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChtb3ZpZUdlbnJlKTtcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChtb3ZpZVJlbGVhc2VEYXRlKTtcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChkb3dubG9hZFN1YnRpdGxlKTtcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChyYXRpbmdTdGFyKTtcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChtb3ZpZVJhdGluZyk7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVTdW1tYXJ5KTtcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKG1vdmllQ29udGVudERpdik7XG5cbiAgICAgIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNsb3NlTW9kYWxCdG4uaW5uZXJIVE1MID0gJyc7XG4gICAgICBjbG9zZU1vZGFsQnRuLmNsYXNzTmFtZSA9ICdjbG9zZS1wcm9qLW1vZGFsJztcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKGNsb3NlTW9kYWxCdG4pO1xuICAgICAgY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuaXMtdmlzaWJsZScpKSB7XG4gICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLmlzLXZpc2libGUnKSkge1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQ29tbWVudHNcbiAgICAgIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgY29tbWVudFNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbW1lbnQtc2VjdGlvbic7XG4gICAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmb3JtRGl2LmNsYXNzTmFtZSA9ICdhZGQtY29tbWVudCc7XG4gICAgICBjb25zdCBmb3JtSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmb3JtSGVhZGVyRGl2LmNsYXNzTmFtZSA9ICdhZGQtY29tbWVudC1oZWFkZXInO1xuICAgICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBjb25zdCBmb3JtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGZvcm1JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICBmb3JtSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1tZXNzYWdlJyk7XG4gICAgICBmb3JtSGVhZGVyLmlubmVySFRNTCA9ICdBZGQgeW91ciBjb21tZW50JztcbiAgICAgIGZvcm1IZWFkZXJEaXYuYXBwZW5kKGZvcm1JY29uLCBmb3JtSGVhZGVyKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgY29tbWVudEZvcm0uY2xhc3NOYW1lID0gJ2FkZC1jb21tZW50LWZvcm0nO1xuXG4gICAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICB1c2VyTmFtZS5jbGFzc05hbWUgPSAndXNlci1uYW1lJztcbiAgICAgIHVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1VzZXJuYW1lLi4uJztcbiAgICAgIGNvbnN0IHVzZXJDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHVzZXJDb21tZW50LmNsYXNzTmFtZSA9ICd1c2VyLWNvbW1lbnQnO1xuICAgICAgdXNlckNvbW1lbnQucGxhY2Vob2xkZXIgPSAnU2hhcmUgeW91ciBjb21tZW50cyAuLi4nO1xuICAgICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29tbWVudEJ0bi5jbGFzc05hbWUgPSAnY29tbWVudC1idG4nO1xuICAgICAgY29tbWVudEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQgQ29tbWVudCc7XG4gICAgICBjb21tZW50QnRuLmlkID0gYG1vdmllX2NtdF8ke3NhbXBsZU1vdmllc1tpXS5pZH1gO1xuICAgICAgY29tbWVudEZvcm0uYXBwZW5kKHVzZXJOYW1lLCB1c2VyQ29tbWVudCwgY29tbWVudEJ0bik7XG4gICAgICBmb3JtRGl2LmFwcGVuZChmb3JtSGVhZGVyRGl2LCBjb21tZW50Rm9ybSk7XG5cbiAgICAgIGNvbnN0IGNvbW1lbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb21tZW50c0Rpdi5jbGFzc05hbWUgPSAnZGlzcGxheS1jb21tZW50cyc7XG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRCdG4uaWQpO1xuICAgICAgY29uc3QgY29tbWVudHNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBjb21tZW50c0NvdW50LmNsYXNzTmFtZSA9ICdjb21tZW50cy1jb3VudCc7XG4gICAgICBjb21tZW50c0Rpdi5hcHBlbmQoY29tbWVudHNDb3VudCk7XG4gICAgICBjb3VudENvbW1lbnRzKGNvbW1lbnRzQ291bnQsIGNvbW1lbnRzKTtcbiAgICAgIGRpc3BsYXlDb21tZW50cyhjb21tZW50c0RpdiwgY29tbWVudHMpO1xuXG4gICAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVzTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAodXNlck5hbWUudmFsdWUgPT09ICcnIHx8IHVzZXJDb21tZW50LnZhbHVlID09PSAnJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXNNc2cuY2xhc3NOYW1lID0gJ2Vycm9yLW1zZyc7XG4gICAgICAgICAgcmVzTXNnLmlubmVyVGV4dCA9ICdQbGVhc2UgZmlsbCBvdXQgeW91ciBVc2VybmFtZSBhbmQgYWRkIGEgY29tbWVudCc7XG4gICAgICAgICAgY29tbWVudEJ0bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXNNc2csIGNvbW1lbnRCdG4pO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29tbWVudEZvcm0ucmVtb3ZlQ2hpbGQocmVzTXNnKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmVzTXNnLmNsYXNzTmFtZSA9ICdzdWNjZXNzLW1zZyc7XG4gICAgICAgICAgcmVzTXNnLmlubmVyVGV4dCA9ICdTdWNjZXNzZnVsbHkgYWRkZWQgeW91ciBjb21tZW50JztcbiAgICAgICAgICBjb21tZW50QnRuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc01zZywgY29tbWVudEJ0bik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb21tZW50Rm9ybS5yZW1vdmVDaGlsZChyZXNNc2cpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgIGF3YWl0IHBvc3RDb21tZW50KGNvbW1lbnRCdG4uaWQsIHVzZXJOYW1lLCB1c2VyQ29tbWVudCk7XG4gICAgICAgICAgY29uc3QgbXlDb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRCdG4uaWQpO1xuICAgICAgICAgIGNvdW50Q29tbWVudHMoY29tbWVudHNDb3VudCwgbXlDb21tZW50cyk7XG4gICAgICAgICAgZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzRGl2LCBteUNvbW1lbnRzKTtcbiAgICAgICAgICBjb21tZW50Rm9ybS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kKGZvcm1EaXYsIGNvbW1lbnRzRGl2KTtcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKGNvbW1lbnRTZWN0aW9uKTtcbiAgICAgIGNvbnN0IHJlYWRNb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByZWFkTW9yZS5pbm5lckhUTUwgPSAnUmVhZCBNb3JlJztcbiAgICAgIHJlYWRNb3JlLmNsYXNzTmFtZSA9ICdyZWFkTW9yZUJ0bic7XG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVhZE1vcmUpO1xuICAgICAgcmVhZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChyZWFkTW9yZS5pbm5lckhUTUwgPT09ICdSZWFkIE1vcmUnKSB7XG4gICAgICAgICAgcmVhZE1vcmUuaW5uZXJIVE1MID0gJ1JlYWQgTGVzcyc7XG4gICAgICAgICAgbW92aWVTdW1tYXJ5LmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5zdW1tYXJ5fWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVhZE1vcmUuaW5uZXJIVE1MID0gJ1JlYWQgTW9yZSc7XG4gICAgICAgICAgbW92aWVTdW1tYXJ5LmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5zdW1tYXJ5LnN1YnN0cmluZyhcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0MDAsXG4gICAgICAgICAgKX0uLi4uLi5gO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBtb3ZpZU1vZGFsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9TaG93bWF4LU1vdmllcy9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldE1vdmllcyBmcm9tICcuL21vZHVsZXMvZ2V0LW1vdmllcy5qcyc7XG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tICcuL21vZHVsZXMvZGlzcGxheS1tb3ZpZXMuanMnO1xuaW1wb3J0IG1vdmllTW9kYWwgZnJvbSAnLi9tb2R1bGVzL21vdmllLW1vZGFsLmpzJztcbmltcG9ydCBjb3VudE1vdmllcyBmcm9tICcuL21vZHVsZXMvbW92aWUtY291bnRlci5qcyc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgTG9nbyBmcm9tICcuL2Fzc2V0cy9zaG93bG9nb28uanBnJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvZ29JbWdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xuICBjb25zdCBsb2dvSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBsb2dvSWNvbi5zcmMgPSBMb2dvO1xuICBsb2dvSW1nRGl2LmFwcGVuZENoaWxkKGxvZ29JY29uKTtcblxuICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBnZXRNb3ZpZXMoKTtcbiAgY29uc3Qgc2FtcGxlTW92aWVzID0gbW92aWVzLnNsaWNlKDYsIDcwKTtcbiAgYXdhaXQgZGlzcGxheU1vdmllcyhzYW1wbGVNb3ZpZXMpO1xuXG4gIGNvbnN0IG1vdmllTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1saXN0Jyk7XG5cbiAgbW92aWVMaXN0LmlubmVySFRNTCA9IGA8c3Bhbj4gJHtjb3VudE1vdmllcyhzYW1wbGVNb3ZpZXMpfSA8c3Bhbj5gO1xuXG4gIGNvbnN0IGNvbW1lbnRCdXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50QnRuJyldO1xuICBjb25zdCB2aWV3RGV0YWlsc0J1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm92ZWxheS1kZXRhaWxzLWJ0bicpXTtcbiAgbW92aWVNb2RhbChjb21tZW50QnV0dG9ucywgc2FtcGxlTW92aWVzKTtcbiAgbW92aWVNb2RhbCh2aWV3RGV0YWlsc0J1dHRvbnMsIHNhbXBsZU1vdmllcyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==