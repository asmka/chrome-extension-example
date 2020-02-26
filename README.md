# 検証用ダミーChrome拡張機能


## ビルド手順
```
$ npm install
$ npm run build [prod|dev]
```

## 注意
- ビルドし直した後は拡張機能の登録をやり直すこと
    - 中身の書き換えだけでも動作は変わるが，一部挙動がおかしい
        - 静的読み込みのモジュールは更新されない？


## 問題1: scriptタグ間で共有変数を作れない

### 概要
Chrome拡張機能からjsソースを複数inject (document下にscriptタグを新規作成して読み込ませる) すると，
jsソース間で共有変数（クロージャ）を作れない

### 原因
Chromeのscriptタグで読み込まれるjsソースはそれぞれ別scopeになる
- scriptタグ1のjsソースでグローバル変数を定義しても，scriptタグ2のjsソースからは参照できない
- 各scriptから別ファイルのグローバル変数をimportしても不可

### 対処
- 可能ならjsソースを1つにまとめて (webpackのbundleで可) injectする
