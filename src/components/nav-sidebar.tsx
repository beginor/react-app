import { Layout, Menu } from 'antd';

import './nav-sidebar.scss';

const { Sider } = Layout;
const { SubMenu } = Menu;

export function NavSideBar(): JSX.Element {
    return (
      <Sider className='app-sidebar' theme='light' collapsible={true}>
        <Menu mode='inline'>
          <SubMenu key='sub1' title='subnav 1'>
            <Menu.Item key={'1'}>Option 1</Menu.Item>
            <Menu.Item key={'2'}>Option 2</Menu.Item>
            <Menu.Item key={'3'}>Option 3</Menu.Item>
            <Menu.Item key={'4'}>Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' title='subnav 2'>
            <Menu.Item key={'5'}>Option 1</Menu.Item>
            <Menu.Item key={'6'}>Option 2</Menu.Item>
            <Menu.Item key={'7'}>Option 3</Menu.Item>
            <Menu.Item key={'8'}>Option 4</Menu.Item>
          </SubMenu>
          <Menu.Item key='9'>Help</Menu.Item>
        </Menu>
      </Sider>
    );
}
