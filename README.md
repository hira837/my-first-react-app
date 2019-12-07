This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify


This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## props
- componentの属性の名前のこと。props.name, props.age
- propsには数値、文字列、配列、オブジェクト、関数、何でも使用可能
- {}でわたしていく。
  - 型チェックを行う 
- 変更不可能、静的、immutabele ⇔ state(mutable)
- 親から子に渡していくことができる ⇔ state(component内だけで動く)

## state
- counter: 初期化処理を実行
  - objectの設定　this.state = { count: 0 }
  - そしてrenderメソッドが呼ばれる
  - 直接stateは変えてはいけない。setStateを使う。＝setStateを使う＝そのコールバックで再度render（再描画）される。

# Redux
## モチベーション
- コンポーネントが大きくなっていったときに容易にstateを管理するためのもの

## Action
- アプリケーションの中で何が起きたかを示すデータのこと
- Javascriptのオブジェクトのこと
- typeをもつオブジェクトのこと
  - ユニークでなければならない
- Actionを返す関数＝アクションクリエーター
  -  アクションクリエーター = increment, decrement
  - コンポーネントで使うのでexportしておく
  - 再利用するので(REDUCERで使う)ので変数に格納し、exportしておく
- view側でインポート。あるイベントに対し、これらのアクションを実行して、適切な状態遷移を実行するための仕組み


## Reducer
- Actionが発生したとき、Actionのタイプに応じて状態(state)をどう変化させるのか（条件文）
- storeを作成するためにexportしておく

## Store
- アプリのすべてのコンポーネントで使えるようにする = provider(import)
- createstoreをimport
- すべてのstoreが```const store = createStore(reducer)```に集約される
  - （今まで）どのコンポーネントからも見れるように（今まではバケツリレー的に親⇔子→孫にpropを渡していた）
  - （やっていること）
    1. 既存のコンポーネントすべてをprovider componentにラップして 
    2. storeという属性にわたす（```const store = createStore(reducer)```）
    ```
    <Provider store={store}>
      <App />
    </Provider>
    ```

## connect関数 state action componentとの関連付け→viewに描画する
- constructorメソッド(コンポーネントの初期化時に実行されるコールバック、カウンター０に設定)で行っていることは、reducerで行っているので不要
- やることはrender()だけ
  - どのようにデータを渡すか (状態やaction)
    1. const props = this.props
    2. mapStateToPros・・・stateの情報からコンポーネントに必要なものを取り出してマッピングする、どういったオブジェクトをpropsとして取り出しreturnするのか
    3. mapDispatchToProps・・・あるアクションが発生したときに、reducerにちゃんと渡す
      - incrementとdecrement関数を引数に持つmapDispatchToPropsを書く