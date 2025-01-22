import userImage from "../../../../assets/im/headerImage/userImage.png";

function CommentCard() {
  return (
    <div className="w-[405px] h-[230px] pt-5 px-5 pb-[22px] border border-primary">
      <div className="flex gap-3">
        <div className="w-[64px] h-[62px]">
          <img src={userImage} alt="user image " />
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="font-plus font-normal text-base text-primary leading-4">
            Michael adham
          </span>
          <span className="font-plus  text-secondary text-xs leading-3 font-[300px] uppercase">
            chief
          </span>
        </div>
      </div>
      <div className="font-Restora font-normal text-secondary text-base leading-[22px] mt-4">
        “The reviews of customers when coming to our restaurant by night the
        scene is set for any and all occasions.From intimate tables for two to
        small groups or larger private events. Our
      </div>
    </div>
  );
}

export default CommentCard;
