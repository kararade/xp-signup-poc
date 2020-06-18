import React from 'react';

import { SignupScreen, InputSection, InputField, Button, Text } from 'xp-ui/lib/registration';

function App() {
  return (
    <SignupScreen
      milestone={1}
      milestones={[
        {
          label: 'Signup',
          icon: 'padlock',
        },
        {
          label: 'Work Experience',
          icon: 'notebook',
        },
        {
          label: 'About',
          icon: 'profile',
        },
      ]}
    >
      <div className='headerText'>
        <Text
          heading={'COMMIT FROM ANYWHERE.'}
          content={"Join the most energizing community for developers and work with the world's leading brands from anywhere."}
          hasDivider
          isCentered
        />

        <div className='headerText__textLink'>
          <span>
            <a href='#'>Log in</a> if you already have an account.
          </span>
        </div>
      </div>

      <InputSection headline='Full name'>
        <InputField name='fullname' placeholder='John Doe' />
      </InputSection>

      <InputSection headline='Email address'>
        <InputField name='email' placeholder='john@example.com' />
      </InputSection>

      <InputSection headline='Password'>
        <InputField name='password' placeholder='*************' />
      </InputSection>

      <div className='inputFieldCheckbox'>
        <InputField type='checkbox' name='subscribe' label="I'd like to subscribe to updates including new job notifications at X-Team." />
      </div>

      <Button block wide size='large'>
        GET STARTED
      </Button>

      <div className='textLinkBottom'>
        <span>
          By creating an account, you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>.
        </span>
      </div>
    </SignupScreen>
  );
}

export default App;
