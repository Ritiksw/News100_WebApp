import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl?imageUrl:"https://cdn.abcotvs.com/dip/images/13387128_061523-kabc-md-asylum-seekers-vid.jpg?w=1600"} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5> 
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By Author : {author?author:"Unknown"} On {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
