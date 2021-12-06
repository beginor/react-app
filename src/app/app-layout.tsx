import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './controls/nav';

export default function AppLayout(props: AppLayoutProps): JSX.Element {
    return (
       <>
         <h1>Hello, React Hooks!</h1>
         <p>{props.message}</p>
         <hr />
         <Nav />
         <div>
           <Suspense fallback={<div>Loading page ...</div>}>
             <Outlet  />
           </Suspense>
         </div>
       </>
    );
}

export interface AppLayoutProps {
    message: string;
}
