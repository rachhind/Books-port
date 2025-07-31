(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-add-book-add-book-module~tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input type=\"text\" placeholder=\"test plain input\">\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"add_book()\">\n\n    <ion-item>\n      <ion-label position=\"stacked\">Title</ion-label>\n      <ion-input formControlName=\"title\" type=\"text\" placeholder=\"Book title\"></ion-input>\n    </ion-item>\n  <ion-note color=\"danger\" *ngIf=\"title && title.invalid && title.touched\">\n  Title is required.\n</ion-note>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Author</ion-label>\n      <ion-input formControlName=\"author\" type=\"text\" placeholder=\"Author name\"></ion-input>\n    </ion-item>\n    <ion-note color=\"danger\" *ngIf=\"author.invalid && author.touched\">\n      Author is required.\n    </ion-note>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Publish Date</ion-label>\n      <ion-input formControlName=\"publish_date\" type=\"date\"></ion-input>\n    </ion-item>\n    <ion-note color=\"danger\" *ngIf=\"publish_date.invalid && publish_date.touched\">\n      Publish date is required.\n    </ion-note>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Image URL</ion-label>\n      <ion-input formControlName=\"image\" type=\"text\" placeholder=\"http://...\"></ion-input>\n    </ion-item>\n    <ion-note color=\"danger\" *ngIf=\"image.invalid && image.touched\">\n      Image URL is required.\n    </ion-note>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Category</ion-label>\n      <ion-input formControlName=\"category\" type=\"text\" placeholder=\"e.g., Fiction, Biography\"></ion-input>\n    </ion-item>\n    <ion-note color=\"danger\" *ngIf=\"category.invalid && category.touched\">\n      Category is required.\n    </ion-note>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Contact Name</ion-label>\n      <ion-input formControlName=\"contact\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-note color=\"danger\" *ngIf=\"contact.invalid && contact.touched\">\n      Contact name is required.\n    </ion-note>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Phone</ion-label>\n      <ion-input formControlName=\"phone\" type=\"tel\" placeholder=\"123-456-7890\"></ion-input>\n    </ion-item>\n    <ion-note color=\"danger\" *ngIf=\"phone.invalid && phone.touched\">\n      Phone is required.\n    </ion-note>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n    </ion-item>\n    <ion-note color=\"danger\" *ngIf=\"email.invalid && email.touched\">\n      Valid email is required.\n    </ion-note>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Abstract</ion-label>\n      <ion-textarea formControlName=\"abstract\" rows=\"4\" placeholder=\"Short summary of the book\"></ion-textarea>\n    </ion-item>\n    <ion-note color=\"danger\" *ngIf=\"abstract.invalid && abstract.touched\">\n      Abstract is required.\n    </ion-note>\n\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"form.invalid\">\n      Submit Book\n    </ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/book.service.ts":
/*!*********************************!*\
  !*** ./src/app/book.service.ts ***!
  \*********************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/books'; //API base endpoint
    }
    // Implement getBooks() using HTTP GET
    getBooks() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return this.http.get(`${this.baseUrl}/getBooks`, { headers });
    }
    // Implement addBook() using HTTP POST
    addBook(bookData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return this.http.post(`${this.baseUrl}/addBook`, bookData, { headers });
    }
};
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BookService);



/***/ }),

/***/ "./src/app/components/add-book/add-book.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/add-book/add-book.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  height: 100%;\n}\n\nion-header {\n  --background: #3880ff;\n  --color: #fff;\n  text-align: center;\n}\n\nion-content {\n  --padding-top: 1rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\nion-label {\n  font-weight: 600;\n  color: #333;\n}\n\nion-input,\nion-textarea {\n  --padding-start: 8px;\n}\n\nion-note {\n  margin-left: 8px;\n  font-size: 0.8rem;\n}\n\nion-button {\n  margin-top: 2rem;\n  font-weight: 600;\n}\n\n@media screen and (min-width: 768px) {\n  form {\n    width: 70%;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaC9EZXNrdG9wL2Jvb2tzLXBvcnRhbC9tb2JpbGUvc3JjL2FwcC9jb21wb25lbnRzL2FkZC1ib29rL2FkZC1ib29rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkZC1ib29rL2FkZC1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7O0VBRUUsb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtYm9vay9hZGQtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDFyZW07XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbmlvbi1pbnB1dCxcbmlvbi10ZXh0YXJlYSB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgZm9ybSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAtLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuaW9uLWlucHV0LFxuaW9uLXRleHRhcmVhIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBmb3JtIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/add-book/add-book.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-book/add-book.component.ts ***!
  \***********************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/book.service */ "./src/app/book.service.ts");





let AddBookComponent = class AddBookComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            publish_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            abstract: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    get title() {
        return this.form.get('title');
    }
    get author() {
        return this.form.get('author');
    }
    get publish_date() {
        return this.form.get('publish_date');
    }
    get image() {
        return this.form.get('image');
    }
    get category() {
        return this.form.get('category');
    }
    get contact() {
        return this.form.get('contact');
    }
    get phone() {
        return this.form.get('phone');
    }
    get email() {
        return this.form.get('email');
    }
    get abstract() {
        return this.form.get('abstract');
    }
    add_book() {
        let x = this.form.value;
        this.service.addBook(x).subscribe((msg) => { console.log(msg); }, (err) => {
            console.log(err);
        });
        this.form.reset();
        this.router.navigate(['home']);
    }
    ngOnInit() { }
};
AddBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] }
];
AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-book/add-book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-book.component.scss */ "./src/app/components/add-book/add-book.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]])
], AddBookComponent);



/***/ }),

/***/ "./src/app/components/add-book/add-book.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/add-book/add-book.module.ts ***!
  \********************************************************/
/*! exports provided: AddBookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookModule", function() { return AddBookModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _add_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-book.component */ "./src/app/components/add-book/add-book.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let AddBookModule = class AddBookModule {
};
AddBookModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_book_component__WEBPACK_IMPORTED_MODULE_4__["AddBookComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ],
        exports: [_add_book_component__WEBPACK_IMPORTED_MODULE_4__["AddBookComponent"]]
    })
], AddBookModule);



/***/ })

}]);