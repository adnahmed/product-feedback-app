"use client";

import data from "@/app/data.json";
import Image from "next/image";
import { useState } from "react";
import { tw } from "../lib/tailwindest";
import Button from "./Button";

const comment_box = tw.style({
  paddingBottom: "pb-[32px]",
});
const replies = tw.style({
  borderLeftColor: "border-l-gray",
  borderLeftWidth: "border-l-[1px]",
  paddingLeft: "pl-[23px]",
});
const commenter = tw.style({
  display: "flex",
  flexDirection: "flex-row",
  gap: "gap-[16px]",
  justifyContent: "justify-start",
  alignItems: "items-center",
});

const commentHead = tw.style({
  display: "flex",
  justifyContent: "justify-between",
});
const content = tw.style({
  color: "text-gray-dark",
  paddingTop: "pt-[16px]",
});

const replyButton = tw.style({
  fontWeight: "font-bold",
  color: "text-blue",
  ":hover": {
    textDecorationLine: "hover:underline",
  },
});

export function Reply({
  reply,
  commenterName,
  commenterUsername,
}: {
  reply: {
    content: string;
    replyingTo: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  };
  commenterName: string;
  commenterUsername: string;
}) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  return (
    <div key={crypto.randomUUID()} className="pt-[23px]">
      <div className={commentHead.class}>
        <div className={commenter.class}>
          <Image
            className="rounded-full"
            src={
              // TODO: temporary fix for image assets. Remove this once the images are hosted.
              reply.user.image?.replace(".", "") ??
              "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg"
            }
            width={40}
            height={40}
            alt={`${reply.user.name} Avatar`}
          />
          <div>
            <p className="text-blue-dark font-bold">{commenterName}</p>
            <p className="text-gray-dark text-sm">{commenterUsername}</p>
          </div>
        </div>
        <button
          onClick={() => setShowReplyForm(true)}
          className={replyButton.class}
        >
          Reply
        </button>
      </div>
      <p className={content.class}>
        <span className="text-purple font-bold">{`@${reply.replyingTo}`}</span>{" "}
        {reply.content}
      </p>
      {showReplyForm && <ReplyForm />}
    </div>
  );
}

function ReplyForm() {
  return (
    <form className="flex items-start pt-[24px] rounded-lg gap-[16px]">
      <textarea
        className="max-w-[416px] w-full resize-none rounded-lg max-h-[80px] active:outline-blue focus:outline-blue bg-gray py-[16px] px-[24px]"
        placeholder="Reply to this comment"
      />
      <div className="text-[5px]">
        <Button color="purple">Reply</Button>
      </div>
    </form>
  );
}

type Comments = NonNullable<(typeof data.productRequests)[number]["comments"]>;
type Comment = Comments[number];
export function Comment({ comment }: { comment: Comment }) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  return (
    <div className={comment_box.class} key={comment.id}>
      <div className={commentHead.class}>
        <div className={commenter.class}>
          <Image
            className="rounded-full"
            src={
              // TODO: temporary fix for image assets. Remove this once the images are hosted.
              comment.user.image?.replace(".", "") ??
              "https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg"
            }
            width={40}
            height={40}
            alt={`${comment.user.name} Avatar`}
          />
          <div>
            <p className="text-blue-dark font-bold">{comment.user.name}</p>
            <p className="text-gray-dark text-sm">{comment.user.username}</p>
          </div>
        </div>
        <button
          onClick={() => setShowReplyForm(true)}
          className={replyButton.class}
        >
          Reply
        </button>
      </div>
      <p className={content.class}>{comment.content}</p>
      {showReplyForm && <ReplyForm />}
      <div className={replies.class}>
        {comment.replies?.map((reply) => (
          <Reply
            key={crypto.randomUUID()}
            reply={reply}
            commenterName={comment.user.name}
            commenterUsername={comment.user.username}
          />
        ))}
      </div>
    </div>
  );
}
const commentarea = tw.style({
  borderRadius: "rounded-lg",
  paddingX: "px-[28px]",
  paddingY: "py-[32px]",
  backgroundColor: "bg-white",
});

export function CommentArea() {
  const [comment, setComment] = useState("");
  return (
    <div className={commentarea.class}>
      <p className="text-blue-dark-2 font-bold pb-[28px]">Add Comment</p>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full resize-none rounded-lg max-h-[80px] active:outline-blue focus:outline-blue bg-gray py-[16px] px-[24px] text-[15px]"
        maxLength={250}
        placeholder="Type your comment here"
      />
      <div className="flex flex-row justify-between items-center pt-[16px] text-gray-dark">
        <span>{250 - comment.length} characters left</span>
        <Button color="purple">Post Comment</Button>
      </div>
    </div>
  );
}
