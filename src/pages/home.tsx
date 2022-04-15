import { Button } from 'antd';

export default function Home(): JSX.Element {
    return (
      <>
      <h2>Home</h2>
      <Button className='m-1' type="primary">Primary Button</Button>
      <Button className='m-1' >Default Button</Button>
      <Button className='m-1' type="dashed" >Dashed Button</Button>
      <br />
      <Button className='m-1' type="text">Text Button</Button>
      <Button className='m-1' type="link">Link Button</Button>
      </>
    );
}
