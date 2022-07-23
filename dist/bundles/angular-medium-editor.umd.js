(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('medium-editor')) :
    typeof define === 'function' && define.amd ? define('angular-medium-editor', ['exports', '@angular/core', 'medium-editor'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["angular-medium-editor"] = {}, global.ng.core, global.MediumEditor));
})(this, (function (exports, core, MediumEditor) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var MediumEditor__namespace = /*#__PURE__*/_interopNamespace(MediumEditor);

    /**
     * Medium Editor wrapper directive.
     *
     * Examples
     * <medium-editor
          [(editorModel)]="textVar"
     *    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
     *    [editorPlaceholder]="placeholderVar"></medium-editor>
     */
    var MediumEditorDirective = /** @class */ (function () {
        function MediumEditorDirective(el) {
            this.el = el;
            this.update = new core.EventEmitter();
        }
        MediumEditorDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.element = this.el.nativeElement;
            this.element.innerHTML = '<div class="me-editable">' + this.model + '</div>';
            this.active = true;
            if (this.placeholder && this.placeholder.length) {
                this.options.placeholder = {
                    text: this.placeholder
                };
            }
            // Global MediumEditor
            this.editor = new MediumEditor__namespace('.me-editable', this.options);
            this.editor.subscribe('editableInput', function (event, editable) {
                _this.updateModel();
            });
        };
        MediumEditorDirective.prototype.refreshView = function () {
            if (this.editor) {
                this.editor.setContent(this.model);
            }
        };
        MediumEditorDirective.prototype.ngOnChanges = function (changes) {
            if (this.isPropertyUpdated(changes, this.lastViewModel)) {
                this.lastViewModel = this.model;
                this.refreshView();
            }
        };
        /**
         * Emit updated model
         */
        MediumEditorDirective.prototype.updateModel = function () {
            var value = this.editor.getContent();
            value = value.replace(/&nbsp;/g, '')
                .replace(/<p><br><\/p>/g, '')
                .trim();
            this.lastViewModel = value;
            this.update.emit(value);
        };
        /**
         * Remove MediumEditor on destruction of directive
         */
        MediumEditorDirective.prototype.ngOnDestroy = function () {
            this.editor.destroy();
        };
        MediumEditorDirective.prototype.isPropertyUpdated = function (changes, viewModel) {
            if (!changes.hasOwnProperty('model')) {
                return false;
            }
            var change = changes.model;
            if (change.isFirstChange()) {
                return true;
            }
            return !Object.is(viewModel, change.currentValue);
        };
        return MediumEditorDirective;
    }());
    MediumEditorDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'medium-editor'
                },] }
    ];
    MediumEditorDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    MediumEditorDirective.propDecorators = {
        model: [{ type: core.Input, args: ['editorModel',] }],
        options: [{ type: core.Input, args: ['editorOptions',] }],
        placeholder: [{ type: core.Input, args: ['editorPlaceholder',] }],
        update: [{ type: core.Output, args: ['editorModelChange',] }]
    };

    // import { CommonModule } from '@angular/common';
    var MediumEditorModule = /** @class */ (function () {
        function MediumEditorModule() {
        }
        return MediumEditorModule;
    }());
    MediumEditorModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [],
                    exports: [
                        MediumEditorDirective
                    ],
                    declarations: [
                        MediumEditorDirective
                    ],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MediumEditorDirective = MediumEditorDirective;
    exports.MediumEditorModule = MediumEditorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=angular-medium-editor.umd.js.map
