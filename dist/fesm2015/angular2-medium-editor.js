import { Directive, ElementRef, EventEmitter, Input, Output, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, ɵɵdirectiveInject, ɵɵdefineDirective, ɵɵNgOnChangesFeature } from '@angular/core';
import * as MediumEditor from 'medium-editor';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Medium Editor wrapper directive.
 *
 * Examples
 * <medium-editor
 * [(editorModel)]="textVar"
 *    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
 *    [editorPlaceholder]="placeholderVar"></medium-editor>
 */
class MediumEditorDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.element = this.el.nativeElement;
        this.element.innerHTML = '<div class="me-editable">' + this.model + '</div>';
        this.active = true;
        if (this.placeholder && this.placeholder.length) {
            this.options.placeholder = {
                text: this.placeholder
            };
        }
        // Global MediumEditor
        this.editor = new MediumEditor('.me-editable', this.options);
        this.editor.subscribe('editableInput', (/**
         * @param {?} event
         * @param {?} editable
         * @return {?}
         */
        (event, editable) => {
            this.updateModel();
        }));
    }
    /**
     * @return {?}
     */
    refreshView() {
        if (this.editor) {
            this.editor.setContent(this.model);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isPropertyUpdated(changes, this.lastViewModel)) {
            this.lastViewModel = this.model;
            this.refreshView();
        }
    }
    /**
     * Emit updated model
     * @return {?}
     */
    updateModel() {
        /** @type {?} */
        let value = this.editor.getContent();
        value = value.replace(/&nbsp;/g, '')
            .replace(/<p><br><\/p>/g, '')
            .trim();
        this.lastViewModel = value;
        this.update.emit(value);
    }
    /**
     * Remove MediumEditor on destruction of directive
     * @return {?}
     */
    ngOnDestroy() {
        this.editor.destroy();
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) {
            return false;
        }
        /** @type {?} */
        const change = changes.model;
        if (change.isFirstChange()) {
            return true;
        }
        return !Object.is(viewModel, change.currentValue);
    }
}
MediumEditorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'medium-editor'
            },] },
];
/** @nocollapse */
MediumEditorDirective.ctorParameters = () => [
    { type: ElementRef }
];
MediumEditorDirective.propDecorators = {
    model: [{ type: Input, args: ['editorModel',] }],
    options: [{ type: Input, args: ['editorOptions',] }],
    placeholder: [{ type: Input, args: ['editorPlaceholder',] }],
    update: [{ type: Output, args: ['editorModelChange',] }]
};
/** @nocollapse */ MediumEditorDirective.ɵfac = function MediumEditorDirective_Factory(t) { return new (t || MediumEditorDirective)(ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ MediumEditorDirective.ɵdir = ɵɵdefineDirective({ type: MediumEditorDirective, selectors: [["medium-editor"]], inputs: { model: ["editorModel", "model"], options: ["editorOptions", "options"], placeholder: ["editorPlaceholder", "placeholder"] }, outputs: { update: "editorModelChange" }, features: [ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MediumEditorDirective, [{
        type: Directive,
        args: [{
                selector: 'medium-editor'
            }]
    }], function () { return [{ type: ElementRef }]; }, { model: [{
            type: Input,
            args: ['editorModel']
        }], options: [{
            type: Input,
            args: ['editorOptions']
        }], placeholder: [{
            type: Input,
            args: ['editorPlaceholder']
        }], update: [{
            type: Output,
            args: ['editorModelChange']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediumEditorModule {
}
MediumEditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: [
                    MediumEditorDirective
                ],
                declarations: [
                    MediumEditorDirective
                ],
            },] },
];
/** @nocollapse */ MediumEditorModule.ɵmod = ɵɵdefineNgModule({ type: MediumEditorModule });
/** @nocollapse */ MediumEditorModule.ɵinj = ɵɵdefineInjector({ factory: function MediumEditorModule_Factory(t) { return new (t || MediumEditorModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MediumEditorModule, { declarations: [MediumEditorDirective], exports: [MediumEditorDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MediumEditorModule, [{
        type: NgModule,
        args: [{
                imports: [],
                exports: [
                    MediumEditorDirective
                ],
                declarations: [
                    MediumEditorDirective
                ],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MediumEditorModule, MediumEditorDirective };

//# sourceMappingURL=angular2-medium-editor.js.map