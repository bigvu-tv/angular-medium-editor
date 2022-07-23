import { EventEmitter, Directive, ElementRef, Input, Output, NgModule } from '@angular/core';
import * as MediumEditor from 'medium-editor';

/**
 * Medium Editor wrapper directive.
 *
 * Examples
 * <medium-editor
      [(editorModel)]="textVar"
 *    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
 *    [editorPlaceholder]="placeholderVar"></medium-editor>
 */
class MediumEditorDirective {
    constructor(el) {
        this.el = el;
        this.update = new EventEmitter();
    }
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
        this.editor.subscribe('editableInput', (event, editable) => {
            this.updateModel();
        });
    }
    refreshView() {
        if (this.editor) {
            this.editor.setContent(this.model);
        }
    }
    ngOnChanges(changes) {
        if (this.isPropertyUpdated(changes, this.lastViewModel)) {
            this.lastViewModel = this.model;
            this.refreshView();
        }
    }
    /**
     * Emit updated model
     */
    updateModel() {
        let value = this.editor.getContent();
        value = value.replace(/&nbsp;/g, '')
            .replace(/<p><br><\/p>/g, '')
            .trim();
        this.lastViewModel = value;
        this.update.emit(value);
    }
    /**
     * Remove MediumEditor on destruction of directive
     */
    ngOnDestroy() {
        this.editor.destroy();
    }
    isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) {
            return false;
        }
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
            },] }
];
MediumEditorDirective.ctorParameters = () => [
    { type: ElementRef }
];
MediumEditorDirective.propDecorators = {
    model: [{ type: Input, args: ['editorModel',] }],
    options: [{ type: Input, args: ['editorOptions',] }],
    placeholder: [{ type: Input, args: ['editorPlaceholder',] }],
    update: [{ type: Output, args: ['editorModelChange',] }]
};

// import { CommonModule } from '@angular/common';
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
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { MediumEditorDirective, MediumEditorModule };
//# sourceMappingURL=angular-medium-editor.js.map
