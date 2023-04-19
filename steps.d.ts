/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type open = typeof import('./pages/page_object.js');
type see = typeof import('./pages/page_object.js');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    open: open;
    see: see;
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
