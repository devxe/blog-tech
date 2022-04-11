import ReactMarkdown from "react-markdown";

const markdown = `
 # 헤딩

**굵게**

일반 텍스트

\`\`\`
  코드블럭
\`\`\`

*기울이기*

글자 \`배경색\`

> 인용문
`;

const MarkdownRenderer = () => {
  return (
    <>
      <div className="prose">{markdown}</div>
    </>
  );
};

export default MarkdownRenderer;
