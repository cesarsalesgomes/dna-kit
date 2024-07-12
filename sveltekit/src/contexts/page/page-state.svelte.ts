import { page } from '$app/stores';

export class PageState {
  currentRoute = $state<string>();

  error = $state<App.Error | null>(null);

  constructor() {
    this.listenToPageChanges();
  }

  listenToPageChanges() {
    page.subscribe(({ url, error }) => {
      this.currentRoute = url.pathname;
      this.error = error;
    });
  }
}
