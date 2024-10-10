import { LoginForm } from './LoginForm/LoginForm';
import { LightForm } from './LightForm/LightForm';
import { SignUpForm } from './SignUpForm/SignUpForm';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 50,
        fontSize: 16,
        color: '#010101',
      }}
    >
      <LoginForm onSubmit={values => console.log(values)} />
      <LightForm />
      <SignUpForm onSubmit={values => console.log(values)} />
    </div>
  );
};
