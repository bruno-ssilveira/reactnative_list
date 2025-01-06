import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
    },
    flex1: {
        flex: 1,
    },
    gapX5: {
        columnGap: 5,
    },
    gapY5: {
        rowGap: 5,
    },
    roundedMd: {
        borderRadius: 4,
    },
    bgGreen500: {
        backgroundColor: '#4CAF50'
    },
    bgBlue500: {
        backgroundColor: '#3B82F6'
    },
    bgRed500: {
        backgroundColor: '#EF4444',
    },
    bgYellow500: {
        backgroundColor: '#F59E0B',
    },
    bgLightBlue500: {
        backgroundColor: '#B3DFFC',
        borderRadius: 10,
    },
    px2: {
        paddingHorizontal: 8,
    },
    px4: {
        paddingHorizontal: 16,
    },
    py2: {
        paddingVertical: 8,
    },
    textWhite: {
        color: '#fff',
    },
    alignCenter: {
        alignItems: 'center',
    },
    lineThrough: {
        textDecorationLine: 'line-through',
    },
    textZinc500: {
        color: '#718096',
    },
    w9_10: {
        width: '90%',
    },
    fontBold: {
        fontWeight: 'bold',
    },
    mb10: {
        marginBottom: 40,
    },
    mt10: {
        marginTop: 40,
    },
    ml10: {
        marginLeft: 40,
    },
    marginTask: {
        marginLeft: 10,
        marginRight: 10,
    },
    pressedScale: {
        transform: [{scale: 0.90}], // Reduz 10% do tamanho
    },
    taskCard: {
        borderColor: '#444444',
        borderWidth: 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    checkBox: {
        width: 34,
        height: 34,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#718096',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteStyle: {
        backgroundColor: '#EF4444',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 10,
    }
})

export const flexRow = style.flexRow
export const flex1 = style.flex1
export const gapX5 = style.gapX5
export const gapY5 = style.gapY5
export const roundedMd = style.roundedMd
export const bgGreen500 = style.bgGreen500
export const bgBlue500 = style.bgBlue500
export const bgRed500 = style.bgRed500
export const bgYellow500 = style.bgYellow500
export const bgLightBlue500 = style.bgLightBlue500
export const px2 = style.px2
export const px4 = style.px4
export const py2 = style.py2
export const textWhite = style.textWhite
export const alignCenter = style.alignCenter
export const lineThrough = style.lineThrough
export const textZinc500 = style.textZinc500
export const w9_10 = style.w9_10
export const fontBold = style.fontBold
export const mb10 = style.mb10
export const mt10 = style.mt10
export const ml10 = style.ml10
export const marginTask = style.marginTask
export const pressedScale = style.pressedScale
export const taskCard = style.taskCard
export const checkBox = style.checkBox
export const deleteStyle = style.deleteStyle