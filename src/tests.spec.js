Feature('github', { timeout: 300 });

Scenario('sign error', ({ I, open }) => {
  I.amOnPage('https://github.com');
  open.element('Sign in');
  I.see('Sign in to GitHub', 'h1');

  I.fillField('Username or email address', 'something@totest.com');
  I.fillField('Password', '123456');
  open.element('Sign in');

  I.see('Incorrect username or password.', '.flash-error');
});

Scenario('reset password', ({ I, open, see }) => {
  I.amOnPage('https://github.com');
  open.element('Sign in');
  I.see('Sign in to GitHub', 'h1');

  open.element('Forgot password?');
  see.text('Reset your password');
});

Scenario.only('welcome form', ({ I, open }) => {
    I.amOnPage('https://github.com');
  open.element('Sign up');
   I.see('Welcome to GitHub!', '.js-signup-typed-welcome');
});

// Scenario('github',  ({ I, open,see }) => {
// });

// Scenario('github',  ({ I, open,see }) => {
// });
