# galleryByReact

galleryByReact使用webpack进行快速项目构建

## 前期准备

1.本地安装了node

2.本地安装了git

3.安装yeoman：
访问[http://yeoman.io/](http://yeoman.io/)，可学习yeoman的使用，在Discovering generators中找到需要的模板框架[react-webpack](https://github.com/newtriks/generator-react-webpack/)

```bash
npm install -g yo
npm install -g generator-react-webpack
```
4.在github上建立一个名为galleryByReact的空白项目（只有README.md和LICENSE）

```bash
.galleryByReac
├── LICENSE
└── README.md
```

5.将项目git到本地

```bash
git clone git@github.com:fugehappy/galleryByReact.git
```
本地目录如下

```bash
.galleryByReac
├── .git        //git配置文件
├── LICENSE
└── README.md
```

6.使用yeoman快速初始化构建项目

```bash
cd galleryByReact
yo react-webpack
```
7.构建成功

```bash
.galleryByReac
├── .git
├── cfg                  //配置文件
├── dist                 //发布的代码
├── src                  //开发的代码
├── test                 //测试
├── .babelrc             //ES6转ES5配置
├── .editorconfig        //编辑器编码风格统一配置
├── .eslintrc            //代码风格检测
├── .gitignore 
├── .yo-rc.json          //yeoman配置文件
├── karma.conf.js        //自动化测试
├── LICENSE
├── package.json         //node配置模块管理包
├── README.md
├── server.js            //启动的入口js
└── webpack.config.js    //webpack配置文件
```
可能有更新，构建生成的目录会略有不同

## 启动项目

```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Auto-run unit tests on file changes
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```