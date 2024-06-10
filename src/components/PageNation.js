function PageNation({pnStart, pnTotal}) {
  return (
    <div style={{margin: "42px auto 42px", marginTop: "42px"}}>
      <div
        style={{
          height: "29px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img src={require("../assets/leftArrow.png")} />
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>

        <img src={require("../assets/rightArrow.png")} />
      </div>
    </div>
  );
}

export default PageNation;
