import { Configuration } from '@midwayjs/decorator';
import * as orm from '@midwayjs/orm';
import { getConnection } from 'typeorm';
import { join } from 'path';

import * as DefaultConfig from './config/config.default';

@Configuration({
  
  importConfigs: [
    './config/'
  ],
  imports: [
    orm                                                         // 加载 orm 组件
  ],
})
export class ContainerConfiguratin {
  async onReady() {
    console.log(123);
    const conn = getConnection('default');
    console.log(conn.isConnected);
  }
}