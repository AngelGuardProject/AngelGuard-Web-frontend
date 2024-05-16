import "../styles/Sidebar.css";

function Sidebar() {
    const sidebars = document.querySelectorAll(".sidebar");

    sidebars.forEach((sidebar) => {
        sidebar.addEventListener("click", () => {
            sidebars.forEach((s) => {
                s.classList.remove("clicked");
            });
            sidebar.classList.add("clicked");
        });
    });
    return (
        <div id="sidebars">
            <div className="sidebar">내 정보 수정</div>
            <div className="sidebar">아기 정보 수정</div>
            <div className="sidebar">게시글 조회</div>
            <div className="sidebar">좋아요한 게시글</div>
        </div>
    );
}

export default Sidebar;
