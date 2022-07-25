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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaXVtLWVkaXRvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tZWRpdW0tZWRpdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxZQUFZLE1BQU0sZUFBZSxDQUFDOztBQUU5Qzs7Ozs7Ozs7R0FRRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFhaEMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFYMUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRXpDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFJSixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV4QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuQixDQUFDO0lBRXZDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLDJCQUEyQixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRztnQkFDekIsSUFBSSxFQUFHLElBQUksQ0FBQyxXQUFXO2FBQ3hCLENBQUM7U0FDSDtRQUVELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBVyxFQUFFLFFBQWEsRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7YUFDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7YUFDNUIsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLE9BQWEsRUFBRSxTQUFjO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtRQUV2RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTdCLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2tIQTFFVSxxQkFBcUI7c0dBQXJCLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjtpR0FRdUIsS0FBSztzQkFBMUIsS0FBSzt1QkFBQyxhQUFhO2dCQUNJLE9BQU87c0JBQTlCLEtBQUs7dUJBQUMsZUFBZTtnQkFDTSxXQUFXO3NCQUF0QyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFFRyxNQUFNO3NCQUFsQyxNQUFNO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBNZWRpdW1FZGl0b3IgZnJvbSAnbWVkaXVtLWVkaXRvcic7XG5cbi8qKlxuICogTWVkaXVtIEVkaXRvciB3cmFwcGVyIGRpcmVjdGl2ZS5cbiAqXG4gKiBFeGFtcGxlc1xuICogPG1lZGl1bS1lZGl0b3JcbiAgICAgIFsoZWRpdG9yTW9kZWwpXT1cInRleHRWYXJcIlxuICogICAgW2VkaXRvck9wdGlvbnNdPVwieyd0b29sYmFyJzogeydidXR0b25zJzogWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnaDEnLCAnaDInLCAnaDMnXX19XCJcbiAqICAgIFtlZGl0b3JQbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclZhclwiPjwvbWVkaXVtLWVkaXRvcj5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWVkaXVtLWVkaXRvcidcbn0pXG5leHBvcnQgY2xhc3MgTWVkaXVtRWRpdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBsYXN0Vmlld01vZGVsOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudCA9IG5ldyBIVE1MRWxlbWVudCgpO1xuICBwcml2YXRlIGVkaXRvcjogYW55O1xuICBwcml2YXRlIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnZWRpdG9yTW9kZWwnKSBtb2RlbDogYW55O1xuICBASW5wdXQoJ2VkaXRvck9wdGlvbnMnKSBvcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgnZWRpdG9yUGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cbiAgQE91dHB1dCgnZWRpdG9yTW9kZWxDaGFuZ2UnKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm1lLWVkaXRhYmxlXCI+JyArIHRoaXMubW9kZWwgKyAnPC9kaXY+JztcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLnBsYWNlaG9sZGVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyID0ge1xuICAgICAgICB0ZXh0IDogdGhpcy5wbGFjZWhvbGRlclxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHbG9iYWwgTWVkaXVtRWRpdG9yXG4gICAgdGhpcy5lZGl0b3IgPSBuZXcgTWVkaXVtRWRpdG9yKCcubWUtZWRpdGFibGUnLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZWRpdG9yLnN1YnNjcmliZSgnZWRpdGFibGVJbnB1dCcsIChldmVudCA6IGFueSwgZWRpdGFibGU6IGFueSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVNb2RlbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaFZpZXcoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmVkaXRvci5zZXRDb250ZW50KHRoaXMubW9kZWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMgOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1Byb3BlcnR5VXBkYXRlZChjaGFuZ2VzLCB0aGlzLmxhc3RWaWV3TW9kZWwpKSB7XG4gICAgICB0aGlzLmxhc3RWaWV3TW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbWl0IHVwZGF0ZWQgbW9kZWxcbiAgICovXG4gIHVwZGF0ZU1vZGVsKCk6IHZvaWQge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyZuYnNwOy9nLCAnJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxwPjxicj48XFwvcD4vZywgJycpXG4gICAgICAgICAgICAgICAgIC50cmltKCk7XG4gICAgdGhpcy5sYXN0Vmlld01vZGVsID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIE1lZGl1bUVkaXRvciBvbiBkZXN0cnVjdGlvbiBvZiBkaXJlY3RpdmVcbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdG9yLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGlzUHJvcGVydHlVcGRhdGVkKGNoYW5nZXMgOiBhbnksIHZpZXdNb2RlbDogYW55KSB7XG4gICAgaWYgKCFjaGFuZ2VzLmhhc093blByb3BlcnR5KCdtb2RlbCcpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgY29uc3QgY2hhbmdlID0gY2hhbmdlcy5tb2RlbDtcblxuICAgIGlmIChjaGFuZ2UuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICFPYmplY3QuaXModmlld01vZGVsLCBjaGFuZ2UuY3VycmVudFZhbHVlKTtcbiAgfVxufVxuIl19