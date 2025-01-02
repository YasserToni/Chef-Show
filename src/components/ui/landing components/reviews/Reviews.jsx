import CommentCard from "./CommentCard";
import "./review.css";

function Reviews({ carouselDirection }) {
  return (
    <div>
      <div className="carousel mb-[30px]">
        <div className={`${carouselDirection} flex`}>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
          <div className="carousel-item ">
            <CommentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
