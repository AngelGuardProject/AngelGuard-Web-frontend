function PageNation({pnStart, pnTotal, setPage, page}) {
  const pages = [];
  for (let i = 1; i <= pnTotal; i++) {
    pages.push(i);
  }
  return (
    <div
      style={{
        margin: "42px auto 42px",
        marginTop: "42px",
        height: "29px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          onClick={() => {
            setPage(page - 1);
          }}
          src={require("../assets/leftArrow.png")}
        />
        {pages.map(item => (
          <div
            style={{
              cursor: "pointer",
              fontWeight: page === item ? "bold" : "normal",
            }}
            onClick={() => {
              setPage(item);
            }}
          >
            {item}
          </div>
        ))}
        <img
          onClick={() => {
            setPage(page + 1);
          }}
          src={require("../assets/rightArrow.png")}
        />
      </div>
    </div>
  );
}

export default PageNation;
