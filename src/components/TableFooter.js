import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
    FirstFooter: {
        display: 'flex',
        flexDirection: 'row'
    },
    checkBoxContainerCell: {
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        width: '80%',
    },
    checkBoxContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    checkBox: {
        width: 10,
        height: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        marginRight: 5,
        position: 'relative'
    },
    smallText: {
        fontSize: 8,
    },
    checkMark: {
        width: 8,
        height: 8,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    tableDetailsCellContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '20%',
        justifyContent: 'space-evenly',
        padding: 2
    },
    tableHeaderText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    tableUseForCell: {
        width: '50%',
        borderWidth: '1',
        borderColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 2
    },
    cellDataContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '80%',
        paddingLeft: 2
    },
    smallcellDataContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        // width: '40%',
        paddingLeft: 2
    },
    smallCellContainer: {
        width: '6%',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 2
    }
})
export default function TableFooter() {
    return (
        <View>
            <View style={styles.FirstFooter}>
                <View style={styles.tableDetailsCellContainer}>
                    <Text style={styles.smallText}>
                        Budget
                    </Text>
                    <Text style={styles.smallText}>:</Text>
                    <View style={styles.checkBoxContainerCell}>
                        <View style={styles.checkBoxContainer}>
                            <View style={styles.checkBox} >
                                <Image src="assets/images/check-mark-icon.jpg" style={styles.checkMark} />
                            </View>
                            <Text style={styles.smallText}>
                                Yes
                            </Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <View style={styles.checkBox} />
                            <Text style={styles.smallText}>
                                No
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.tableUseForCell}>
                    <Text style={styles.smallText}>
                        Use For
                    </Text>
                    <Text style={styles.smallText}>:</Text>
                    <View style={styles.cellDataContainer}>
                        <Text style={styles.smallText}> 189 test budget</Text>
                    </View>
                </View>
                <View style={styles.smallCellContainer}>
                <Text style={styles.smallText}>
                        AFE
                    </Text>
                    <Text style={styles.smallText}>:</Text>
                    <View style={styles.smallcellDataContainer}>
                        <Text style={styles.smallText}> 189 </Text>
                    </View>
                </View>
                <View></View>
            </View>
            <View></View>
            <View></View>
            <View></View>

        </View>
    )
}