import { FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '../controls/auth-context';

export default function Login(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const from: string = location.state?.from || '/';

    function onSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username') as string;
        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
    }

    return (
      <>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <label>
            Username: <input type='text' name='username' />
          </label>{ ' '}
          <button type='submit'>Login</button>
        </form>
      </>
    );
}
