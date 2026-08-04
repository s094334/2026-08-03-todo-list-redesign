/**
 * 線框註冊標記 —— 設計系統的簽名細節。
 * 卡片、圖框與主要按鈕都不可省略；外層需要 `relative`。
 * 標記用 currentColor 畫，放在實心按鈕上會自動轉成反白。
 */
function BlueprintMarks() {
  return (
    <>
      <span className="bp-mark -top-[4px] -left-[4px]" />
      <span className="bp-mark -top-[4px] -right-[4px]" />
      <span className="bp-mark -bottom-[4px] -left-[4px]" />
      <span className="bp-mark -right-[4px] -bottom-[4px]" />
    </>
  );
}

export default BlueprintMarks;
