export default class FetchesBeingPerformedState {
  count = $state(0);

  incrementFetchesBeingPerformed() {
    this.count += 1;
  }

  decrementFetchesBeingPerformed() {
    this.count = this.count > 0 ? this.count - 1 : 0;
  }
}
