export let config = {
  port: 3000,
  host: '0.0.0.0',
  mongoDb: { url: 'mongodb://localhost:27017/blog-app' },
  mysql: { database: 'blog', username: 'root', password: 'root' },
  hash: {
    saltRounds: 10
  }
}