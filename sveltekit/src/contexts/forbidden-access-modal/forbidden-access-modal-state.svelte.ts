export default class ForbiddenAccessModalState {
  show = $state(false);

  setShow(show: boolean) {
    this.show = show;
  }
}
