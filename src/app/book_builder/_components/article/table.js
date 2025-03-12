const Table = (props) => {
    return (
        <div className="table-box">
            <div className="table-title">table title table title</div>
            <div class="table">
                <div class="table-header cell-hidden">
                    <div class="title table-cell">#</div>
                    <div class="table-cell">Name</div>
                    <div class="table-cell">Age</div>
                    <div class="table-cell">Country</div>
                    <div class="table-cell">phone number</div>
                </div>
                <div class="table-row">
                    <div class="title table-cell">1</div>
                    <div class="table-cell">Alice</div>
                    <div class="table-cell">25</div>
                    <div class="table-cell">USA</div>
                    <div class="table-cell">USA</div>
                </div>
                <div class="table-row">
                    <div class="title table-cell">2</div>
                    <div class="table-cell">Bob</div>
                    <div class="table-cell">30</div>
                    <div class="table-cell">UK</div>
                    <div class="table-cell">UK</div>
                </div>
                <div class="table-row">
                    <div class="title table-cell">3</div>
                    <div class="table-cell">Charlie Charlie Charlie Charlie Charlie Charlie Charlie </div>
                    <div class="table-cell">28</div>
                    <div class="table-cell">Canada</div>
                    <div class="table-cell">Canada</div>
                </div>
            </div>
        </div>
    )
}

export { Table };