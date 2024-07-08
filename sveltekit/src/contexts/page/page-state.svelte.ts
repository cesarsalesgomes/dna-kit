import { page } from '$app/stores';

export class PageState {
  currentRoute = $state<string>();

  constructor() {
    this.listenToPageChanges();
  }

  listenToPageChanges() {
    page.subscribe(({ url }) => {
      this.currentRoute = url.pathname;
    });
  }
}
