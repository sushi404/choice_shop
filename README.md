# 概要
Node.JS,Reactで作る
現在地の近くからランダムで1つ、飲食店を表示するアプリ

# 必要そうな機能
* 位置情報を取得
* 指定範囲内の飲食店をピックアップ(Nearby Search)
* ランダムに1店舗選ぶ

# 流れ
1. 「探す」ボタンを押す
2. 現在地を取得する
3. 1km範囲の飲食店を6個フェッチする
4. ランダムで1つ選出し、詳細な情報を表示

# 関数

# サーバー
## fetchRestraunt.js
* getUserLocationで得た現在地から1km圏内の飲食店を取得する
* nearbyRestrauntをJSONparseしてreturnする
## choiceRestraunt.js
* fetchRestrauntで得た飲食店の情報からランダムで1つ飲食店を取得し、飲食店の情報を返す
* selectedRestrauntをreturnする
## getShopData.js
* choiceRestaurantで選んだ飲食店の情報を揃える
- 店名
- 住所
- 評価
- 画像
- URL
- 現在地からの距離?

## sendShopData.js
* getShopDataで揃えた情報をフロントに返す

# フロント
## getUserLocation.jsx
* ユーザーの現在地を取得し、現在地(緯度経度)をfetchRestrauntに返す
* userLocation(lat,lng)をreturnする

## printRestraunt.jsx
* getShopDataで得た飲食店の情報をwebページに表示する
* html,cssタグをreturnする

## choiceShop.jsx
* getShopDataで得た情報をランダムで一つ表示する

# UI
## ページ数:1枚で完結させる
* 「店を探す」ボタン
* 飲食店の詳細カード

# API
## PlacesAPI
* Nearby Serach
## Maps JavaScript API
## APIKey
* src/server/config.jsにapiKeyをmodule.exportしておく
