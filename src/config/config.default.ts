import { MidwayConfig } from '@midwayjs/core';

export default {
  orm: {
    type: 'mysql',
    host: '139.159.151.52',
    port: 3306,
    username: 'root',
    password: 'Daedalus@130',
    database: 'nboj_test',
    synchronize: true,     // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
    dateStrings: true,
    driver: require('mysql2'),
  },
} as MidwayConfig;