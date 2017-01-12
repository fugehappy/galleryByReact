require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ImgFigure from './imgFigure.js';

//let yeomanImage = require('../images/yeoman.png');
/*业务所需要的数据*/
let imageDatas = [{
  filename:'1.jpg',
  title:'Heaven of time',
  desc:'Here he comes Here comes Speed Racer.'
},{
  filename:'2.jpg',
  title:'Heaven of time',
  desc:'Here he comes Here comes Speed Racer.'
}];

//对数据进行处理
imageDatas =(function(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.filename);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


/*大管家  ES6*/
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        imgsArrangeArr:[]
    }
  }

  inverse(index) {
    return function() {
        //alert(index);
        let imgsArrangeArr = this.state.imgsArrangeArr;
        imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
        this.setState({
          imgsArrangeArr: imgsArrangeArr
        });
    }.bind(this);
  }

  /*render管控渲染的*/
  render() {
    let imgFigures = [];
    /*遍历图片组件*/
    imageDatas.forEach(function (value, index) {
      if (!this.state.imgsArrangeArr[index]) {
         this.state.imgsArrangeArr[index] = {
            isInverse:false
         }
      }
      imgFigures.push(<ImgFigure key={index} data ={value} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)}/>);
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
}

AppComponent.defaultProps = {
};

//对外提供接口
export default AppComponent;
