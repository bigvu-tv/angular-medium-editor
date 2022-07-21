import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
/**
 * Medium Editor wrapper directive.
 *
 * Examples
 * <medium-editor
      [(editorModel)]="textVar"
 *    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
 *    [editorPlaceholder]="placeholderVar"></medium-editor>
 */
export declare class MediumEditorDirective implements OnInit, OnChanges, OnDestroy {
    private el;
    private lastViewModel;
    private element;
    private editor;
    private active;
    model: any;
    options: any;
    placeholder: string;
    update: EventEmitter<any>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    refreshView(): void;
    ngOnChanges(changes: any): void;
    /**
     * Emit updated model
     */
    updateModel(): void;
    /**
     * Remove MediumEditor on destruction of directive
     */
    ngOnDestroy(): void;
    isPropertyUpdated(changes: any, viewModel: any): boolean;
}
