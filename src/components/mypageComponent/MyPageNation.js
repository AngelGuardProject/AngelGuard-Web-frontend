function MyPageNation({ pnTotal, setPage, page }) {
    const pages = [];
    for (let i = 1; i <= pnTotal; i++) {
        pages.push(i);
    }

    return (
        <div
            style={{
                margin: "20px auto",
                height: "25px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                        }
                    }}
                    src={require("../../assets/leftArrow.png")}
                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
                {pages.map((item) => (
                    <div
                        key={item}
                        style={{
                            cursor: "pointer",
                            fontWeight: page === item ? "bold" : "lighter",
                            color: "#666662",
                            fontSize: "12px",
                            margin: "0 5px",
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
                        }
                    }}
                    src={require("../../assets/rightArrow.png")}
                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
            </div>
        </div>
    );
}

export default MyPageNation;
