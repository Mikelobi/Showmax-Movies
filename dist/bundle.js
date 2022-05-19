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
___CSS_LOADER_EXPORT___.push([module.id, "/* Global Styles */\r\n:root {\r\n  --primary-green: hwb(113 41% 7% / 0.767);\r\n  --background-grey: #1d1d1d;\r\n  --text-grey: #919191;\r\n  --header-font: 'Poppins', sans-serif;\r\n  --body-font: 'Raleway', sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: var(--body-font);\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.mainwrapper {\r\n  border: rgba(222, 184, 135, 0.671) 5px solid;\r\n  box-shadow: 0 0 20px 10px rgb(243, 125, 180);\r\n  width: 90%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n  background-color: rgba(149, 155, 158, 0.842);\r\n}\r\n\r\n.topHead {\r\n  height: 60px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 2em;\r\n  background-color: rgb(23, 23, 26);\r\n}\r\n\r\n.logo img {\r\n  padding: 0.5em 0;\r\n  height: 3rem;\r\n  transition: 1s;\r\n}\r\n\r\n.logo img:hover {\r\n  height: 5rem;\r\n  cursor: pointer;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  height: 20px;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  gap: 3rem;\r\n}\r\n\r\nnav ul li {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li a {\r\n  text-transform: capitalize;\r\n  text-decoration: none;\r\n  color: rgb(214, 243, 247);\r\n  border: none;\r\n  transition: ease 0.6s;\r\n}\r\n\r\nnav ul li a:hover {\r\n  color: rgb(236, 79, 52);\r\n  font-size: 20px;\r\n}\r\n\r\nform#idform {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.search {\r\n  width: 70%;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 10px;\r\n  margin-left: 3rem;\r\n  font-size: 1rem;\r\n  color: var(--primary-green);\r\n}\r\n\r\n.search:focus {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n/* Movie section styles */\r\n\r\nh2 {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.movie-section-title {\r\n  background-color: rgb(66, 55, 55);\r\n  text-align: center;\r\n  color: #fff;\r\n  padding:1em 1.2em 0;\r\n  margin-bottom: 1rem;\r\n  height: 11rem;\r\n}\r\n\r\n.movie-section-title span {\r\n  font-size: 1.15em;\r\n  font-weight: 700;\r\n}\r\n\r\n.fa-star {\r\n  color: var(--primary-green);\r\n  padding-right: 0.4em;\r\n}\r\n\r\n.movie-list {\r\n  padding: 1em 0;\r\n}\r\n\r\n.movie-list span {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.countsize {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nspan.showhead {\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n  color: rgb(221, 61, 154);\r\n}\r\n\r\n.showdetail {\r\n  color: #cdd2d6;\r\n}\r\n\r\n.showsize {\r\n  color: #c0c7c7;\r\n}\r\n\r\n.movies {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  color: #fff;\r\n  overflow-y: auto;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 23% 23% 23% 23%;\r\n  grid-gap: 20px 20px;\r\n  grid-auto-flow: row;\r\n  padding-bottom: 1.5em;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track  {\r\n  background-color: rgba(255, 255, 255, 0.062);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #2b2b2b94;\r\n  border-radius: 5px;\r\n}\r\n\r\n/* Movie Wrapper overlay styles */\r\n.movie-image-div {\r\n  position: relative;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movie-image-div:hover {\r\n  border: 4px solid var(--primary-green);\r\n}\r\n\r\n.details-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  font-family: var(--body-font);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity 0.35s;\r\n}\r\n\r\n.details-overlay > * {\r\n  transform: translateY(20px);\r\n  transition: transform 0.35s;\r\n}\r\n\r\n.details-overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.details-overlay:hover > * {\r\n  transform: translateY(0);\r\n}\r\n\r\n.movie-image {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.overlay-star {\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n.movie-overlay-rating {\r\n  padding-bottom: 1.1em;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-overlay-genre {\r\n  padding-bottom: 1.1em;\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.ovelay-details-btn {\r\n  color: #fff;\r\n  padding: 0.5em 1.3em;\r\n  background: var(--primary-green);\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Movie Wrapper styles */\r\n.movie-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.8em;\r\n}\r\n\r\n.movie-title {\r\n  height: 42px;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 1em;\r\n  align-items: center;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.movie-likes {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.commentBtn {\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  background: #3d3a39;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  box-shadow: 0 8px 16px #23332c3d;\r\n}\r\n\r\n.commentBtn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n/* Movie Modal styles */\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(32, 32, 32, 0.95);\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.35s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-basis: 60%;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  gap: 3rem;\r\n  width: 55vw;\r\n  height: 95%;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\r\n  overflow: auto;\r\n  cursor: default;\r\n  margin: 5em;\r\n  padding: 3em;\r\n}\r\n\r\n/* PopUp styles */\r\n.popUp-button {\r\n  width: 40%;\r\n  margin: 1rem;\r\n  background-color: var(--primary-green);\r\n  border: 2px solid #4b962b;\r\n  border-radius: 20px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  font-family: inherit;\r\n}\r\n\r\n.popUp-button:hover {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n.movieCard {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.movieCard-img {\r\n  width: 100%;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movieContent {\r\n  width: 40%;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popUp-title {\r\n  font-size: 3em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-Genre {\r\n  color: #4b962b;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-releaseDate {\r\n  font-size: 1rem;\r\n  color: #ffffff81;\r\n  padding-bottom: 2em;\r\n}\r\n\r\n.popUp-summary {\r\n  color: #ccc;\r\n  margin: 0 auto;\r\n  line-height: 1.4em;\r\n  letter-spacing: 0.8px;\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\n.subtitle-button {\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  margin-bottom: 4em;\r\n}\r\n\r\n.readMoreBtn {\r\n  width: 40%;\r\n  margin: 1rem 0;\r\n  background-color: hsl(0, 54%, 65%);\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  color: #414141;\r\n}\r\n\r\n.close-proj-modal {\r\n  border-radius: 50%;\r\n  padding: 0.5em;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 2px solid #555;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n}\r\n\r\n.close-proj-modal:hover {\r\n  border: 2px solid #fff;\r\n  background-color: #414141;\r\n  color: #fff;\r\n}\r\n\r\n.close-proj-modal::before {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  width: 2px;\r\n  left: 12px;\r\n  top: 5px;\r\n  bottom: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-proj-modal::after {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  height: 2px;\r\n  top: 12px;\r\n  left: 5px;\r\n  right: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Modal comments styles */\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 3rem;\r\n  flex-basis: 100%;\r\n  gap: 2rem;\r\n  background-color: #1d1d1d;\r\n}\r\n\r\n.comments-count {\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 1em;\r\n  font-family: var(--header-font);\r\n}\r\n\r\n.display-comments {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-container {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #171717;\r\n  padding: 1em;\r\n}\r\n\r\n.author-thumbnail {\r\n  flex: none;\r\n  margin-right: 12px;\r\n}\r\n\r\n.user-name-link {\r\n  background-color: #00579c;\r\n  border-radius: 99px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.8em;\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  width: 1.6em;\r\n}\r\n\r\n.user-name-link span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.user-name {\r\n  background-color: #2b2b2b;\r\n}\r\n\r\n.comment-main {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n#comment-header {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n#header-author {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: baseline;\r\n}\r\n\r\n#author-text {\r\n  margin-right: 10px;\r\n  color: #919191;\r\n  margin-bottom: 2px;\r\n  display: block;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n#comment-date {\r\n  color: #606060;\r\n  font-family: 'Roboto', 'Arial', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 400;\r\n}\r\n\r\n#comment-text {\r\n  color: #fff;\r\n  word-wrap: break-word;\r\n  font-size: 14px;\r\n  height: 20px;\r\n  line-height: 1.4rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-comment {\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.add-comment h2 {\r\n  display: block;\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\n.add-comment-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.fa-message {\r\n  padding-right: 1em;\r\n  color: var(--primary-green);\r\n}\r\n\r\n/* Comment form styles */\r\n.add-comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  overflow: hidden;\r\n  background-color: #171717;\r\n  padding: 2em;\r\n  border-radius: 10px;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: var(--header-font);\r\n  width: 100%;\r\n  color: #fff;\r\n  border: 1px solid #1d1d1d;\r\n  background: #2b2b2b;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n}\r\n\r\ntextarea {\r\n  height: 100px;\r\n  max-width: 100%;\r\n  resize: none;\r\n}\r\n\r\ninput,\r\ntextarea:hover {\r\n  -webkit-transition: border-color 0.3s ease-in-out;\r\n  -moz-transition: border-color 0.3s ease-in-out;\r\n  transition: border-color 0.3s ease-in-out;\r\n  border: 1px solid var(--primary-green);\r\n}\r\n\r\n.comment-btn {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  border: none;\r\n  background: var(--primary-green);\r\n  color: #fff;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-btn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n.comment-btn:hover {\r\n  background: #43a047;\r\n  -webkit-transition: background 0.3s ease-in-out;\r\n  -moz-transition: background 0.3s ease-in-out;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n/* Footer Styles */\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5em;\r\n  margin-top: 20px;\r\n  background: #000;\r\n}\r\n\r\nfooter p {\r\n  padding: 2em;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  font-size: 1.3em;\r\n  color: #fff;\r\n}\r\n\r\n.footer-link {\r\n  color: var(--primary-green);\r\n  font-size: 1.1em;\r\n}\r\n\r\n/* Mobile Styles */\r\n@media screen and (max-width: 800px) {\r\n\r\n  .topHead {\r\n    width: auto;\r\n  }\r\n\r\n  .movies {\r\n    display: grid;\r\n    grid-gap: 20px 20px;\r\n    grid-template-columns: 100%;\r\n  }\r\n\r\n  #idform {\r\n    display: none;\r\n  }\r\n\r\n  .buttonDiv {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .popUp-button {\r\n    width: auto;\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  .popUp-title {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .subtitle-button {\r\n    width: auto;\r\n  }\r\n\r\n  .movie-overlay-rating {\r\n    font-size: 1.4em;\r\n  }\r\n\r\n  .popUp-summary {\r\n    width: auto;\r\n  }\r\n\r\n  .modal-dialog {\r\n    width: 85vw;\r\n    padding: 1em;\r\n    margin: 0.5em;\r\n    gap: 1em;\r\n    flex-basis: 90%;\r\n  }\r\n\r\n  .comment-section {\r\n    flex-direction: column;\r\n    padding: 0;\r\n  }\r\n\r\n  .readMoreBtn {\r\n    width: auto;\r\n  }\r\n\r\n  .movieContent {\r\n    width: auto;\r\n  }\r\n\r\n  .comment-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .display-comments {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 325px) {\r\n  nav,\r\n  span.showdetail,\r\n  span.showsize {\r\n    display: none;\r\n  }\r\n\r\n  .topHead {\r\n    width: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\r\n:root {\r\n  --primary-green: hwb(113 41% 7% / 0.767);\r\n  --background-grey: #1d1d1d;\r\n  --text-grey: #919191;\r\n  --header-font: 'Poppins', sans-serif;\r\n  --body-font: 'Raleway', sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: var(--body-font);\r\n  background-image: url(./assets/body.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.mainwrapper {\r\n  border: rgba(222, 184, 135, 0.671) 5px solid;\r\n  box-shadow: 0 0 20px 10px rgb(243, 125, 180);\r\n  width: 90%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n  background-color: rgba(149, 155, 158, 0.842);\r\n}\r\n\r\n.topHead {\r\n  height: 60px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 2em;\r\n  background-color: rgb(23, 23, 26);\r\n}\r\n\r\n.logo img {\r\n  padding: 0.5em 0;\r\n  height: 3rem;\r\n  transition: 1s;\r\n}\r\n\r\n.logo img:hover {\r\n  height: 5rem;\r\n  cursor: pointer;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  height: 20px;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  gap: 3rem;\r\n}\r\n\r\nnav ul li {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li a {\r\n  text-transform: capitalize;\r\n  text-decoration: none;\r\n  color: rgb(214, 243, 247);\r\n  border: none;\r\n  transition: ease 0.6s;\r\n}\r\n\r\nnav ul li a:hover {\r\n  color: rgb(236, 79, 52);\r\n  font-size: 20px;\r\n}\r\n\r\nform#idform {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n\r\n.search {\r\n  width: 70%;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 10px;\r\n  margin-left: 3rem;\r\n  font-size: 1rem;\r\n  color: var(--primary-green);\r\n}\r\n\r\n.search:focus {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n/* Movie section styles */\r\n\r\nh2 {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.movie-section-title {\r\n  background-color: rgb(66, 55, 55);\r\n  text-align: center;\r\n  color: #fff;\r\n  padding:1em 1.2em 0;\r\n  margin-bottom: 1rem;\r\n  height: 11rem;\r\n}\r\n\r\n.movie-section-title span {\r\n  font-size: 1.15em;\r\n  font-weight: 700;\r\n}\r\n\r\n.fa-star {\r\n  color: var(--primary-green);\r\n  padding-right: 0.4em;\r\n}\r\n\r\n.movie-list {\r\n  padding: 1em 0;\r\n}\r\n\r\n.movie-list span {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.countsize {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nspan.showhead {\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n  color: rgb(221, 61, 154);\r\n}\r\n\r\n.showdetail {\r\n  color: #cdd2d6;\r\n}\r\n\r\n.showsize {\r\n  color: #c0c7c7;\r\n}\r\n\r\n.movies {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  color: #fff;\r\n  overflow-y: auto;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 23% 23% 23% 23%;\r\n  grid-gap: 20px 20px;\r\n  grid-auto-flow: row;\r\n  padding-bottom: 1.5em;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track  {\r\n  background-color: rgba(255, 255, 255, 0.062);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #2b2b2b94;\r\n  border-radius: 5px;\r\n}\r\n\r\n/* Movie Wrapper overlay styles */\r\n.movie-image-div {\r\n  position: relative;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movie-image-div:hover {\r\n  border: 4px solid var(--primary-green);\r\n}\r\n\r\n.details-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  font-family: var(--body-font);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity 0.35s;\r\n}\r\n\r\n.details-overlay > * {\r\n  transform: translateY(20px);\r\n  transition: transform 0.35s;\r\n}\r\n\r\n.details-overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.details-overlay:hover > * {\r\n  transform: translateY(0);\r\n}\r\n\r\n.movie-image {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.overlay-star {\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n.movie-overlay-rating {\r\n  padding-bottom: 1.1em;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-overlay-genre {\r\n  padding-bottom: 1.1em;\r\n  font-size: 2.1em;\r\n  font-weight: bold;\r\n}\r\n\r\n.ovelay-details-btn {\r\n  color: #fff;\r\n  padding: 0.5em 1.3em;\r\n  background: var(--primary-green);\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Movie Wrapper styles */\r\n.movie-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.8em;\r\n}\r\n\r\n.movie-title {\r\n  height: 42px;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 1em;\r\n  align-items: center;\r\n}\r\n\r\n.fa-heart:hover {\r\n  color: var(--primary-green);\r\n}\r\n\r\n.movie-likes {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.commentBtn {\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  background: #3d3a39;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  box-shadow: 0 8px 16px #23332c3d;\r\n}\r\n\r\n.commentBtn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n/* Movie Modal styles */\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(32, 32, 32, 0.95);\r\n  cursor: pointer;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 0.35s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-basis: 60%;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  gap: 3rem;\r\n  width: 55vw;\r\n  height: 95%;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(45.34deg, #2b2b2b 65%, #002400 94.35%);\r\n  overflow: auto;\r\n  cursor: default;\r\n  margin: 5em;\r\n  padding: 3em;\r\n}\r\n\r\n/* PopUp styles */\r\n.popUp-button {\r\n  width: 40%;\r\n  margin: 1rem;\r\n  background-color: var(--primary-green);\r\n  border: 2px solid #4b962b;\r\n  border-radius: 20px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  color: #fff;\r\n  font-family: inherit;\r\n}\r\n\r\n.popUp-button:hover {\r\n  outline: 0;\r\n  background-color: #002400;\r\n  border: 2px solid var(--primary-green);\r\n  color: #fff;\r\n}\r\n\r\n.movieCard {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.movieCard-img {\r\n  width: 100%;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movieContent {\r\n  width: 40%;\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.popUp-title {\r\n  font-size: 3em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-Genre {\r\n  color: #4b962b;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.popUp-releaseDate {\r\n  font-size: 1rem;\r\n  color: #ffffff81;\r\n  padding-bottom: 2em;\r\n}\r\n\r\n.popUp-summary {\r\n  color: #ccc;\r\n  margin: 0 auto;\r\n  line-height: 1.4em;\r\n  letter-spacing: 0.8px;\r\n  margin-bottom: 1.3em;\r\n}\r\n\r\n.subtitle-button {\r\n  width: 70%;\r\n  margin: 1rem 0;\r\n  background-color: #1d1d1d;\r\n  border: 2px solid #555;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  margin-bottom: 4em;\r\n}\r\n\r\n.readMoreBtn {\r\n  width: 40%;\r\n  margin: 1rem 0;\r\n  background-color: hsl(0, 54%, 65%);\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  color: #414141;\r\n}\r\n\r\n.close-proj-modal {\r\n  border-radius: 50%;\r\n  padding: 0.5em;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: 2px solid #555;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n}\r\n\r\n.close-proj-modal:hover {\r\n  border: 2px solid #fff;\r\n  background-color: #414141;\r\n  color: #fff;\r\n}\r\n\r\n.close-proj-modal::before {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  width: 2px;\r\n  left: 12px;\r\n  top: 5px;\r\n  bottom: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.close-proj-modal::after {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  background-color: #414141;\r\n  height: 2px;\r\n  top: 12px;\r\n  left: 5px;\r\n  right: 5px;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n/* Modal comments styles */\r\n.comment-section {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  padding: 3rem;\r\n  flex-basis: 100%;\r\n  gap: 2rem;\r\n  background-color: #1d1d1d;\r\n}\r\n\r\n.comments-count {\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 1em;\r\n  font-family: var(--header-font);\r\n}\r\n\r\n.display-comments {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-container {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  background-color: #171717;\r\n  padding: 1em;\r\n}\r\n\r\n.author-thumbnail {\r\n  flex: none;\r\n  margin-right: 12px;\r\n}\r\n\r\n.user-name-link {\r\n  background-color: #00579c;\r\n  border-radius: 99px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 1.8em;\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  width: 1.6em;\r\n}\r\n\r\n.user-name-link span {\r\n  vertical-align: middle;\r\n}\r\n\r\n.user-name {\r\n  background-color: #2b2b2b;\r\n}\r\n\r\n.comment-main {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n}\r\n\r\n#comment-header {\r\n  margin-bottom: 2px;\r\n}\r\n\r\n#header-author {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: baseline;\r\n}\r\n\r\n#author-text {\r\n  margin-right: 10px;\r\n  color: #919191;\r\n  margin-bottom: 2px;\r\n  display: block;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n}\r\n\r\n#comment-date {\r\n  color: #606060;\r\n  font-family: 'Roboto', 'Arial', sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 400;\r\n}\r\n\r\n#comment-text {\r\n  color: #fff;\r\n  word-wrap: break-word;\r\n  font-size: 14px;\r\n  height: 20px;\r\n  line-height: 1.4rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-comment {\r\n  color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  max-width: 300px;\r\n  width: 100%;\r\n}\r\n\r\n.add-comment h2 {\r\n  display: block;\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n}\r\n\r\n.add-comment-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.fa-message {\r\n  padding-right: 1em;\r\n  color: var(--primary-green);\r\n}\r\n\r\n/* Comment form styles */\r\n.add-comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  overflow: hidden;\r\n  background-color: #171717;\r\n  padding: 2em;\r\n  border-radius: 10px;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-family: var(--header-font);\r\n  width: 100%;\r\n  color: #fff;\r\n  border: 1px solid #1d1d1d;\r\n  background: #2b2b2b;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n}\r\n\r\ntextarea {\r\n  height: 100px;\r\n  max-width: 100%;\r\n  resize: none;\r\n}\r\n\r\ninput,\r\ntextarea:hover {\r\n  -webkit-transition: border-color 0.3s ease-in-out;\r\n  -moz-transition: border-color 0.3s ease-in-out;\r\n  transition: border-color 0.3s ease-in-out;\r\n  border: 1px solid var(--primary-green);\r\n}\r\n\r\n.comment-btn {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  border: none;\r\n  background: var(--primary-green);\r\n  color: #fff;\r\n  margin: 0 0 5px;\r\n  padding: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-btn:active {\r\n  background: #2f470a;\r\n  transform: translateY(2px);\r\n}\r\n\r\n.comment-btn:hover {\r\n  background: #43a047;\r\n  -webkit-transition: background 0.3s ease-in-out;\r\n  -moz-transition: background 0.3s ease-in-out;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n/* Footer Styles */\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 5em;\r\n  margin-top: 20px;\r\n  background: #000;\r\n}\r\n\r\nfooter p {\r\n  padding: 2em;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin: auto 0;\r\n  font-size: 1.3em;\r\n  color: #fff;\r\n}\r\n\r\n.footer-link {\r\n  color: var(--primary-green);\r\n  font-size: 1.1em;\r\n}\r\n\r\n/* Mobile Styles */\r\n@media screen and (max-width: 800px) {\r\n\r\n  .topHead {\r\n    width: auto;\r\n  }\r\n\r\n  .movies {\r\n    display: grid;\r\n    grid-gap: 20px 20px;\r\n    grid-template-columns: 100%;\r\n  }\r\n\r\n  #idform {\r\n    display: none;\r\n  }\r\n\r\n  .buttonDiv {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .popUp-button {\r\n    width: auto;\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  .popUp-title {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .subtitle-button {\r\n    width: auto;\r\n  }\r\n\r\n  .movie-overlay-rating {\r\n    font-size: 1.4em;\r\n  }\r\n\r\n  .popUp-summary {\r\n    width: auto;\r\n  }\r\n\r\n  .modal-dialog {\r\n    width: 85vw;\r\n    padding: 1em;\r\n    margin: 0.5em;\r\n    gap: 1em;\r\n    flex-basis: 90%;\r\n  }\r\n\r\n  .comment-section {\r\n    flex-direction: column;\r\n    padding: 0;\r\n  }\r\n\r\n  .readMoreBtn {\r\n    width: auto;\r\n  }\r\n\r\n  .movieContent {\r\n    width: auto;\r\n  }\r\n\r\n  .comment-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .display-comments {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 325px) {\r\n  nav,\r\n  span.showdetail,\r\n  span.showsize {\r\n    display: none;\r\n  }\r\n\r\n  .topHead {\r\n    width: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n}\r\n"],"sourceRoot":""}]);
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
  const sampleMovies = movies.slice(12, 60);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHdFQUF3RSwrQ0FBK0MsaUNBQWlDLDJCQUEyQiwyQ0FBMkMseUNBQXlDLEtBQUssY0FBYyx3QkFBd0Isb0JBQW9CLDZCQUE2QixvQ0FBb0Msd0VBQXdFLDZCQUE2QixtQ0FBbUMsS0FBSyxjQUFjLHFDQUFxQyxrQ0FBa0MsNkJBQTZCLEtBQUssc0NBQXNDLGtDQUFrQywrQkFBK0IsaUJBQWlCLGdCQUFnQixzQkFBc0IsNkJBQTZCLEtBQUssV0FBVyw0QkFBNEIsa0JBQWtCLEtBQUssaURBQWlELG1EQUFtRCxtREFBbUQsaUJBQWlCLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QixxQkFBcUIscUJBQXFCLHdCQUF3QixtREFBbUQsS0FBSyxrQkFBa0IsbUJBQW1CLGtCQUFrQixvQkFBb0IscUNBQXFDLDBCQUEwQixxQkFBcUIsd0NBQXdDLEtBQUssbUJBQW1CLHVCQUF1QixtQkFBbUIscUJBQXFCLEtBQUsseUJBQXlCLG1CQUFtQixzQkFBc0IsS0FBSyxhQUFhLG9CQUFvQiwwQkFBMEIsS0FBSyxnQkFBZ0Isb0JBQW9CLG1CQUFtQiwwQkFBMEIscUJBQXFCLGdCQUFnQixLQUFLLG1CQUFtQix1QkFBdUIsS0FBSyxxQkFBcUIsaUNBQWlDLDRCQUE0QixnQ0FBZ0MsbUJBQW1CLDRCQUE0QixLQUFLLDJCQUEyQiw4QkFBOEIsc0JBQXNCLEtBQUsscUJBQXFCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLEtBQUssaUJBQWlCLGlCQUFpQixnQ0FBZ0MsNkJBQTZCLDBCQUEwQix3QkFBd0Isc0JBQXNCLGtDQUFrQyxLQUFLLHVCQUF1QixpQkFBaUIsZ0NBQWdDLDZDQUE2QyxrQkFBa0IsS0FBSyw4Q0FBOEMseUJBQXlCLEtBQUssOEJBQThCLHdDQUF3Qyx5QkFBeUIsa0JBQWtCLDBCQUEwQiwwQkFBMEIsb0JBQW9CLEtBQUssbUNBQW1DLHdCQUF3Qix1QkFBdUIsS0FBSyxrQkFBa0Isa0NBQWtDLDJCQUEyQixLQUFLLHFCQUFxQixxQkFBcUIsS0FBSywwQkFBMEIsa0NBQWtDLEtBQUssb0JBQW9CLG9CQUFvQiwwQkFBMEIsOEJBQThCLEtBQUssdUJBQXVCLHVCQUF1Qix3QkFBd0IsK0JBQStCLEtBQUsscUJBQXFCLHFCQUFxQixLQUFLLG1CQUFtQixxQkFBcUIsS0FBSyxpQkFBaUIscUJBQXFCLGlCQUFpQixrQkFBa0IsdUJBQXVCLHdCQUF3QixvQkFBb0IsNkNBQTZDLDBCQUEwQiwwQkFBMEIsNEJBQTRCLEtBQUssNkJBQTZCLGtCQUFrQixLQUFLLG9DQUFvQyxtREFBbUQsS0FBSyxtQ0FBbUMsa0NBQWtDLHlCQUF5QixLQUFLLGdFQUFnRSx5QkFBeUIsNkJBQTZCLEtBQUssZ0NBQWdDLDZDQUE2QyxLQUFLLDBCQUEwQix5QkFBeUIsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIscUNBQXFDLGtCQUFrQixvQ0FBb0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGlCQUFpQixnQ0FBZ0MsS0FBSyw4QkFBOEIsa0NBQWtDLGtDQUFrQyxLQUFLLGdDQUFnQyxpQkFBaUIsS0FBSyxvQ0FBb0MsK0JBQStCLEtBQUssc0JBQXNCLHFCQUFxQixrQkFBa0IsS0FBSyx1QkFBdUIsNEJBQTRCLEtBQUssK0JBQStCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLEtBQUssOEJBQThCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLEtBQUssNkJBQTZCLGtCQUFrQiwyQkFBMkIsdUNBQXVDLHlCQUF5QixtQkFBbUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsc0JBQXNCLEtBQUssc0RBQXNELG9CQUFvQiw2QkFBNkIscUJBQXFCLEtBQUssc0JBQXNCLG1CQUFtQix1QkFBdUIsS0FBSywwQkFBMEIsb0JBQW9CLDBCQUEwQix5QkFBeUIsMEJBQTBCLEtBQUsseUJBQXlCLGtDQUFrQyxLQUFLLHNCQUFzQiwwQkFBMEIsS0FBSyxxQkFBcUIsa0JBQWtCLHFCQUFxQiwwQkFBMEIseUJBQXlCLG1CQUFtQixvQkFBb0IsdUJBQXVCLHlCQUF5QixzQkFBc0IsS0FBSywyQkFBMkIsdUNBQXVDLEtBQUssNEJBQTRCLDBCQUEwQixpQ0FBaUMsS0FBSyw0Q0FBNEMsc0JBQXNCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixvQkFBb0IsMEJBQTBCLDhCQUE4Qix5Q0FBeUMsc0JBQXNCLHlCQUF5QixpQkFBaUIsb0NBQW9DLEtBQUssMkJBQTJCLDBCQUEwQixpQkFBaUIsS0FBSyx1QkFBdUIseUJBQXlCLG9CQUFvQixzQkFBc0Isc0JBQXNCLDBCQUEwQixrQ0FBa0MsZ0JBQWdCLGtCQUFrQixrQkFBa0IseUJBQXlCLCtFQUErRSxxQkFBcUIsc0JBQXNCLGtCQUFrQixtQkFBbUIsS0FBSyw2Q0FBNkMsaUJBQWlCLG1CQUFtQiw2Q0FBNkMsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsc0JBQXNCLHdCQUF3QixrQkFBa0IsMkJBQTJCLEtBQUssNkJBQTZCLGlCQUFpQixnQ0FBZ0MsNkNBQTZDLGtCQUFrQixLQUFLLG9CQUFvQixpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsS0FBSyxvQkFBb0Isb0JBQW9CLDBCQUEwQixLQUFLLHdCQUF3QixrQkFBa0IsNkJBQTZCLEtBQUssdUJBQXVCLGlCQUFpQixrQkFBa0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsOEJBQThCLEtBQUssc0JBQXNCLHFCQUFxQiw0QkFBNEIsS0FBSyxzQkFBc0IscUJBQXFCLDRCQUE0QixLQUFLLDRCQUE0QixzQkFBc0IsdUJBQXVCLDBCQUEwQixLQUFLLHdCQUF3QixrQkFBa0IscUJBQXFCLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLEtBQUssMEJBQTBCLGlCQUFpQixxQkFBcUIsZ0NBQWdDLDZCQUE2Qix5QkFBeUIsMkJBQTJCLHdCQUF3QixrQkFBa0IseUJBQXlCLEtBQUssc0JBQXNCLGlCQUFpQixxQkFBcUIseUNBQXlDLG1CQUFtQix5QkFBeUIsMkJBQTJCLHNCQUFzQixxQkFBcUIsS0FBSywyQkFBMkIseUJBQXlCLHFCQUFxQixrQkFBa0IsbUJBQW1CLDZCQUE2QixrQkFBa0IseUJBQXlCLGdCQUFnQixrQkFBa0IsS0FBSyxpQ0FBaUMsNkJBQTZCLGdDQUFnQyxrQkFBa0IsS0FBSyxtQ0FBbUMsbUJBQW1CLHlCQUF5QixxQkFBcUIsZ0NBQWdDLGlCQUFpQixpQkFBaUIsZUFBZSxrQkFBa0IsK0JBQStCLEtBQUssa0NBQWtDLG1CQUFtQix5QkFBeUIscUJBQXFCLGdDQUFnQyxrQkFBa0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsK0JBQStCLEtBQUsseURBQXlELG9CQUFvQiwwQkFBMEIscUNBQXFDLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGdDQUFnQyxLQUFLLHlCQUF5QixrQkFBa0IseUJBQXlCLHlCQUF5QixzQ0FBc0MsS0FBSywyQkFBMkIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsS0FBSyw0QkFBNEIsMEJBQTBCLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLG1CQUFtQixLQUFLLDJCQUEyQixpQkFBaUIseUJBQXlCLEtBQUsseUJBQXlCLGdDQUFnQywwQkFBMEIsNkJBQTZCLGtCQUFrQixzQkFBc0IsNEJBQTRCLHVCQUF1Qix3QkFBd0IseUJBQXlCLDRCQUE0QixtQkFBbUIsS0FBSyw4QkFBOEIsNkJBQTZCLEtBQUssb0JBQW9CLGdDQUFnQyxLQUFLLHVCQUF1QixvQkFBb0IsY0FBYyw2QkFBNkIsS0FBSyx5QkFBeUIseUJBQXlCLEtBQUssd0JBQXdCLG9CQUFvQiwwQkFBMEIsNEJBQTRCLEtBQUssc0JBQXNCLHlCQUF5QixxQkFBcUIseUJBQXlCLHFCQUFxQixzQkFBc0IsdUJBQXVCLEtBQUssdUJBQXVCLHFCQUFxQixpREFBaUQsc0JBQXNCLHVCQUF1QixLQUFLLHVCQUF1QixrQkFBa0IsNEJBQTRCLHNCQUFzQixtQkFBbUIsMEJBQTBCLHVCQUF1QixLQUFLLHNCQUFzQixrQkFBa0Isb0JBQW9CLDZCQUE2QixnQkFBZ0IsdUJBQXVCLGtCQUFrQixLQUFLLHlCQUF5QixxQkFBcUIsc0JBQXNCLHVCQUF1QixLQUFLLDZCQUE2QixvQkFBb0IsMEJBQTBCLEtBQUsscUJBQXFCLHlCQUF5QixrQ0FBa0MsS0FBSyx3REFBd0Qsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsdUJBQXVCLGdDQUFnQyxtQkFBbUIsMEJBQTBCLEtBQUssNEJBQTRCLHNDQUFzQyxrQkFBa0Isa0JBQWtCLGdDQUFnQywwQkFBMEIsc0JBQXNCLG9CQUFvQixLQUFLLGtCQUFrQixvQkFBb0Isc0JBQXNCLG1CQUFtQixLQUFLLGtDQUFrQyx3REFBd0QscURBQXFELGdEQUFnRCw2Q0FBNkMsS0FBSyxzQkFBc0Isc0JBQXNCLGtCQUFrQixtQkFBbUIsdUNBQXVDLGtCQUFrQixzQkFBc0Isb0JBQW9CLHNCQUFzQixLQUFLLDZCQUE2QiwwQkFBMEIsaUNBQWlDLEtBQUssNEJBQTRCLDBCQUEwQixzREFBc0QsbURBQW1ELG9EQUFvRCxLQUFLLHVDQUF1QyxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLHVCQUF1Qix1QkFBdUIsS0FBSyxrQkFBa0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIscUJBQXFCLHVCQUF1QixrQkFBa0IsS0FBSyxzQkFBc0Isa0NBQWtDLHVCQUF1QixLQUFLLHFFQUFxRSxvQkFBb0Isb0JBQW9CLE9BQU8sbUJBQW1CLHNCQUFzQiw0QkFBNEIsb0NBQW9DLE9BQU8sbUJBQW1CLHNCQUFzQixPQUFPLHNCQUFzQiwrQkFBK0IsT0FBTyx5QkFBeUIsb0JBQW9CLHlCQUF5QixPQUFPLHdCQUF3Qix1QkFBdUIsT0FBTyw0QkFBNEIsb0JBQW9CLE9BQU8saUNBQWlDLHlCQUF5QixPQUFPLDBCQUEwQixvQkFBb0IsT0FBTyx5QkFBeUIsb0JBQW9CLHFCQUFxQixzQkFBc0IsaUJBQWlCLHdCQUF3QixPQUFPLDRCQUE0QiwrQkFBK0IsbUJBQW1CLE9BQU8sd0JBQXdCLG9CQUFvQixPQUFPLHlCQUF5QixvQkFBb0IsT0FBTyw4QkFBOEIsK0JBQStCLE9BQU8sNkJBQTZCLG9CQUFvQixPQUFPLEtBQUssOENBQThDLHFEQUFxRCxzQkFBc0IsT0FBTyxvQkFBb0Isb0JBQW9CLHNCQUFzQixnQ0FBZ0MsS0FBSyxLQUFLLFdBQVcsdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSx1REFBdUQsK0NBQStDLGlDQUFpQywyQkFBMkIsMkNBQTJDLHlDQUF5QyxLQUFLLGNBQWMsd0JBQXdCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLCtDQUErQyw2QkFBNkIsbUNBQW1DLEtBQUssY0FBYyxxQ0FBcUMsa0NBQWtDLDZCQUE2QixLQUFLLHNDQUFzQyxrQ0FBa0MsK0JBQStCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLDZCQUE2QixLQUFLLFdBQVcsNEJBQTRCLGtCQUFrQixLQUFLLGlEQUFpRCxtREFBbUQsbURBQW1ELGlCQUFpQixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIscUJBQXFCLHFCQUFxQix3QkFBd0IsbURBQW1ELEtBQUssa0JBQWtCLG1CQUFtQixrQkFBa0Isb0JBQW9CLHFDQUFxQywwQkFBMEIscUJBQXFCLHdDQUF3QyxLQUFLLG1CQUFtQix1QkFBdUIsbUJBQW1CLHFCQUFxQixLQUFLLHlCQUF5QixtQkFBbUIsc0JBQXNCLEtBQUssYUFBYSxvQkFBb0IsMEJBQTBCLEtBQUssZ0JBQWdCLG9CQUFvQixtQkFBbUIsMEJBQTBCLHFCQUFxQixnQkFBZ0IsS0FBSyxtQkFBbUIsdUJBQXVCLEtBQUsscUJBQXFCLGlDQUFpQyw0QkFBNEIsZ0NBQWdDLG1CQUFtQiw0QkFBNEIsS0FBSywyQkFBMkIsOEJBQThCLHNCQUFzQixLQUFLLHFCQUFxQixvQkFBb0IsMEJBQTBCLHNCQUFzQixLQUFLLGlCQUFpQixpQkFBaUIsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsd0JBQXdCLHNCQUFzQixrQ0FBa0MsS0FBSyx1QkFBdUIsaUJBQWlCLGdDQUFnQyw2Q0FBNkMsa0JBQWtCLEtBQUssOENBQThDLHlCQUF5QixLQUFLLDhCQUE4Qix3Q0FBd0MseUJBQXlCLGtCQUFrQiwwQkFBMEIsMEJBQTBCLG9CQUFvQixLQUFLLG1DQUFtQyx3QkFBd0IsdUJBQXVCLEtBQUssa0JBQWtCLGtDQUFrQywyQkFBMkIsS0FBSyxxQkFBcUIscUJBQXFCLEtBQUssMEJBQTBCLGtDQUFrQyxLQUFLLG9CQUFvQixvQkFBb0IsMEJBQTBCLDhCQUE4QixLQUFLLHVCQUF1Qix1QkFBdUIsd0JBQXdCLCtCQUErQixLQUFLLHFCQUFxQixxQkFBcUIsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssaUJBQWlCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLDZDQUE2QywwQkFBMEIsMEJBQTBCLDRCQUE0QixLQUFLLDZCQUE2QixrQkFBa0IsS0FBSyxvQ0FBb0MsbURBQW1ELEtBQUssbUNBQW1DLGtDQUFrQyx5QkFBeUIsS0FBSyxnRUFBZ0UseUJBQXlCLDZCQUE2QixLQUFLLGdDQUFnQyw2Q0FBNkMsS0FBSywwQkFBMEIseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLHFDQUFxQyxrQkFBa0Isb0NBQW9DLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixpQkFBaUIsZ0NBQWdDLEtBQUssOEJBQThCLGtDQUFrQyxrQ0FBa0MsS0FBSyxnQ0FBZ0MsaUJBQWlCLEtBQUssb0NBQW9DLCtCQUErQixLQUFLLHNCQUFzQixxQkFBcUIsa0JBQWtCLEtBQUssdUJBQXVCLDRCQUE0QixLQUFLLCtCQUErQiw0QkFBNEIsdUJBQXVCLHdCQUF3QixLQUFLLDhCQUE4Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QixLQUFLLDZCQUE2QixrQkFBa0IsMkJBQTJCLHVDQUF1Qyx5QkFBeUIsbUJBQW1CLG9CQUFvQix1QkFBdUIseUJBQXlCLHNCQUFzQixLQUFLLHNEQUFzRCxvQkFBb0IsNkJBQTZCLHFCQUFxQixLQUFLLHNCQUFzQixtQkFBbUIsdUJBQXVCLEtBQUssMEJBQTBCLG9CQUFvQiwwQkFBMEIseUJBQXlCLDBCQUEwQixLQUFLLHlCQUF5QixrQ0FBa0MsS0FBSyxzQkFBc0IsMEJBQTBCLEtBQUsscUJBQXFCLGtCQUFrQixxQkFBcUIsMEJBQTBCLHlCQUF5QixtQkFBbUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsc0JBQXNCLEtBQUssMkJBQTJCLHVDQUF1QyxLQUFLLDRCQUE0QiwwQkFBMEIsaUNBQWlDLEtBQUssNENBQTRDLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIseUNBQXlDLHNCQUFzQix5QkFBeUIsaUJBQWlCLG9DQUFvQyxLQUFLLDJCQUEyQiwwQkFBMEIsaUJBQWlCLEtBQUssdUJBQXVCLHlCQUF5QixvQkFBb0Isc0JBQXNCLHNCQUFzQiwwQkFBMEIsa0NBQWtDLGdCQUFnQixrQkFBa0Isa0JBQWtCLHlCQUF5QiwrRUFBK0UscUJBQXFCLHNCQUFzQixrQkFBa0IsbUJBQW1CLEtBQUssNkNBQTZDLGlCQUFpQixtQkFBbUIsNkNBQTZDLGdDQUFnQywwQkFBMEIsMkJBQTJCLHNCQUFzQix3QkFBd0Isa0JBQWtCLDJCQUEyQixLQUFLLDZCQUE2QixpQkFBaUIsZ0NBQWdDLDZDQUE2QyxrQkFBa0IsS0FBSyxvQkFBb0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLEtBQUssb0JBQW9CLG9CQUFvQiwwQkFBMEIsS0FBSyx3QkFBd0Isa0JBQWtCLDZCQUE2QixLQUFLLHVCQUF1QixpQkFBaUIsa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDhCQUE4QixLQUFLLHNCQUFzQixxQkFBcUIsNEJBQTRCLEtBQUssc0JBQXNCLHFCQUFxQiw0QkFBNEIsS0FBSyw0QkFBNEIsc0JBQXNCLHVCQUF1QiwwQkFBMEIsS0FBSyx3QkFBd0Isa0JBQWtCLHFCQUFxQix5QkFBeUIsNEJBQTRCLDJCQUEyQixLQUFLLDBCQUEwQixpQkFBaUIscUJBQXFCLGdDQUFnQyw2QkFBNkIseUJBQXlCLDJCQUEyQix3QkFBd0Isa0JBQWtCLHlCQUF5QixLQUFLLHNCQUFzQixpQkFBaUIscUJBQXFCLHlDQUF5QyxtQkFBbUIseUJBQXlCLDJCQUEyQixzQkFBc0IscUJBQXFCLEtBQUssMkJBQTJCLHlCQUF5QixxQkFBcUIsa0JBQWtCLG1CQUFtQiw2QkFBNkIsa0JBQWtCLHlCQUF5QixnQkFBZ0Isa0JBQWtCLEtBQUssaUNBQWlDLDZCQUE2QixnQ0FBZ0Msa0JBQWtCLEtBQUssbUNBQW1DLG1CQUFtQix5QkFBeUIscUJBQXFCLGdDQUFnQyxpQkFBaUIsaUJBQWlCLGVBQWUsa0JBQWtCLCtCQUErQixLQUFLLGtDQUFrQyxtQkFBbUIseUJBQXlCLHFCQUFxQixnQ0FBZ0Msa0JBQWtCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLCtCQUErQixLQUFLLHlEQUF5RCxvQkFBb0IsMEJBQTBCLHFDQUFxQyxvQkFBb0IsdUJBQXVCLGdCQUFnQixnQ0FBZ0MsS0FBSyx5QkFBeUIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsc0NBQXNDLEtBQUssMkJBQTJCLGlCQUFpQixvQkFBb0IsNkJBQTZCLEtBQUssNEJBQTRCLDBCQUEwQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxtQkFBbUIsS0FBSywyQkFBMkIsaUJBQWlCLHlCQUF5QixLQUFLLHlCQUF5QixnQ0FBZ0MsMEJBQTBCLDZCQUE2QixrQkFBa0Isc0JBQXNCLDRCQUE0Qix1QkFBdUIsd0JBQXdCLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLEtBQUssOEJBQThCLDZCQUE2QixLQUFLLG9CQUFvQixnQ0FBZ0MsS0FBSyx1QkFBdUIsb0JBQW9CLGNBQWMsNkJBQTZCLEtBQUsseUJBQXlCLHlCQUF5QixLQUFLLHdCQUF3QixvQkFBb0IsMEJBQTBCLDRCQUE0QixLQUFLLHNCQUFzQix5QkFBeUIscUJBQXFCLHlCQUF5QixxQkFBcUIsc0JBQXNCLHVCQUF1QixLQUFLLHVCQUF1QixxQkFBcUIsaURBQWlELHNCQUFzQix1QkFBdUIsS0FBSyx1QkFBdUIsa0JBQWtCLDRCQUE0QixzQkFBc0IsbUJBQW1CLDBCQUEwQix1QkFBdUIsS0FBSyxzQkFBc0Isa0JBQWtCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHVCQUF1QixrQkFBa0IsS0FBSyx5QkFBeUIscUJBQXFCLHNCQUFzQix1QkFBdUIsS0FBSyw2QkFBNkIsb0JBQW9CLDBCQUEwQixLQUFLLHFCQUFxQix5QkFBeUIsa0NBQWtDLEtBQUssd0RBQXdELG9CQUFvQiw2QkFBNkIsOEJBQThCLHVCQUF1QixnQ0FBZ0MsbUJBQW1CLDBCQUEwQixLQUFLLDRCQUE0QixzQ0FBc0Msa0JBQWtCLGtCQUFrQixnQ0FBZ0MsMEJBQTBCLHNCQUFzQixvQkFBb0IsS0FBSyxrQkFBa0Isb0JBQW9CLHNCQUFzQixtQkFBbUIsS0FBSyxrQ0FBa0Msd0RBQXdELHFEQUFxRCxnREFBZ0QsNkNBQTZDLEtBQUssc0JBQXNCLHNCQUFzQixrQkFBa0IsbUJBQW1CLHVDQUF1QyxrQkFBa0Isc0JBQXNCLG9CQUFvQixzQkFBc0IsS0FBSyw2QkFBNkIsMEJBQTBCLGlDQUFpQyxLQUFLLDRCQUE0QiwwQkFBMEIsc0RBQXNELG1EQUFtRCxvREFBb0QsS0FBSyx1Q0FBdUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLGtCQUFrQix1QkFBdUIsdUJBQXVCLEtBQUssa0JBQWtCLG1CQUFtQix5QkFBeUIsMEJBQTBCLHFCQUFxQix1QkFBdUIsa0JBQWtCLEtBQUssc0JBQXNCLGtDQUFrQyx1QkFBdUIsS0FBSyxxRUFBcUUsb0JBQW9CLG9CQUFvQixPQUFPLG1CQUFtQixzQkFBc0IsNEJBQTRCLG9DQUFvQyxPQUFPLG1CQUFtQixzQkFBc0IsT0FBTyxzQkFBc0IsK0JBQStCLE9BQU8seUJBQXlCLG9CQUFvQix5QkFBeUIsT0FBTyx3QkFBd0IsdUJBQXVCLE9BQU8sNEJBQTRCLG9CQUFvQixPQUFPLGlDQUFpQyx5QkFBeUIsT0FBTywwQkFBMEIsb0JBQW9CLE9BQU8seUJBQXlCLG9CQUFvQixxQkFBcUIsc0JBQXNCLGlCQUFpQix3QkFBd0IsT0FBTyw0QkFBNEIsK0JBQStCLG1CQUFtQixPQUFPLHdCQUF3QixvQkFBb0IsT0FBTyx5QkFBeUIsb0JBQW9CLE9BQU8sOEJBQThCLCtCQUErQixPQUFPLDZCQUE2QixvQkFBb0IsT0FBTyxLQUFLLDhDQUE4QyxxREFBcUQsc0JBQXNCLE9BQU8sb0JBQW9CLG9CQUFvQixzQkFBc0IsZ0NBQWdDLEtBQUssS0FBSyx1QkFBdUI7QUFDeGduQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksUUFBUSxNQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxTQUFTLFdBQVcsR0FBRztBQUN6RDtBQUNBO0FBQ0E7QUFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnBDO0FBQ0E7QUFDQSx5REFBeUQsaUJBQWlCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUMwQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEMkI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNCQUFzQjtBQUN2RCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJEQUFRO0FBQ3JDLE1BQU0sOERBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQVE7QUFDcEIsNkJBQTZCLDJEQUFRO0FBQ3JDLE1BQU0sOERBQVc7QUFDakIsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDUHhCO0FBQ0E7QUFDQSxvQkFBb0IsSUFBSSxRQUFRLE1BQU07QUFDdEM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGVBQWU7QUFDMUM7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBLEdBQUc7QUFDSDtBQUMyQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEI1QjtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaUU7QUFDTTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxQkFBcUI7QUFDdkQ7QUFDQSxnQ0FBZ0MsMEJBQTBCO0FBQzFEO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdDQUFnQztBQUNuRSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlFQUFXO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQWE7QUFDbkIsTUFBTSxxRUFBZTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGdCQUFnQixpRUFBVztBQUMzQixtQ0FBbUMsaUVBQVc7QUFDOUMsVUFBVSxtRUFBYTtBQUN2QixVQUFVLHFFQUFlO0FBQ3pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0JBQXdCO0FBQzlELFVBQVU7QUFDVjtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3TDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDMkI7QUFDUTtBQUNOO0FBQ0c7QUFDckQ7QUFDMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBSTtBQUNyQjs7QUFFQSx1QkFBdUIsa0VBQVM7QUFDaEM7QUFDQSxRQUFRLHNFQUFhOztBQUVyQjs7QUFFQSxrQ0FBa0MscUVBQVcsZ0JBQWdCOztBQUU3RDtBQUNBO0FBQ0EsRUFBRSxtRUFBVTtBQUNaLEVBQUUsbUVBQVU7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL21vZHVsZXMvY29tbWVudHMtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LW1vdmllcy5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9tb2R1bGVzL2dldC1tb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9saWtlcy1oYW5kbGVyLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzLy4vc3JjL21vZHVsZXMvbW92aWUtY291bnRlci5qcyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy8uL3NyYy9tb2R1bGVzL21vdmllLW1vZGFsLmpzIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaG93bWF4LW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Nob3dtYXgtbW92aWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc2hvd21heC1tb3ZpZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JvZHkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2xvYmFsIFN0eWxlcyAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1ncmVlbjogaHdiKDExMyA0MSUgNyUgLyAwLjc2Nyk7XFxyXFxuICAtLWJhY2tncm91bmQtZ3JleTogIzFkMWQxZDtcXHJcXG4gIC0tdGV4dC1ncmV5OiAjOTE5MTkxO1xcclxcbiAgLS1oZWFkZXItZm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1ib2R5LWZvbnQ6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXHJcXG5cXHJcXG4ubWFpbndyYXBwZXIge1xcclxcbiAgYm9yZGVyOiByZ2JhKDIyMiwgMTg0LCAxMzUsIDAuNjcxKSA1cHggc29saWQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAxMHB4IHJnYigyNDMsIDEyNSwgMTgwKTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiA1JTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDksIDE1NSwgMTU4LCAwLjg0Mik7XFxyXFxufVxcclxcblxcclxcbi50b3BIZWFkIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMjMsIDI2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaW1nOmhvdmVyIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigyMTQsIDI0MywgMjQ3KTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UgMC42cztcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigyMzYsIDc5LCA1Mik7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0jaWRmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdmllIHNlY3Rpb24gc3R5bGVzICovXFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtc2VjdGlvbi10aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDU1LCA1NSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6MWVtIDEuMmVtIDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUgc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuMTVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1zdGFyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlzdCB7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpc3Qgc3BhbiB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5jb3VudHNpemUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5zaG93aGVhZCB7XFxyXFxuICBmb250LXNpemU6IDIuMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogcmdiKDIyMSwgNjEsIDE1NCk7XFxyXFxufVxcclxcblxcclxcbi5zaG93ZGV0YWlsIHtcXHJcXG4gIGNvbG9yOiAjY2RkMmQ2O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd3NpemUge1xcclxcbiAgY29sb3I6ICNjMGM3Yzc7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMyUgMjMlIDIzJSAyMyU7XFxyXFxuICBncmlkLWdhcDogMjBweCAyMHB4O1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayAge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2Mik7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjk0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBXcmFwcGVyIG92ZXJsYXkgc3R5bGVzICovXFxyXFxuLm1vdmllLWltYWdlLWRpdiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW1hZ2UtZGl2OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5ID4gKiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXk6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciA+ICoge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktc3RhciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW07XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1vdmVybGF5LWdlbnJlIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMi4xZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZWxheS1kZXRhaWxzLWJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuM2VtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgV3JhcHBlciBzdHlsZXMgKi9cXHJcXG4ubW92aWUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUge1xcclxcbiAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgcGFkZGluZzogMC41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saWtlcyB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZDogIzNkM2EzOTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4ICMyMzMzMmMzZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyZjQ3MGE7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgTW9kYWwgc3R5bGVzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDMyLCAzMiwgMzIsIDAuOTUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwuaXMtdmlzaWJsZSB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWRpYWxvZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZmxleC1iYXNpczogNjAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIHdpZHRoOiA1NXZ3O1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDUuMzRkZWcsICMyYjJiMmIgNjUlLCAjMDAyNDAwIDk0LjM1JSk7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIG1hcmdpbjogNWVtO1xcclxcbiAgcGFkZGluZzogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3BVcCBzdHlsZXMgKi9cXHJcXG4ucG9wVXAtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Yjk2MmI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1idXR0b246aG92ZXIge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDI0MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVDYXJkIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVDYXJkLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZUNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1HZW5yZSB7XFxyXFxuICBjb2xvcjogIzRiOTYyYjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLXJlbGVhc2VEYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmODE7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtc3VtbWFyeSB7XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0ZW07XFxyXFxufVxcclxcblxcclxcbi5yZWFkTW9yZUJ0biB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgNTQlLCA2NSUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogIzQxNDE0MTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXByb2otbW9kYWwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIHJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcgJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIHdpZHRoOiAycHg7XFxyXFxuICBsZWZ0OiAxMnB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBib3R0b206IDVweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXByb2otbW9kYWw6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcgJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgdG9wOiAxMnB4O1xcclxcbiAgbGVmdDogNXB4O1xcclxcbiAgcmlnaHQ6IDVweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgY29tbWVudHMgc3R5bGVzICovXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvdW50IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvci10aHVtYm5haWwge1xcclxcbiAgZmxleDogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmFtZS1saW5rIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU3OWM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA5OXB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxLjhlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgd2lkdGg6IDEuNmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lLWxpbmsgc3BhbiB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1oZWFkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLWF1dGhvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGhvci10ZXh0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIGNvbG9yOiAjOTE5MTkxO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1kYXRlIHtcXHJcXG4gIGNvbG9yOiAjNjA2MDYwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtdGV4dCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IGgyIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLW1lc3NhZ2Uge1xcclxcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb21tZW50IGZvcm0gc3R5bGVzICovXFxyXFxuLmFkZC1jb21tZW50LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1mb250KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMWQxZDFkO1xcclxcbiAgYmFja2dyb3VuZDogIzJiMmIyYjtcXHJcXG4gIG1hcmdpbjogMCAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbjogMCAwIDVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzQzYTA0NztcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBTdHlsZXMgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDVlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgU3R5bGVzICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG5cXHJcXG4gIC50b3BIZWFkIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2lkZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnV0dG9uRGl2IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC1idXR0b24ge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN1YnRpdGxlLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3BVcC1zdW1tYXJ5IHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9kYWwtZGlhbG9nIHtcXHJcXG4gICAgd2lkdGg6IDg1dnc7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjVlbTtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIGZsZXgtYmFzaXM6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlYWRNb3JlQnRuIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzI1cHgpIHtcXHJcXG4gIG5hdixcXHJcXG4gIHNwYW4uc2hvd2RldGFpbCxcXHJcXG4gIHNwYW4uc2hvd3NpemUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvcEhlYWQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IseURBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0VBR0UsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSw0Q0FBNEM7RUFDNUMsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFh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aEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQSxrQkFBa0I7QUFDbEI7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTs7O0lBR0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHbG9iYWwgU3R5bGVzICovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWdyZWVuOiBod2IoMTEzIDQxJSA3JSAvIDAuNzY3KTtcXHJcXG4gIC0tYmFja2dyb3VuZC1ncmV5OiAjMWQxZDFkO1xcclxcbiAgLS10ZXh0LWdyZXk6ICM5MTkxOTE7XFxyXFxuICAtLWhlYWRlci1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWJvZHktZm9udDogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9ib2R5LmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcclxcblxcclxcbi5tYWlud3JhcHBlciB7XFxyXFxuICBib3JkZXI6IHJnYmEoMjIyLCAxODQsIDEzNSwgMC42NzEpIDVweCBzb2xpZDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDEwcHggcmdiKDI0MywgMTI1LCAxODApO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OSwgMTU1LCAxNTgsIDAuODQyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvcEhlYWQge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAyMywgMjYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWcge1xcclxcbiAgcGFkZGluZzogMC41ZW0gMDtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBpbWc6aG92ZXIge1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIGEge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiKDIxNCwgMjQzLCAyNDcpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjZzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgbGkgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDIzNiwgNzksIDUyKTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSNpZGZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyNDAwO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgc2VjdGlvbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1zZWN0aW9uLXRpdGxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NiwgNTUsIDU1KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzoxZW0gMS4yZW0gMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBoZWlnaHQ6IDExcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtc2VjdGlvbi10aXRsZSBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXN0YXIge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgcGFkZGluZy1yaWdodDogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saXN0IHtcXHJcXG4gIHBhZGRpbmc6IDFlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbGlzdCBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50c2l6ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLnNob3doZWFkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4xZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiByZ2IoMjIxLCA2MSwgMTU0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dkZXRhaWwge1xcclxcbiAgY29sb3I6ICNjZGQyZDY7XFxyXFxufVxcclxcblxcclxcbi5zaG93c2l6ZSB7XFxyXFxuICBjb2xvcjogI2MwYzdjNztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcyB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzJSAyMyUgMjMlIDIzJTtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4IDIwcHg7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrICB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYyKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiOTQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdmllIFdyYXBwZXIgb3ZlcmxheSBzdHlsZXMgKi9cXHJcXG4ubW92aWUtaW1hZ2UtZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWFnZS1kaXY6aG92ZXIge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXkgPiAqIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5OmhvdmVyID4gKiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1zdGFyIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLW92ZXJsYXktZ2VucmUge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtO1xcclxcbiAgZm9udC1zaXplOiAyLjFlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlbGF5LWRldGFpbHMtYnRuIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMS4zZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBXcmFwcGVyIHN0eWxlcyAqL1xcclxcbi5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMC44ZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjM2QzYTM5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggIzIzMzMyYzNkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogIzJmNDcwYTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBNb2RhbCBzdHlsZXMgKi9cXHJcXG4ubW9kYWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMzIsIDMyLCAzMiwgMC45NSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5pcy12aXNpYmxlIHtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZGlhbG9nIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBmbGV4LWJhc2lzOiA2MCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAgd2lkdGg6IDU1dnc7XFxyXFxuICBoZWlnaHQ6IDk1JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NS4zNGRlZywgIzJiMmIyYiA2NSUsICMwMDI0MDAgOTQuMzUlKTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgbWFyZ2luOiA1ZW07XFxyXFxuICBwYWRkaW5nOiAzZW07XFxyXFxufVxcclxcblxcclxcbi8qIFBvcFVwIHN0eWxlcyAqL1xcclxcbi5wb3BVcC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzRiOTYyYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjQwMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZUNhcmQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25EaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZUNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllQ29udGVudCB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwLUdlbnJlIHtcXHJcXG4gIGNvbG9yOiAjNGI5NjJiO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAtcmVsZWFzZURhdGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmZmZmY4MTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5wb3BVcC1zdW1tYXJ5IHtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsaW5lLWhlaWdodDogMS40ZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYWRNb3JlQnRuIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCA1NCUsIDY1JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiAjNDE0MTQxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMHB4O1xcclxcbiAgcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wcm9qLW1vZGFsOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wcm9qLW1vZGFsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcclxcbiAgd2lkdGg6IDJweDtcXHJcXG4gIGxlZnQ6IDEycHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIGJvdHRvbTogNXB4O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcHJvai1tb2RhbDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICB0b3A6IDEycHg7XFxyXFxuICBsZWZ0OiA1cHg7XFxyXFxuICByaWdodDogNXB4O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBjb21tZW50cyBzdHlsZXMgKi9cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZDFkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtY291bnQge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yLXRodW1ibmFpbCB7XFxyXFxuICBmbGV4OiBub25lO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1uYW1lLWxpbmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTc5YztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEuOGVtO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB3aWR0aDogMS42ZW07XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5hbWUtbGluayBzcGFuIHtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5hbWUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyYjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWhlYWRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItYXV0aG9yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jYXV0aG9yLXRleHQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgY29sb3I6ICM5MTkxOTE7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWRhdGUge1xcclxcbiAgY29sb3I6ICM2MDYwNjA7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC10ZXh0IHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQgaDIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtbWVzc2FnZSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgZm9ybSBzdHlsZXMgKi9cXHJcXG4uYWRkLWNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWZvbnQpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZDFkMWQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xcclxcbiAgbWFyZ2luOiAwIDAgNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWE6aG92ZXIge1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAwIDAgNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmY0NzBhO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIFN0eWxlcyAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNWVtO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWdyZWVuKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi8qIE1vYmlsZSBTdHlsZXMgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcblxcclxcbiAgLnRvcEhlYWQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZXMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWdhcDogMjBweCAyMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaWRmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idXR0b25EaXYge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3VidGl0bGUtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtb3ZlcmxheS1yYXRpbmcge1xcclxcbiAgICBmb250LXNpemU6IDEuNGVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcFVwLXN1bW1hcnkge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1kaWFsb2cge1xcclxcbiAgICB3aWR0aDogODV2dztcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBtYXJnaW46IDAuNWVtO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgZmxleC1iYXNpczogOTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVhZE1vcmVCdG4ge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZUNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjVweCkge1xcclxcbiAgbmF2LFxcclxcbiAgc3Bhbi5zaG93ZGV0YWlsLFxcclxcbiAgc3Bhbi5zaG93c2l6ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9wSGVhZCB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBAdHMtaWdub3JlXHJcbmNvbnN0IFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xyXG5jb25zdCBhcHBJRCA9ICdIcXhHNnFrcGkzRGhaR2FBa1cxdyc7XHJcbmNvbnN0IGVuZFBvaW50ID0gYCR7VVJMfS9hcHBzLyR7YXBwSUR9L2NvbW1lbnRzL2A7XHJcblxyXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChidXR0b25JZCwgdXNlck5hbWUsIHVzZXJDb21tZW50KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBidXR0b25JZCxcclxuICAgICAgdXNlcm5hbWU6IHVzZXJOYW1lLnZhbHVlLFxyXG4gICAgICBjb21tZW50OiB1c2VyQ29tbWVudC52YWx1ZSxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IENoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4gcmVzLnRleHQoKTtcclxufTtcclxuXHJcbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtlbmRQb2ludH0/aXRlbV9pZD0ke2lkfWApO1xyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBwb3N0Q29tbWVudCwgZ2V0Q29tbWVudHMgfTtcclxuIiwiY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKGNvbW1lbnRzRGl2LCBjb21tZW50cykgPT4ge1xyXG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xyXG4gICAgY29tbWVudHNEaXYuaW5uZXJIVE1MID0gYDxoMyBjbGFzcz1jb21tZW50cy1jb3VudD4gJHtjb21tZW50cy5sZW5ndGh9IENvbW1lbnRzPC9oMz5gO1xyXG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICBjb25zdCBjb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbW1lbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnQtY29udGFpbmVyJztcclxuICAgICAgY29uc3QgdXNlclRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB1c2VyVGh1bWJuYWlsLmNsYXNzTmFtZSA9ICdhdXRob3ItdGh1bWJuYWlsJztcclxuICAgICAgY29uc3QgdGh1bWJuYWlsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgdGh1bWJuYWlsTGluay5jbGFzc05hbWUgPSAndXNlci1uYW1lLWxpbmsnO1xyXG4gICAgICB0aHVtYm5haWxMaW5rLmhyZWYgPSAnIyc7XHJcbiAgICAgIGNvbnN0IHRodW1ibmFpbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHRodW1ibmFpbENvbnRlbnQudGV4dENvbnRlbnQgPSAnVSc7XHJcbiAgICAgIHRodW1ibmFpbExpbmsuYXBwZW5kQ2hpbGQodGh1bWJuYWlsQ29udGVudCk7XHJcbiAgICAgIHVzZXJUaHVtYm5haWwuYXBwZW5kQ2hpbGQodGh1bWJuYWlsTGluayk7XHJcblxyXG4gICAgICBjb25zdCBjb21tZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb21tZW50TWFpbi5jbGFzc05hbWUgPSAnY29tbWVudC1tYWluJztcclxuICAgICAgY29tbWVudE1haW4uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgPGRpdiBpZD1cImNvbW1lbnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLWF1dGhvclwiPlxyXG4gICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBpZD1cImF1dGhvci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2NvbW1lbnQudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICA8YSBocmVmPVwiXCIgaWQ9XCJjb21tZW50LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGlkPVwiY29tbWVudC10ZXh0XCI+XHJcbiAgICAgICAgICA8cD4ke2NvbW1lbnQuY29tbWVudH08L3A+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgY29tbWVudENvbnRhaW5lci5hcHBlbmQodXNlclRodW1ibmFpbCwgY29tbWVudE1haW4pO1xyXG4gICAgICBjb21tZW50c0Rpdi5hcHBlbmQoY29tbWVudENvbnRhaW5lcik7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjb3VudENvbW1lbnRzID0gKGVsZW1lbnQsIGNvbW1lbnRzKSA9PiB7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke2NvbW1lbnRzLmxlbmd0aH0gQ29tbWVudHNgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJzAgQ29tbWVudHMnO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlDb21tZW50cywgY291bnRDb21tZW50cyB9O1xyXG4iLCJpbXBvcnQgeyBnZXRMaWtlcywgcG9zdExpa2UsIHVwZGF0ZUxpa2VzIH0gZnJvbSAnLi9saWtlcy1oYW5kbGVyLmpzJztcclxuXHJcbmNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcycpO1xyXG5jb25zdCBkaXNwbGF5TW92aWVzID0gKHNhbXBsZU1vdmllcykgPT4ge1xyXG4gIHNhbXBsZU1vdmllcy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xyXG4gICAgY29uc3QgbW92aWVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb3ZpZVdyYXBwZXIuaWQgPSBgbW92aWVfJHttb3ZpZS5pZH1gO1xyXG4gICAgbW92aWVXcmFwcGVyLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyJztcclxuICAgIGNvbnN0IG1vdmllSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb3ZpZUltZ0Rpdi5jbGFzc05hbWUgPSAnbW92aWUtaW1hZ2UtZGl2JztcclxuICAgIGNvbnN0IG1vdmllSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBtb3ZpZUltZy5zcmMgPSBtb3ZpZS5pbWFnZS5tZWRpdW07XHJcbiAgICBtb3ZpZUltZy5jbGFzc05hbWUgPSAnbW92aWUtaW1hZ2UnO1xyXG4gICAgbW92aWVJbWdEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWcpO1xyXG4gICAgY29uc3QgbW92aWVJbWdPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb3ZpZUltZ092ZXJsYXkuY2xhc3NOYW1lID0gJ2RldGFpbHMtb3ZlcmxheSc7XHJcbiAgICBjb25zdCByYXRpbmdTdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xyXG4gICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zdGFyJyk7XHJcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktc3RhcicpO1xyXG4gICAgY29uc3QgbW92aWVSYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtb3ZpZVJhdGluZy5jbGFzc05hbWUgPSAnbW92aWUtb3ZlcmxheS1yYXRpbmcnO1xyXG4gICAgaWYgKG1vdmllLnJhdGluZy5hdmVyYWdlKSB7XHJcbiAgICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9IGAke21vdmllLnJhdGluZy5hdmVyYWdlfSAvIDEwYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9ICcwIC8gMTAnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbW92aWVHZW5yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1vdmllR2VucmUuY2xhc3NOYW1lID0gJ21vdmllLW92ZXJsYXktZ2VucmUnO1xyXG4gICAgbW92aWVHZW5yZS5pbm5lckhUTUwgPSBgJHttb3ZpZS5nZW5yZXNbMF19YDtcclxuICAgIGNvbnN0IG1vdmllRGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbW92aWVEZXRhaWxzQnRuLmNsYXNzTmFtZSA9ICdvdmVsYXktZGV0YWlscy1idG4nO1xyXG4gICAgbW92aWVEZXRhaWxzQnRuLmlubmVySFRNTCA9ICdWaWV3IERldGFpbHMnO1xyXG4gICAgbW92aWVJbWdPdmVybGF5LmFwcGVuZChcclxuICAgICAgcmF0aW5nU3RhcixcclxuICAgICAgbW92aWVSYXRpbmcsXHJcbiAgICAgIG1vdmllR2VucmUsXHJcbiAgICAgIG1vdmllRGV0YWlsc0J0bixcclxuICAgICk7XHJcbiAgICBtb3ZpZUltZ0Rpdi5hcHBlbmRDaGlsZChtb3ZpZUltZ092ZXJsYXkpO1xyXG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKG1vdmllSW1nRGl2KTtcclxuICAgIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9IGAke21vdmllLm5hbWV9YDtcclxuICAgIG1vdmllVGl0bGUuY2xhc3NOYW1lID0gJ21vdmllLXRpdGxlJztcclxuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChtb3ZpZVRpdGxlKTtcclxuICAgIGNvbnN0IGxpa2VzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaWtlc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbGlrZXMtY29udGFpbmVyJztcclxuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XHJcbiAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLWhlYXJ0Jyk7XHJcbiAgICBsaWtlQnRuLmlkID0gYCR7bW92aWVXcmFwcGVyLmlkfWA7XHJcbiAgICBsaWtlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaWtlQnRuKTtcclxuICAgIGNvbnN0IG1vdmllTGlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtb3ZpZUxpa2VzLmNsYXNzTmFtZSA9ICdtb3ZpZS1saWtlcyc7XHJcbiAgICBtb3ZpZUxpa2VzLnRleHRDb250ZW50ID0gJzAgbGlrZXMnO1xyXG4gICAgbGlrZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobW92aWVMaWtlcyk7XHJcbiAgICBtb3ZpZVdyYXBwZXIuYXBwZW5kQ2hpbGQobGlrZXNDb250YWluZXIpO1xyXG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29tbWVudEJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCBvbiBNb3ZpZSc7XHJcbiAgICBjb21tZW50QnRuLmNsYXNzTmFtZSA9ICdjb21tZW50QnRuJztcclxuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcclxuICAgIGNvbnN0IHBvcExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XHJcbiAgICAgIHVwZGF0ZUxpa2VzKGxpa2VCdG4sIHJlc0FycmF5LCBtb3ZpZUxpa2VzKTtcclxuICAgIH07XHJcbiAgICBtb3ZpZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZVdyYXBwZXIpO1xyXG4gICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vdmllID0gZS50YXJnZXQ7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgYXdhaXQgcG9zdExpa2UobW92aWUuaWQpO1xyXG4gICAgICBjb25zdCByZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XHJcbiAgICAgIHVwZGF0ZUxpa2VzKG1vdmllLCByZXNBcnJheSwgbW92aWVMaWtlcyk7XHJcbiAgICB9KTtcclxuICAgIHBvcExpa2VzKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW92aWVzO1xyXG4iLCJjb25zdCBlbmRQb2ludCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9MzMnO1xyXG5jb25zdCBnZXRNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZW5kUG9pbnQpO1xyXG4gIGNvbnN0IGRhdGEgPSByZXMuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TW92aWVzOyIsImNvbnN0IFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xyXG5jb25zdCBhcHBJRCA9ICdIcXhHNnFrcGkzRGhaR2FBa1cxdyc7XHJcbmNvbnN0IGVuZFBvaW50ID0gYCR7VVJMfS9hcHBzLyR7YXBwSUR9L2xpa2VzL2A7XHJcbmNvbnN0IHBvc3RMaWtlID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZFBvaW50LCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaXRlbSB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBDaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxufTtcclxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuY29uc3QgdXBkYXRlTGlrZXMgPSAobW92aWUsIHJlc0FycmF5LCBtb3ZpZUxpa2VzKSA9PiB7XHJcbiAgcmVzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuaXRlbV9pZCA9PT0gbW92aWUuaWQpIHtcclxuICAgICAgbW92aWVMaWtlcy5pbm5lckhUTUwgPSBgJHtlbGVtZW50Lmxpa2VzfSBsaWtlc2A7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCB7IHBvc3RMaWtlLCBnZXRMaWtlcywgdXBkYXRlTGlrZXMgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY291bnRNb3ZpZXMoc2FtcGxlTW92aWVzKSB7XHJcbiAgcmV0dXJuIHNhbXBsZU1vdmllcy5sZW5ndGg7XHJcbn0iLCJpbXBvcnQgeyBwb3N0Q29tbWVudCwgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRzLWhhbmRsZXIuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29tbWVudHMsIGNvdW50Q29tbWVudHMgfSBmcm9tICcuL2Rpc3BsYXktY29tbWVudHMuanMnO1xyXG5cclxuY29uc3QgaXNWaXNpYmxlID0gJ2lzLXZpc2libGUnO1xyXG5cclxuY29uc3QgbW92aWVNb2RhbCA9IGFzeW5jIChjb21tZW50QnV0dG9ucywgc2FtcGxlTW92aWVzKSA9PiB7XHJcbiAgY29tbWVudEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwnO1xyXG5cclxuICAgICAgY29uc3QgcG9wVXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcG9wVXBEaXYuY2xhc3NOYW1lID0gJ21vZGFsLWRpYWxvZyc7XHJcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoaXNWaXNpYmxlKTtcclxuICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQocG9wVXBEaXYpO1xyXG5cclxuICAgICAgY29uc3QgbW92aWVJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgbW92aWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IG1vdmllRG93bmxvYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgY29uc3QgbW92aWVXYXRjaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBtb3ZpZUltZ0Rpdi5jbGFzc05hbWUgPSAnbW92aWVDYXJkJztcclxuICAgICAgbW92aWVJbWcuY2xhc3NOYW1lID0gJ21vdmllQ2FyZC1pbWcnO1xyXG4gICAgICBtb3ZpZUltZy5zcmMgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uaW1hZ2Uub3JpZ2luYWx9YDtcclxuICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdidXR0b25EaXYnO1xyXG4gICAgICBtb3ZpZURvd25sb2FkQnRuLmNsYXNzTmFtZSA9ICdwb3BVcC1idXR0b24nO1xyXG4gICAgICBtb3ZpZURvd25sb2FkQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlcy1kb3duXCI+PC9pPkRvd25sb2FkJztcclxuICAgICAgbW92aWVXYXRjaEJ0bi5jbGFzc05hbWUgPSAncG9wVXAtYnV0dG9uJztcclxuICAgICAgbW92aWVXYXRjaEJ0bi5pbm5lckhUTUwgPSAnV2F0Y2ggTm93JztcclxuICAgICAgbW92aWVJbWdEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWcpO1xyXG4gICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobW92aWVEb3dubG9hZEJ0bik7XHJcbiAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChtb3ZpZVdhdGNoQnRuKTtcclxuICAgICAgbW92aWVJbWdEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcclxuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWdEaXYpO1xyXG5cclxuICAgICAgY29uc3QgbW92aWVDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICBjb25zdCBtb3ZpZUdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgY29uc3QgbW92aWVSZWxlYXNlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgIGNvbnN0IG1vdmllTmV0d29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgIGNvbnN0IGRvd25sb2FkU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIGNvbnN0IHJhdGluZ1N0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGNvbnN0IG1vdmllUmF0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBjb25zdCBtb3ZpZVN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIG1vdmllQ29udGVudERpdi5jbGFzc05hbWUgPSAnbW92aWVDb250ZW50JztcclxuICAgICAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9IGAke3NhbXBsZU1vdmllc1tpXS5uYW1lfWA7XHJcbiAgICAgIG1vdmllVGl0bGUuY2xhc3NOYW1lID0gJ3BvcFVwLXRpdGxlJztcclxuICAgICAgbW92aWVHZW5yZS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uZ2VucmVzWzBdfWA7XHJcbiAgICAgIG1vdmllR2VucmUuY2xhc3NOYW1lID0gJ3BvcFVwLUdlbnJlJztcclxuICAgICAgbW92aWVSZWxlYXNlRGF0ZS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0ucHJlbWllcmVkfWA7XHJcbiAgICAgIG1vdmllUmVsZWFzZURhdGUuY2xhc3NOYW1lID0gJ3BvcFVwLXJlbGVhc2VEYXRlJztcclxuICAgICAgbW92aWVOZXR3b3JrLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBtb3ZpZU5ldHdvcmsuY2xhc3NOYW1lID0gJyc7XHJcbiAgICAgIGRvd25sb2FkU3VidGl0bGUuaHJlZiA9ICcjJztcclxuICAgICAgZG93bmxvYWRTdWJ0aXRsZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZXMtZG93blwiPjwvaT4gRG93bmxvYWQgU3VidGl0bGVzJztcclxuICAgICAgZG93bmxvYWRTdWJ0aXRsZS5jbGFzc05hbWUgPSAnc3VidGl0bGUtYnV0dG9uJztcclxuICAgICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xyXG4gICAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcclxuICAgICAgcmF0aW5nU3Rhci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LXN0YXInKTtcclxuICAgICAgbW92aWVSYXRpbmcuY2xhc3NOYW1lID0gJ21vdmllLW92ZXJsYXktcmF0aW5nJztcclxuICAgICAgaWYgKHNhbXBsZU1vdmllc1tpXS5yYXRpbmcuYXZlcmFnZSkge1xyXG4gICAgICAgIG1vdmllUmF0aW5nLmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5yYXRpbmcuYXZlcmFnZX0gLyAxMGA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gJzAgLyAxMCc7XHJcbiAgICAgIH1cclxuICAgICAgbW92aWVTdW1tYXJ5LmlubmVySFRNTCA9IGAke3NhbXBsZU1vdmllc1tpXS5zdW1tYXJ5LnN1YnN0cmluZyhcclxuICAgICAgICAwLFxyXG4gICAgICAgIDIwMCxcclxuICAgICAgKX0uLi4uLi5gO1xyXG4gICAgICBtb3ZpZVN1bW1hcnkuY2xhc3NOYW1lID0gJ3BvcFVwLXN1bW1hcnknO1xyXG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobW92aWVUaXRsZSk7XHJcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChtb3ZpZUdlbnJlKTtcclxuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllUmVsZWFzZURhdGUpO1xyXG4gICAgICBtb3ZpZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZG93bmxvYWRTdWJ0aXRsZSk7XHJcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChyYXRpbmdTdGFyKTtcclxuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllUmF0aW5nKTtcclxuICAgICAgbW92aWVDb250ZW50RGl2LmFwcGVuZENoaWxkKG1vdmllU3VtbWFyeSk7XHJcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKG1vdmllQ29udGVudERpdik7XHJcblxyXG4gICAgICBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIGNsb3NlTW9kYWxCdG4uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGNsb3NlTW9kYWxCdG4uY2xhc3NOYW1lID0gJ2Nsb3NlLXByb2otbW9kYWwnO1xyXG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChjbG9zZU1vZGFsQnRuKTtcclxuICAgICAgY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuaXMtdmlzaWJsZScpKSB7XHJcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuaXMtdmlzaWJsZScpKSB7XHJcbiAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDb21tZW50c1xyXG4gICAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgY29tbWVudFNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbW1lbnQtc2VjdGlvbic7XHJcbiAgICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZm9ybURpdi5jbGFzc05hbWUgPSAnYWRkLWNvbW1lbnQnO1xyXG4gICAgICBjb25zdCBmb3JtSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGZvcm1IZWFkZXJEaXYuY2xhc3NOYW1lID0gJ2FkZC1jb21tZW50LWhlYWRlcic7XHJcbiAgICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICBjb25zdCBmb3JtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgZm9ybUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcclxuICAgICAgZm9ybUljb24uY2xhc3NMaXN0LmFkZCgnZmEtbWVzc2FnZScpO1xyXG4gICAgICBmb3JtSGVhZGVyLmlubmVySFRNTCA9ICdBZGQgeW91ciBjb21tZW50JztcclxuICAgICAgZm9ybUhlYWRlckRpdi5hcHBlbmQoZm9ybUljb24sIGZvcm1IZWFkZXIpO1xyXG4gICAgICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgY29tbWVudEZvcm0uY2xhc3NOYW1lID0gJ2FkZC1jb21tZW50LWZvcm0nO1xyXG5cclxuICAgICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICB1c2VyTmFtZS5jbGFzc05hbWUgPSAndXNlci1uYW1lJztcclxuICAgICAgdXNlck5hbWUucGxhY2Vob2xkZXIgPSAnVXNlcm5hbWUuLi4nO1xyXG4gICAgICBjb25zdCB1c2VyQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgIHVzZXJDb21tZW50LmNsYXNzTmFtZSA9ICd1c2VyLWNvbW1lbnQnO1xyXG4gICAgICB1c2VyQ29tbWVudC5wbGFjZWhvbGRlciA9ICdTaGFyZSB5b3VyIGNvbW1lbnRzIC4uLic7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgY29tbWVudEJ0bi5jbGFzc05hbWUgPSAnY29tbWVudC1idG4nO1xyXG4gICAgICBjb21tZW50QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCBDb21tZW50JztcclxuICAgICAgY29tbWVudEJ0bi5pZCA9IGBtb3ZpZV9jbXRfJHtzYW1wbGVNb3ZpZXNbaV0uaWR9YDtcclxuICAgICAgY29tbWVudEZvcm0uYXBwZW5kKHVzZXJOYW1lLCB1c2VyQ29tbWVudCwgY29tbWVudEJ0bik7XHJcbiAgICAgIGZvcm1EaXYuYXBwZW5kKGZvcm1IZWFkZXJEaXYsIGNvbW1lbnRGb3JtKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbW1lbnRzRGl2LmNsYXNzTmFtZSA9ICdkaXNwbGF5LWNvbW1lbnRzJztcclxuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50cyhjb21tZW50QnRuLmlkKTtcclxuICAgICAgY29uc3QgY29tbWVudHNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgIGNvbW1lbnRzQ291bnQuY2xhc3NOYW1lID0gJ2NvbW1lbnRzLWNvdW50JztcclxuICAgICAgY29tbWVudHNEaXYuYXBwZW5kKGNvbW1lbnRzQ291bnQpO1xyXG4gICAgICBjb3VudENvbW1lbnRzKGNvbW1lbnRzQ291bnQsIGNvbW1lbnRzKTtcclxuICAgICAgZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzRGl2LCBjb21tZW50cyk7XHJcblxyXG4gICAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCByZXNNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaWYgKHVzZXJOYW1lLnZhbHVlID09PSAnJyB8fCB1c2VyQ29tbWVudC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHJlc01zZy5jbGFzc05hbWUgPSAnZXJyb3ItbXNnJztcclxuICAgICAgICAgIHJlc01zZy5pbm5lclRleHQgPSAnUGxlYXNlIGZpbGwgb3V0IHlvdXIgVXNlcm5hbWUgYW5kIGFkZCBhIGNvbW1lbnQnO1xyXG4gICAgICAgICAgY29tbWVudEJ0bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXNNc2csIGNvbW1lbnRCdG4pO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRGb3JtLnJlbW92ZUNoaWxkKHJlc01zZyk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcmVzTXNnLmNsYXNzTmFtZSA9ICdzdWNjZXNzLW1zZyc7XHJcbiAgICAgICAgICByZXNNc2cuaW5uZXJUZXh0ID0gJ1N1Y2Nlc3NmdWxseSBhZGRlZCB5b3VyIGNvbW1lbnQnO1xyXG4gICAgICAgICAgY29tbWVudEJ0bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXNNc2csIGNvbW1lbnRCdG4pO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbW1lbnRGb3JtLnJlbW92ZUNoaWxkKHJlc01zZyk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgIGF3YWl0IHBvc3RDb21tZW50KGNvbW1lbnRCdG4uaWQsIHVzZXJOYW1lLCB1c2VyQ29tbWVudCk7XHJcbiAgICAgICAgICBjb25zdCBteUNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMoY29tbWVudEJ0bi5pZCk7XHJcbiAgICAgICAgICBjb3VudENvbW1lbnRzKGNvbW1lbnRzQ291bnQsIG15Q29tbWVudHMpO1xyXG4gICAgICAgICAgZGlzcGxheUNvbW1lbnRzKGNvbW1lbnRzRGl2LCBteUNvbW1lbnRzKTtcclxuICAgICAgICAgIGNvbW1lbnRGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZChmb3JtRGl2LCBjb21tZW50c0Rpdik7XHJcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKGNvbW1lbnRTZWN0aW9uKTtcclxuICAgICAgY29uc3QgcmVhZE1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgcmVhZE1vcmUuaW5uZXJIVE1MID0gJ1JlYWQgTW9yZSc7XHJcbiAgICAgIHJlYWRNb3JlLmNsYXNzTmFtZSA9ICdyZWFkTW9yZUJ0bic7XHJcbiAgICAgIG1vdmllQ29udGVudERpdi5hcHBlbmRDaGlsZChyZWFkTW9yZSk7XHJcbiAgICAgIHJlYWRNb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWFkTW9yZS5pbm5lckhUTUwgPT09ICdSZWFkIE1vcmUnKSB7XHJcbiAgICAgICAgICByZWFkTW9yZS5pbm5lckhUTUwgPSAnUmVhZCBMZXNzJztcclxuICAgICAgICAgIG1vdmllU3VtbWFyeS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uc3VtbWFyeX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWFkTW9yZS5pbm5lckhUTUwgPSAnUmVhZCBNb3JlJztcclxuICAgICAgICAgIG1vdmllU3VtbWFyeS5pbm5lckhUTUwgPSBgJHtzYW1wbGVNb3ZpZXNbaV0uc3VtbWFyeS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDQwMCxcclxuICAgICAgICAgICl9Li4uLi4uYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG1vdmllTW9kYWw7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvU2hvd21heC1Nb3ZpZXMvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnZXRNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2dldC1tb3ZpZXMuanMnO1xuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXktbW92aWVzLmpzJztcbmltcG9ydCBtb3ZpZU1vZGFsIGZyb20gJy4vbW9kdWxlcy9tb3ZpZS1tb2RhbC5qcyc7XG5pbXBvcnQgY291bnRNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL21vdmllLWNvdW50ZXIuanMnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IExvZ28gZnJvbSAnLi9hc3NldHMvc2hvd2xvZ29vLmpwZyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsb2dvSW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbiAgY29uc3QgbG9nb0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0ljb24uc3JjID0gTG9nbztcbiAgbG9nb0ltZ0Rpdi5hcHBlbmRDaGlsZChsb2dvSWNvbik7XG5cbiAgY29uc3QgbW92aWVzID0gYXdhaXQgZ2V0TW92aWVzKCk7XG4gIGNvbnN0IHNhbXBsZU1vdmllcyA9IG1vdmllcy5zbGljZSgxMiwgNjApO1xuICBhd2FpdCBkaXNwbGF5TW92aWVzKHNhbXBsZU1vdmllcyk7XG5cbiAgY29uc3QgbW92aWVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLWxpc3QnKTtcblxuICBtb3ZpZUxpc3QuaW5uZXJIVE1MID0gYDxzcGFuPiAke2NvdW50TW92aWVzKHNhbXBsZU1vdmllcyl9IDxzcGFuPmA7XG5cbiAgY29uc3QgY29tbWVudEJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRCdG4nKV07XG4gIGNvbnN0IHZpZXdEZXRhaWxzQnV0dG9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3ZlbGF5LWRldGFpbHMtYnRuJyldO1xuICBtb3ZpZU1vZGFsKGNvbW1lbnRCdXR0b25zLCBzYW1wbGVNb3ZpZXMpO1xuICBtb3ZpZU1vZGFsKHZpZXdEZXRhaWxzQnV0dG9ucywgc2FtcGxlTW92aWVzKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9