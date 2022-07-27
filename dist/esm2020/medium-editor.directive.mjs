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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvc3JjL21lZGl1bS1lZGl0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxLQUFLLFlBQVksTUFBTSxlQUFlLENBQUM7O0FBRTlDOzs7Ozs7OztHQVFHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQWFoQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVgxQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixZQUFPLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFFekMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUlKLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFdkMsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO2dCQUN6QixJQUFJLEVBQUcsSUFBSSxDQUFDLFdBQVc7YUFDeEIsQ0FBQztTQUNIO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFXLEVBQUUsUUFBYSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQzthQUN0QixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQzthQUM1QixJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBYSxFQUFFLFNBQWM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBRXZELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFN0IsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7a0hBMUVVLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCO2lHQVF1QixLQUFLO3NCQUExQixLQUFLO3VCQUFDLGFBQWE7Z0JBQ0ksT0FBTztzQkFBOUIsS0FBSzt1QkFBQyxlQUFlO2dCQUNNLFdBQVc7c0JBQXRDLEtBQUs7dUJBQUMsbUJBQW1CO2dCQUVHLE1BQU07c0JBQWxDLE1BQU07dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIE1lZGl1bUVkaXRvciBmcm9tICdtZWRpdW0tZWRpdG9yJztcblxuLyoqXG4gKiBNZWRpdW0gRWRpdG9yIHdyYXBwZXIgZGlyZWN0aXZlLlxuICpcbiAqIEV4YW1wbGVzXG4gKiA8bWVkaXVtLWVkaXRvclxuICAgICAgWyhlZGl0b3JNb2RlbCldPVwidGV4dFZhclwiXG4gKiAgICBbZWRpdG9yT3B0aW9uc109XCJ7J3Rvb2xiYXInOiB7J2J1dHRvbnMnOiBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdoMScsICdoMicsICdoMyddfX1cIlxuICogICAgW2VkaXRvclBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyVmFyXCI+PC9tZWRpdW0tZWRpdG9yPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtZWRpdW0tZWRpdG9yJ1xufSlcbmV4cG9ydCBjbGFzcyBNZWRpdW1FZGl0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIGxhc3RWaWV3TW9kZWw6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbmV3IEhUTUxFbGVtZW50KCk7XG4gIHByaXZhdGUgZWRpdG9yOiBhbnk7XG4gIHByaXZhdGUgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCdlZGl0b3JNb2RlbCcpIG1vZGVsOiBhbnk7XG4gIEBJbnB1dCgnZWRpdG9yT3B0aW9ucycpIG9wdGlvbnM6IGFueTtcbiAgQElucHV0KCdlZGl0b3JQbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCdlZGl0b3JNb2RlbENoYW5nZScpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibWUtZWRpdGFibGVcIj4nICsgdGhpcy5tb2RlbCArICc8L2Rpdj4nO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyICYmIHRoaXMucGxhY2Vob2xkZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIHRleHQgOiB0aGlzLnBsYWNlaG9sZGVyXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdsb2JhbCBNZWRpdW1FZGl0b3JcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBNZWRpdW1FZGl0b3IoJy5tZS1lZGl0YWJsZScsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5lZGl0b3Iuc3Vic2NyaWJlKCdlZGl0YWJsZUlucHV0JywgKGV2ZW50IDogYW55LCBlZGl0YWJsZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKCk7XG4gICAgfSk7XG4gIH1cblxuICByZWZyZXNoVmlldygpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldENvbnRlbnQodGhpcy5tb2RlbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyA6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMsIHRoaXMubGFzdFZpZXdNb2RlbCkpIHtcbiAgICAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHRoaXMubW9kZWw7XG4gICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVtaXQgdXBkYXRlZCBtb2RlbFxuICAgKi9cbiAgdXBkYXRlTW9kZWwoKTogdm9pZCB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJm5ic3A7L2csICcnKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPHA+PGJyPjxcXC9wPi9nLCAnJylcbiAgICAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICB0aGlzLmxhc3RWaWV3TW9kZWwgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgTWVkaXVtRWRpdG9yIG9uIGRlc3RydWN0aW9uIG9mIGRpcmVjdGl2ZVxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICB9XG5cbiAgaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcyA6IGFueSwgdmlld01vZGVsOiBhbnkpIHtcbiAgICBpZiAoIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ21vZGVsJykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzLm1vZGVsO1xuXG4gICAgaWYgKGNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIU9iamVjdC5pcyh2aWV3TW9kZWwsIGNoYW5nZS5jdXJyZW50VmFsdWUpO1xuICB9XG59XG4iXX0=