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
export class MediumEditorDirective {
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
/** @nocollapse */ MediumEditorDirective.ɵfac = function MediumEditorDirective_Factory(t) { return new (t || MediumEditorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ MediumEditorDirective.ɵdir = i0.ɵɵdefineDirective({ type: MediumEditorDirective, selectors: [["medium-editor"]], inputs: { model: ["editorModel", "model"], options: ["editorOptions", "options"], placeholder: ["editorPlaceholder", "placeholder"] }, outputs: { update: "editorModelChange" }, features: [i0.ɵɵNgOnChangesFeature] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1tZWRpdW0tZWRpdG9yLyIsInNvdXJjZXMiOlsibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxZQUFZLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQWM5QyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBYWhDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRkwsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbkIsQ0FBQzs7OztJQUV2QyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRywyQkFBMkIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUc7Z0JBQ3pCLElBQUksRUFBRyxJQUFJLENBQUMsV0FBVzthQUN4QixDQUFDO1NBQ0g7UUFFRCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWU7Ozs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7O0lBS0QsV0FBVzs7WUFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7UUFDcEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQzthQUN0QixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQzthQUM1QixJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUtELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLE9BQU8sRUFBRSxTQUFTO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTs7Y0FFakQsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLO1FBRTVCLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQTdFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUF0QkcsVUFBVTs7O29CQThCWixLQUFLLFNBQUMsYUFBYTtzQkFDbEIsS0FBSyxTQUFDLGVBQWU7MEJBQ3JCLEtBQUssU0FBQyxtQkFBbUI7cUJBRXpCLE1BQU0sU0FBQyxtQkFBbUI7OzZHQVhoQixxQkFBcUI7NkVBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs2REFRc0IsS0FBSztrQkFBMUIsS0FBSzttQkFBQyxhQUFhO1lBQ0ssT0FBTztrQkFBOUIsS0FBSzttQkFBQyxlQUFlO1lBQ00sV0FBVztrQkFBdEMsS0FBSzttQkFBQyxtQkFBbUI7WUFFRyxNQUFNO2tCQUFsQyxNQUFNO21CQUFDLG1CQUFtQjs7Ozs7OztJQVQzQiw4Q0FBOEI7Ozs7O0lBQzlCLHdDQUE2Qjs7Ozs7SUFDN0IsdUNBQW9COzs7OztJQUNwQix1Q0FBd0I7O0lBRXpCLHNDQUFpQzs7SUFDaEMsd0NBQXFDOztJQUNyQyw0Q0FBZ0Q7O0lBRWhELHVDQUF5RDs7Ozs7SUFFN0MsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIE1lZGl1bUVkaXRvciBmcm9tICdtZWRpdW0tZWRpdG9yJztcblxuLyoqXG4gKiBNZWRpdW0gRWRpdG9yIHdyYXBwZXIgZGlyZWN0aXZlLlxuICpcbiAqIEV4YW1wbGVzXG4gKiA8bWVkaXVtLWVkaXRvclxuICAgICAgWyhlZGl0b3JNb2RlbCldPVwidGV4dFZhclwiXG4gKiAgICBbZWRpdG9yT3B0aW9uc109XCJ7J3Rvb2xiYXInOiB7J2J1dHRvbnMnOiBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdoMScsICdoMicsICdoMyddfX1cIlxuICogICAgW2VkaXRvclBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyVmFyXCI+PC9tZWRpdW0tZWRpdG9yPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtZWRpdW0tZWRpdG9yJ1xufSlcbmV4cG9ydCBjbGFzcyBNZWRpdW1FZGl0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIGxhc3RWaWV3TW9kZWw6IHN0cmluZztcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcbiAgcHJpdmF0ZSBhY3RpdmU6IGJvb2xlYW47XG5cblx0QElucHV0KCdlZGl0b3JNb2RlbCcpIG1vZGVsOiBhbnk7XG4gIEBJbnB1dCgnZWRpdG9yT3B0aW9ucycpIG9wdGlvbnM6IGFueTtcbiAgQElucHV0KCdlZGl0b3JQbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgnZWRpdG9yTW9kZWxDaGFuZ2UnKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm1lLWVkaXRhYmxlXCI+JyArIHRoaXMubW9kZWwgKyAnPC9kaXY+JztcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLnBsYWNlaG9sZGVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyID0ge1xuICAgICAgICB0ZXh0IDogdGhpcy5wbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHbG9iYWwgTWVkaXVtRWRpdG9yXG4gICAgdGhpcy5lZGl0b3IgPSBuZXcgTWVkaXVtRWRpdG9yKCcubWUtZWRpdGFibGUnLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZWRpdG9yLnN1YnNjcmliZSgnZWRpdGFibGVJbnB1dCcsIChldmVudCwgZWRpdGFibGUpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hWaWV3KCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy5sYXN0Vmlld01vZGVsKSkge1xuICAgICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdCB1cGRhdGVkIG1vZGVsXG4gICAqL1xuICB1cGRhdGVNb2RlbCgpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8mbmJzcDsvZywgJycpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88cD48YnI+PFxcL3A+L2csICcnKVxuICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBNZWRpdW1FZGl0b3Igb24gZGVzdHJ1Y3Rpb24gb2YgZGlyZWN0aXZlXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gIH1cblxuICBpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB2aWV3TW9kZWwpIHtcbiAgICBpZiAoIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ21vZGVsJykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzLm1vZGVsO1xuXG4gICAgaWYgKGNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIU9iamVjdC5pcyh2aWV3TW9kZWwsIGNoYW5nZS5jdXJyZW50VmFsdWUpO1xuICB9XG59XG4iXX0=