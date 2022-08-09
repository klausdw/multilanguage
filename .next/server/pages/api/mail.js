"use strict";
(() => {
var exports = {};
exports.id = 70;
exports.ids = [70];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 3584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
(__webpack_require__(5142).config)();
const nodemailer = __webpack_require__(5184);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { nome , email , mensagem  } = JSON.parse(req.body);
    console.log(nome, email, mensagem);
    const transporter = nodemailer.createTransport({
        host: 'smtp.ionos.de',
        port: 465,
        secure: true,
        auth: {
            user: "info@abconnection.de",
            pass: "Kdw$golfmaster1991"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const mailOption = {
        from: `Contato do Website ${email}`,
        to: process.env.EMAIL_TO,
        bcc: process.env.EMAIL_COPY,
        replyTo: email,
        subject: `${nome} - ${email}`,
        text: mensagem,
        html: mensagem.replace(/\n/g, '<br/>')
    };
    await transporter.sendMail(mailOption).then((result)=>{
        console.log(result);
        result;
        res.status(200).json({
            status: 'OK'
        });
    }).catch((err)=>{
        console.log(err);
        err instanceof Error ? err.message : err;
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3584));
module.exports = __webpack_exports__;

})();