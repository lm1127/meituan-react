import Home from './pages/Home/Home';
import Takeout from './pages/Takeout/Takeout';
import Near from './pages/Near/Near';
import Search from './pages/Search/Search';
import Order from './pages/Order/Order';
import My from './pages/My/My';

const routeConfig = [
  {
    name: '首页',
    path: '/home',
    component: Home,
  },
  {
    name: '外卖',
    path: '/takeout',
    component: Takeout,
    children: true, // 是否在footer渲染节点
  },
  {
    name: '附近',
    path: '/near',
    component: Near,
  },
  {
    name: '发现',
    path: '/search',
    component: Search,
  },
  {
    name: '订单',
    path: '/order',
    component: Order,
  },
  {
    name: '我的',
    path: '/my',
    component: My,
  }
]

export default routeConfig;
