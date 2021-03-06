import React from 'react'
import { Route, Routes } from "react-router-dom";
import { ListInvoicesSheet } from '.';
import Dashboard from './Dashboard';
import ViewInvoiceSheet from './ViewInvoiceSheet';


// ReactDOM.render(<App />, document.getElementById('root'))

export default () => {
    return (
        <Routes>
            <Route path="" element={<Dashboard/>} />
            <Route path="invoice/list" element={<ListInvoicesSheet/>} />
            <Route path="invoice/view/:invoice_id" element={<ViewInvoiceSheet/>} />
        </Routes>
    )
}
