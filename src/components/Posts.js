import React from "react";
import Button from "react-bootstrap/Button";
import post1 from "../img/post1.jpg";

const posts = [
  {
    image: post1,
    text: "„Supersprawni” – teatr pacjentów w krakowskim szpitalu dziecięcym",
    link: "post1"
  },
  {
    image: post1,
    text: "„Supersprawni” – teatr pacjentów w krakim szpitalu dziecięcym",
    link: "post2"
  },
  {
    image: post1,
    text: "„Supersprawni” – teatr pacjew w krakowskim szpitalu dziecięcym",
    link: "post3"
  }
];

const Posts = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-md-12 col-xs-12 title">
            <h2>Brzmi zbyt dobrze, aby było prawdziwe?</h2>
            <p>Sprawdź rezultaty naszych kampanii</p>
          </div>
        </div>

        <div className="row grid ">
          {posts.map(post => (
            <div
              className="col-lg-4 col-md-4 col-xs-12 post__item"
              key={post.text}
            >
              <a href={post.link}>
                <div className="post__item__img">
                  <img src={post.image} alt="ikona" />
                </div>
                <div className="post__item__text">{post.text}</div>
              </a>
            </div>
          ))}
        </div>

        <div className="row ">
          <div className="col-lg-12 col-md-12 col-xs-12 text-center">
            <Button variant="primary">
              <a href="#">Przeczytaj więcej</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
