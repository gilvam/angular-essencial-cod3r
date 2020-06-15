import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * teste para uso
 * <li *appFor="let n em [1, 2 , 3]">{{n | json}}</li>
 */
@Directive({
	selector: '[appFor]'
})
export class ForDirective implements OnInit {

	@Input('appForEm') numbers: number[];

	constructor(
		private container: ViewContainerRef,
		private template: TemplateRef<any>
	) {
	}

	ngOnInit(): void {
		for (let number of this.numbers) {
			this.container.createEmbeddedView(this.template, { $implicit: number });
		}
		console.log(`numbers`, this.numbers);
	}


}
