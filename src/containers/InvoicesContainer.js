import React from 'react'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Font
} from "@react-pdf/renderer";
import FirstInvoice from './FirstInvoice';
import TableHeader from '../components/pr-table/TableHeader';
import TableBody from '../components/pr-table/TableBody';
import TableFooter from '../components/pr-table/TableFooter';
import SecondInvoice from './SecondInvoice';

// padding: 30
// Register Font
// Font.register({
//     family: "Roboto",
//     src:
//       "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
//   });
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        padding: 3,
        // fontFamily: "Roboto"
    }
})
// orientation='landscape'
// orientation='portrait'
export default function InvoicesContainer() {
    return (
        <Document>
            <Page style={styles.page} wrap  orientation='landscape'>
                {/* <View>
                    <TableHeader logoTitle="Purchase Requisition" hasAFE={false}/>
                    <TableBody/>
                    <TableFooter/>
                </View>   */}
                {/* <SecondInvoice/> */}
                <View>
                    <TableHeader logoTitle="Matrials Requisition" prTable/>
                    <TableBody prTable/>
                    <TableFooter prTable/>
                </View>
            </Page>
        </Document>
    )
}
