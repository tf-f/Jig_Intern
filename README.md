# Jig_Intern
## jig Intern課題　リポジトリ


### 実装要件

* イベント情報を一覧で表示 HTTPで取得


* ボタンなどで表示件数の指定


* 全件表示以外の場合は続きを取得
  

* 指定項目での絞り込み(特定のカテゴリなど)
  * 有料 無料について
  * 現在参加可能か

* キーワード検索

* Custom
  * 自動補完(Google 検索)
  * 電話 メールソフトのリンク



### jsonファイルについて

* event_name : イベント名
* description : 説明
* remarks : 営業情報など
* category : カテゴリ
  *全て表示
  *歴史
  *その他
  *文化・芸術
  *講座・セミナー
  *こども
  *スポーツ
  *音楽
  *自然・環境
  *食・健康
  *観光・祭り

* イベント開催期間
* start_data : イベント開始期間
* end_data : イベント終了期間
* contact : コンタクト 建物名
* contact_phone_number : 電話番号
* event_place : 場所
* event_place_url : URL
* address : 住所
* mail_address : メールアドレス 
* transportation : 交通手段