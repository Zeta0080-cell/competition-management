import Mock from 'mockjs';

// 模拟登录接口
Mock.mock('/api/student/auth/login', 'post', (options) => {
  const { username, password } = JSON.parse(options.body);
  if (username === 'test' && password === 'gxnu') {
    return {
      code: 200,
      message: '登录成功',
      data: {
        token: 'mock-token',
        username: 'student',
      },
    };
  } else {
    return {
      code: 401,
      message: '用户名或密码错误',
    };
  }
});

console.log('Mock server is running...');
