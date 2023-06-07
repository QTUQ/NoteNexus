import React from "react";

const currentDate = new Date().getFullYear()
function footer() {
    return (<footer>
        <p>CopyRight ⓒ {currentDate}</p>
    </footer>
    );
}
export default footer;