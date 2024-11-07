import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-books',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <div data-testid="books-feature">Books Feature</div>
    `,
    styles: ``
})
export class BooksComponent {

}