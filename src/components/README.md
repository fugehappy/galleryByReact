##react demo

后端数据的结构设计为

```js
let imageDatas = [{
  filename:'1.jpg',
  title:'Heaven of time',
  desc:'Here he comes Here comes Speed Racer.'
},{
  filename:'2.jpg',
  title:'Heaven of time',
  desc:'Here he comes Here comes Speed Racer.'
}];
```

对数据进行处理，使用立即执行的匿名函数

```js
imageDatas =(function(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);
```

组件与接口

```js
//大管家组件
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }
  
  //布局渲染
  render() {
    return (
      <section className="stage" ref="stage">
        <section className="img-sec">

        </section>
        <section className="control_nav"></section>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

//对外提供接口
export default AppComponent;
```

页面数据渲染

```js
//ImgFigure组件
let ImgFigure = React.createClass ({
  render() {
    return (
	  <figure className="img-figure">
        <div class="img-wrap">
          <img src={this.props.data.imageURL}/>
          <figcaption>
            <h2 className="img-title">{this.props.data.title}</h2>
            <div className="img-back">
              <p>{this.props.data.desc}</p>
            </div>
          </figcaption>
        </div>
      </figure>
	)
  }
})
class AppComponent extends React.Component {
  ...
  render() {
    let imgFigures = [];
	imageDatas.forEach(function (value, index) {
	  imgFigures.push(<ImgFigure key={index} data ={value} />);
	});
    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <section className="control_nav"></section>
      </section>
    );
  }
}
```

处理业务，添加点击事件

* 第一步改写
```js
let ImgFigure = React.createClass ({
  handleClick(e) {
    alert(1);
    e.stopPropagation();
    e.preventDefault();
  },
  render() {
    <figure className="img-figure">
	  <div class="img-wrap" onClick={this.handleClick}>
	    <img src={this.props.data.imageURL}/>
	    <figcaption>
		  <h2 className="img-title">{this.props.data.title}</h2>
		  <div className="img-back" onClick={this.handleClick}>
		    <p>{this.props.data.desc}</p>
		  </div>
	    </figcaption>
	  </div>
    </figure>
  }
})
```
* 第二步改写
```js
let ImgFigure = React.createClass ({
  handleClick(e) {
    this.props.inverse();
    e.stopPropagation();
    e.preventDefault();
  },
  ...
})

class AppComponent extends React.Component {
  ...
  inverse() {
    return function() {
		alert(1);
	}
  }
  
  render() {
    ...
	imageDatas.forEach(function (value, index) {
	  imgFigures.push(<ImgFigure key={index} data ={value} inverse={this.inverse()}/>);
	});
  }
}
```

版本迭代

* Main-ES5基本上是沿用ES5的标准，创建组件是用了React.createClass方式创建的，是一个独立模块
* Main-ES6是混合了ES5和ES6的标准，创建组件既用了React.createClass的方式，又用了class AppComponent extends React.Component的方式
* 最后按照ES6的标准，每个模块中仅仅有一个组件的方式，拆分为AppComponent和ImgFigureComponent;


参考资料

* [ES5与ES6](http://www.cnblogs.com/Mrs-cc/p/4969755.html)的区别

* 参考materliu原图片翻转效果[demo](http://materliu.github.io/gallery-by-react/)

* 本文地址[https://github.com/fugehappy/galleryByReact](https://github.com/fugehappy/galleryByReact)















