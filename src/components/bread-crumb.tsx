import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

export function BreadCrumb(): JSX.Element {
    return (
      <Breadcrumb className='my-3'>
        <Breadcrumb.Item key={'/'}>
          <Link to={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/todo'>Todo</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          App
        </Breadcrumb.Item>
      </Breadcrumb>
    );
}
