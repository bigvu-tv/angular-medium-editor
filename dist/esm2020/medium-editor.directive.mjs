import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as MediumEditor from 'medium-editor';
import * as i0 from "@angular/core";
/**
 * Medium Editor wrapper directive.
 *
 * Examples
 * <medium-editor
      [(editorModel)]="textVar"
 *    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
 *    [editorPlaceholder]="placeholderVar"></medium-editor>
 */
export class MediumEditorDirective {
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
MediumEditorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.1.0", type: MediumEditorDirective, selector: "[medium-editor]", inputs: { model: ["editorModel", "model"], options: ["editorOptions", "options"], placeholder: ["editorPlaceholder", "placeholder"] }, outputs: { update: "editorModelChange" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: MediumEditorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[medium-editor]'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tZWRpdW0tZWRpdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxZQUFZLE1BQU0sZUFBZSxDQUFDOztBQUU5Qzs7Ozs7Ozs7R0FRRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFhaEMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFYMUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRXpDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFJSixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV4QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuQixDQUFDO0lBRXZDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLDJCQUEyQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRztnQkFDekIsSUFBSSxFQUFHLElBQUksQ0FBQyxXQUFXO2FBQ3hCLENBQUM7U0FDSDtRQUVELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBVyxFQUFFLFFBQWEsRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7YUFDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7YUFDNUIsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLE9BQWEsRUFBRSxTQUFjO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtRQUV2RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTdCLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2tIQTFFVSxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2lHQVF1QixLQUFLO3NCQUExQixLQUFLO3VCQUFDLGFBQWE7Z0JBQ0ksT0FBTztzQkFBOUIsS0FBSzt1QkFBQyxlQUFlO2dCQUNNLFdBQVc7c0JBQXRDLEtBQUs7dUJBQUMsbUJBQW1CO2dCQUVHLE1BQU07c0JBQWxDLE1BQU07dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIE1lZGl1bUVkaXRvciBmcm9tICdtZWRpdW0tZWRpdG9yJztcblxuLyoqXG4gKiBNZWRpdW0gRWRpdG9yIHdyYXBwZXIgZGlyZWN0aXZlLlxuICpcbiAqIEV4YW1wbGVzXG4gKiA8bWVkaXVtLWVkaXRvclxuICAgICAgWyhlZGl0b3JNb2RlbCldPVwidGV4dFZhclwiXG4gKiAgICBbZWRpdG9yT3B0aW9uc109XCJ7J3Rvb2xiYXInOiB7J2J1dHRvbnMnOiBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdoMScsICdoMicsICdoMyddfX1cIlxuICogICAgW2VkaXRvclBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyVmFyXCI+PC9tZWRpdW0tZWRpdG9yPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWVkaXVtLWVkaXRvcl0nXG59KVxuZXhwb3J0IGNsYXNzIE1lZGl1bUVkaXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgbGFzdFZpZXdNb2RlbDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBuZXcgSFRNTEVsZW1lbnQoKTtcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcbiAgcHJpdmF0ZSBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoJ2VkaXRvck1vZGVsJykgbW9kZWw6IGFueTtcbiAgQElucHV0KCdlZGl0b3JPcHRpb25zJykgb3B0aW9uczogYW55O1xuICBASW5wdXQoJ2VkaXRvclBsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuXG4gIEBPdXRwdXQoJ2VkaXRvck1vZGVsQ2hhbmdlJykgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJtZS1lZGl0YWJsZVwiPicgKyB0aGlzLm1vZGVsICsgJzwvZGl2Pic7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlciA9IHtcbiAgICAgICAgdGV4dCA6IHRoaXMucGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2xvYmFsIE1lZGl1bUVkaXRvclxuICAgIHRoaXMuZWRpdG9yID0gbmV3IE1lZGl1bUVkaXRvcignLm1lLWVkaXRhYmxlJywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmVkaXRvci5zdWJzY3JpYmUoJ2VkaXRhYmxlSW5wdXQnLCAoZXZlbnQgOiBhbnksIGVkaXRhYmxlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hWaWV3KCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzIDogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy5sYXN0Vmlld01vZGVsKSkge1xuICAgICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdCB1cGRhdGVkIG1vZGVsXG4gICAqL1xuICB1cGRhdGVNb2RlbCgpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8mbmJzcDsvZywgJycpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88cD48YnI+PFxcL3A+L2csICcnKVxuICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBNZWRpdW1FZGl0b3Igb24gZGVzdHJ1Y3Rpb24gb2YgZGlyZWN0aXZlXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gIH1cblxuICBpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzIDogYW55LCB2aWV3TW9kZWw6IGFueSkge1xuICAgIGlmICghY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbW9kZWwnKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGNvbnN0IGNoYW5nZSA9IGNoYW5nZXMubW9kZWw7XG5cbiAgICBpZiAoY2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhT2JqZWN0LmlzKHZpZXdNb2RlbCwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==