const info = document.getElementById("holder")

window.addEventListener("keydown", function (e) {
    info.innerHTML = `
    <div class="container">
        <table>
            <tr>
                <th>Key</th>
                <th>keyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
`
})
