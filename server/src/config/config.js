module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'bookmarks',
    user: process.env.DB_USER || 'bookmarks',
    password: process.env.DB_PASS || 'bookmarks',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './bookmarks.sqlite'
    }
  }
}