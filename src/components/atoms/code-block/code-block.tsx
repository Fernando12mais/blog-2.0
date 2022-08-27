import { CopyBlock, tomorrowNightBright } from "react-code-blocks";

type TCopyBlock = {
  text: string;
};

export default ({ text }: TCopyBlock) => (
  <CopyBlock
    customStyle={{ width: "100%", padding: "16px", fontSize: "inherit" }}
    text={text}
    language={"javascript"}
    showLineNumbers
    wrapLines
    theme={tomorrowNightBright}
  />
);
