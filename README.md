# angular-v14-medium-editor
This is an Angular 2 directive for the [Medium.com inline editor clone](https://github.com/yabwe/medium-editor) by Davi Ferreira, derived from the [AngularJS medium editor directive](https://github.com/thijsw/angular-medium-editor), and forked from progress made by Thijs on [angular-medium-editor](https://github.com/thijsw/angular-medium-editor).

Currently updated to support *Angular 14* by BigVu
## Import the Module

Install with [Npm](https://www.npmjs.com/):

```sh
$ npm i --save https://github.com/bigvu-tv/angular-medium-editor
```

[Medium editor](https://github.com/yabwe/medium-editor) is a required peer dependencies, so you'll need to install it alongside this angular wrapper:

```bash
$ npm i --save medium-editor
```
```bash
$ npm i --save-dev @types/medium-editor
```

The `angular-v14-medium-editor` package should import medium-editor from your node_modules.

Finally, import the module into your project:

```typescript
import { MediumEditorModule } from 'angular-v14-medium-editor'
```

```typescript
  @NgModule({
    ...
    bootstrap: [ AppComponent ],
    imports: [
      MediumEditorModule,
      ...
```

The module provides the directive to your app, and you're ready to use it in your templates.

## Usage

Use as an element:

```html
  <medium-editor [(editorModel)]="textVar"
      [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}" 
      [editorPlaceholder]="placeholderVar"></medium-editor>
```

You can optionally pass a placeholder value:

```html
  <medium-editor [(editorModel)]="textVar"
      [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}" 
      [editorPlaceholder]="placeholderVar"></medium-editor>
```

For more information on which options you can pass with [editorOptions], check MediumEditor's [options documentation](https://github.com/yabwe/medium-editor#mediumeditor-options) for details.

## License
The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
