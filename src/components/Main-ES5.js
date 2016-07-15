'use strict';

require('normalize.css/normalize.css');//node_modules\normalize.css
require('styles/App.css');

var React = require('react');

var imageDatas =[{
  filename:'1.jpg',
  title:'Heaven of time',
  desc:'Here he comes Here comes Speed Racer.'
},{
  filename:'2.jpg',
  title:'Heaven of time',
  desc:'Here he comes Here comes Speed Racer.'
}];

imageDatas =(function(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

var ImgFigure = React.createClass ({
  handleClick:function(e){
    //center or inverse
    this.props.inverse();
    e.stopPropagation();
    e.preventDefault();
  },
  render:function(){
    var imgWrapClassName = 'img-wrap';
    imgWrapClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
    return (
      <figure className="img-figure">
        <div className={imgWrapClassName} onClick={this.handleClick}>
          <img src={this.props.data.imageURL}/>
          <figcaption>
            <h2 className="img-title">{this.props.data.title}</h2>
            <div className="img-back" onClick={this.handleClick}>
              <p>{this.props.data.desc}</p>
            </div>
          </figcaption>
        </div>
      </figure>
    );
  }
});

var AppComponent = React.createClass ({
  inverse:function(index){
    return function () {
      var imgsArrangeArr = this.state.imgsArrangeArr;
      imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
      this.setState({
        imgsArrangeArr: imgsArrangeArr
      });
    };
  },
  getInitialState:function(){
    return {
      imgsArrangeArr:[

      ]
    }
  },
  render:function(){
    var imgFigures = [];
    /*遍历图片组件*/
    imageDatas.forEach(function (value, index) {
      //把数据存到数组中，然后绑定到节点的data上，需要取值时用this.props.data.title
      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {
          isInverse: false
        };
      }
      imgFigures.push(<ImgFigure key={index} data={value} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index).bind(this)} />);
    }.bind(this));
    /*整个舞台分为图片展示组和按钮控制组*/
    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <section className="control_nav"></section>
      </section>
    );
  }
});

//对外提供接口
module.exports = AppComponent;
