function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navegation>\n</app-navegation>\n<ngx-spinner></ngx-spinner>\n<section id=\"contact-form-section\" class=\"form-content-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"tab-content\">\n                <div class=\"col-sm-12\">\n                    <div class=\"item-wrap\">\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-12\">\n                                <div class=\"item-content colBottomMargin\">\n                                    <div class=\"item-info\">\n                                        <h2 class=\"item-title text-center\">Registro de usuario para la app</h2>\n\n                                    </div>\n                                    <!--End item-info -->\n\n                                </div>\n                                <!--End item-content -->\n                            </div>\n                            <!--End col -->\n                            <div class=\"col-md-12\">\n\n\n                                <form data-toggle=\"validator\" class=\"popup-form\">\n                                    <div class=\"row\">\n                                        <div id=\"msgContactSubmit\" class=\"hidden\"></div>\n\n                                        <div class=\"form-group col-sm-6\">\n                                            <div class=\"help-block with-errors\"></div>\n                                            <input [(ngModel)]=\"user\" placeholder=\"Usuario *\" class=\"form-control\" type=\"text\" [ngModelOptions]=\"{standalone: true}\">\n                                            <div class=\"input-group-icon\"><i class=\"fa fa-user\"></i></div>\n                                        </div>\n                                        <!-- end form-group -->\n                                        <!-- <div class=\"form-group col-sm-6\">\n\n                                            <select class=\"form-control\" [(ngModel)]=\"idplaza\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Selecciona una plaza\">\n                                                            <option value=\"3\">Tijuana</option>\n                                                            <option value=\"4\">Tuxpan</option>\n                                                            <option value=\"7\">La Paz BCS</option>\n                                                            <option value=\"8\">Cuernavaca</option>\n                                                            <option value=\"9\">Los Reyes Predial</option>\n                                                            <option value=\"10\">Los Reyes Agua</option>\n                                                            <option value=\"11\">Navolato Agua</option>\n                                                            <option value=\"12\">Navolato Predial</option>\n                                                            <option value=\"13\">Escobedo</option>\n                                                            <option value=\"14\">Nuevo Laredo</option>\n                                                            <option value=\"15\">Lerdo Agua</option>\n                                                            <option value=\"16\">Lerdo Predial</option>\n                                                            <option value=\"18\">Tijuana Predial</option>\n                                                            <option value=\"21\">Obregon</option>\n                                                            <option value=\"22\">Piedras Negras Predio</option>\n                                                            <option value=\"23\">Ensenada</option>\n                                                            <option value=\"24\">Tijuana agua</option>\n                                                            <option value=\"25\">Mexicali</option>\n                                                            <option value=\"26\">Piedras Negras Agua</option>\n                                                            <option value=\"27\">Tecate</option>\n                                                            <option value=\"28\">Durango</option>\n                                                            <option value=\"29\">Torreon</option>\n                                                            <option value=\"30\">Durango Agua</option>\n                                            </select>\n                                            <div class=\"input-group-icon\"><i class=\"fa fa-envelope\"></i></div>\n\n                                        </div> -->\n                                        <!-- end form-group -->\n\n                                        <div class=\"clearfix\"></div>\n                                    </div>\n                                    <!-- end row -->\n                                </form>\n                                <!-- end form -->\n\n                                <div class=\"form-group last col-sm-12\">\n                                    <button id=\"submit\" class=\"btn btn-custom\" (click)=\"verificaUsuario()\">Verificar usuario</button>\n                                </div>\n                                <!-- end form-group -->\n\n\n\n\n                            </div>\n                        </div>\n                        <!--End row -->\n\n\n\n\n                        <!-- Popup end -->\n\n                    </div>\n                    <!-- end item-wrap -->\n                </div>\n                <!--End col -->\n            </div>\n            <!--End tab-content -->\n        </div>\n        <!--End row -->\n    </div>\n    <!--End container -->\n</section>\n\n<div class=\"container\" *ngIf=\"data.length==0\">\n    <h1 style=\"color:red;\">No se encontró ninguna coincidencia, verifica usuario y/o plaza</h1>\n</div>\n<div class=\"conteiner\" *ngIf=\"data.length > 0\">\n\n\n    <div class=\"colBottomMargin\">\n        &nbsp;\n        <div class=\"colBottomMargin\">&nbsp;</div>\n    </div>\n\n    <div id=\"footer\" class=\"footer\">\n        <div class=\"container\">\n\n            <div class=\"row\">\n                <div class=\"footer-top col-sm-12\">\n                </div>\n                <!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n        <!--End container -->\n    </div>\n\n\n\n    <section id=\"contact-form-section\" class=\"form-content-wrap\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"tab-content\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"item-wrap\">\n                            <div class=\"row\">\n\n                                <div class=\"col-sm-12\">\n                                    <div class=\"item-content colBottomMargin\">\n                                        <div class=\"item-info\">\n                                            <h2 class=\"item-title text-center\">Usuario encontrado</h2>\n\n                                        </div>\n                                        <!--End item-info -->\n\n                                    </div>\n                                    <!--End item-content -->\n                                </div>\n                                <!--End col -->\n                                <div class=\"col-md-12\">\n\n\n                                    <form data-toggle=\"validator\" class=\"popup-form\">\n                                        <div class=\"row\">\n                                            <div id=\"msgContactSubmit\" class=\"hidden\"></div>\n\n                                            <div class=\"form-group col-sm-6\">\n                                                <div class=\"help-block with-errors\"></div>\n                                                <label>Nombre: </label>\n                                                <input name=\"fname\" id=\"fname\" [(ngModel)]=\"nombre\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" type=\"text\" value={{data[0].nombre}} readonly>\n\n                                            </div>\n                                            <!-- end form-group -->\n                                            <!-- <div class=\"form-group col-sm-6\">\n                                                <div class=\"help-block with-errors\"></div>\n                                                <label for=\"email\">Usuario: </label>\n                                                <input [(ngModel)]=\"usuario\" [ngModelOptions]=\"{standalone: true}\" pattern=\".*@\\w{2,}\\.\\w{2,}\" class=\"form-control\" value={ {data[0].usuario}} readonly>\n\n                                            </div>-->\n\n                                            <!-- end form-group -->\n                                            <div class=\"form-group col-sm-6\">\n                                                <div class=\"help-block with-errors\"></div>\n                                                <label for=\"\">Plaza Asignada</label>\n                                                <input [(ngModel)]=\"plaza\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" type=\"text\" value={{data[0].plaza}} readonly required data-error=\"Por favor ingresa tu número de teléfono\">\n\n                                            </div>\n                                            <!-- end form-group -->\n                                            <div class=\"form-group col-sm-6\">\n                                                <div class=\"help-block with-errors\"></div>\n                                                <label for=\"\">Rol Asignado</label>\n                                                <input [(ngModel)]=\"rol\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" type=\"text\" value={{data[0].rol}} readonly required data-error=\"Por favor ingresa el asunto\">\n\n                                            </div>\n                                            <!-- end form-group -->\n                                            <div class=\"form-group col-sm-6\">\n                                                <div class=\"help-block with-errors\"></div>\n                                                <label for=\"\">Id del Checador Implementta</label>\n                                                <input [(ngModel)]=\"idChecador\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" type=\"text\" value={{data[0].idUser}} readonly required data-error=\"Por favor ingresa el asunto\">\n\n                                            </div>\n                                            <!-- end form-group -->\n                                            <div class=\"form-group col-sm-6\">\n                                                <div class=\"help-block with-errors\"></div>\n                                                <label for=\"\">Contraseña</label>\n                                                <input [(ngModel)]=\"password1\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Contraseña*\" class=\"form-control\" type=\"text\">\n                                                <label for=\"\">Repetir contraseña</label>\n                                                <input [(ngModel)]=\"password2\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Confirmar contraseña*\" class=\"form-control\" type=\"text\">\n                                            </div>\n                                            <!-- end form-group -->\n\n\n\n\n                                            <div class=\"clearfix\"></div>\n                                        </div>\n                                        <!-- end row -->\n                                    </form>\n                                    <!-- end form -->\n\n                                    <div class=\"form-group last col-sm-12\">\n                                        <button class=\"btn btn-primary btn-block\" (click)=\"crearUsuario()\">Crear usuario</button>\n                                    </div>\n                                    <!-- end form-group -->\n\n\n\n\n\n                                </div>\n                            </div>\n                            <!--End row -->\n\n\n\n\n                            <!-- Popup end -->\n\n                        </div>\n                        <!-- end item-wrap -->\n                    </div>\n                    <!--End col -->\n                </div>\n                <!--End tab-content -->\n            </div>\n            <!--End row -->\n        </div>\n        <!--End container -->\n    </section>\n\n\n\n\n    <div class=\"colBottomMargin\">\n        &nbsp;\n        <div class=\"colBottomMargin\">&nbsp;</div>\n    </div>\n\n    <div id=\"footer\" class=\"footer\">\n        <div class=\"container\">\n\n            <div class=\"row\">\n                <div class=\"footer-top col-sm-12\">\n                </div>\n                <!-- end col -->\n            </div>\n            <!-- end row -->\n\n        </div>\n        <!--End container -->\n    </div>\n\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet><router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navegation></app-navegation>\n\n<div class=\"container mt-3\">\n    <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"Buscar por nombre de usuario\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Usuario</th>\n                <th scope=\"col\">Plaza</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Rol</th>\n\n\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let user of users | filter:searchText\">\n                <td> {{user.name}}</td>\n                <td>{{user.plaza}}</td>\n                <td>{{user.email}}</td>\n                <td>{{user.rol}}</td>\n                <!-- <td><input type=\"checkbox\" class=\"form-check-input\" (click)=\"hideButton(user.isHide,user.id)\" [checked]=\"user.isHide\"></td> -->\n                <td><button class=\"btn btn-primary\" (click)=goDetail(user.uid)>Detalles</button></td>\n\n            </tr>\n\n\n        </tbody>\n    </table>\n    <!-- <button class=\"btn btn-success btn-block\" (click)=\"importar()\"> Exportar Usuarios Feos</button> -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper fadeInDown\">\n\n    <div id=\"formContent\">\n        <!-- Tabs Titles -->\n        <!-- Icon -->\n\n        <div class=\"container\">\n            <div>\n                <img src=\"../../assets/img/logo.jpg\">\n            </div>\n            <!-- Login Form -->\n            <div id=\"fmr\">\n                <input type=\"text\" id=\"login\" class=\"fadeIn second mb-3\" #userEmail placeholder=\"Usuario\" required autofocus>\n                <input type=\"password\" id=\"password\" class=\"fadeIn third mb-3\" #userPassword placeholder=\"Contraseña\" required>\n                <button class=\"fadeIn fourth btn btn-danger btn-lg mb-3\" (click)=\"login(userEmail.value, userPassword.value)\">Ingresar</button>\n            </div>\n\n            <!-- Remind Passowrd -->\n            <div id=\"formFooter\">\n                <a href=\"https://implementta.net/ticketWeb\">Olvidaste tu clave, contacta a sistemas</a>\n            </div>\n\n        </div>\n\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navegation/navegation.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navegation/navegation.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavegationNavegationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"nav justify-content-center navbar-light bg-light p-3\">\n    <a class=\"btn btn-block btn-navegacion navbar-brand\" (click)=\"irInicio()\">Implementta móvil app</a>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/add-user\">Agregar usuario</a>\n    </li>\n    <li class=\"nav-item\">\n        <button class=\"btn btn-outline-danger\" (click)=\"exit()\">Cerrar sesión</button>\n    </li>\n\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDetailUserDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navegation></app-navegation>\r\n\r\n<div class=\"container mt-3 \">\r\n    <h3 class=\"text-center mb-3\"> Detalle del usuario </h3>\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary\">\r\n                    <h6 class=\"text-center\"> Usuario </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"imagen-usuario\">\r\n                        <img src=\"../../assets/img/user.png\" alt=\"\">\r\n                    </div>\r\n                    <h6 class=\"text-center\"> {{data.name}} </h6>\r\n                    <!-- <h3 class=\"text-center\">{{data.idaspuser}}</h3> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary \">\r\n                    <h6 class=\"text-center\"> Version de implementtaMovil </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"imagen-usuario\">\r\n                        <img src=\"../../assets/img/cellphone.png\" alt=\"\">\r\n                    </div>\r\n                    <h6 class=\"text-center\"> {{data.appVersion}} </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary \">\r\n                    <h6 class=\"text-center\"> Email </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"imagen-usuario\">\r\n                        <img src=\"../../assets/img/email.png\" alt=\"\">\r\n                    </div>\r\n                    <h6 class=\"text-center\"> {{data.email}} </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary \">\r\n                    <h6 class=\"text-center\"> Contraseña </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"imagen-usuario\">\r\n                        <img src=\"../../assets/img/password.png\" alt=\"\">\r\n                    </div>\r\n                    <h6 class=\"text-center\"> {{data.password}} </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary \">\r\n                    <h6 class=\"text-center\"> Ultima sincronización </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"imagen-usuario\">\r\n                        <img src=\"../../assets/img/sync.png\" alt=\"\">\r\n                    </div>\r\n                    <h6 class=\"text-center\"> {{data.lastSync}} </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary \">\r\n                    <h6 class=\"text-center\"> Plaza asignada </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"imagen-usuario\">\r\n                        <img src=\"../../assets/img/plaza.png\" alt=\"\">\r\n                    </div>\r\n                    <h6 class=\"text-center\"> {{data.plaza}} </h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary \">\r\n                    <h6 class=\"text-center\"> Rol asignado </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-group col-sm-12\" style=\"border: groove;\">\r\n                        <br>\r\n                        <h2 style=\"color:green\">{{data.rol}}</h2>\r\n                        <button class=\"btn btn-block btn-primary\" (click)=\"open(content2)\">Cambiar rol</button>\r\n                        <br>\r\n                    </div>\r\n                    <!-- end form-group -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary \">\r\n                    <h6 class=\"text-center\"> Estado del usuario </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-group col-sm-12\" style=\"border:groove\">\r\n                        <label for=\"\">Estado del usuario:</label>\r\n                        <br>\r\n                        <h2 *ngIf=\"data.isActive\" style=\"color:green\"> Activado</h2>\r\n                        <h2 *ngIf=\"!data.isActive\" style=\"color:red\">Desactivado</h2>\r\n\r\n                        <button class=\"btn btn-block btn-primary\" (click)=\"open(content)\">Cambiar estado</button>\r\n                        <br>\r\n                    </div>\r\n                    <!-- end form-group -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row mt-5\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header bg-secondary\">\r\n                    <h6 class=\"text-center\">Id del usuario </h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"imagen-usuario\">\r\n                        <img src=\"../../assets/img/usuario-laptop.png\" alt=\"\">\r\n                    </div>\r\n                    <h6 class=\"text-center\"> {{data.idaspuser}} </h6>\r\n                    <!-- <h3 class=\"text-center\">{{data.idaspuser}}</h3> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Cambiar estado</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <label>Estado</label>\r\n                <div class=\"input-group\">\r\n\r\n                    <div class=\"input-group-append\">\r\n                        <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"isActive\">\r\n\r\n                            <label ngbButtonLabel class=\"btn-outline-success\">\r\n                                <input ngbButton type=\"radio\" [value]=\"true\"> Activado\r\n                            </label>\r\n\r\n                            <label ngbButtonLabel class=\"btn-outline-danger\">\r\n                                <input ngbButton type=\"radio\" [value]=\"false\"> Desactivado\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"changeStatus(data.uid)\">Guardar</button>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n<ng-template #content2 let-modal>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Cambiar rol</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <label>Estado</label>\r\n                <div class=\"input-group\">\r\n\r\n                    <div class=\"input-group-append\">\r\n                        <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"rol\">\r\n\r\n                            <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                                <input ngbButton type=\"radio\" [value]=\"2\"> Abogado\r\n                            </label>\r\n\r\n                            <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                                <input ngbButton type=\"radio\" [value]=\"5\"> Gestor\r\n                            </label>\r\n                            <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                                <input ngbButton type=\"radio\" [value]=\"7\"> Reductor\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"changeRole(data.uid,data.idaspuser,data.idplaza)\">Guardar</button>\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-user/add-user.component.css":
  /*!*************************************************!*\
    !*** ./src/app/add-user/add-user.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddUserAddUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/add-user/add-user.component.ts":
  /*!************************************************!*\
    !*** ./src/app/add-user/add-user.component.ts ***!
    \************************************************/

  /*! exports provided: AddUserComponent */

  /***/
  function srcAppAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/rest.service */
    "./src/app/services/rest.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var AddUserComponent = /*#__PURE__*/function () {
      function AddUserComponent(service, authService, spinner, router) {
        _classCallCheck(this, AddUserComponent);

        this.service = service;
        this.authService = authService;
        this.spinner = spinner;
        this.router = router;
        this.juan = '';
        this.plaza = '';
        this.user = '';
        this.nombre = '';
        this.idplaza = '';
        this.idChecador = '';
        this.usuario = '';
        this.password1 = '';
        this.password2 = '';
        this.idAspUser = '';
        this.rol = '';
      }

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.idplaza = localStorage.getItem('idplaza');
        }
      }, {
        key: "verificaUsuario",
        value: function verificaUsuario() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.user == '' || this.idplaza == '')) {
                      _context.next = 4;
                      break;
                    }

                    alert('Ingresa los datos completos');
                    _context.next = 13;
                    break;

                  case 4:
                    _context.next = 6;
                    return this.service.userVerify(this.user, this.idplaza);

                  case 6:
                    this.data = _context.sent;
                    this.nombre = this.data[0].nombre;
                    this.usuario = this.data[0].usuario;
                    this.plaza = this.data[0].plaza;
                    this.idChecador = this.data[0].idUser;
                    this.idAspUser = this.data[0].idAspUser;
                    this.rol = this.data[0].rol;

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "crearUsuario",
        value: function crearUsuario() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var idaspuser, idrol, nombre, user, rol, idplaza, password, plaza, idUserChecador;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.password1 != "") {
                      if (this.password1 != this.password2) {
                        alert("Las contraseñas no coinciden, verifica por favor :(");
                      } else {
                        this.spinner.show();
                        idaspuser = this.data[0].idaspuser;
                        idrol = this.data[0].idrol;
                        nombre = this.data[0].nombre;
                        user = this.data[0].usuario;
                        rol = this.data[0].rol;
                        idplaza = this.idplaza;
                        password = this.password1;
                        plaza = this.data[0].plaza;
                        idUserChecador = this.data[0].idUser; //console.log(user, password, nombre, idplaza, idrol, idaspuser, rol)

                        this.authService.register(user, password, nombre, idplaza, idrol, idaspuser, rol, plaza, idUserChecador).then(function (res) {
                          _this.spinner.hide();

                          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: 'Creación de usuario',
                            text: 'Usuario creado con éxito',
                            icon: 'success',
                            confirmButtonText: 'Aceptar'
                          });

                          _this.router.navigate(['/home', localStorage.getItem('uid')]); //console.log(res)

                        })["catch"](function (err) {
                          _this.spinner.hide();

                          alert(err);
                        });
                      }
                    } else {
                      alert("Verifica todos los campos");
                    }

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent.ctorParameters = function () {
      return [{
        type: _services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.component.css */
      "./src/app/add-user/add-user.component.css"))["default"]]
    })], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app/login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app/home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-user/add-user.component */
    "./src/app/add-user/add-user.component.ts");
    /* harmony import */


    var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-detail/user-detail.component */
    "./src/app/user-detail/user-detail.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'home/:id',
      component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'login',
      component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'add-user',
      component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"]
    }, {
      path: 'user-detail/:id',
      component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.title = 'usuariosApp';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          localStorage.clear();
          this.auth.logout();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/ */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _navegation_navegation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./navegation/navegation.component */
    "./src/app/navegation/navegation.component.ts");
    /* harmony import */


    var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user-detail/user-detail.component */
    "./src/app/user-detail/user-detail.component.ts");
    /* harmony import */


    var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./add-user/add-user.component */
    "./src/app/add-user/add-user.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _app_services_s3_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../app/services/s3.service */
    "./src/app/services/s3.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _navegation_navegation_component__WEBPACK_IMPORTED_MODULE_15__["NavegationComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__["AddUserComponent"]],
      imports: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_fire___WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["firebaseConfig"]), angularfire2_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"]],
      providers: [_app_services_s3_service__WEBPACK_IMPORTED_MODULE_20__["S3Service"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorage"] //, AngularFirestore
      ],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/rest.service */
    "./src/app/services/rest.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(firebaseService, router, service, activateRoute, authService) {
        _classCallCheck(this, HomeComponent);

        this.firebaseService = firebaseService;
        this.router = router;
        this.service = service;
        this.activateRoute = activateRoute;
        this.authService = authService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.uid = this.activateRoute.snapshot.paramMap.get('id'); //console.log(this.uid);

                    this.obtenerPlaza(this.uid);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Metodo para obtener la plaza del usuario que se logueo

      }, {
        key: "obtenerPlaza",
        value: function obtenerPlaza(uid) {
          var _this2 = this;

          this.firebaseService.getUser(uid).subscribe(function (resp) {
            //console.log(resp['idplaza']);
            _this2.idPlaza = resp['idplaza'];
            localStorage.setItem('idplaza', _this2.idPlaza.toString());

            _this2.getUsersByIdPlaza(_this2.idPlaza);
          });
        } // Metodo que trae a los usuarios por la plaza del usuario que se logueo

      }, {
        key: "getUsersByIdPlaza",
        value: function getUsersByIdPlaza(idplaza) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.firebaseService.getUsersPlaza(idplaza).subscribe(function (data) {
                      _this3.users = data; //console.log(data);
                    });

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Metodo que trae a todos los usuarios de las plazas,  no se ocupa

      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this4 = this;

          this.firebaseService.getUsers().subscribe(function (data) {
            _this4.users = data.map(function (e) {
              _this4.usuarios.push(e.payload.doc.data()['name'], e.payload.doc.data()['email'], e.payload.doc.data()['appVersion']);

              return {
                id: e.payload.doc.id,
                name: e.payload.doc.data()['name'],
                plaza: e.payload.doc.data()['plaza'],
                idasp: e.payload.doc.data()['idaspuser'],
                email: e.payload.doc.data()['email'],
                isHide: e.payload.doc.data()['isHide'],
                appVersion: e.payload.doc.data()['appVersion'],
                isActive: e.payload.doc.data()['isActive'],
                rol: e.payload.doc.data()['rol']
              };
            });
          });
        } // Metodo que tra la informacion del usuario por su uid, no se ocupa

      }, {
        key: "getUser",
        value: function getUser(uid) {
          this.firebaseService.getUser(uid).subscribe(function (res) {
            //console.log("Esta es la informacion del usuario que se logueo");
            //console.log(res)
            var idPlaza = res['idplaza']; //console.log("el id de la plaza es " + res['idplaza']);
          });
        } // Metodo que va a la dirige a la pagina de detalle

      }, {
        key: "goDetail",
        value: function goDetail(id) {
          this.router.navigate(['/user-detail', id]);
        }
      }, {
        key: "importar",
        value: function importar() {
          //console.log('Entra a cargar los uduarios')
          for (var i = 0; i < this.users.length; i++) {
            var sqlString = "'".concat(this.users[i].name, "','").concat(this.users[i].idasp, "','").concat(this.users[i].plaza, "','").concat(this.users[i].email, "'"); //console.log(sqlString)

            this.service.importar(sqlString);
          }
        }
      }, {
        key: "hideButton",
        value: function hideButton(isHide, uid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    //console.log('detecta el cambio')
                    isHide = !isHide;
                    _context5.next = 3;
                    return this.firebaseService.updateFunctionUser(uid, isHide);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, authService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.authService.logout();
        }
      }, {
        key: "login",
        value: function login(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    //console.log(email, password)
                    this.authService.login(email, password).then(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var usuarioLogueado;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (res['user'].email === 'admin.tecate@erdm.mx' || // Tecate
                                res['user'].email === 'admin.mexicali.a@erdm.mx' || // Mexicali
                                res['user'].email === 'admin.ensenada@erdm.mx' || // Ensenada 
                                res['user'].email === 'admin.durango.a@erdm.mx' || // Durango agua
                                res['user'].email === 'admin.durango.p@erdm.mx' || // Durango predio
                                res['user'].email === 'admin.navolato.p@erdm.mx' || // Navolato predial
                                res['user'].email === 'admin.lapaz@estrategas.mx' || // La Paz
                                res['user'].email === 'admin.losreyeslapaza@estrategas.mx' || // Los Reyes La Paz agua
                                res['user'].email === 'admin.losreyeslapazp@estrategas.mx' || // Los Reyes La Paz predio
                                res['user'].email === 'admin.tijuana.agua@erdm.mx' || // Tijuana agua
                                res['user'].email === 'admin.tijuana@erdm.mx' || // Tijuana predio
                                res['user'].email === 'admin.torreon.a@erdm.mx' || //Torreon 
                                res['user'].email === 'admin.piedrasnegras.p@erdm.mx' || // Piedras Negras
                                res['user'].email === 'admin.navolato.a@erdm.mx' || // Navolato agua
                                res['user'].email === 'admin.tepic.a@erdm.mx' || // Tepic agua
                                res['user'].email === 'admin.mazatlan.a@erdm.mx' // Mazatlan
                                ) {
                                    // console.log(res['user'].email);
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                      title: 'Inicio de sesión correcta',
                                      text: 'Bienvenid@ ' + res['user'].email,
                                      icon: 'success',
                                      confirmButtonText: 'Aceptar'
                                    }); //console.log("Este es el usuario logueado", res);

                                    usuarioLogueado = res['user'].uid;
                                    localStorage.setItem('uid', usuarioLogueado);
                                    this.router.navigate(['/home', usuarioLogueado]);
                                  } else {
                                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                                    title: 'Error',
                                    text: 'El usuario ' + res['user'].email + ' no tiene acceso',
                                    icon: 'warning',
                                    confirmButtonText: 'Aceptar'
                                  });
                                  this.authService.logout();
                                } //this.router.navigateByUrl('/home',{ skipLocationChange: false });


                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    })["catch"](function (error) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Error',
                        text: 'Error de autenticación verificar credenciales',
                        icon: 'warning',
                        confirmButtonText: 'Aceptar'
                      });
                    });

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/navegation/navegation.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/navegation/navegation.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavegationNavegationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-navegacion:hover {\r\n    cursor: pointer;\r\n    background-color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2ZWdhdGlvbi9uYXZlZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvbmF2ZWdhdGlvbi9uYXZlZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW5hdmVnYWNpb246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navegation/navegation.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/navegation/navegation.component.ts ***!
    \****************************************************/

  /*! exports provided: NavegationComponent */

  /***/
  function srcAppNavegationNavegationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavegationComponent", function () {
      return NavegationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavegationComponent = /*#__PURE__*/function () {
      function NavegationComponent(auth, router) {
        _classCallCheck(this, NavegationComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(NavegationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usuarioLogueado = localStorage.getItem('uid'); //console.log("Esta es el uid que se guardara en el local storage", this.usuarioLogueado);
        }
      }, {
        key: "irInicio",
        value: function irInicio() {
          this.router.navigate(['/home', this.usuarioLogueado]);
        }
      }, {
        key: "exit",
        value: function exit() {
          localStorage.clear();
          this.auth.logout();
        }
      }]);

      return NavegationComponent;
    }();

    NavegationComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavegationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navegation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navegation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navegation/navegation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navegation.component.css */
      "./src/app/navegation/navegation.component.css"))["default"]]
    })], NavegationComponent);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js"); //import { AngularFireAuth } from '@angular/fire/auth';


    var AuthService = /*#__PURE__*/function () {
      function AuthService(AFauth, router, db) {
        _classCallCheck(this, AuthService);

        this.AFauth = AFauth;
        this.router = router;
        this.db = db;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          var _this6 = this;

          console.log(email, password);
          return new Promise(function (resolve, rejected) {
            _this6.AFauth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
              console.log(user);
              resolve(user);
            })["catch"](function (error) {
              return rejected(error);
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this7 = this;

          this.AFauth.auth.signOut().then(function () {
            _this7.router.navigate(['/login']);
          });
        }
      }, {
        key: "register",
        value: function register(email, password, name, idplaza, idrol, idaspuser, rol, plaza, idUserChecador) {
          var _this8 = this;

          return new Promise(function (resolve, reject) {
            _this8.AFauth.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
              var uid = res.user.uid;

              _this8.db.collection('usersImplementta').doc(uid).set({
                name: name,
                email: email,
                password: password,
                idplaza: idplaza,
                idrol: idrol,
                idaspuser: idaspuser,
                uid: uid,
                rol: rol,
                plaza: plaza,
                idUserChecador: idUserChecador,
                IMEI: "",
                lastSession: "",
                managedAccounts: 0,
                totalAccounts: 0,
                isActive: true,
                isHide: false,
                lastSync: '',
                urlImage: ""
              });

              resolve(res);
            })["catch"](function (err) {
              return reject(err);
            });
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__); //import { AngularFirestore } from '@angular/fire/firestore';


    var FirebaseService = /*#__PURE__*/function () {
      function FirebaseService(db) {
        _classCallCheck(this, FirebaseService);

        this.db = db;
        this.users = [];
      }

      _createClass(FirebaseService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.db.collection('usersImplementta').snapshotChanges();
        }
      }, {
        key: "getUsersPlaza",
        value: function getUsersPlaza(idPlaza) {
          return this.db.collection('usersImplementta', function (ref) {
            return ref.where('idplaza', '==', idPlaza);
          }).valueChanges();
        }
      }, {
        key: "getUser",
        value: function getUser(uid) {
          return this.db.collection('usersImplementta').doc(uid).valueChanges();
        }
      }, {
        key: "updateStatusUser",
        value: function updateStatusUser(uid, status) {
          return this.db.collection('usersImplementta').doc(uid).update({
            isActive: status
          });
        }
      }, {
        key: "updateUserRol",
        value: function updateUserRol(uid, Rol, idRol) {
          return this.db.collection('usersImplementta').doc(uid).update({
            rol: Rol,
            idrol: idRol
          });
        }
      }, {
        key: "deleteIddevice",
        value: function deleteIddevice(uid) {
          return this.db.collection('usersImplementta').doc(uid).update({
            IMEI: ''
          });
        }
      }, {
        key: "updateFunctionUser",
        value: function updateFunctionUser(uid, funcionOculta) {
          return this.db.collection('usersImplementta').doc(uid).update({
            isHide: funcionOculta
          });
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FirebaseService);
    /***/
  },

  /***/
  "./src/app/services/rest.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/rest.service.ts ***!
    \******************************************/

  /*! exports provided: RestService */

  /***/
  function srcAppServicesRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var RestService = /*#__PURE__*/function () {
      function RestService(http) {
        _classCallCheck(this, RestService);

        this.http = http;
        this.apiUrl2 = "https://implementta.net/andro/ImplementtaMovil.aspx?query=sp_userVerifyImplementtaMovil";
        this.apiUrl3 = "https://implementta.net/andro/ImplementtaMovil.aspx?query=sp_cambiarRolMovil";
        this.apiUrl4 = "https://implementta.net/andro/ImplementtaMovil.aspx?query=sp_importarUsuarios";
      }

      _createClass(RestService, [{
        key: "userVerify",
        value: function userVerify(username, idplaza) {
          var _this9 = this;

          return new Promise(function (resolve) {
            _this9.http.get(_this9.apiUrl2 + " " + '"' + username + '"' + "," + idplaza).subscribe(function (data) {
              console.log(data);
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "changeRol",
        value: function changeRol(idPlaza, idAspUser, idRol) {
          var _this10 = this;

          return new Promise(function (resolve) {
            _this10.http.post(_this10.apiUrl3 + ' ' + "".concat(idPlaza, ",'").concat(idAspUser, "',").concat(idRol), null).subscribe(function (data) {
              console.log(data);
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }, {
        key: "importar",
        value: function importar(sqlString) {
          var _this11 = this;

          return new Promise(function (resolve) {
            _this11.http.post(_this11.apiUrl4 + ' ' + sqlString, null).subscribe(function (data) {
              console.log(data);
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }]);

      return RestService;
    }();

    RestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RestService);
    /***/
  },

  /***/
  "./src/app/services/s3.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/s3.service.ts ***!
    \****************************************/

  /*! exports provided: S3Service */

  /***/
  function srcAppServicesS3ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S3Service", function () {
      return S3Service;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var aws_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! aws-sdk */
    "./node_modules/aws-sdk/lib/browser.js");
    /* harmony import */


    var aws_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_2__);

    var S3Service = /*#__PURE__*/function () {
      function S3Service() {
        _classCallCheck(this, S3Service);

        this.awsCredentials = {
          accessKeyId: 'AKIAQAVQA6VNSP724ERU',
          secretAccessKey: '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'
        };
      }

      _createClass(S3Service, [{
        key: "getURLPresignaded",
        value: function getURLPresignaded(imageName) {
          var s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"]();
          s3.config.update(this.awsCredentials);
          s3.config.update({
            region: 'us-east-1'
          }); //const bucketName ='fotos-implementta-movil'

          var bucketName = 'photos-implementta';
          var key = imageName;
          var signedUrlExpireSeconds = 30000000 * 10;
          var url = s3.getSignedUrl('getObject', {
            Bucket: bucketName,
            Key: key,
            Expires: signedUrlExpireSeconds
          });
          return url;
        }
      }]);

      return S3Service;
    }();

    S3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], S3Service);
    /***/
  },

  /***/
  "./src/app/user-detail/user-detail.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/user-detail/user-detail.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserDetailUserDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".imagen-usuario {\r\n    text-align: center;\r\n    margin: 0, auto;\r\n    width: 100%;\r\n}\r\n\r\n.imagen-usuario img {\r\n    width: 30%;\r\n    margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VuLXVzdWFyaW8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwLCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZW4tdXN1YXJpbyBpbWcge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user-detail/user-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/user-detail/user-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: UserDetailComponent */

  /***/
  function srcAppUserDetailUserDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
      return UserDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/rest.service */
    "./src/app/services/rest.service.ts");

    var UserDetailComponent = /*#__PURE__*/function () {
      function UserDetailComponent(activeRoute, firebaseService, modalService, service) {
        _classCallCheck(this, UserDetailComponent);

        this.activeRoute = activeRoute;
        this.firebaseService = firebaseService;
        this.modalService = modalService;
        this.service = service;
        this.rol = '';
        this.nameRol = 'Default';
        this.isCollapsed = true;
      }

      _createClass(UserDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.id = this.activeRoute.snapshot.paramMap.get('id'); //console.log(this.id)

                    _context8.next = 3;
                    return this.getUserInfo(this.id);

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo(uid) {
          var _this12 = this;

          this.firebaseService.getUser(uid).subscribe(function (data) {
            _this12.data = data; //console.log(data)
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this13 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this13.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this13.closeResult = "Dismissed ".concat(_this13.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(uid) {
          this.modalService.dismissAll(); //console.log(this.isActive)
          //console.log(uid)

          this.firebaseService.updateStatusUser(uid, this.isActive);
        }
      }, {
        key: "changeRole",
        value: function changeRole(uid, idaspuser, idplaza) {
          var _this14 = this;

          if (this.rol == '2') {
            this.nameRol = 'Abogado';
          } else if (this.rol == '5') {
            this.nameRol = 'Gestor';
          } else if (this.rol == '7') {
            this.nameRol = 'Reductor';
          } //console.log(this.nameRol)
          //console.log(uid, this.rol.toString(), idaspuser, idplaza)


          this.service.changeRol(idplaza, idaspuser, this.rol).then(function () {
            _this14.firebaseService.updateUserRol(uid, _this14.nameRol, _this14.rol);
          });
          this.modalService.dismissAll();
        }
      }, {
        key: "deleteIdDevice",
        value: function deleteIdDevice(uid) {
          this.firebaseService.deleteIddevice(uid);
          this.modalService.dismissAll();
        }
      }, {
        key: "activeFunction",
        value: function activeFunction(uid) {
          this.modalService.dismissAll(); //console.log(this.funcionOculta)
          //console.log(uid)

          this.firebaseService.updateFunctionUser(uid, this.funcionOculta);
        }
      }]);

      return UserDetailComponent;
    }();

    UserDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _services_rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
      }];
    };

    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-detail.component.css */
      "./src/app/user-detail/user-detail.component.css"))["default"]]
    })], UserDetailComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, firebaseConfig */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    var firebaseConfig = {
      apiKey: "AIzaSyCyI1CDHXmHm_5wF47fitzcRNcpGGY23Ok",
      authDomain: "implementtaapp.firebaseapp.com",
      databaseURL: "https://implementtaapp.firebaseio.com",
      projectId: "implementtaapp",
      storageBucket: "",
      messagingSenderId: "235670158456",
      appId: "1:235670158456:web:cd2e01e8711a9117"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Juan Manuel\Desktop\usuarios\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map