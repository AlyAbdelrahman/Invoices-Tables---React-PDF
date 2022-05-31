import React, { Fragment, useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import FirstInvoice from './containers/FirstInvoice';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicesContainer from './containers/InvoicesContainer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const App = () => {
  const [show, setShow] = useState(false);
  const [blob, setBlob] = useState('');
  return (
    <Fragment>
      <button onClick={()=>setShow(true)}>click to show link</button>
      {show && <PDFDownloadLink
        document={<InvoicesContainer />}
        fileName="invoice.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Document loaded"
        }
      </PDFDownloadLink>
      }
      {blob && <a href={blob} >click me</a>}
    </Fragment>
  );

};

export default App;