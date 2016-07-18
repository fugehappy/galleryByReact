import React from 'react';

class ImgFigureComponent extends React.Component{
  handleClick(e) {
    this.props.inverse();
    e.stopPropagation();
    e.preventDefault();
  }
  render() {
    let imgWrapClassName = 'img-wrap';
        imgWrapClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
    return (
      <figure className="img-figure">
        <div className={imgWrapClassName} onClick={this.handleClick.bind(this)}>
            <img src={this.props.data.imageURL}/>
            <figcaption>
              <h2 className="img-title">{this.props.data.title}</h2>
              <div className="img-back" onClick={this.handleClick.bind(this)}>
                <p>{this.props.data.desc}</p>
              </div>
            </figcaption>
        </div>
      </figure>
    )
  }
}

ImgFigureComponent.defaultProps = {
};

//对外提供接口
export default ImgFigureComponent;
