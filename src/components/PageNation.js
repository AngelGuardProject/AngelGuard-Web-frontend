function PageNation({pnTotal, setPage, page}) {
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
          width: `${pnTotal * 100}px`,
          margin: "auto",
        }}
      >
        <img
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            } else {
              return 0;
            }
          }}
          src={require("../assets/leftArrow.png")}
        />
        {pages.map(item => (
          <div
            style={{
              cursor: "pointer",
              fontWeight: page === item ? "bold" : "lighter",
              color: "#666662",
              fontSize: "15px",
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
            if (page < pnTotal) {
              setPage(page + 1);
            } else {
              return 0;
            }
          }}
          src={require("../assets/rightArrow.png")}
        />
      </div>
    </div>
  );
}

export default PageNation;
