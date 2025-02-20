import CommentsIcon from "../../assets/comments.svg?react";
import FormSubTitle from "../common/FormSubTitle";
import TextInput from "../common/TextInput";

const CommentsForm = () => {
  return (
    <div className="w-full">
      <FormSubTitle Icon={CommentsIcon} title={"Comments"} />
      <div className="w-full mb-6">
        <TextInput labelName={"Comment"} name="comment" optional={true} />
      </div>
    </div>
  );
};

export default CommentsForm;
