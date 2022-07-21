/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import * as MediumEditor from 'medium-editor';
import * as i0 from "@angular/core";
/**
 * Medium Editor wrapper directive.
 *
 * Examples
 * <medium-editor
 * [(editorModel)]="textVar"
 *    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
 *    [editorPlaceholder]="placeholderVar"></medium-editor>
 */
var MediumEditorDirective = /** @class */ (function () {
    function MediumEditorDirective(el) {
        this.el = el;
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MediumEditorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        this.editor = new MediumEditor('.me-editable', this.options);
        this.editor.subscribe('editableInput', (/**
         * @param {?} event
         * @param {?} editable
         * @return {?}
         */
        function (event, editable) {
            _this.updateModel();
        }));
    };
    /**
     * @return {?}
     */
    MediumEditorDirective.prototype.refreshView = /**
     * @return {?}
     */
    function () {
        if (this.editor) {
            this.editor.setContent(this.model);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MediumEditorDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isPropertyUpdated(changes, this.lastViewModel)) {
            this.lastViewModel = this.model;
            this.refreshView();
        }
    };
    /**
     * Emit updated model
     */
    /**
     * Emit updated model
     * @return {?}
     */
    MediumEditorDirective.prototype.updateModel = /**
     * Emit updated model
     * @return {?}
     */
    function () {
        /** @type {?} */
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
    /**
     * Remove MediumEditor on destruction of directive
     * @return {?}
     */
    MediumEditorDirective.prototype.ngOnDestroy = /**
     * Remove MediumEditor on destruction of directive
     * @return {?}
     */
    function () {
        this.editor.destroy();
    };
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    MediumEditorDirective.prototype.isPropertyUpdated = /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    function (changes, viewModel) {
        if (!changes.hasOwnProperty('model')) {
            return false;
        }
        /** @type {?} */
        var change = changes.model;
        if (change.isFirstChange()) {
            return true;
        }
        return !Object.is(viewModel, change.currentValue);
    };
    MediumEditorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'medium-editor'
                },] },
    ];
    /** @nocollapse */
    MediumEditorDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MediumEditorDirective.propDecorators = {
        model: [{ type: Input, args: ['editorModel',] }],
        options: [{ type: Input, args: ['editorOptions',] }],
        placeholder: [{ type: Input, args: ['editorPlaceholder',] }],
        update: [{ type: Output, args: ['editorModelChange',] }]
    };
    /** @nocollapse */ MediumEditorDirective.ɵfac = function MediumEditorDirective_Factory(t) { return new (t || MediumEditorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ MediumEditorDirective.ɵdir = i0.ɵɵdefineDirective({ type: MediumEditorDirective, selectors: [["medium-editor"]], inputs: { model: ["editorModel", "model"], options: ["editorOptions", "options"], placeholder: ["editorPlaceholder", "placeholder"] }, outputs: { update: "editorModelChange" }, features: [i0.ɵɵNgOnChangesFeature] });
    return MediumEditorDirective;
}());
export { MediumEditorDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MediumEditorDirective, [{
        type: Directive,
        args: [{
                selector: 'medium-editor'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { model: [{
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.lastViewModel;
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.editor;
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.active;
    /** @type {?} */
    MediumEditorDirective.prototype.model;
    /** @type {?} */
    MediumEditorDirective.prototype.options;
    /** @type {?} */
    MediumEditorDirective.prototype.placeholder;
    /** @type {?} */
    MediumEditorDirective.prototype.update;
    /**
     * @type {?}
     * @private
     */
    MediumEditorDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1tZWRpdW0tZWRpdG9yLyIsInNvdXJjZXMiOlsibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxZQUFZLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQVc5QztJQWdCRSwrQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFGTCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuQixDQUFDOzs7O0lBRXZDLHdDQUFROzs7SUFBUjtRQUFBLGlCQWdCQztRQWZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO2dCQUN6QixJQUFJLEVBQUcsSUFBSSxDQUFDLFdBQVc7YUFDeEIsQ0FBQztTQUNIO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlOzs7OztRQUFFLFVBQUMsS0FBSyxFQUFFLFFBQVE7WUFDckQsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQU87UUFDakIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJDQUFXOzs7O0lBQVg7O1lBQ00sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1FBQ3BDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7YUFDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7YUFDNUIsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJDQUFXOzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVELGlEQUFpQjs7Ozs7SUFBakIsVUFBa0IsT0FBTyxFQUFFLFNBQVM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFOztZQUVqRCxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUs7UUFFNUIsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBdEJHLFVBQVU7Ozt3QkE4QlosS0FBSyxTQUFDLGFBQWE7MEJBQ2xCLEtBQUssU0FBQyxlQUFlOzhCQUNyQixLQUFLLFNBQUMsbUJBQW1CO3lCQUV6QixNQUFNLFNBQUMsbUJBQW1COztpSEFYaEIscUJBQXFCO2lGQUFyQixxQkFBcUI7Z0NBekJsQztDQW9HQyxBQTlFRCxJQThFQztTQTNFWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUhqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7NkRBUXNCLEtBQUs7a0JBQTFCLEtBQUs7bUJBQUMsYUFBYTtZQUNLLE9BQU87a0JBQTlCLEtBQUs7bUJBQUMsZUFBZTtZQUNNLFdBQVc7a0JBQXRDLEtBQUs7bUJBQUMsbUJBQW1CO1lBRUcsTUFBTTtrQkFBbEMsTUFBTTttQkFBQyxtQkFBbUI7Ozs7Ozs7SUFUM0IsOENBQThCOzs7OztJQUM5Qix3Q0FBNkI7Ozs7O0lBQzdCLHVDQUFvQjs7Ozs7SUFDcEIsdUNBQXdCOztJQUV6QixzQ0FBaUM7O0lBQ2hDLHdDQUFxQzs7SUFDckMsNENBQWdEOztJQUVoRCx1Q0FBeUQ7Ozs7O0lBRTdDLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBNZWRpdW1FZGl0b3IgZnJvbSAnbWVkaXVtLWVkaXRvcic7XG5cbi8qKlxuICogTWVkaXVtIEVkaXRvciB3cmFwcGVyIGRpcmVjdGl2ZS5cbiAqXG4gKiBFeGFtcGxlc1xuICogPG1lZGl1bS1lZGl0b3JcbiAgICAgIFsoZWRpdG9yTW9kZWwpXT1cInRleHRWYXJcIlxuICogICAgW2VkaXRvck9wdGlvbnNdPVwieyd0b29sYmFyJzogeydidXR0b25zJzogWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnaDEnLCAnaDInLCAnaDMnXX19XCJcbiAqICAgIFtlZGl0b3JQbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclZhclwiPjwvbWVkaXVtLWVkaXRvcj5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWVkaXVtLWVkaXRvcidcbn0pXG5leHBvcnQgY2xhc3MgTWVkaXVtRWRpdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBsYXN0Vmlld01vZGVsOiBzdHJpbmc7XG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgZWRpdG9yOiBhbnk7XG4gIHByaXZhdGUgYWN0aXZlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgnZWRpdG9yTW9kZWwnKSBtb2RlbDogYW55O1xuICBASW5wdXQoJ2VkaXRvck9wdGlvbnMnKSBvcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgnZWRpdG9yUGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBPdXRwdXQoJ2VkaXRvck1vZGVsQ2hhbmdlJykgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJtZS1lZGl0YWJsZVwiPicgKyB0aGlzLm1vZGVsICsgJzwvZGl2Pic7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlciA9IHtcbiAgICAgICAgdGV4dCA6IHRoaXMucGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2xvYmFsIE1lZGl1bUVkaXRvclxuICAgIHRoaXMuZWRpdG9yID0gbmV3IE1lZGl1bUVkaXRvcignLm1lLWVkaXRhYmxlJywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmVkaXRvci5zdWJzY3JpYmUoJ2VkaXRhYmxlSW5wdXQnLCAoZXZlbnQsIGVkaXRhYmxlKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKCk7XG4gICAgfSk7XG4gIH1cblxuICByZWZyZXNoVmlldygpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldENvbnRlbnQodGhpcy5tb2RlbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMubGFzdFZpZXdNb2RlbCkpIHtcbiAgICAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgdXBkYXRlZCBtb2RlbFxuICAgKi9cbiAgdXBkYXRlTW9kZWwoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJm5ic3A7L2csICcnKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPHA+PGJyPjxcXC9wPi9nLCAnJylcbiAgICAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICB0aGlzLmxhc3RWaWV3TW9kZWwgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgTWVkaXVtRWRpdG9yIG9uIGRlc3RydWN0aW9uIG9mIGRpcmVjdGl2ZVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICB9XG5cbiAgaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdmlld01vZGVsKSB7XG4gICAgaWYgKCFjaGFuZ2VzLmhhc093blByb3BlcnR5KCdtb2RlbCcpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgY29uc3QgY2hhbmdlID0gY2hhbmdlcy5tb2RlbDtcblxuICAgIGlmIChjaGFuZ2UuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICFPYmplY3QuaXModmlld01vZGVsLCBjaGFuZ2UuY3VycmVudFZhbHVlKTtcbiAgfVxufVxuIl19