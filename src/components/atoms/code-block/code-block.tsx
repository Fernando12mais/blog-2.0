import { CopyBlock, dracula } from "react-code-blocks";

type TCopyBlock = {
  text: string;
};

export default ({ text }: TCopyBlock) => (
  <CopyBlock
    customStyle={{ width: "fit-content" }}
    codeBlock
    text={text}
    language={"javascript"}
    showLineNumbers
    wrapLines
    theme={dracula}
  />
);
