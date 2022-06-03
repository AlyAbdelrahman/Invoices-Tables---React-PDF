import { View, StyleSheet, Text } from '@react-pdf/renderer'
import React from 'react'

const styles = StyleSheet.create({
    addressContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        padding:10,
        borderTopColor: 'darkyellow'
    },
    addressContainerBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    arabicAddressContainer: {
        minWidth: '50%',
        maxWidth: '50%'
    },
    englishAddressContainer: {
        minWidth: '50%',
        maxWidth: '50%'
    }
});

export default function PoAddressFooter() {
  return (
    <View style={styles.addressContainer}>
        <View style={styles.addressContainerBox}>
            <View style={styles.arabicAddressContainer}>
                <Text>Block-E, Plot # 5, 1st Settlement Service Center</Text>
                <Text>New Cairo 114477, Cairo , Egypt</Text>
                <Text>Tel: (202) 2247-0832</Text>
                <Text>Fax: (202) 2247-0835</Text>
                <Text>WebSite: http://www.testscimitaregypt.com</Text>
            </View>
            <View style={styles.englishAddressContainer}>
                <Text>بلوك E قطعه # 5 مركز خدمات التجمع الاول</Text>
                <Text>القاهره الجديده-11477 - القاهره - مصر</Text>
                <Text>تليفون: (202) 2247-0832</Text>

                <Text>فاكس: (202) 2247-0835</Text>

            </View>
        </View>
        
    </View>
  )
}
