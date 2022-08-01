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
        this.active = false;
        this.placeholder = '';
        this.update = new EventEmitter();
        this.element = this.el.nativeElement;
    }
    ngOnInit() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1lZGl1bS1lZGl0b3Ivc3JjL2xpYi9tZWRpdW0tZWRpdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxZQUFZLE1BQU0sZUFBZSxDQUFDOztBQUU5Qzs7Ozs7Ozs7R0FRRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFhaEMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFYMUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFHM0IsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUlKLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXhCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3ZELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRywyQkFBMkIsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUc7Z0JBQ3pCLElBQUksRUFBRyxJQUFJLENBQUMsV0FBVzthQUN4QixDQUFDO1NBQ0g7UUFFRCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQVcsRUFBRSxRQUFhLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBYTtRQUN2QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO2FBQzVCLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFhLEVBQUUsU0FBYztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7UUFFdkQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU3QixJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDOztrSEE1RVUscUJBQXFCO3NHQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7aUdBUXVCLEtBQUs7c0JBQTFCLEtBQUs7dUJBQUMsYUFBYTtnQkFDSSxPQUFPO3NCQUE5QixLQUFLO3VCQUFDLGVBQWU7Z0JBQ00sV0FBVztzQkFBdEMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBRUcsTUFBTTtzQkFBbEMsTUFBTTt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTWVkaXVtRWRpdG9yIGZyb20gJ21lZGl1bS1lZGl0b3InO1xuXG4vKipcbiAqIE1lZGl1bSBFZGl0b3Igd3JhcHBlciBkaXJlY3RpdmUuXG4gKlxuICogRXhhbXBsZXNcbiAqIDxtZWRpdW0tZWRpdG9yXG4gICAgICBbKGVkaXRvck1vZGVsKV09XCJ0ZXh0VmFyXCJcbiAqICAgIFtlZGl0b3JPcHRpb25zXT1cInsndG9vbGJhcic6IHsnYnV0dG9ucyc6IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ2gxJywgJ2gyJywgJ2gzJ119fVwiXG4gKiAgICBbZWRpdG9yUGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJWYXJcIj48L21lZGl1bS1lZGl0b3I+XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21lZGl1bS1lZGl0b3InXG59KVxuZXhwb3J0IGNsYXNzIE1lZGl1bUVkaXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgbGFzdFZpZXdNb2RlbDogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgZWRpdG9yOiBhbnk7XG4gIHByaXZhdGUgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCdlZGl0b3JNb2RlbCcpIG1vZGVsOiBhbnk7XG4gIEBJbnB1dCgnZWRpdG9yT3B0aW9ucycpIG9wdGlvbnM6IGFueTtcbiAgQElucHV0KCdlZGl0b3JQbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCdlZGl0b3JNb2RlbENoYW5nZScpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJtZS1lZGl0YWJsZVwiPicgKyB0aGlzLm1vZGVsICsgJzwvZGl2Pic7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5sZW5ndGgpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlciA9IHtcbiAgICAgICAgdGV4dCA6IHRoaXMucGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2xvYmFsIE1lZGl1bUVkaXRvclxuICAgIHRoaXMuZWRpdG9yID0gbmV3IE1lZGl1bUVkaXRvcignLm1lLWVkaXRhYmxlJywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmVkaXRvci5zdWJzY3JpYmUoJ2VkaXRhYmxlSW5wdXQnLCAoZXZlbnQgOiBhbnksIGVkaXRhYmxlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hWaWV3KCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0Q29udGVudCh0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzIDogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNQcm9wZXJ0eVVwZGF0ZWQoY2hhbmdlcywgdGhpcy5sYXN0Vmlld01vZGVsKSkge1xuICAgICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdGhpcy5tb2RlbDtcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW1pdCB1cGRhdGVkIG1vZGVsXG4gICAqL1xuICB1cGRhdGVNb2RlbCgpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8mbmJzcDsvZywgJycpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88cD48YnI+PFxcL3A+L2csICcnKVxuICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgIHRoaXMubGFzdFZpZXdNb2RlbCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBNZWRpdW1FZGl0b3Igb24gZGVzdHJ1Y3Rpb24gb2YgZGlyZWN0aXZlXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gIH1cblxuICBpc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzIDogYW55LCB2aWV3TW9kZWw6IGFueSkge1xuICAgIGlmICghY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbW9kZWwnKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgIGNvbnN0IGNoYW5nZSA9IGNoYW5nZXMubW9kZWw7XG5cbiAgICBpZiAoY2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhT2JqZWN0LmlzKHZpZXdNb2RlbCwgY2hhbmdlLmN1cnJlbnRWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==