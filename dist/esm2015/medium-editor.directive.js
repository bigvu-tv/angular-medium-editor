import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
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
export class MediumEditorDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JlbmJhc2hhL0RldmVsb3BtZW50L2JpZ3Z1L2FuZ3VsYXItbWVkaXVtLWVkaXRvci8iLCJzb3VyY2VzIjpbIm1lZGl1bS1lZGl0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxZQUFZLE1BQU0sZUFBZSxDQUFDO0FBRTlDOzs7Ozs7OztHQVFHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQWFoQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUZMLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFdkMsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO2dCQUN6QixJQUFJLEVBQUcsSUFBSSxDQUFDLFdBQVc7YUFDeEIsQ0FBQztTQUNIO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQU87UUFDakIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQzthQUN0QixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQzthQUM1QixJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFNBQVM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBRXZELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFN0IsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBN0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7O1lBdEJHLFVBQVU7OztvQkE4QlosS0FBSyxTQUFDLGFBQWE7c0JBQ2xCLEtBQUssU0FBQyxlQUFlOzBCQUNyQixLQUFLLFNBQUMsbUJBQW1CO3FCQUV6QixNQUFNLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIE9uRGVzdHJveSxcbiAgICBPbkluaXQsXG4gICAgT3V0cHV0LFxuICAgIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIE1lZGl1bUVkaXRvciBmcm9tICdtZWRpdW0tZWRpdG9yJztcblxuLyoqXG4gKiBNZWRpdW0gRWRpdG9yIHdyYXBwZXIgZGlyZWN0aXZlLlxuICpcbiAqIEV4YW1wbGVzXG4gKiA8bWVkaXVtLWVkaXRvclxuICAgICAgWyhlZGl0b3JNb2RlbCldPVwidGV4dFZhclwiXG4gKiAgICBbZWRpdG9yT3B0aW9uc109XCJ7J3Rvb2xiYXInOiB7J2J1dHRvbnMnOiBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdoMScsICdoMicsICdoMyddfX1cIlxuICogICAgW2VkaXRvclBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyVmFyXCI+PC9tZWRpdW0tZWRpdG9yPlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtZWRpdW0tZWRpdG9yJ1xufSlcbmV4cG9ydCBjbGFzcyBNZWRpdW1FZGl0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIGxhc3RWaWV3TW9kZWw6IHN0cmluZztcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcbiAgcHJpdmF0ZSBhY3RpdmU6IGJvb2xlYW47XG5cblx0QElucHV0KCdlZGl0b3JNb2RlbCcpIG1vZGVsOiBhbnk7XG4gIEBJbnB1dCgnZWRpdG9yT3B0aW9ucycpIG9wdGlvbnM6IGFueTtcbiAgQElucHV0KCdlZGl0b3JQbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgnZWRpdG9yTW9kZWxDaGFuZ2UnKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm1lLWVkaXRhYmxlXCI+JyArIHRoaXMubW9kZWwgKyAnPC9kaXY+JztcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLnBsYWNlaG9sZGVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyID0ge1xuICAgICAgICB0ZXh0IDogdGhpcy5wbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHbG9iYWwgTWVkaXVtRWRpdG9yXG4gICAgdGhpcy5lZGl0b3IgPSBuZXcgTWVkaXVtRWRpdG9yKCcubWUtZWRpdGFibGUnLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZWRpdG9yLnN1YnNjcmliZSgnZWRpdGFibGVJbnB1dCcsIChldmVudCwgZWRpdGFibGUpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hWaWV3KCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy5sYXN0Vmlld01vZGVsKSkge1xuICAgICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdCB1cGRhdGVkIG1vZGVsXG4gICAqL1xuICB1cGRhdGVNb2RlbCgpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8mbmJzcDsvZywgJycpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88cD48YnI+PFxcL3A+L2csICcnKVxuICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBNZWRpdW1FZGl0b3Igb24gZGVzdHJ1Y3Rpb24gb2YgZGlyZWN0aXZlXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gIH1cblxuICBpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB2aWV3TW9kZWwpIHtcbiAgICBpZiAoIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ21vZGVsJykpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBjb25zdCBjaGFuZ2UgPSBjaGFuZ2VzLm1vZGVsO1xuXG4gICAgaWYgKGNoYW5nZS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIU9iamVjdC5pcyh2aWV3TW9kZWwsIGNoYW5nZS5jdXJyZW50VmFsdWUpO1xuICB9XG59XG4iXX0=