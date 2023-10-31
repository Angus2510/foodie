import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import ReactMarkDown from "react-markdown";

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const nodeContainingImg = node.children[0];
        return (
          <div className={classes.image}>
            {" "}
            <Image
              src={`/${nodeContainingImg.properties.src}`}
              alt={nodeContainingImg.properties.alt}
              width={600}
              height={300}
            />{" "}
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };
  return (
    <article className={classes.content}>
      {" "}
      <PostHeader title={post.title} image={imagePath} />{" "}
      <ReactMarkDown components={customRenderers} children={post.content} />{" "}
    </article>
  );
}
export default PostContent;
