

export default function App(props: AppProps): JSX.Element {
    return (
      <>
        <h2>Hello, react!</h2>
        <p>{props.message}</p>
      </>
    );
}

export interface AppProps {
    message?: string;
}
