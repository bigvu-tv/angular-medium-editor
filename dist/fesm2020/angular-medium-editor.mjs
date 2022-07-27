import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, NgModule } from '@angular/core';
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
        this.lastViewModel = '';
        this.element = new HTMLElement();
        this.active = false;
        this.placeholder = '';
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
MediumEditorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: MediumEditorDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
MediumEditorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.1.0", type: MediumEditorDirective, selector: "medium-editor", inputs: { model: ["editorModel", "model"], options: ["editorOptions", "options"], placeholder: ["editorPlaceholder", "placeholder"] }, outputs: { update: "editorModelChange" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: MediumEditorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'medium-editor'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { model: [{
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
            }] } });

class MediumEditorModule {
}
MediumEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: MediumEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MediumEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.0", ngImport: i0, type: MediumEditorModule, declarations: [MediumEditorDirective], exports: [MediumEditorDirective] });
MediumEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: MediumEditorModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: MediumEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [
                        MediumEditorDirective
                    ],
                    exports: [
                        MediumEditorDirective
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MediumEditorDirective, MediumEditorModule };
//# sourceMappingURL=angular-medium-editor.mjs.map
