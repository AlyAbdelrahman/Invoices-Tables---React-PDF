import React from 'react'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet
} from "@react-pdf/renderer";
import FirstInvoice from './FirstInvoice';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';
import TableFooter from '../components/TableFooter';

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 30
    }
})
export default function InvoicesContainer() {
    return (
        <Document>
            <Page style={styles.page} wrap  orientation='landscape' >
                <View>
                    <TableHeader />
                    <TableBody/>
                    <TableFooter/>
                    <FirstInvoice />
                </View>
            </Page>
        </Document>
    )
}
