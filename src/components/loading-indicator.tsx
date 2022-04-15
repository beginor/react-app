export function LoadingIndicator(props: LoadingIndicatorProps): JSX.Element {
    return (
      <div className='loading-indicator'>
        {props.message}
      </div>
    );
}

export interface LoadingIndicatorProps {
    message?: string;
}
