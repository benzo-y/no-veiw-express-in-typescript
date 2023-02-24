import db from './index';

// 例：テーブル作成ができることを確認
(async () => {
  db.users.sync({ force: true });
})();
