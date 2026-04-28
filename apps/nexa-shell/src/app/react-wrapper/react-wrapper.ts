import {
  AfterContentInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  selector: 'app-react-wrapper',
  standalone: true,
  template: '<div #reactWrapper></div>',
})
export class ReactWrapper implements AfterContentInit {
  @ViewChild('reactWrapper', { static: true }) rootEl!: ElementRef;
  //private reactRoot: any;

  // async ngAfterContentInit() {
  //   const KitchenApp = await loadRemote<typeof import('nexa-kitchen/Module')>(
  //     'nexa-kitchen/Module'
  //   ).then();

  //   // Dynamically import React + ReactDOM (shared singleton)
  //   const React = await import('react');
  //   const { createRoot } = await import('react-dom/client');

  //   // Mount the React app into the Angular container
  //   this.reactRoot = createRoot(this.rootEl.nativeElement);
  //   //this.reactRoot.render(React.createElement(rootEl));
  // }
  // ngOnDestroy() {
  //   this.reactRoot?.unmount();
  // }

  @ViewChild('reactWrapper', { read: ElementRef, static: true })
  reactWrapper!: ElementRef;
  private route: ActivatedRoute = inject(ActivatedRoute);

  async ngAfterContentInit(): Promise<void> {
    const elementName = this.route.snapshot.data['elementName'];
    const loader = this.route.snapshot.data['loadChildren'];
    await loader();
    const element = document.createElement(elementName);
    this.reactWrapper.nativeElement.appendChild(element);
  }
}
