import React from 'react'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet
} from "@react-pdf/renderer";
import FirstInvoice from './FirstInvoice';
import TableHeader from '../components/pr-table/TableHeader';
import TableBody from '../components/pr-table/TableBody';
import TableFooter from '../components/pr-table/TableFooter';
import SecondInvoice from './SecondInvoice';

// padding: 30

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 3
    }
})
// orientation='landscape'
export default function InvoicesContainer() {
    return (
        <Document>
            <Page style={styles.page} wrap  orientation='portrait' >
                {/* <View>
                    <TableHeader />
                    <TableBody/>
                    <TableFooter/>
                </View>   */}
                <SecondInvoice/>
            </Page>
        </Document>
    )
}
